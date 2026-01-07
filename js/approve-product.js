    let products = [];
    let approvedProducts = [];

    // Initialize products data from localStorage
    function initializeProducts() {
      const savedProducts = localStorage.getItem('products');

      if (savedProducts) {
        try {
          products = JSON.parse(savedProducts);
          console.log('Loaded products from localStorage:', products.length);
        } catch (e) {
          console.error('Error loading products:', e);
          loadDefaultProducts();
        }
      } else {
        console.log('No products found in localStorage, loading defaults');
        loadDefaultProducts();
      }

      // Filter only approved (active) products
      approvedProducts = products.filter(product => product.status === 'active');
      console.log('Approved products:', approvedProducts.length);
    }

    function loadDefaultProducts() {
      products = [
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
          image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100&h=100&fit=crop",
          isFeatured: true,
          description: "Advanced smartwatch with health tracking and notification features.",
          tags: ["wearable", "smartwatch", "fitness"]
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
          image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=100&h=100&fit=crop",
          isFeatured: false,
          description: "Premium cotton t-shirt with comfortable fit and modern design.",
          tags: ["clothing", "t-shirt", "fashion"]
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
          image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=100&h=100&fit=crop",
          isFeatured: false,
          description: "Modern LED lamp with adjustable brightness and color temperature.",
          tags: ["home", "decor", "lighting"]
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
          image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop",
          isFeatured: true,
          description: "True wireless earbuds with noise cancellation and 24-hour battery life.",
          tags: ["audio", "wireless", "earbuds"]
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
          image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=100&h=100&fit=crop",
          isFeatured: false,
          description: "Refurbished gaming console with one controller and cables.",
          tags: ["gaming", "console", "refurbished"]
        },
        {
          id: 6,
          name: "Ergonomic Office Chair",
          sku: "OC-9123",
          vendor: "Myntra",
          status: "active",
          category: "Home & Kitchen",
          price: 249.99,
          originalPrice: 299.99,
          stock: 23,
          platforms: ["Web", "iOS"],
          dateAdded: "2024-03-12",
          image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=100&h=100&fit=crop",
          isFeatured: true,
          description: "Ergonomic office chair with lumbar support and adjustable height.",
          tags: ["office", "chair", "ergonomic"]
        },
        {
          id: 7,
          name: "Yoga Mat Premium",
          sku: "YM-4456",
          vendor: "Ajio",
          status: "active",
          category: "Sports",
          price: 34.99,
          originalPrice: 39.99,
          stock: 87,
          platforms: ["Android", "iOS"],
          dateAdded: "2024-03-19",
          image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=100&h=100&fit=crop",
          isFeatured: false,
          description: "Non-slip yoga mat with carrying strap and alignment markings.",
          tags: ["yoga", "fitness", "mat"]
        },
        {
          id: 8,
          name: "Bluetooth Speaker",
          sku: "BS-6678",
          vendor: "Amazon",
          status: "pending",
          category: "Electronics",
          price: 79.99,
          originalPrice: 89.99,
          stock: 34,
          platforms: ["Web", "Android"],
          dateAdded: "2024-03-21",
          image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=100&h=100&fit=crop",
          isFeatured: false,
          description: "Portable Bluetooth speaker with 12-hour battery and waterproof design.",
          tags: ["speaker", "audio", "portable"]
        },
        {
          id: 9,
          name: "Designer Sunglasses",
          sku: "SG-7890",
          vendor: "Myntra",
          status: "active",
          category: "Fashion",
          price: 159.99,
          originalPrice: 199.99,
          stock: 18,
          platforms: ["Web", "Android", "iOS"],
          dateAdded: "2024-03-17",
          image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=100&h=100&fit=crop",
          isFeatured: true,
          description: "Designer sunglasses with UV protection and polarized lenses.",
          tags: ["sunglasses", "fashion", "accessories"]
        },
        {
          id: 10,
          name: "Coffee Machine Deluxe",
          sku: "CM-3345",
          vendor: "Flipkart",
          status: "private",
          category: "Home & Kitchen",
          price: 299.99,
          originalPrice: 349.99,
          stock: 8,
          platforms: ["Web"],
          dateAdded: "2024-03-13",
          image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=100&h=100&fit=crop",
          isFeatured: false,
          description: "Automatic coffee machine with milk frother and programmable settings.",
          tags: ["coffee", "kitchen", "appliance"]
        }
      ];
      saveProductsToLocalStorage();
    }

    // Function to save products to localStorage
    function saveProductsToLocalStorage() {
      try {
        localStorage.setItem('products', JSON.stringify(products));
        console.log('Products saved to localStorage');
      } catch (e) {
        console.error('Error saving products to localStorage:', e);
      }
    }

    document.addEventListener("DOMContentLoaded", function () {
      initializeProducts();
      updateApprovedStats();
      populateApprovedTable();
      setupEventListeners();
      setupDropdownPositioning();
      setupCustomDropdowns();
    });

    // Function to calculate approved product statistics
    function calculateApprovedStats() {
      const totalApproved = approvedProducts.length;

      const featuredApproved = approvedProducts.filter(p => p.isFeatured).length;
      const inStockApproved = approvedProducts.filter(p => p.stock > 0).length;
      const lowStockApproved = approvedProducts.filter(p => p.stock > 0 && p.stock < 10).length;
      const outOfStockApproved = approvedProducts.filter(p => p.stock === 0).length;

      // Calculate total value of approved inventory
      const totalInventoryValue = approvedProducts.reduce((sum, product) => {
        return sum + (product.price * product.stock);
      }, 0).toFixed(2);

      // Average price of approved products
      const averagePrice = totalApproved > 0
        ? (approvedProducts.reduce((sum, product) => sum + product.price, 0) / totalApproved).toFixed(2)
        : 0;

      // Group by vendor
      const vendorStats = {};
      approvedProducts.forEach(product => {
        const vendor = product.vendor || 'Unknown';
        vendorStats[vendor] = (vendorStats[vendor] || 0) + 1;
      });

      // Group by category
      const categoryStats = {};
      approvedProducts.forEach(product => {
        const category = product.category || 'Unknown';
        categoryStats[category] = (categoryStats[category] || 0) + 1;
      });

      return {
        totalApproved,
        featuredApproved,
        inStockApproved,
        lowStockApproved,
        outOfStockApproved,
        totalInventoryValue,
        averagePrice,
        vendorStats,
        categoryStats
      };
    }

    // Function to update approved product stats
    function updateApprovedStats() {
      const stats = calculateApprovedStats();

      // Update the stats cards
      document.getElementById('totalApproved').textContent = stats.totalApproved;
      document.getElementById('featuredApproved').textContent = stats.featuredApproved;
      document.getElementById('inStockApproved').textContent = stats.inStockApproved;
      document.getElementById('lowStockApproved').textContent = stats.lowStockApproved;

      // Update pagination info
      document.getElementById('totalProductsCount').textContent = stats.totalApproved;
      document.getElementById('showingRange').textContent = `1-${Math.min(10, stats.totalApproved)}`;

      // Update product count in header
      document.getElementById('productCount').textContent = `(${stats.totalApproved} items)`;
    }

    function setupCustomDropdowns() {
      // Handle dropdown click
      document.addEventListener('click', function (e) {
        const dropdownBtn = e.target.closest('.dropdown-btn');
        const dropdownOption = e.target.closest('.dropdown-option');

        // Close all dropdowns if clicking outside
        if (!dropdownBtn && !dropdownOption) {
          closeAllDropdowns();
          return;
        }

        // Handle dropdown button click
        if (dropdownBtn) {
          e.preventDefault();
          const dropdown = dropdownBtn.closest('.custom-dropdown');
          const isActive = dropdownBtn.classList.contains('active');

          // Close all other dropdowns
          closeAllDropdowns();

          // Toggle current dropdown
          if (!isActive) {
            const options = dropdown.querySelector('.dropdown-options');
            dropdownBtn.classList.add('active');
            options.classList.add('show');

            // Check if dropdown should be dropup
            const viewportHeight = window.innerHeight;
            const dropdownBottom = dropdown.getBoundingClientRect().bottom;
            const optionsHeight = options.offsetHeight;

            if (viewportHeight - dropdownBottom < optionsHeight + 10) {
              options.classList.add('dropup');
            }
          }
        }

        // Handle dropdown option click
        if (dropdownOption) {
          e.preventDefault();
          const dropdown = dropdownOption.closest('.custom-dropdown');
          const dropdownBtn = dropdown.querySelector('.dropdown-btn');
          const options = dropdown.querySelectorAll('.dropdown-option');
          const selectedValue = dropdownOption.getAttribute('data-value');
          const selectedText = dropdownOption.textContent;

          // Update selected option
          options.forEach(option => option.classList.remove('selected'));
          dropdownOption.classList.add('selected');

          // Update button text
          dropdownBtn.querySelector('.selected-text').textContent = selectedText;

          // Close dropdown
          dropdownBtn.classList.remove('active');
          dropdown.querySelector('.dropdown-options').classList.remove('show', 'dropup');

          // Apply filters immediately
          applyFilters();
        }
      });

      // Close dropdowns on escape key
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
          closeAllDropdowns();
        }
      });
    }

    function closeAllDropdowns() {
      document.querySelectorAll('.dropdown-btn').forEach(btn => {
        btn.classList.remove('active');
      });
      document.querySelectorAll('.dropdown-options').forEach(options => {
        options.classList.remove('show', 'dropup');
      });
    }

    function getDropdownValue(dropdownId) {
      const dropdown = document.getElementById(dropdownId);
      if (!dropdown) return '';

      const selectedOption = dropdown.querySelector('.dropdown-option.selected');
      return selectedOption ? selectedOption.getAttribute('data-value') : '';
    }

    function setDropdownValue(dropdownId, value) {
      const dropdown = document.getElementById(dropdownId);
      if (!dropdown) return;

      const options = dropdown.querySelectorAll('.dropdown-option');
      options.forEach(option => option.classList.remove('selected'));

      const targetOption = dropdown.querySelector(`.dropdown-option[data-value="${value}"]`);
      if (targetOption) {
        targetOption.classList.add('selected');
        const dropdownBtn = dropdown.querySelector('.dropdown-btn');
        dropdownBtn.querySelector('.selected-text').textContent = targetOption.textContent;
      }
    }

    function setupDropdownPositioning() {
      document.addEventListener("mouseover", function (e) {
        const dropdown = e.target.closest(".action-dropdown");
        if (!dropdown) return;

        const menu = dropdown.querySelector(".dropdown-menu");
        if (!menu) return;

        // Reset first
        menu.classList.remove("dropup");

        const rect = menu.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        // Check if dropdown will overflow at the bottom
        const dropdownHeight = menu.offsetHeight;
        const triggerBottom = dropdown.getBoundingClientRect().bottom;

        // If there's not enough space below (with 10px buffer), show as dropup
        if (viewportHeight - triggerBottom < dropdownHeight + 10) {
          menu.classList.add("dropup");
        }
      });
    }

    function populateApprovedTable() {
      const tableBody = document.getElementById("productTableBody");
      tableBody.innerHTML = "";

      console.log('Populating approved table with:', approvedProducts.length, 'products');

      // Sort by ID (newest first)
      const sortedProducts = [...approvedProducts].sort((a, b) => b.id - a.id);

      sortedProducts.forEach((product) => {
        const row = document.createElement("tr");
        row.setAttribute('data-id', product.id);

        // Add click handler for row selection
        row.addEventListener('click', function (e) {
          // Don't trigger if clicking on checkbox, actions dropdown, or links
          if (e.target.closest('.action-dropdown') ||
            e.target.tagName === 'A' ||
            e.target.classList.contains('product-name') ||
            e.target.closest('.product-cell')) {
            return;
          }

          const checkbox = this.querySelector('.row-checkbox');
          if (checkbox) {
            checkbox.checked = !checkbox.checked;
            toggleRowSelection(this, checkbox.checked);
            updateSelectAllCheckbox();
          }
        });

        const statusText = product.status.charAt(0).toUpperCase() + product.status.slice(1);

        // Handle images array for products saved from add_product form
        let productImage = product.image;
        if (!productImage && product.images && product.images.length > 0) {
          productImage = product.images[0];
        }

        // Set default image if none exists
        if (!productImage) {
          productImage = "https://via.placeholder.com/100x100/cccccc/ffffff?text=No+Image";
        }

        row.innerHTML = `
        <td>
          <div class="checkbox-container">
            <input type="checkbox" class="row-checkbox" data-id="${product.id}" onchange="event.stopPropagation()">
            <span class="checkbox-custom"></span>
          </div>
        </td>
        <td>
          <div class="product-cell" onclick="viewProduct(${product.id}); event.stopPropagation()">
            <a href="${productImage}" target="_blank" class="product-image-link" onclick="event.stopPropagation()">
              <img src="${productImage}" alt="${product.name}" class="product-image" onerror="this.src='https://via.placeholder.com/100x100/cccccc/ffffff?text=No+Image'">
            </a>
            <div class="product-info">
              <div class="product-name" onclick="viewProduct(${product.id}); event.stopPropagation()">
                ${product.name}
                ${product.isFeatured ? '<span class="badge featured" style="margin-left: 8px;">Featured</span>' : ''}
              </div>
              <div class="product-sku">SKU: ${product.sku}</div>
            </div>
          </div>
        </td>
        <td>${product.vendor || 'N/A'}</td>
        <td><span class="badge active">${statusText}</span></td>
        <td>${product.category || 'N/A'}</td>
        <td class="price-cell">
          ${product.originalPrice ? `<span class="original-price">$${parseFloat(product.originalPrice).toFixed(2)}</span>` : ''}
          $${parseFloat(product.price).toFixed(2)}
        </td>
        <td>
          <div style="display: flex; align-items: center; gap: 8px;">
            ${product.stock === 0
            ? '<span style="color: var(--danger); font-weight: 600;">Out of Stock</span>'
            : product.stock < 10
              ? `<span style="color: var(--warning); font-weight: 600;">${product.stock}</span>`
              : `<span style="color: var(--success); font-weight: 600;">${product.stock}</span>`}
            ${product.stock > 0 ? '<i class="fas fa-box" style="color: var(--gray);"></i>' : ''}
          </div>
        </td>
        <td>
          <div style="display: flex; gap: 4px; flex-wrap: wrap;">
            ${(product.platforms && product.platforms.length > 0 ? product.platforms : ['Web']).map(platform =>
                `<span style="padding: 4px 8px; background: var(--light); border-radius: 4px; font-size: 11px;">${platform}</span>`
              ).join('')}
          </div>
        </td>
        <td>${product.dateAdded || new Date().toISOString().split('T')[0]}</td>
        <td>
          <div class="action-dropdown" onclick="event.stopPropagation()">
            <button class="action-btn" onclick="event.stopPropagation()">
              Actions <i class="fas fa-chevron-down"></i>
            </button>
            <div class="dropdown-menu">
              <a href="#" class="dropdown-item" onclick="viewProduct(${product.id}); event.stopPropagation()">
                <i class="fas fa-eye"></i> View Details
              </a>
              <a href="#" class="dropdown-item" onclick="editProduct(${product.id}); event.stopPropagation()">
                <i class="fas fa-edit"></i> Edit Product
              </a>
              <a href="#" class="dropdown-item danger" onclick="removeFromApproved(${product.id}); event.stopPropagation()">
                <i class="fas fa-ban"></i> Remove from Approved
              </a>
              <a href="#" class="dropdown-item danger" onclick="deleteProduct(${product.id}); event.stopPropagation()">
                <i class="fas fa-trash"></i> Delete
              </a>
            </div>
          </div>
        </td>
      `;
        tableBody.appendChild(row);
      });
    }

    // View product function - redirect to product-detail.html
    function viewProduct(productId) {
      const product = products.find(p => p.id === productId);
      if (product) {
        localStorage.setItem('viewedThumbnail', product.image || '');
      }
      window.location.href = 'product-detail.html?id=' + productId;
    }

    // Remove product from approved list (change status)
    function removeFromApproved(productId) {
      if (confirm("Are you sure you want to remove this product from approved list? It will be set to pending.")) {
        const product = products.find(p => p.id === productId);
        if (product) {
          product.status = "pending";
          saveProductsToLocalStorage();

          // Update approved products list
          approvedProducts = products.filter(p => p.status === 'active');

          // Update UI
          populateApprovedTable();
          updateApprovedStats();

          alert("Product removed from approved list and set to pending.");
        }
      }
    }

    // Function to handle select all checkbox
    function toggleSelectAll() {
      const selectAllCheckbox = document.getElementById("selectAll");
      const isChecked = selectAllCheckbox.checked;

      // Get only visible rows (not filtered out)
      const visibleRows = Array.from(document.querySelectorAll("#productTableBody tr"))
        .filter(row => row.style.display !== 'none');

      // Toggle checkboxes for all visible rows
      visibleRows.forEach(row => {
        const checkbox = row.querySelector('.row-checkbox');
        if (checkbox) {
          checkbox.checked = !isChecked;
          toggleRowSelection(row, !isChecked);
        }
      });

      // Update the select all checkbox state
      selectAllCheckbox.checked = !isChecked;
      updateSelectAllCheckbox();
    }

    function setupEventListeners() {
      // Handle select all checkbox click on the checkbox itself
      document.getElementById("selectAll").addEventListener("change", function (e) {
        const isChecked = e.target.checked;

        // Get only visible rows (not filtered out)
        const visibleRows = Array.from(document.querySelectorAll("#productTableBody tr"))
          .filter(row => row.style.display !== 'none');

        // Toggle checkboxes for all visible rows
        visibleRows.forEach(row => {
          const checkbox = row.querySelector('.row-checkbox');
          if (checkbox) {
            checkbox.checked = isChecked;
            toggleRowSelection(row, isChecked);
          }
        });

        updateSelectAllCheckbox();
      });

      // Handle individual row checkbox changes
      document.addEventListener("change", function (e) {
        if (e.target.classList.contains("row-checkbox")) {
          const row = e.target.closest("tr");
          toggleRowSelection(row, e.target.checked);
          updateSelectAllCheckbox();
        }
      });

      // Handle table search
      document
        .getElementById("tableSearch")
        .addEventListener("input", function (e) {
          searchProducts(e.target.value);
        });

      // Handle filter inputs
      document
        .getElementById("searchInput")
        .addEventListener("input", applyFilters);

      document
        .getElementById("priceMin")
        .addEventListener("input", applyFilters);

      document
        .getElementById("priceMax")
        .addEventListener("input", applyFilters);
    }

    function toggleRowSelection(row, selected) {
      if (selected) {
        row.classList.add("selected");
      } else {
        row.classList.remove("selected");
      }
    }

    function updateSelectAllCheckbox() {
      // Get only visible rows (not filtered out)
      const visibleRows = Array.from(document.querySelectorAll("#productTableBody tr"))
        .filter(row => row.style.display !== 'none');

      if (visibleRows.length === 0) {
        // If no rows are visible, disable the select all checkbox
        const selectAll = document.getElementById("selectAll");
        selectAll.checked = false;
        selectAll.indeterminate = false;
        selectAll.disabled = true;
        return;
      } else {
        // Enable the select all checkbox if there are visible rows
        const selectAll = document.getElementById("selectAll");
        selectAll.disabled = false;
      }

      const checkboxes = Array.from(document.querySelectorAll(".row-checkbox"))
        .filter(checkbox => {
          const row = checkbox.closest("tr");
          return row && row.style.display !== 'none';
        });

      const allChecked = checkboxes.length > 0 && checkboxes.every((cb) => cb.checked);
      const someChecked = checkboxes.some((cb) => cb.checked);

      const selectAll = document.getElementById("selectAll");
      selectAll.checked = allChecked;
      selectAll.indeterminate = !allChecked && someChecked;
    }

    function searchProducts(query) {
      const rows = document.querySelectorAll("#productTableBody tr");
      const lowerQuery = query.toLowerCase();

      rows.forEach((row) => {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(lowerQuery) ? "" : "none";
      });

      // Update select all checkbox after search
      updateSelectAllCheckbox();

      // Update showing range
      updateShowingRange();
    }

    function applyFilters() {
      const vendor = getDropdownValue("vendorDropdown");
      const category = getDropdownValue("categoryDropdown");
      const platform = getDropdownValue("platformDropdown");
      const dateFilter = getDropdownValue("dateDropdown");
      const stockFilter = getDropdownValue("stockDropdown");
      const featuredFilter = getDropdownValue("featuredDropdown");
      const searchQuery = document
        .getElementById("searchInput")
        .value.toLowerCase();
      const priceMin =
        parseFloat(document.getElementById("priceMin").value) || 0;
      const priceMax =
        parseFloat(document.getElementById("priceMax").value) || Infinity;

      const rows = document.querySelectorAll("#productTableBody tr");

      rows.forEach((row) => {
        const rowDataId = parseInt(row.getAttribute('data-id'));
        const product = approvedProducts.find(p => p.id === rowDataId);
        if (!product) {
          row.style.display = "none";
          return;
        }

        const vendorCell = row.cells[2].textContent;
        const categoryCell = row.cells[4].textContent;
        const priceText = row.cells[5].textContent;
        const price = parseFloat(priceText.replace(/[^0-9.]/g, ""));
        const stockText = row.cells[6].textContent;
        const stock = parseInt(stockText) || 0;
        const platformsCell = row.cells[7].textContent;
        const dateCell = row.cells[8].textContent;
        const rowText = row.textContent.toLowerCase();

        const matchesVendor = !vendor || vendorCell === vendor;
        const matchesCategory = !category || categoryCell === category;
        const matchesPlatform = !platform || platformsCell.includes(platform);
        const matchesDate = !dateFilter || checkDateFilter(dateCell, dateFilter);
        const matchesSearch = !searchQuery || rowText.includes(searchQuery);
        const matchesPrice = price >= priceMin && price <= priceMax;
        const matchesStock =
          !stockFilter ||
          (stockFilter === "In Stock" && stock > 0) ||
          (stockFilter === "Low Stock (&lt; 10)" &&
            stock > 0 &&
            stock < 10) ||
          (stockFilter === "Out of Stock" && stock === 0);
        const matchesFeatured =
          !featuredFilter ||
          (featuredFilter === "featured" && product.isFeatured) ||
          (featuredFilter === "not-featured" && !product.isFeatured);

        row.style.display =
          matchesVendor &&
            matchesCategory &&
            matchesPlatform &&
            matchesDate &&
            matchesSearch &&
            matchesPrice &&
            matchesStock &&
            matchesFeatured
            ? ""
            : "none";
      });

      // Update select all checkbox after filtering
      updateSelectAllCheckbox();

      // Update visible count
      const visibleRows = Array.from(rows).filter(row => row.style.display !== 'none');
      document.getElementById('productCount').textContent = `(${visibleRows.length} items)`;

      // Update showing range
      updateShowingRange();
    }

    function updateShowingRange() {
      const visibleRows = Array.from(document.querySelectorAll("#productTableBody tr"))
        .filter(row => row.style.display !== 'none');

      if (visibleRows.length === 0) {
        document.getElementById('showingRange').textContent = '0-0';
      } else {
        document.getElementById('showingRange').textContent = `1-${visibleRows.length}`;
      }
    }

    function checkDateFilter(dateString, filter) {
      const date = new Date(dateString);
      const now = new Date();

      switch (filter) {
        case "Last 24 Hours":
          const yesterday = new Date(now.getTime() - 24 * 60 * 60 * 1000);
          return date >= yesterday;
        case "Last 7 Days":
          const lastWeek = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
          return date >= lastWeek;
        case "Last 30 Days":
          const lastMonth = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
          return date >= lastMonth;
        case "Last Quarter":
          const lastQuarter = new Date(now.getTime() - 90 * 24 * 60 * 60 * 1000);
          return date >= lastQuarter;
        default:
          return true;
      }
    }

    function resetFilters() {
      document.getElementById("searchInput").value = "";
      document.getElementById("priceMin").value = "";
      document.getElementById("priceMax").value = "";
      document.getElementById("tableSearch").value = "";

      // Reset all custom dropdowns
      setDropdownValue("vendorDropdown", "");
      setDropdownValue("categoryDropdown", "");
      setDropdownValue("platformDropdown", "");
      setDropdownValue("dateDropdown", "");
      setDropdownValue("stockDropdown", "");
      setDropdownValue("featuredDropdown", "");

      applyFilters();
    }

    function toggleFilters() {
      const filterGrid = document.getElementById("filterGrid");
      const filterActions = document.querySelector(".filter-actions");
      const toggleBtn = document.querySelector(".filter-toggle i");

      if (filterGrid.style.display === "none") {
        filterGrid.style.display = "grid";
        filterActions.style.display = "flex";
        toggleBtn.className = "fas fa-sliders-h";
      } else {
        filterGrid.style.display = "none";
        filterActions.style.display = "none";
        toggleBtn.className = "fas fa-sliders-h";
      }
    }

    function runBulkAction(select) {
      const action = select.value;
      if (!action) return;

      const selectedRows = Array.from(
        document.querySelectorAll(".row-checkbox:checked")
      ).map((cb) => {
        const row = cb.closest("tr");
        const id = parseInt(row.getAttribute('data-id'));
        return { row, id };
      });

      if (selectedRows.length === 0) {
        alert("Please select at least one product");
        select.value = "";
        return;
      }

      switch (action) {
        case "private":
          if (confirm(`Set ${selectedRows.length} approved product(s) to Private?`)) {
            selectedRows.forEach(({ row, id }) => {
              const product = products.find(p => p.id === id);
              if (product) {
                product.status = "private";
                row.remove();
              }
            });
            saveProductsToLocalStorage();

            // Update approved products list
            approvedProducts = products.filter(p => p.status === 'active');

            // Update UI
            updateApprovedStats();
            alert("Selected products set to private and removed from approved list.");
          }
          break;

        case "pending":
          if (confirm(`Set ${selectedRows.length} approved product(s) to Pending?`)) {
            selectedRows.forEach(({ row, id }) => {
              const product = products.find(p => p.id === id);
              if (product) {
                product.status = "pending";
                row.remove();
              }
            });
            saveProductsToLocalStorage();

            // Update approved products list
            approvedProducts = products.filter(p => p.status === 'active');

            // Update UI
            updateApprovedStats();
            alert("Selected products set to pending and removed from approved list.");
          }
          break;

        case "delete":
          if (
            confirm(
              `Are you sure you want to delete ${selectedRows.length} approved product(s)?`
            )
          ) {
            selectedRows.forEach(({ row, id }) => {
              const index = products.findIndex(p => p.id === id);
              if (index > -1) {
                products.splice(index, 1);
                row.remove();
              }
            });
            saveProductsToLocalStorage();

            // Update approved products list
            approvedProducts = products.filter(p => p.status === 'active');

            // Update UI
            updateApprovedStats();
            alert("Selected products deleted successfully.");
          }
          break;

        case "featured":
          if (confirm(`Mark ${selectedRows.length} approved product(s) as Featured?`)) {
            selectedRows.forEach(({ row, id }) => {
              const product = products.find(p => p.id === id);
              if (product) {
                product.isFeatured = true;
                const productName = row.cells[1].querySelector(".product-name");
                if (!productName.innerHTML.includes("Featured")) {
                  productName.innerHTML +=
                    ' <span class="badge featured">Featured</span>';
                }
              }
            });
            saveProductsToLocalStorage();
            updateApprovedStats();
            alert("Selected products marked as featured.");
          }
          break;

        case "unfeatured":
          if (confirm(`Remove Featured from ${selectedRows.length} approved product(s)?`)) {
            selectedRows.forEach(({ row, id }) => {
              const product = products.find(p => p.id === id);
              if (product) {
                product.isFeatured = false;
                const productName = row.cells[1].querySelector(".product-name");
                const featuredBadge = productName.querySelector('.badge.featured');
                if (featuredBadge) {
                  featuredBadge.remove();
                }
              }
            });
            saveProductsToLocalStorage();
            updateApprovedStats();
            alert("Featured status removed from selected products.");
          }
          break;

        case "export":
          const selectedProducts = selectedRows.map(({ id }) =>
            approvedProducts.find(p => p.id === id)
          ).filter(p => p);
          exportSelectedToCSV(selectedProducts);
          break;
      }

      select.value = "";
    }

    function editProduct(id) {
      localStorage.setItem('editProductId', id);
      window.location.href = 'add_product.html?edit=' + id;
    }

    function deleteProduct(id) {
      if (confirm("Are you sure you want to delete this approved product?")) {
        const index = products.findIndex((p) => p.id === id);
        if (index > -1) {
          products.splice(index, 1);
          saveProductsToLocalStorage();

          // Update approved products list
          approvedProducts = products.filter(p => p.status === 'active');

          // Update UI
          populateApprovedTable();
          updateApprovedStats();
          alert("Product deleted successfully");
        }
      }
    }

    // Function to export all approved products to CSV
    function exportToCSV() {
      const csvData = convertToCSV(approvedProducts);
      downloadCSV(csvData, 'approved_products.csv');
    }

    // Function to export selected approved products to CSV
    function exportSelectedToCSV(selectedProducts) {
      const csvData = convertToCSV(selectedProducts);
      downloadCSV(csvData, 'selected_approved_products.csv');
    }

    // Function to convert products array to CSV format
    function convertToCSV(productsArray) {
      const headers = [
        'ID', 'Name', 'SKU', 'Vendor', 'Status', 'Category',
        'Price', 'Original Price', 'Stock', 'Platforms',
        'Date Added', 'Featured', 'Description'
      ];

      const rows = productsArray.map(product => [
        product.id,
        `"${(product.name || '').replace(/"/g, '""')}"`,
        product.sku || '',
        product.vendor || '',
        product.status || '',
        product.category || '',
        product.price || 0,
        product.originalPrice || '',
        product.stock || 0,
        (product.platforms && product.platforms.length > 0 ? product.platforms.join(', ') : 'Web'),
        product.dateAdded || '',
        product.isFeatured ? 'Yes' : 'No',
        `"${(product.description || '').replace(/"/g, '""').replace(/\n/g, ' ')}"`
      ]);

      return [headers, ...rows].map(row => row.join(',')).join('\n');
    }

    // Function to download CSV file
    function downloadCSV(csvData, filename) {
      const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
      const link = document.createElement("a");

      if (link.download !== undefined) {
        const url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", filename);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        alert(`CSV file "${filename}" downloaded successfully!`);
      } else {
        alert('Your browser does not support downloading files. Here is the CSV data:\n\n' + csvData);
      }
    }

    function addNewProduct() {
      window.location.href = 'add_product.html';
    }
