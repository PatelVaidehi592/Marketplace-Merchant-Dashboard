      // Initialize products array
      let products = JSON.parse(localStorage.getItem("products")) || [
        {
          id: 1,
          name: "Smart Watch Pro X3",
          sku: "SW-1001",
          vendor: "Amazon",
          status: "active",
          category: "Electronics",
          price: 285.8,
          originalPrice: 299.99,
          stock: 45,
          platforms: ["Web", "Android", "iOS"],
          dateAdded: "2024-03-15",
          description:
            "Advanced smart watch with fitness tracking and notifications",
          image:
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
          isFeatured: true,
        },
        {
          id: 2,
          name: "Men's Premium T-Shirt",
          sku: "TS-3342",
          vendor: "Flipkart",
          status: "pending",
          category: "Fashion",
          price: 29.99,
          originalPrice: 34.99,
          stock: 128,
          platforms: ["Android"],
          dateAdded: "2024-03-18",
          description: "100% cotton premium t-shirt for men",
          image:
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
          isFeatured: false,
        },
        {
          id: 3,
          name: "Modern Decor Lamp",
          sku: "LP-8242",
          vendor: "Meesho",
          status: "private",
          category: "Home & Kitchen",
          price: 89.99,
          originalPrice: 99.99,
          stock: 12,
          platforms: ["iOS"],
          dateAdded: "2024-03-20",
          description: "Modern LED lamp for home decoration",
          image:
            "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=400&fit=crop",
          isFeatured: false,
        },
        {
          id: 4,
          name: "Wireless Earbuds Pro",
          sku: "WB-5567",
          vendor: "Amazon",
          status: "pending",
          category: "Electronics",
          price: 129.99,
          originalPrice: 149.99,
          stock: 0,
          platforms: ["Web", "Android", "iOS"],
          dateAdded: "2024-03-16",
          description: "Noise cancelling wireless earbuds",
          image:
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
          isFeatured: true,
        },
        {
          id: 5,
          name: "Gaming Console (Used)",
          sku: "GC-7789",
          vendor: "Flipkart",
          status: "rejected",
          category: "Electronics",
          price: 399.99,
          originalPrice: 499.99,
          stock: 5,
          platforms: ["Web"],
          dateAdded: "2024-03-14",
          description: "Used gaming console in good condition",
          image:
            "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=400&fit=crop",
          isFeatured: false,
        },
      ];

      let currentProductId = null;
      const itemsPerPage = 10;
      let currentPage = 1;

      document.addEventListener("DOMContentLoaded", function () {
        saveProductsToStorage();
        updateStats();
        populateProductTable();
        setupEventListeners();

        // Check if we're on product detail page
        if (window.location.pathname.includes("product-detail.html")) {
          loadProductDetail();
        }
      });

      function saveProductsToStorage() {
        localStorage.setItem("products", JSON.stringify(products));
      }

      function updateStats() {
        const total = products.length;
        const active = products.filter((p) => p.status === "active").length;
        const pending = products.filter((p) => p.status === "pending").length;
        const lowStock = products.filter(
          (p) => p.stock > 0 && p.stock < 10
        ).length;

        document.getElementById("totalProducts").textContent = total;
        document.getElementById("activeProducts").textContent = active;
        document.getElementById("pendingProducts").textContent = pending;
        document.getElementById("lowStockProducts").textContent = lowStock;
        document.getElementById(
          "productCount"
        ).textContent = `(${total} items)`;
        document.getElementById("totalProductsCount").textContent = total;
      }

      function populateProductTable() {
        const tableBody = document.getElementById("productTableBody");
        tableBody.innerHTML = "";

        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const paginatedProducts = products.slice(startIndex, endIndex);

        paginatedProducts.forEach((product) => {
          const row = document.createElement("tr");
          row.innerHTML = `
                    <td>
                        <div class="checkbox-container">
                            <input type="checkbox" class="row-checkbox" data-id="${
                              product.id
                            }">
                            <span class="checkbox-custom"></span>
                        </div>
                    </td>
                    <td>
                        <div class="product-cell">
                            <img src="${
                              product.image || "https://via.placeholder.com/48"
                            }" alt="${product.name}" class="product-image">
                            <div class="product-info">
                                <div class="product-name" onclick="viewProduct(${
                                  product.id
                                })">
                                    ${product.name}
                                    ${
                                      product.isFeatured
                                        ? '<span class="badge featured" style="margin-left: 8px;">Featured</span>'
                                        : ""
                                    }
                                </div>
                                <div class="product-sku">SKU: ${
                                  product.sku
                                }</div>
                            </div>
                        </div>
                    </td>
                    <td>${product.vendor}</td>
                    <td><span class="badge ${product.status}">${
            product.status.charAt(0).toUpperCase() + product.status.slice(1)
          }</span></td>
                    <td>${product.category}</td>
                    <td class="price-cell">
                        ${
                          product.originalPrice
                            ? `<span class="original-price">$${product.originalPrice.toFixed(
                                2
                              )}</span>`
                            : ""
                        }
                        $${product.price.toFixed(2)}
                    </td>
                    <td>
                        <div style="display: flex; align-items: center; gap: 8px;">
                            ${
                              product.stock === 0
                                ? '<span style="color: var(--danger); font-weight: 600;">Out of Stock</span>'
                                : product.stock < 10
                                ? `<span style="color: var(--warning); font-weight: 600;">${product.stock}</span>`
                                : `<span style="color: var(--success); font-weight: 600;">${product.stock}</span>`
                            }
                            ${
                              product.stock > 0
                                ? '<i class="fas fa-box" style="color: var(--gray);"></i>'
                                : ""
                            }
                        </div>
                    </td>
                    <td>
                        <div style="display: flex; gap: 4px; flex-wrap: wrap;">
                            ${product.platforms
                              .map(
                                (platform) =>
                                  `<span style="padding: 4px 8px; background: var(--light); border-radius: 4px; font-size: 11px;">${platform}</span>`
                              )
                              .join("")}
                        </div>
                    </td>
                    <td>${product.dateAdded}</td>
                    <td>
                        <div class="action-dropdown">
                            <button class="action-btn">
                                Actions <i class="fas fa-chevron-down"></i>
                            </button>
                            <div class="dropdown-menu">
                                <a href="product-detail.html?id=${
                                  product.id
                                }" class="dropdown-item">
                                    <i class="fas fa-eye"></i> View Details
                                </a>
                                <a href="#" class="dropdown-item" onclick="editProduct(${
                                  product.id
                                })">
                                    <i class="fas fa-edit"></i> Edit Product
                                </a>
                                <a href="#" class="dropdown-item" onclick="toggleStatus(${
                                  product.id
                                }, 'active')">
                                    <i class="fas fa-check"></i> Set Active
                                </a>
                                <a href="#" class="dropdown-item" onclick="toggleStatus(${
                                  product.id
                                }, 'private')">
                                    <i class="fas fa-eye-slash"></i> Set Private
                                </a>
                                <a href="#" class="dropdown-item danger" onclick="deleteProduct(${
                                  product.id
                                })">
                                    <i class="fas fa-trash"></i> Delete
                                </a>
                            </div>
                        </div>
                    </td>
                `;
          tableBody.appendChild(row);
        });

        updateShowingRange();
      }

      function updateShowingRange() {
        const start = (currentPage - 1) * itemsPerPage + 1;
        const end = Math.min(currentPage * itemsPerPage, products.length);
        document.getElementById("showingRange").textContent = `${start}-${end}`;
      }

      function setupEventListeners() {
        // Product form submission
        document
          .getElementById("productForm")
          .addEventListener("submit", function (e) {
            e.preventDefault();
            saveProduct();
          });

        // Select all checkbox
        document
          .getElementById("selectAll")
          .addEventListener("change", function (e) {
            const checkboxes = document.querySelectorAll(".row-checkbox");
            checkboxes.forEach((checkbox) => {
              checkbox.checked = e.target.checked;
              toggleRowSelection(checkbox.closest("tr"), e.target.checked);
            });
          });

        // Table search
        document
          .getElementById("tableSearch")
          .addEventListener("input", function (e) {
            searchProducts(e.target.value);
          });

        // Filter inputs
        const filterInputs = [
          "searchInput",
          "vendorFilter",
          "statusFilter",
          "categoryFilter",
          "platformFilter",
          "dateFilter",
          "priceMin",
          "priceMax",
          "stockFilter",
        ];
        filterInputs.forEach((id) => {
          const element = document.getElementById(id);
          if (element) {
            element.addEventListener("input", applyFilters);
          }
        });
      }

      function openAddProductModal() {
        currentProductId = null;
        document.getElementById("modalTitle").textContent = "Add New Product";
        document.getElementById("modalSubmitBtn").textContent = "Add Product";
        document.getElementById("productForm").reset();
        document.getElementById("imagePreview").classList.remove("visible");
        document.getElementById("productId").value = "";
        openModal();
      }

      function openModal() {
        document.getElementById("productModal").style.display = "flex";
      }

      function closeModal() {
        document.getElementById("productModal").style.display = "none";
      }

      function previewImage(url) {
        const preview = document.getElementById("imagePreview");
        if (url) {
          preview.src = url;
          preview.classList.add("visible");
        } else {
          preview.classList.remove("visible");
        }
      }

      function saveProduct() {
        const platforms = Array.from(
          document.querySelectorAll('input[name="platform"]:checked')
        ).map((cb) => cb.value);

        const productData = {
          id: currentProductId || Date.now(),
          name: document.getElementById("productName").value,
          sku: document.getElementById("productSKU").value,
          vendor: document.getElementById("productVendor").value,
          category: document.getElementById("productCategory").value,
          price: parseFloat(document.getElementById("productPrice").value),
          originalPrice: document.getElementById("productOriginalPrice").value
            ? parseFloat(document.getElementById("productOriginalPrice").value)
            : null,
          stock: parseInt(document.getElementById("productStock").value),
          status: document.getElementById("productStatus").value,
          platforms: platforms,
          description: document.getElementById("productDescription").value,
          image: document.getElementById("productImage").value || "",
          isFeatured: document.getElementById("productFeatured").checked,
          dateAdded: currentProductId
            ? products.find((p) => p.id === currentProductId).dateAdded
            : new Date().toISOString().split("T")[0],
        };

        if (currentProductId) {
          // Edit existing product
          const index = products.findIndex((p) => p.id === currentProductId);
          if (index !== -1) {
            products[index] = productData;
          }
        } else {
          // Add new product
          products.unshift(productData);
        }

        saveProductsToStorage();
        updateStats();
        populateProductTable();
        closeModal();

        alert(
          `Product ${currentProductId ? "updated" : "added"} successfully!`
        );
      }

      function editProduct(id) {
        const product = products.find((p) => p.id === id);
        if (!product) return;

        currentProductId = id;
        document.getElementById("modalTitle").textContent = "Edit Product";
        document.getElementById("modalSubmitBtn").textContent =
          "Update Product";
        document.getElementById("productId").value = id;
        document.getElementById("productName").value = product.name;
        document.getElementById("productSKU").value = product.sku;
        document.getElementById("productVendor").value = product.vendor;
        document.getElementById("productCategory").value = product.category;
        document.getElementById("productPrice").value = product.price;
        document.getElementById("productOriginalPrice").value =
          product.originalPrice || "";
        document.getElementById("productStock").value = product.stock;
        document.getElementById("productStatus").value = product.status;
        document.getElementById("productDescription").value =
          product.description || "";
        document.getElementById("productImage").value = product.image || "";
        document.getElementById("productFeatured").checked =
          product.isFeatured || false;

        // Set platforms
        document
          .querySelectorAll('input[name="platform"]')
          .forEach((checkbox) => {
            checkbox.checked = product.platforms.includes(checkbox.value);
          });

        // Preview image
        if (product.image) {
          previewImage(product.image);
        }

        openModal();
      }

      function viewProduct(id) {
        window.location.href = `product-detail.html?id=${id}`;
      }

      function loadProductDetail() {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = parseInt(urlParams.get("id"));

        if (!productId) {
          document.body.innerHTML = `
                    <div style="padding: 50px; text-align: center;">
                        <h1>Product Not Found</h1>
                        <p>The product you're looking for doesn't exist.</p>
                        <a href="index.html" class="btn btn-primary" style="margin-top: 20px;">
                            <i class="fas fa-arrow-left"></i> Back to Products
                        </a>
                    </div>
                `;
          return;
        }

        const product = products.find((p) => p.id === productId);

        if (!product) {
          document.body.innerHTML = `
                    <div style="padding: 50px; text-align: center;">
                        <h1>Product Not Found</h1>
                        <p>The product you're looking for doesn't exist.</p>
                        <a href="index.html" class="btn btn-primary" style="margin-top: 20px;">
                            <i class="fas fa-arrow-left"></i> Back to Products
                        </a>
                    </div>
                `;
          return;
        }

        document.body.innerHTML = `
                <div class="container">
                    <aside class="sidebar">
                        <div class="logo">
                            <h2>Admin<span>Hub</span></h2>
                        </div>
                        <ul class="nav-links">
                            <li>
                                <a href="index.html">
                                    <i class="fas fa-home"></i>
                                    <span>Dashboard</span>
                                </a>
                            </li>
                            <li>
                                <a href="index.html" class="active">
                                    <i class="fas fa-box"></i>
                                    <span>Products</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="fas fa-shopping-cart"></i>
                                    <span>Orders</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="fas fa-users"></i>
                                    <span>Customers</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="fas fa-chart-bar"></i>
                                    <span>Analytics</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="fas fa-cog"></i>
                                    <span>Settings</span>
                                </a>
                            </li>
                        </ul>
                    </aside>

                    <main class="main-content">
                        <header>
                            <div class="header-left">
                                <h1>Product Details</h1>
                                <p>View and manage product information</p>
                            </div>
                            <div class="header-right">
                                <a href="index.html" class="btn btn-secondary">
                                    <i class="fas fa-arrow-left"></i> Back to Products
                                </a>
                                <div class="user-profile">
                                    <img src="https://ui-avatars.com/api/?name=Admin+User&background=4361ee&color=fff" alt="Admin User">
                                    <div>
                                        <h4>Admin User</h4>
                                        <p>Super Admin</p>
                                    </div>
                                </div>
                            </div>
                        </header>

                        <div class="product-detail-container">
                            <div class="product-detail-header">
                                <div class="product-main-info">
                                    <h1>${product.name}</h1>
                                    <div class="product-sku-large">SKU: ${
                                      product.sku
                                    }</div>
                                    <div style="display: flex; gap: 10px; margin-top: 20px;">
                                        <span class="badge ${
                                          product.status
                                        } status-badge-large">
                                            ${product.status.toUpperCase()}
                                        </span>
                                        ${
                                          product.isFeatured
                                            ? '<span class="badge featured status-badge-large">FEATURED</span>'
                                            : ""
                                        }
                                    </div>
                                </div>
                                <img src="${
                                  product.image ||
                                  "https://via.placeholder.com/300"
                                }" alt="${
          product.name
        }" class="product-image-large">
                            </div>

                            <div class="product-detail-grid">
                                <div>
                                    <div class="detail-section">
                                        <h3>Product Information</h3>
                                        <div class="detail-row">
                                            <div class="detail-label">Product Name</div>
                                            <div class="detail-value">${
                                              product.name
                                            }</div>
                                        </div>
                                        <div class="detail-row">
                                            <div class="detail-label">SKU</div>
                                            <div class="detail-value">${
                                              product.sku
                                            }</div>
                                        </div>
                                        <div class="detail-row">
                                            <div class="detail-label">Description</div>
                                            <div class="detail-value">${
                                              product.description ||
                                              "No description available"
                                            }</div>
                                        </div>
                                        <div class="detail-row">
                                            <div class="detail-label">Category</div>
                                            <div class="detail-value">${
                                              product.category
                                            }</div>
                                        </div>
                                    </div>

                                    <div class="detail-section">
                                        <h3>Pricing & Stock</h3>
                                        <div class="detail-row">
                                            <div class="detail-label">Current Price</div>
                                            <div class="detail-value">$${product.price.toFixed(
                                              2
                                            )}</div>
                                        </div>
                                        <div class="detail-row">
                                            <div class="detail-label">Original Price</div>
                                            <div class="detail-value">${
                                              product.originalPrice
                                                ? `$${product.originalPrice.toFixed(
                                                    2
                                                  )}`
                                                : "N/A"
                                            }</div>
                                        </div>
                                        <div class="detail-row">
                                            <div class="detail-label">Stock Quantity</div>
                                            <div class="detail-value">${
                                              product.stock
                                            } units</div>
                                        </div>
                                        <div class="detail-row">
                                            <div class="detail-label">Stock Status</div>
                                            <div class="detail-value">
                                                ${
                                                  product.stock === 0
                                                    ? '<span style="color: var(--danger); font-weight: 600;">Out of Stock</span>'
                                                    : product.stock < 10
                                                    ? `<span style="color: var(--warning); font-weight: 600;">Low Stock (${product.stock} units)</span>`
                                                    : `<span style="color: var(--success); font-weight: 600;">In Stock (${product.stock} units)</span>`
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div class="detail-section">
                                        <h3>Vendor & Platform</h3>
                                        <div class="detail-row">
                                            <div class="detail-label">Vendor</div>
                                            <div class="detail-value">${
                                              product.vendor
                                            }</div>
                                        </div>
                                        <div class="detail-row">
                                            <div class="detail-label">Platforms</div>
                                            <div class="detail-value">
                                                ${product.platforms
                                                  .map(
                                                    (platform) =>
                                                      `<span style="padding: 4px 8px; background: var(--light); border-radius: 4px; font-size: 12px; margin-right: 4px;">${platform}</span>`
                                                  )
                                                  .join("")}
                                            </div>
                                        </div>
                                        <div class="detail-row">
                                            <div class="detail-label">Date Added</div>
                                            <div class="detail-value">${
                                              product.dateAdded
                                            }</div>
                                        </div>
                                        <div class="detail-row">
                                            <div class="detail-label">Status</div>
                                            <div class="detail-value">
                                                <span class="badge ${
                                                  product.status
                                                }">
                                                    ${product.status.toUpperCase()}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="detail-section">
                                        <h3>Actions</h3>
                                        <div style="display: flex; flex-direction: column; gap: 10px;">
                                            <button onclick="editProductFromDetail(${
                                              product.id
                                            })" class="btn btn-primary">
                                                <i class="fas fa-edit"></i> Edit Product
                                            </button>
                                            <button onclick="toggleStatusFromDetail(${
                                              product.id
                                            }, '${
          product.status === "active" ? "private" : "active"
        }')" class="btn btn-secondary">
                                                <i class="fas fa-exchange-alt"></i> Toggle Status
                                            </button>
                                            <button onclick="deleteProductFromDetail(${
                                              product.id
                                            })" class="btn btn-danger">
                                                <i class="fas fa-trash"></i> Delete Product
                                            </button>
                                            <a href="index.html" class="btn btn-secondary">
                                                <i class="fas fa-arrow-left"></i> Back to List
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            `;
      }

      function editProductFromDetail(id) {
        window.location.href = `index.html?edit=${id}`;
      }

      function toggleStatusFromDetail(id, newStatus) {
        const product = products.find((p) => p.id === id);
        if (product) {
          product.status = newStatus;
          saveProductsToStorage();
          alert(`Product status changed to ${newStatus}`);
          loadProductDetail();
        }
      }

      function deleteProductFromDetail(id) {
        if (confirm("Are you sure you want to delete this product?")) {
          const index = products.findIndex((p) => p.id === id);
          if (index !== -1) {
            products.splice(index, 1);
            saveProductsToStorage();
            alert("Product deleted successfully");
            window.location.href = "index.html";
          }
        }
      }

      function toggleRowSelection(row, selected) {
        if (selected) {
          row.classList.add("selected");
        } else {
          row.classList.remove("selected");
        }
      }

      function searchProducts(query) {
        const rows = document.querySelectorAll("#productTableBody tr");
        const lowerQuery = query.toLowerCase();

        rows.forEach((row) => {
          const text = row.textContent.toLowerCase();
          row.style.display = text.includes(lowerQuery) ? "" : "none";
        });
      }

      function applyFilters() {
        const vendor = document.getElementById("vendorFilter").value;
        const status = document.getElementById("statusFilter").value;
        const category = document.getElementById("categoryFilter").value;
        const platform = document.getElementById("platformFilter").value;
        const searchQuery = document
          .getElementById("searchInput")
          .value.toLowerCase();
        const priceMin =
          parseFloat(document.getElementById("priceMin").value) || 0;
        const priceMax =
          parseFloat(document.getElementById("priceMax").value) || Infinity;
        const stockFilter = document.getElementById("stockFilter").value;

        const filteredProducts = products.filter((product) => {
          const matchesVendor = !vendor || product.vendor === vendor;
          const matchesStatus = !status || product.status === status;
          const matchesCategory = !category || product.category === category;
          const matchesPlatform =
            !platform || product.platforms.includes(platform);
          const matchesSearch =
            !searchQuery ||
            product.name.toLowerCase().includes(searchQuery) ||
            product.sku.toLowerCase().includes(searchQuery) ||
            (product.description &&
              product.description.toLowerCase().includes(searchQuery));
          const matchesPrice =
            product.price >= priceMin && product.price <= priceMax;
          const matchesStock =
            !stockFilter ||
            (stockFilter === "In Stock" && product.stock > 0) ||
            (stockFilter === "Low Stock (&lt; 10)" &&
              product.stock > 0 &&
              product.stock < 10) ||
            (stockFilter === "Out of Stock" && product.stock === 0);

          return (
            matchesVendor &&
            matchesStatus &&
            matchesCategory &&
            matchesPlatform &&
            matchesSearch &&
            matchesPrice &&
            matchesStock
          );
        });

        // Update table with filtered products
        const tableBody = document.getElementById("productTableBody");
        tableBody.innerHTML = "";

        filteredProducts.forEach((product) => {
          const row = document.createElement("tr");
          row.innerHTML = `
                    <td>
                        <div class="checkbox-container">
                            <input type="checkbox" class="row-checkbox" data-id="${
                              product.id
                            }">
                            <span class="checkbox-custom"></span>
                        </div>
                    </td>
                    <td>
                        <div class="product-cell">
                            <img src="${
                              product.image || "https://via.placeholder.com/48"
                            }" alt="${product.name}" class="product-image">
                            <div class="product-info">
                                <div class="product-name" onclick="viewProduct(${
                                  product.id
                                })">
                                    ${product.name}
                                    ${
                                      product.isFeatured
                                        ? '<span class="badge featured" style="margin-left: 8px;">Featured</span>'
                                        : ""
                                    }
                                </div>
                                <div class="product-sku">SKU: ${
                                  product.sku
                                }</div>
                            </div>
                        </div>
                    </td>
                    <td>${product.vendor}</td>
                    <td><span class="badge ${product.status}">${
            product.status.charAt(0).toUpperCase() + product.status.slice(1)
          }</span></td>
                    <td>${product.category}</td>
                    <td class="price-cell">
                        ${
                          product.originalPrice
                            ? `<span class="original-price">$${product.originalPrice.toFixed(
                                2
                              )}</span>`
                            : ""
                        }
                        $${product.price.toFixed(2)}
                    </td>
                    <td>
                        <div style="display: flex; align-items: center; gap: 8px;">
                            ${
                              product.stock === 0
                                ? '<span style="color: var(--danger); font-weight: 600;">Out of Stock</span>'
                                : product.stock < 10
                                ? `<span style="color: var(--warning); font-weight: 600;">${product.stock}</span>`
                                : `<span style="color: var(--success); font-weight: 600;">${product.stock}</span>`
                            }
                            ${
                              product.stock > 0
                                ? '<i class="fas fa-box" style="color: var(--gray);"></i>'
                                : ""
                            }
                        </div>
                    </td>
                    <td>
                        <div style="display: flex; gap: 4px; flex-wrap: wrap;">
                            ${product.platforms
                              .map(
                                (platform) =>
                                  `<span style="padding: 4px 8px; background: var(--light); border-radius: 4px; font-size: 11px;">${platform}</span>`
                              )
                              .join("")}
                        </div>
                    </td>
                    <td>${product.dateAdded}</td>
                    <td>
                        <div class="action-dropdown">
                            <button class="action-btn">
                                Actions <i class="fas fa-chevron-down"></i>
                            </button>
                            <div class="dropdown-menu">
                                <a href="product-detail.html?id=${
                                  product.id
                                }" class="dropdown-item">
                                    <i class="fas fa-eye"></i> View Details
                                </a>
                                <a href="#" class="dropdown-item" onclick="editProduct(${
                                  product.id
                                })">
                                    <i class="fas fa-edit"></i> Edit Product
                                </a>
                                <a href="#" class="dropdown-item" onclick="toggleStatus(${
                                  product.id
                                }, 'active')">
                                    <i class="fas fa-check"></i> Set Active
                                </a>
                                <a href="#" class="dropdown-item" onclick="toggleStatus(${
                                  product.id
                                }, 'private')">
                                    <i class="fas fa-eye-slash"></i> Set Private
                                </a>
                                <a href="#" class="dropdown-item danger" onclick="deleteProduct(${
                                  product.id
                                })">
                                    <i class="fas fa-trash"></i> Delete
                                </a>
                            </div>
                        </div>
                    </td>
                `;
          tableBody.appendChild(row);
        });
      }

      function resetFilters() {
        document.getElementById("searchInput").value = "";
        document.getElementById("vendorFilter").value = "";
        document.getElementById("statusFilter").value = "";
        document.getElementById("categoryFilter").value = "";
        document.getElementById("platformFilter").value = "";
        document.getElementById("dateFilter").value = "";
        document.getElementById("priceMin").value = "";
        document.getElementById("priceMax").value = "";
        document.getElementById("stockFilter").value = "";
        document.getElementById("tableSearch").value = "";

        populateProductTable();
      }

      function toggleFilters() {
        const filterGrid = document.getElementById("filterGrid");
        const filterActions = document.querySelector(".filter-actions");
        const toggleBtn = document.querySelector(".filter-toggle i");

        if (filterGrid.style.display === "none") {
          filterGrid.style.display = "grid";
          filterActions.style.display = "flex";
        } else {
          filterGrid.style.display = "none";
          filterActions.style.display = "none";
        }
      }

      function runBulkAction(select) {
        const action = select.value;
        if (!action) return;

        const selectedRows = Array.from(
          document.querySelectorAll(".row-checkbox:checked")
        ).map((cb) => parseInt(cb.dataset.id));

        if (selectedRows.length === 0) {
          alert("Please select at least one product");
          select.value = "";
          return;
        }

        switch (action) {
          case "approve":
            selectedRows.forEach((id) => {
              const product = products.find((p) => p.id === id);
              if (product) product.status = "active";
            });
            break;

          case "disable":
            selectedRows.forEach((id) => {
              const product = products.find((p) => p.id === id);
              if (product) product.status = "private";
            });
            break;

          case "delete":
            if (
              confirm(
                `Are you sure you want to delete ${selectedRows.length} product(s)?`
              )
            ) {
              selectedRows.forEach((id) => {
                const index = products.findIndex((p) => p.id === id);
                if (index !== -1) products.splice(index, 1);
              });
            }
            break;

          case "export":
            alert(`Exporting ${selectedRows.length} products to CSV`);
            break;

          case "featured":
            selectedRows.forEach((id) => {
              const product = products.find((p) => p.id === id);
              if (product) product.isFeatured = true;
            });
            break;
        }

        saveProductsToStorage();
        updateStats();
        populateProductTable();
        select.value = "";
      }

      function toggleStatus(id, status) {
        const product = products.find((p) => p.id === id);
        if (product) {
          product.status = status;
          saveProductsToStorage();
          updateStats();
          populateProductTable();
          alert(`Product ${id} set to ${status}`);
        }
      }

      function deleteProduct(id) {
        if (confirm("Are you sure you want to delete this product?")) {
          const index = products.findIndex((p) => p.id === id);
          if (index !== -1) {
            products.splice(index, 1);
            saveProductsToStorage();
            updateStats();
            populateProductTable();
            alert("Product deleted successfully");
          }
        }
      }

      function exportProducts() {
        const csv = convertToCSV(products);
        const blob = new Blob([csv], { type: "text/csv" });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `products_${new Date().toISOString().split("T")[0]}.csv`;
        a.click();
        alert("Exporting all products to CSV file");
      }

      function convertToCSV(arr) {
        const array = [Object.keys(arr[0])].concat(arr);
        return array
          .map((row) => {
            return Object.values(row).map((value) => {
              return typeof value === "string" ? JSON.stringify(value) : value;
            });
          })
          .join("\n");
      }

      function saveFilterPreset() {
        const presetName = prompt("Enter a name for this filter preset:");
        if (presetName) {
          alert(`Filter preset "${presetName}" saved successfully`);
        }
      }

      // Check if we need to edit a product from URL
      if (window.location.search.includes("edit=")) {
        const urlParams = new URLSearchParams(window.location.search);
        const editId = parseInt(urlParams.get("edit"));
        if (editId) {
          setTimeout(() => editProduct(editId), 100);
        }
      }
   