let products = [];
let statsHistory = [];

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

function saveProductsToLocalStorage() {
  try {
    localStorage.setItem('products', JSON.stringify(products));
    console.log('Products saved to localStorage');
  } catch (e) {
    console.error('Error saving products to localStorage:', e);
  }
}

try {
  const savedStatsHistory = localStorage.getItem('statsHistory');
  if (savedStatsHistory) {
    statsHistory = JSON.parse(savedStatsHistory);
  }
} catch (e) {
  console.error('Error loading stats history:', e);
}

document.addEventListener("DOMContentLoaded", function () {
  initializeProducts();
  updateProductStats();
  populateProductTable();
  setupEventListeners();
  setupDropdownPositioning();
  setupCustomDropdowns();
  setupResponsiveBehavior();
});

function setupResponsiveBehavior() {
  // Handle window resize
  let resizeTimer;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      updateTableWrapperHeight();
      setupDropdownPositioning();
      applyFilters();
    }, 250);
  });

  // Update table wrapper height initially
  updateTableWrapperHeight();
}

function updateTableWrapperHeight() {
  const tableWrapper = document.querySelector('.table-wrapper');
  const tableContainer = document.querySelector('.table-container');
  const tableHeader = document.querySelector('.table-header');
  const pagination = document.querySelector('.pagination');
  
  if (tableWrapper && tableContainer && tableHeader && pagination) {
    const containerHeight = tableContainer.offsetHeight;
    const headerHeight = tableHeader.offsetHeight;
    const paginationHeight = pagination.offsetHeight;
    const availableHeight = containerHeight - headerHeight - paginationHeight - 20;
    
    tableWrapper.style.maxHeight = Math.max(400, availableHeight) + 'px';
    tableWrapper.style.overflowY = 'auto';
  }
}

function calculateProductStats() {
  const totalProducts = products.length;

  const activeProducts = products.filter(p => p.status === 'active').length;
  const pendingProducts = products.filter(p => p.status === 'pending').length;

  const lowStockProducts = products.filter(p => p.stock > 0 && p.stock < 10).length;

  const outOfStockProducts = products.filter(p => p.stock === 0).length;

  const featuredProducts = products.filter(p => p.isFeatured).length;

  const totalInventoryValue = products.reduce((sum, product) => {
    return sum + (product.price * product.stock);
  }, 0).toFixed(2);

  const averagePrice = totalProducts > 0
    ? (products.reduce((sum, product) => sum + product.price, 0) / totalProducts).toFixed(2)
    : 0;

  return {
    totalProducts,
    activeProducts,
    pendingProducts,
    lowStockProducts,
    outOfStockProducts,
    featuredProducts,
    totalInventoryValue,
    averagePrice,
    timestamp: new Date().toISOString()
  };
}

function calculateTrends(currentStats, previousStats) {
  if (!previousStats) {
    return {
      totalChange: 0,
      activeChange: 0,
      pendingChange: 0,
      lowStockChange: 0
    };
  }

  const calculatePercentageChange = (current, previous) => {
    if (previous === 0) return current > 0 ? 100 : 0;
    return ((current - previous) / previous * 100).toFixed(1);
  };

  return {
    totalChange: calculatePercentageChange(currentStats.totalProducts, previousStats.totalProducts),
    activeChange: calculatePercentageChange(currentStats.activeProducts, previousStats.activeProducts),
    pendingChange: calculatePercentageChange(currentStats.pendingProducts, previousStats.pendingProducts),
    lowStockChange: calculatePercentageChange(currentStats.lowStockProducts, previousStats.lowStockProducts)
  };
}

function updateProductStats() {
  const currentStats = calculateProductStats();

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayDateStr = yesterday.toISOString().split('T')[0];

  let previousStats = null;
  if (statsHistory.length > 0) {
    previousStats = statsHistory.find(stat =>
      stat.timestamp.startsWith(yesterdayDateStr)
    );

    if (!previousStats && statsHistory.length > 0) {
      previousStats = statsHistory[statsHistory.length - 1];
    }
  }

  const trends = calculateTrends(currentStats, previousStats);

  document.getElementById('totalProducts').textContent = currentStats.totalProducts;
  document.getElementById('activeProducts').textContent = currentStats.activeProducts;
  document.getElementById('pendingProducts').textContent = currentStats.pendingProducts;
  document.getElementById('lowStockProducts').textContent = currentStats.lowStockProducts;

  updateTrendElement('totalTrend', 'totalChange', trends.totalChange);
  updateTrendElement('activeTrend', 'activeChange', trends.activeChange);
  updateTrendElement('pendingTrend', 'pendingChange', trends.pendingChange);
  updateTrendElement('lowStockTrend', 'lowStockChange', trends.lowStockChange);

  document.getElementById('totalProductsCount').textContent = currentStats.totalProducts;
  const showingCount = Math.min(10, currentStats.totalProducts);
  document.getElementById('showingRange').textContent = `1-${showingCount}`;

  const todayDateStr = new Date().toISOString().split('T')[0];
  const todayStats = statsHistory.find(stat =>
    stat.timestamp.startsWith(todayDateStr)
  );

  if (!todayStats) {
    statsHistory.push(currentStats);
    if (statsHistory.length > 30) {
      statsHistory = statsHistory.slice(-30);
    }
    saveStatsHistory();
  }
}

function saveStatsHistory() {
  try {
    localStorage.setItem('statsHistory', JSON.stringify(statsHistory));
  } catch (e) {
    console.error('Error saving stats history:', e);
  }
}

function updateTrendElement(trendId, changeId, changeValue) {
  const changeNum = parseFloat(changeValue);
  const trendElement = document.getElementById(trendId);
  const changeElement = document.getElementById(changeId);

  changeElement.textContent = `${Math.abs(changeNum)}%`;

  if (changeNum > 0) {
    trendElement.className = 'stat-trend positive';
    trendElement.querySelector('i').className = 'fas fa-arrow-up';
  } else if (changeNum < 0) {
    trendElement.className = 'stat-trend negative';
    trendElement.querySelector('i').className = 'fas fa-arrow-down';
  } else {
    trendElement.className = 'stat-trend';
    trendElement.querySelector('i').className = 'fas fa-minus';
    changeElement.textContent = '0%';
  }
}

function setupCustomDropdowns() {
  document.addEventListener('click', function (e) {
    const dropdownBtn = e.target.closest('.dropdown-btn');
    const dropdownOption = e.target.closest('.dropdown-option');

    if (!dropdownBtn && !dropdownOption) {
      closeAllDropdowns();
      return;
    }

    if (dropdownBtn) {
      e.preventDefault();
      const dropdown = dropdownBtn.closest('.custom-dropdown');
      const isActive = dropdownBtn.classList.contains('active');

      closeAllDropdowns();

      if (!isActive) {
        const options = dropdown.querySelector('.dropdown-options');
        dropdownBtn.classList.add('active');
        options.classList.add('show');

        const viewportHeight = window.innerHeight;
        const dropdownBottom = dropdown.getBoundingClientRect().bottom;
        const optionsHeight = options.offsetHeight;

        if (viewportHeight - dropdownBottom < optionsHeight + 10) {
          options.classList.add('dropup');
        }
      }
    }

    if (dropdownOption) {
      e.preventDefault();
      const dropdown = dropdownOption.closest('.custom-dropdown');
      const dropdownBtn = dropdown.querySelector('.dropdown-btn');
      const options = dropdown.querySelectorAll('.dropdown-option');
      const selectedValue = dropdownOption.getAttribute('data-value');
      const selectedText = dropdownOption.textContent;

      options.forEach(option => option.classList.remove('selected'));
      dropdownOption.classList.add('selected');

      dropdownBtn.querySelector('.selected-text').textContent = selectedText;

      dropdownBtn.classList.remove('active');
      dropdown.querySelector('.dropdown-options').classList.remove('show', 'dropup');

      applyFilters();
    }
  });

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

    menu.classList.remove("dropup");

    const rect = menu.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    const dropdownHeight = menu.offsetHeight;
    const triggerBottom = dropdown.getBoundingClientRect().bottom;

    if (viewportHeight - triggerBottom < dropdownHeight + 10) {
      menu.classList.add("dropup");
    }
  });
}

function populateProductTable() {
  const tableBody = document.getElementById("productTableBody");
  tableBody.innerHTML = "";

  console.log('Populating table with products:', products.length);

  const sortedProducts = [...products].sort((a, b) => b.id - a.id);

  sortedProducts.forEach((product) => {
    const row = document.createElement("tr");
    row.setAttribute('data-id', product.id);

    row.addEventListener('click', function (e) {
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

    let productImage = product.image;
    if (!productImage && product.images && product.images.length > 0) {
      productImage = product.images[0];
    }

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
      <td><span class="badge ${product.status}">${statusText}</span></td>
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
            <a href="#" class="dropdown-item danger" onclick="deleteProduct(${product.id}); event.stopPropagation()">
              <i class="fas fa-trash"></i> Delete
            </a>
          </div>
        </div>
      </td>
    `;
    tableBody.appendChild(row);
  });

  document.getElementById('productCount').textContent = `(${products.length} items)`;
  
  // Update table wrapper height after populating
  setTimeout(updateTableWrapperHeight, 100);
}

function viewProduct(productId) {
  const product = products.find(p => p.id === productId);
  if (product) {
    localStorage.setItem('viewedThumbnail', product.image || '');
  }
  window.location.href = 'product-detail.html?id=' + productId;
}

function setupEventListeners() {
  const selectAll = document.getElementById("selectAll");
  if (selectAll) {
    selectAll.addEventListener("change", function (e) {
      const isChecked = e.target.checked;

      const visibleRows = Array.from(document.querySelectorAll("#productTableBody tr"))
        .filter(row => row.style.display !== 'none');

      visibleRows.forEach(row => {
        const checkbox = row.querySelector('.row-checkbox');
        if (checkbox) {
          checkbox.checked = isChecked;
          toggleRowSelection(row, isChecked);
        }
      });

      updateSelectAllCheckbox();
    });
  }

  document.addEventListener("change", function (e) {
    if (e.target.classList.contains("row-checkbox")) {
      const row = e.target.closest("tr");
      toggleRowSelection(row, e.target.checked);
      updateSelectAllCheckbox();
    }
  });

  const tableSearch = document.getElementById("tableSearch");
  if (tableSearch) {
    tableSearch.addEventListener("input", function (e) {
      searchProducts(e.target.value);
    });
  }

  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", applyFilters);
  }

  const priceMin = document.getElementById("priceMin");
  if (priceMin) {
    priceMin.addEventListener("input", applyFilters);
  }

  const priceMax = document.getElementById("priceMax");
  if (priceMax) {
    priceMax.addEventListener("input", applyFilters);
  }
}

function toggleRowSelection(row, selected) {
  if (selected) {
    row.classList.add("selected");
  } else {
    row.classList.remove("selected");
  }
}

function updateSelectAllCheckbox() {
  const visibleRows = Array.from(document.querySelectorAll("#productTableBody tr"))
    .filter(row => row.style.display !== 'none');

  if (visibleRows.length === 0) {
    const selectAll = document.getElementById("selectAll");
    if (selectAll) {
      selectAll.checked = false;
      selectAll.indeterminate = false;
      selectAll.disabled = true;
    }
    return;
  } else {
    const selectAll = document.getElementById("selectAll");
    if (selectAll) {
      selectAll.disabled = false;
    }
  }

  const checkboxes = Array.from(document.querySelectorAll(".row-checkbox"))
    .filter(checkbox => {
      const row = checkbox.closest("tr");
      return row && row.style.display !== 'none';
    });

  const allChecked = checkboxes.length > 0 && checkboxes.every((cb) => cb.checked);
  const someChecked = checkboxes.some((cb) => cb.checked);

  const selectAll = document.getElementById("selectAll");
  if (selectAll) {
    selectAll.checked = allChecked;
    selectAll.indeterminate = !allChecked && someChecked;
  }
}

function searchProducts(query) {
  const rows = document.querySelectorAll("#productTableBody tr");
  const lowerQuery = query.toLowerCase();

  rows.forEach((row) => {
    const text = row.textContent.toLowerCase();
    row.style.display = text.includes(lowerQuery) ? "" : "none";
  });

  updateSelectAllCheckbox();
  updateShowingRange();
}

function applyFilters() {
  const vendor = getDropdownValue("vendorDropdown");
  const status = getDropdownValue("statusDropdown");
  const category = getDropdownValue("categoryDropdown");
  const platform = getDropdownValue("platformDropdown");
  const dateFilter = getDropdownValue("dateDropdown");
  const searchQuery = document.getElementById("searchInput")?.value.toLowerCase() || "";
  const priceMin = parseFloat(document.getElementById("priceMin")?.value) || 0;
  const priceMax = parseFloat(document.getElementById("priceMax")?.value) || Infinity;
  const stockFilter = getDropdownValue("stockDropdown");

  const rows = document.querySelectorAll("#productTableBody tr");

  rows.forEach((row) => {
    const vendorCell = row.cells[2]?.textContent || "";
    const statusBadge = row.cells[3]?.querySelector(".badge");
    const statusValue = statusBadge ? statusBadge.textContent.toLowerCase() : "";
    const categoryCell = row.cells[4]?.textContent || "";
    const priceText = row.cells[5]?.textContent || "";
    const price = parseFloat(priceText.replace(/[^0-9.]/g, "")) || 0;
    const stockText = row.cells[6]?.textContent || "";
    const stock = parseInt(stockText) || 0;
    const platformsCell = row.cells[7]?.textContent || "";
    const dateCell = row.cells[8]?.textContent || "";
    const rowText = row.textContent.toLowerCase();

    const matchesVendor = !vendor || vendorCell === vendor;
    const matchesStatus = !status || statusValue === status.toLowerCase();
    const matchesCategory = !category || categoryCell === category;
    const matchesPlatform = !platform || platformsCell.includes(platform);
    const matchesDate = !dateFilter || checkDateFilter(dateCell, dateFilter);
    const matchesSearch = !searchQuery || rowText.includes(searchQuery);
    const matchesPrice = price >= priceMin && price <= priceMax;
    const matchesStock =
      !stockFilter ||
      (stockFilter === "In Stock" && stock > 0) ||
      (stockFilter === "Low Stock" && stock > 0 && stock < 10) ||
      (stockFilter === "Out of Stock" && stock === 0);

    row.style.display =
      matchesVendor &&
      matchesStatus &&
      matchesCategory &&
      matchesPlatform &&
      matchesDate &&
      matchesSearch &&
      matchesPrice &&
      matchesStock
        ? ""
        : "none";
  });

  updateSelectAllCheckbox();

  const visibleRows = Array.from(rows).filter(row => row.style.display !== 'none');
  const productCount = document.getElementById('productCount');
  if (productCount) {
    productCount.textContent = `(${visibleRows.length} items)`;
  }

  updateShowingRange();
}

function updateShowingRange() {
  const visibleRows = Array.from(document.querySelectorAll("#productTableBody tr"))
    .filter(row => row.style.display !== 'none');

  const showingRange = document.getElementById('showingRange');
  if (showingRange) {
    if (visibleRows.length === 0) {
      showingRange.textContent = '0-0';
    } else {
      showingRange.textContent = `1-${visibleRows.length}`;
    }
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
  
  const tableSearch = document.getElementById("tableSearch");
  if (tableSearch) {
    tableSearch.value = "";
  }

  setDropdownValue("vendorDropdown", "");
  setDropdownValue("statusDropdown", "");
  setDropdownValue("categoryDropdown", "");
  setDropdownValue("platformDropdown", "");
  setDropdownValue("dateDropdown", "");
  setDropdownValue("stockDropdown", "");

  applyFilters();
}

function toggleFilters() {
  const filterGrid = document.getElementById("filterGrid");
  const filterActions = document.querySelector(".filter-actions");
  const toggleBtn = document.querySelector(".filter-toggle i");

  if (!filterGrid || !filterActions || !toggleBtn) return;

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
    case "approve":
      if (confirm(`Set ${selectedRows.length} product(s) to Active?`)) {
        selectedRows.forEach(({ row, id }) => {
          const product = products.find(p => p.id === id);
          if (product) {
            product.status = "active";
            const statusBadge = row.cells[3].querySelector(".badge");
            statusBadge.className = "badge active";
            statusBadge.textContent = "Active";
          }
        });
        saveProductsToLocalStorage();
        updateProductStats();
      }
      break;

    case "pending":
      if (confirm(`Set ${selectedRows.length} product(s) to Pending?`)) {
        selectedRows.forEach(({ row, id }) => {
          const product = products.find(p => p.id === id);
          if (product) {
            product.status = "pending";
            const statusBadge = row.cells[3].querySelector(".badge");
            statusBadge.className = "badge pending";
            statusBadge.textContent = "Pending";
          }
        });
        saveProductsToLocalStorage();
        updateProductStats();
      }
      break;

    case "private":
      if (confirm(`Set ${selectedRows.length} product(s) to Private?`)) {
        selectedRows.forEach(({ row, id }) => {
          const product = products.find(p => p.id === id);
          if (product) {
            product.status = "private";
            const statusBadge = row.cells[3].querySelector(".badge");
            statusBadge.className = "badge private";
            statusBadge.textContent = "Private";
          }
        });
        saveProductsToLocalStorage();
        updateProductStats();
      }
      break;

    case "rejected":
      if (confirm(`Set ${selectedRows.length} product(s) to Rejected?`)) {
        selectedRows.forEach(({ row, id }) => {
          const product = products.find(p => p.id === id);
          if (product) {
            product.status = "rejected";
            const statusBadge = row.cells[3].querySelector(".badge");
            statusBadge.className = "badge rejected";
            statusBadge.textContent = "Rejected";
          }
        });
        saveProductsToLocalStorage();
        updateProductStats();
      }
      break;

    case "delete":
      if (
        confirm(
          `Are you sure you want to delete ${selectedRows.length} product(s)?`
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
        updateProductStats();
        populateProductTable();
      }
      break;

    case "featured":
      if (confirm(`Mark ${selectedRows.length} product(s) as Featured?`)) {
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
        updateProductStats();
      }
      break;

    case "unfeatured":
      if (confirm(`Remove Featured from ${selectedRows.length} product(s)?`)) {
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
        updateProductStats();
      }
      break;

    case "export":
      const selectedProducts = selectedRows.map(({ id }) =>
        products.find(p => p.id === id)
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
  if (confirm("Are you sure you want to delete this product?")) {
    const index = products.findIndex((p) => p.id === id);
    if (index > -1) {
      products.splice(index, 1);
      saveProductsToLocalStorage();
      populateProductTable();
      updateProductStats();
      alert("Product deleted successfully");
    }
  }
}

function exportToCSV() {
  const csvData = convertToCSV(products);
  downloadCSV(csvData, 'all_products.csv');
}

function exportSelectedToCSV(selectedProducts) {
  const csvData = convertToCSV(selectedProducts);
  downloadCSV(csvData, 'selected_products.csv');
}

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

function saveFilterPreset() {
  const presetName = prompt("Enter a name for this filter preset:");
  if (presetName) {
    alert(`Filter preset "${presetName}" saved successfully`);
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() {
    initializeProducts();
    updateProductStats();
    populateProductTable();
    setupEventListeners();
    setupDropdownPositioning();
    setupCustomDropdowns();
    setupResponsiveBehavior();
  });
} else {
  initializeProducts();
  updateProductStats();
  populateProductTable();
  setupEventListeners();
  setupDropdownPositioning();
  setupCustomDropdowns();
  setupResponsiveBehavior();
}