    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");

    const products = [
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
        lastUpdated: "2024-03-20",
        image:
          "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
        isFeatured: true,
        description:
          "Advanced smartwatch with heart rate monitoring, GPS tracking, sleep analysis, and 7-day battery life. Water-resistant up to 50 meters, compatible with both Android and iOS devices.",
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
        lastUpdated: "2024-03-18",
        image:
          "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
        isFeatured: false,
        description:
          "Premium cotton t-shirt with breathable fabric and comfortable fit. Available in multiple colors and sizes.",
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
        lastUpdated: "2024-03-20",
        image:
          "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=400&fit=crop",
        isFeatured: false,
        description:
          "Modern LED lamp with adjustable brightness and color temperature. Perfect for home or office decor.",
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
        lastUpdated: "2024-03-16",
        image:
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
        isFeatured: true,
        description:
          "High-quality wireless earbuds with noise cancellation and 24-hour battery life.",
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
        lastUpdated: "2024-03-14",
        image:
          "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=400&fit=crop",
        isFeatured: false,
        description:
          "Refurbished gaming console with all accessories included. 3-month warranty.",
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
        lastUpdated: "2024-03-12",
        image:
          "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop",
        isFeatured: true,
        description:
          "Ergonomic office chair with lumbar support and adjustable height. Perfect for long working hours.",
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
        lastUpdated: "2024-03-19",
        image:
          "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=400&h=400&fit=crop",
        isFeatured: false,
        description:
          "Premium yoga mat with non-slip surface and extra cushioning for comfortable workouts.",
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
        lastUpdated: "2024-03-21",
        image:
          "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400&h=400&fit=crop",
        isFeatured: false,
        description:
          "Portable Bluetooth speaker with 360-degree sound and 12-hour battery life.",
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
        lastUpdated: "2024-03-17",
        image:
          "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
        isFeatured: true,
        description:
          "Designer sunglasses with UV protection and polarized lenses.",
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
        lastUpdated: "2024-03-13",
        image:
          "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop",
        isFeatured: false,
        description:
          "Deluxe coffee machine with built-in grinder and milk frother. Makes various coffee types.",
      },
    ];

    document.addEventListener("DOMContentLoaded", function () {
      setTimeout(loadProductDetails, 500);
    });

    function loadProductDetails() {
      const loading = document.getElementById("loading");
      const productDetail = document.getElementById("productDetail");

      loading.style.display = "none";
      productDetail.style.display = "block";

      const product = products.find((p) => p.id == productId);

      if (!product) {
        productDetail.innerHTML = `
                    <div style="text-align: center; padding: 50px; background: white; border-radius: var(--border-radius);">
                        <i class="fas fa-exclamation-triangle" style="font-size: 48px; color: var(--danger); margin-bottom: 20px;"></i>
                        <h2>Product Not Found</h2>
                        <p>The requested product could not be found.</p>
                        <a href="product-list.html" class="btn btn-primary" style="margin-top: 20px;">
                            <i class="fas fa-arrow-left"></i> Back to Products
                        </a>
                    </div>
                `;
        return;
      }

      document.getElementById("productName").textContent = product.name;
      document.getElementById(
        "productSku"
      ).textContent = `SKU: ${product.sku}`;
      document.getElementById("productPrice").textContent =
        product.price.toFixed(2);
      document.getElementById("productVendor").textContent = product.vendor;
      document.getElementById("productCategory").textContent =
        product.category;
      document.getElementById("productDate").textContent = product.dateAdded;
      document.getElementById("productUpdated").textContent =
        product.lastUpdated;
      document.getElementById("productDescription").textContent =
        product.description;

      const statusBadge = document.getElementById("productStatus");
      statusBadge.className = `badge ${product.status}`;
      statusBadge.textContent =
        product.status.charAt(0).toUpperCase() + product.status.slice(1);

      const featuredBadge = document.getElementById("productFeatured");
      featuredBadge.style.display = product.isFeatured
        ? "inline-flex"
        : "none";

      const originalPrice = document.getElementById("originalPrice");
      const discountBadge = document.getElementById("discountBadge");

      if (product.originalPrice && product.originalPrice > product.price) {
        originalPrice.style.display = "inline";
        originalPrice.textContent = `$${product.originalPrice.toFixed(2)}`;

        const discount = Math.round(
          (1 - product.price / product.originalPrice) * 100
        );
        discountBadge.style.display = "inline-block";
        discountBadge.textContent = `Save ${discount}%`;
      }

      const stockElement = document.getElementById("productStock");
      let stockClass = "stock-in";
      let stockText = `${product.stock} in stock`;

      if (product.stock === 0) {
        stockClass = "stock-out";
        stockText = "Out of stock";
      } else if (product.stock < 10) {
        stockClass = "stock-low";
        stockText = `Only ${product.stock} left`;
      }

      stockElement.innerHTML = `
                <span class="stock-status ${stockClass}">
                    <i class="fas fa-box"></i> ${stockText}
                </span>
            `;

      const platformsContainer = document.getElementById("productPlatforms");
      platformsContainer.innerHTML = product.platforms
        .map((platform) => `<span class="platform-tag">${platform}</span>`)
        .join("");

      const mainImage = document.getElementById("mainImage");
      const imagePlaceholder = document.getElementById("imagePlaceholder");

      if (product.image) {
        mainImage.src = product.image;
        mainImage.style.display = "block";
        imagePlaceholder.style.display = "none";
      } else {
        mainImage.style.display = "none";
        imagePlaceholder.style.display = "flex";
      }
    }

    function changeMainImage(src) {
      const mainImage = document.getElementById("mainImage");
      const imagePlaceholder = document.getElementById("imagePlaceholder");

      mainImage.src = src;
      mainImage.style.display = "block";
      imagePlaceholder.style.display = "none";

      document.querySelectorAll(".thumbnail").forEach((thumb) => {
        thumb.classList.remove("active");
      });
      event.target.classList.add("active");
    }

    function editProduct() {
      alert(`Editing product ${productId}`);
    }

    function toggleStatus(status) {
      const product = products.find((p) => p.id == productId);
      if (product) {
        product.status = status;
        const statusBadge = document.getElementById("productStatus");
        statusBadge.className = `badge ${status}`;
        statusBadge.textContent =
          status.charAt(0).toUpperCase() + status.slice(1);
        alert(`Product status changed to ${status}`);
      }
    }

    function toggleFeatured() {
      const product = products.find((p) => p.id == productId);
      if (product) {
        product.isFeatured = !product.isFeatured;
        const featuredBadge = document.getElementById("productFeatured");
        featuredBadge.style.display = product.isFeatured
          ? "inline-flex"
          : "none";
        alert(
          product.isFeatured
            ? "Product marked as featured"
            : "Product removed from featured"
        );
      }
    }

    function deleteProduct() {
      if (
        confirm(
          "Are you sure you want to delete this product? This action cannot be undone."
        )
      ) {
        alert("Product deleted successfully");
        setTimeout(() => {
          window.location.href = "product-list.html";
        }, 1000);
      }
    }
