// Global variables
let ordersData = [];
let vendorsData = [];
let currentView = 'orders';
let currentFilter = 'all';
let currentPage = 1;
let currentSort = { column: 'date', direction: 'asc' };
let chartPeriod = 'monthly';
const rowsPerPage = 8;
let selectedOrders = new Set();
let selectedVendors = new Set();

// Chart data for different time periods
const chartData = {
  monthly: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    done: [12000, 15000, 18000, 14000, 22000, 19000, 24000, 21000, 18000, 16000, 14000, 17000],
    pending: [8000, 7000, 9000, 6000, 11000, 10000, 13000, 12000, 9000, 8000, 7000, 8500],
    cancel: [2000, 1500, 2200, 1800, 2500, 2100, 2800, 2400, 1900, 1700, 1500, 2000]
  },
  quarterly: {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    done: [45000, 55000, 63000, 47000],
    pending: [24000, 27000, 34000, 27500],
    cancel: [5700, 6100, 7200, 5200]
  },
  yearly: {
    labels: ['2020', '2021', '2022', '2023', '2024', '2025'],
    done: [180000, 210000, 240000, 280000, 310000, 350000],
    pending: [100000, 110000, 130000, 150000, 170000, 190000],
    cancel: [22000, 25000, 28000, 32000, 35000, 38000]
  }
};

// DOM Elements
let ordersBody, vendorBody, ordersTable, vendorTable;
let searchInput, filterButtons, toggleButtons;
let prevPageBtn, nextPageBtn, currentPageSpan, totalPagesSpan;
let detailModal, closeModalBtn, closeModal;
let modalTabs, vendorTab, productTab, payoutTab;
let modalTitle, notification, notificationText;
let refreshDataBtn, doneOrdersEl, pendingOrdersEl, cancelOrdersEl;
let doneChangeEl, pendingChangeEl, cancelChangeEl;
let doneProgressEl, pendingProgressEl, cancelProgressEl;
let distributionPercentages, lastUpdatedText, lastUpdatedEl;
let bulkActionsBar, selectedCount;
let selectAllCheckbox, selectAllVendorCheckbox;

// Load data from order.html
function loadOrdersFromStorage() {
  try {
    // Try to load from ordersData first (from order.html)
    const orderData = JSON.parse(localStorage.getItem('ordersData')) || [];
    
    if (orderData.length > 0) {
      // Convert order data to payout format
      return orderData.map(order => {
        const orderNum = order.id.split('-')[1];
        return {
          date: new Date(order.date).toLocaleString('en-GB'),
          order: `#${orderNum}`,
          vendor: order.vendor,
          products: `${order.items.split(',').length} Products, ${order.items.split(',').length} Items`,
          status: order.payoutStatus === 'paid' ? 'done' : 
                  order.payoutStatus === 'cancelled' ? 'cancel' : 'pending',
          sales: `£${order.total.toFixed(2)}`,
          commission: order.commission || `£${(order.total * 0.15).toFixed(2)}`,
          payout: order.payout || `£${(order.total * 0.85).toFixed(2)}`,
          payment: getPaymentMethod(order.vendor),
          originalOrder: order // Keep reference to original order
        };
      });
    }
  } catch (error) {
    console.error('Error loading orders:', error);
  }

  // Fallback to default data if no order data found
  return [
    { date: "05-01-2020 12:18", order: "#1001", vendor: "TechGadgets Inc.", products: "1 Products, 1 Items", status: "pending", sales: "£1250.99", commission: "£187.65", payout: "£1063.34", payment: "Bank Transfer" },
    { date: "05-01-2020 10:14", order: "#1002", vendor: "HomeStyle Living", products: "1 Products, 1 Items", status: "pending", sales: "£345.50", commission: "£51.83", payout: "£293.67", payment: "PayPal" },
    { date: "01-01-2020 21:06", order: "#1003", vendor: "FashionHub", products: "1 Products, 1 Items", status: "done", sales: "£189.99", commission: "£28.50", payout: "£161.49", payment: "Stripe" },
    { date: "01-01-2020 01:19", order: "#1004", vendor: "ElectroWorld", products: "1 Products, 1 Items", status: "pending", sales: "£899.99", commission: "£135.00", payout: "£764.99", payment: "Bank Transfer" },
    { date: "29-12-2022 02:31", order: "#1005", vendor: "BookNook", products: "1 Products, 1 Items", status: "cancel", sales: "£75.25", commission: "£0.00", payout: "£0.00", payment: "None" },
    { date: "29-12-2023 01:15", order: "#1006", vendor: "TechGadgets Inc.", products: "1 Products, 1 Items", status: "cancel", sales: "£650.00", commission: "£0.00", payout: "£0.00", payment: "None" },
    { date: "22-12-2025 05:46", order: "#1007", vendor: "HomeStyle Living", products: "1 Products, 1 Items", status: "pending", sales: "£1200.00", commission: "£180.00", payout: "£1020.00", payment: "Stripe" },
    { date: "12-12-2025 05:54", order: "#1008", vendor: "FashionHub", products: "1 Products, 1 Items", status: "pending", sales: "£245.75", commission: "£36.86", payout: "£208.89", payment: "Bank Transfer" },
    { date: "11-12-2025 09:26", order: "#1009", vendor: "ElectroWorld", products: "1 Products, 1 Items", status: "pending", sales: "£199.99", commission: "£30.00", payout: "£169.99", payment: "None" },
    { date: "10-12-2025 14:30", order: "#1010", vendor: "BookNook", products: "1 Products, 1 Items", status: "done", sales: "£45.50", commission: "£6.83", payout: "£38.67", payment: "PayPal" }
  ];
}

// Group orders by vendor for vendor view
function getVendorsData() {
  const vendorMap = {};
  
  ordersData.forEach(order => {
    if (!vendorMap[order.vendor]) {
      vendorMap[order.vendor] = {
        vendor: order.vendor,
        orders: 0,
        sales: 0,
        commission: 0,
        payout: 0,
        payment: order.payment
      };
    }
    
    const vendor = vendorMap[order.vendor];
    vendor.orders += 1;
    vendor.sales += parseFloat(order.sales.replace('£', '')) || 0;
    vendor.commission += parseFloat(order.commission.replace('£', '')) || 0;
    vendor.payout += parseFloat(order.payout.replace('£', '')) || 0;
  });
  
  return Object.values(vendorMap).map(v => ({
    ...v,
    sales: `£${v.sales.toFixed(2)}`,
    commission: `£${v.commission.toFixed(2)}`,
    payout: `£${v.payout.toFixed(2)}`
  }));
}

function getPaymentMethod(vendor) {
  const methods = {
    'TechGadgets Inc.': 'Bank Transfer',
    'HomeStyle Living': 'PayPal',
    'FashionHub': 'Stripe',
    'ElectroWorld': 'Bank Transfer',
    'BookNook': 'PayPal'
  };
  return methods[vendor] || 'Bank Transfer';
}

// Initialize
function init() {
  // Cache DOM elements
  ordersBody = document.getElementById('ordersBody');
  vendorBody = document.getElementById('vendorBody');
  ordersTable = document.getElementById('ordersTable');
  vendorTable = document.getElementById('vendorTable');
  searchInput = document.getElementById('searchInput');
  filterButtons = document.querySelectorAll('.filter-btn');
  toggleButtons = document.querySelectorAll('.toggle-btn');
  prevPageBtn = document.getElementById('prevPage');
  nextPageBtn = document.getElementById('nextPage');
  currentPageSpan = document.getElementById('currentPage');
  totalPagesSpan = document.getElementById('totalPages');
  detailModal = document.getElementById('detailModal');
  closeModalBtn = document.getElementById('closeModalBtn');
  closeModal = document.getElementById('closeModal');
  modalTabs = document.querySelectorAll('.modal-tab');
  vendorTab = document.getElementById('vendorTab');
  productTab = document.getElementById('productTab');
  payoutTab = document.getElementById('payoutTab');
  modalTitle = document.getElementById('modalTitle');
  notification = document.getElementById('notification');
  notificationText = document.getElementById('notificationText');
  refreshDataBtn = document.getElementById('refreshDataBtn');
  doneOrdersEl = document.getElementById('doneOrders');
  pendingOrdersEl = document.getElementById('pendingOrders');
  cancelOrdersEl = document.getElementById('cancelOrders');
  doneChangeEl = document.getElementById('doneChange');
  pendingChangeEl = document.getElementById('pendingChange');
  cancelChangeEl = document.getElementById('cancelChange');
  doneProgressEl = document.getElementById('doneProgress');
  pendingProgressEl = document.getElementById('pendingProgress');
  cancelProgressEl = document.getElementById('cancelProgress');
  distributionPercentages = document.getElementById('distributionPercentages');
  lastUpdatedText = document.getElementById('lastUpdatedText');
  lastUpdatedEl = document.getElementById('lastUpdated');
  bulkActionsBar = document.getElementById('bulkActionsBar');
  selectedCount = document.getElementById('selectedCount');
  selectAllCheckbox = document.getElementById('selectAllCheckbox');
  selectAllVendorCheckbox = document.getElementById('selectAllVendorCheckbox');

  // Load data
  ordersData = loadOrdersFromStorage();
  vendorsData = getVendorsData();
  
  // Ensure bulk actions bar is hidden initially
  bulkActionsBar.classList.remove('show');
  
  // Initial render
  renderOrders();
  calculateStats();
  updateDistributionPercentages();
  updateNavActive();

  // View toggle buttons event listeners
  toggleButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const view = btn.dataset.view;
      switchView(view);
    });
  });

  // Filter buttons event listeners
  filterButtons.forEach(btn => {
    if (btn.dataset.filter) {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        currentPage = 1;
        
        if (currentView === 'orders') {
          renderOrders();
        } else {
          renderVendors();
        }
      });
    }
  });

  // Search input event listener
  searchInput.addEventListener('input', debounce(() => {
    currentPage = 1;
    if (currentView === 'orders') {
      renderOrders();
    } else {
      renderVendors();
    }
  }, 300));

  // Sortable column headers
  document.querySelectorAll('.sortable').forEach(header => {
    header.addEventListener('click', (e) => {
      e.stopPropagation();
      const column = header.dataset.sort;

      // Update sort direction
      if (currentSort.column === column) {
        currentSort.direction = currentSort.direction === 'asc' ? 'desc' : 'asc';
      } else {
        currentSort.column = column;
        currentSort.direction = 'asc';
      }

      // Update sort icons
      document.querySelectorAll('.sortable i').forEach(icon => {
        icon.className = 'fas fa-sort';
      });

      const icon = header.querySelector('i');
      icon.className = currentSort.direction === 'asc' ? 'fas fa-sort-up' : 'fas fa-sort-down';

      // Re-render table
      if (currentView === 'orders') {
        renderOrders();
      } else {
        renderVendors();
      }
    });
  });

  // Refresh button
  refreshDataBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    refreshData();
  });

  // Chart time period buttons
  document.querySelectorAll('.time-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const period = btn.dataset.period;
      switchChartPeriod(period);
    });
  });

  // Pagination event listeners
  prevPageBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (currentPage > 1) {
      currentPage--;
      if (currentView === 'orders') {
        renderOrders();
      } else {
        renderVendors();
      }
    }
  });

  nextPageBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    let totalRows = 0;
    if (currentView === 'orders') {
      totalRows = filterOrdersByCategory().length;
    } else {
      totalRows = filterVendorsByCategory().length;
    }
    const totalPages = Math.ceil(totalRows / rowsPerPage);

    if (currentPage < totalPages) {
      currentPage++;
      if (currentView === 'orders') {
        renderOrders();
      } else {
        renderVendors();
      }
    }
  });

  // Modal event listeners
  modalTabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.stopPropagation();
      modalTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const tabName = tab.dataset.tab;
      vendorTab.style.display = tabName === 'vendor' ? 'block' : 'none';
      productTab.style.display = tabName === 'product' ? 'block' : 'none';
      payoutTab.style.display = tabName === 'payout' ? 'block' : 'none';
    });
  });

  closeModal.addEventListener('click', (e) => {
    e.stopPropagation();
    detailModal.classList.remove('show');
  });

  closeModalBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    detailModal.classList.remove('show');
  });

  detailModal.addEventListener('click', (e) => {
    if (e.target === detailModal) {
      detailModal.classList.remove('show');
    }
  });

  // Process payment button
  document.getElementById('processPaymentBtn').addEventListener('click', (e) => {
    e.stopPropagation();
    const currentDetailItem = JSON.parse(sessionStorage.getItem('currentDetailItem') || '{}');
    if (currentDetailItem.id) {
      if (currentDetailItem.type === 'order') {
        updateOrderStatus(currentDetailItem.id, 'done');
      }
      detailModal.classList.remove('show');
      showNotification('Payment processed successfully!', 'success');
    }
  });

  // Initialize last updated time
  updateLastUpdated();

  // Simulate real-time updates
  setInterval(() => {
    updateLastUpdated();
  }, 30000);

  // Close dropdowns when clicking outside
  document.addEventListener('click', () => {
    closeAllDropdowns();
  });

  // Prevent clicks inside dropdowns from closing them
  document.addEventListener('click', (e) => {
    if (e.target.closest('.dropdown-menu')) {
      e.stopPropagation();
    }
  });

  // Add keyboard navigation for dropdown
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllDropdowns();
    }
    
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      const activeDropdown = document.querySelector('.dropdown-menu.show');
      if (activeDropdown) {
        e.preventDefault();
        const items = activeDropdown.querySelectorAll('.dropdown-item');
        const currentIndex = Array.from(items).findIndex(item => 
          item === document.activeElement
        );
        
        let nextIndex = 0;
        if (e.key === 'ArrowDown') {
          nextIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
        } else {
          nextIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
        }
        
        items[nextIndex].focus();
      }
    }
  });

  // Add animation to stat cards on load
  setTimeout(() => {
    document.querySelectorAll('.stat-value').forEach(el => {
      el.style.transform = 'scale(1.1)';
      setTimeout(() => {
        el.style.transform = 'scale(1)';
      }, 300);
    });
  }, 500);
}

// Update navigation active state
function updateNavActive() {
  const currentPage = window.location.pathname.split('/').pop();
  document.querySelectorAll('.nav-tab').forEach(tab => {
    tab.classList.remove('active');
    if (tab.getAttribute('href') === currentPage) {
      tab.classList.add('active');
    }
  });
}

// Close all dropdowns
function closeAllDropdowns() {
  document.querySelectorAll('.dropdown-menu').forEach(menu => {
    menu.classList.remove('show');
  });
}

// Toggle bulk dropdown menu
function toggleBulkDropdown(button, event) {
  if (event) event.stopPropagation();
  
  const dropdown = button.nextElementSibling;
  const isOpen = dropdown.classList.contains('show');
  
  // Close all dropdowns first
  closeAllDropdowns();
  
  if (!isOpen) {
    dropdown.classList.add('show');
  }
}

// ==================== CHECKBOX & BULK ACTION FUNCTIONS ====================

// Toggle select all checkboxes for orders
function toggleSelectAll(checkbox) {
  const isChecked = checkbox.checked;
  const currentRows = document.querySelectorAll('#ordersBody tr[data-order-id]');
  
  selectedOrders.clear();
  
  currentRows.forEach(row => {
    const rowCheckbox = row.querySelector('.select-checkbox');
    const orderId = row.getAttribute('data-order-id');
    
    if (rowCheckbox && orderId) {
      rowCheckbox.checked = isChecked;
      if (isChecked) {
        selectedOrders.add(orderId);
      }
    }
  });
  
  updateSelectedCount();
}

// Toggle select all checkboxes for vendors
function toggleSelectAllVendors(checkbox) {
  const isChecked = checkbox.checked;
  const currentRows = document.querySelectorAll('#vendorBody tr[data-vendor-name]');
  
  selectedVendors.clear();
  
  currentRows.forEach(row => {
    const rowCheckbox = row.querySelector('.select-checkbox');
    const vendorName = row.getAttribute('data-vendor-name');
    
    if (rowCheckbox && vendorName) {
      rowCheckbox.checked = isChecked;
      if (isChecked) {
        selectedVendors.add(vendorName);
      }
    }
  });
  
  updateSelectedCount();
}

// Toggle individual checkbox selection
function toggleSelection(element, id) {
  if (currentView === 'orders') {
    if (element.checked) {
      selectedOrders.add(id);
    } else {
      selectedOrders.delete(id);
      selectAllCheckbox.checked = false;
    }
  } else {
    if (element.checked) {
      selectedVendors.add(id);
    } else {
      selectedVendors.delete(id);
      selectAllVendorCheckbox.checked = false;
    }
  }
  
  updateSelectedCount();
}

// Update selected count display
function updateSelectedCount() {
  let count = 0;
  if (currentView === 'orders') {
    count = selectedOrders.size;
  } else {
    count = selectedVendors.size;
  }
  
  selectedCount.textContent = `${count} ${count === 1 ? 'item' : 'items'} selected`;
  
  // Show/hide bulk actions bar with animation
  if (count > 0) {
    if (!bulkActionsBar.classList.contains('show')) {
      bulkActionsBar.classList.add('show');
    }
  } else {
    bulkActionsBar.classList.remove('show');
  }
  
  // Update select all checkbox state
  const totalRows = currentView === 'orders' 
    ? document.querySelectorAll('#ordersBody tr[data-order-id]').length
    : document.querySelectorAll('#vendorBody tr[data-vendor-name]').length;
  
  if (currentView === 'orders') {
    selectAllCheckbox.checked = count > 0 && count === totalRows;
  } else {
    selectAllVendorCheckbox.checked = count > 0 && count === totalRows;
  }
}

// Clear all selections
function clearSelection() {
  if (currentView === 'orders') {
    selectedOrders.clear();
    document.querySelectorAll('#ordersBody .select-checkbox').forEach(cb => {
      cb.checked = false;
    });
    selectAllCheckbox.checked = false;
  } else {
    selectedVendors.clear();
    document.querySelectorAll('#vendorBody .select-checkbox').forEach(cb => {
      cb.checked = false;
    });
    selectAllVendorCheckbox.checked = false;
  }
  updateSelectedCount();
}

// Bulk action function
function bulkAction(action) {
  if (currentView === 'orders') {
    if (selectedOrders.size === 0) {
      showNotification('Please select at least one order', 'error');
      return;
    }
    
    // Process each selected order
    selectedOrders.forEach(orderId => {
      updateOrderStatus(orderId, action);
    });
    
    showNotification(`Updated ${selectedOrders.size} order(s) to ${action}`, 'success');
    clearSelection();
  } else {
    if (selectedVendors.size === 0) {
      showNotification('Please select at least one vendor', 'error');
      return;
    }
    
    showNotification(`Bulk action would process ${selectedVendors.size} vendor(s)`, 'info');
  }
}

// Sync with order data
function bulkSyncOrders() {
  if (currentView === 'orders') {
    if (selectedOrders.size === 0) {
      showNotification('Please select orders first', 'error');
      return;
    }

    selectedOrders.forEach(orderId => {
      syncWithOrder(orderId);
    });

    clearSelection();
    showNotification('Orders synced successfully', 'success');
  } else {
    showNotification('Bulk sync is only available for orders view', 'info');
  }
}

// Sync with order data
function syncWithOrder(orderId) {
  const order = ordersData.find(o => o.order === orderId);
  if (order && order.originalOrder) {
    // Update payout data from order data
    const orderData = order.originalOrder;
    order.status = orderData.payoutStatus === 'paid' ? 'done' : 
                  orderData.payoutStatus === 'cancelled' ? 'cancel' : 'pending';
    order.sales = `£${orderData.total.toFixed(2)}`;
    order.commission = orderData.commission || `£${(orderData.total * 0.15).toFixed(2)}`;
    order.payout = orderData.payout || `£${(orderData.total * 0.85).toFixed(2)}`;
    order.payment = getPaymentMethod(order.vendor);
  }
  
  // Re-render table
  if (currentView === 'orders') {
    renderOrders();
  }
}

// ==================== TABLE RENDERING FUNCTIONS ====================

// Render orders table
function renderOrders() {
  const filteredData = filterOrdersByCategory();
  const sortedData = sortData(filteredData, currentSort);
  const paginatedData = paginateData(sortedData, currentPage, rowsPerPage);

  // Calculate total pages
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  updatePagination(totalPages);

  // Clear table body
  ordersBody.innerHTML = '';

  if (paginatedData.length === 0) {
    const emptyRow = document.createElement('tr');
    emptyRow.innerHTML = `
      <td colspan="11" style="text-align: center; padding: 40px; color: #95a5a6;">
        <i class="fas fa-search" style="font-size: 48px; margin-bottom: 15px; display: block;"></i>
        <h3 style="margin-bottom: 10px;">No orders found</h3>
        <p>Try adjusting your search or filter criteria</p>
      </td>
    `;
    ordersBody.appendChild(emptyRow);
    return;
  }

  // Render each order row
  paginatedData.forEach(order => {
    const row = document.createElement('tr');
    row.setAttribute('data-order-id', order.order);

    // Determine status class and text
    let statusClass = '';
    let statusText = '';
    switch (order.status) {
      case 'done':
        statusClass = 'status-paid';
        statusText = 'Done';
        break;
      case 'pending':
        statusClass = 'status-unpaid';
        statusText = 'Pending';
        break;
      case 'cancel':
        statusClass = 'status-payable';
        statusText = 'Cancel';
        break;
      default:
        statusClass = 'status-new';
        statusText = 'New';
    }

    // Check if this order is selected
    const isSelected = selectedOrders.has(order.order);

    row.innerHTML = `
      <td class="checkbox-cell">
        <input type="checkbox" class="select-checkbox" 
               ${isSelected ? 'checked' : ''}
               onchange="toggleSelection(this, '${order.order.replace(/'/g, "\\'")}')">
      </td>
      <td>${order.date}</td>
      <td><strong>${order.order}</strong></td>
      <td><strong>${order.vendor}</strong></td>
      <td>${order.products}</td>
      <td><span class="status-badge ${statusClass}"><i class="fas fa-circle" style="font-size: 8px;"></i> ${statusText}</span></td>
      <td><strong>${order.sales}</strong></td>
      <td><strong style="color: #f39c12;">${order.commission}</strong></td>
      <td><strong style="color: #27ae60;">${order.payout}</strong></td>
      <td><div class="payment-method"><i class="fas fa-credit-card"></i> ${order.payment}</div></td>
      <td>
        <div class="actions">
          <button class="btn btn-payable" onclick="updateOrderStatus('${order.order.replace(/'/g, "\\'")}', 'done')" ${order.status === 'done' ? 'disabled style="opacity:0.5; cursor:not-allowed;"' : ''}>
            <i class="fas fa-check"></i> Mark as Done
          </button>
          <button class="btn btn-detail" onclick="openOrderDetails('${order.order.replace(/'/g, "\\'")}')">
            <i class="fas fa-eye"></i> Details
          </button>
        </div>
      </td>
    `;
    ordersBody.appendChild(row);
  });

  // Show/hide tables based on view
  if (currentView === 'orders') {
    ordersTable.style.display = 'table';
    vendorTable.style.display = 'none';
  }
}

// Render vendors table
function renderVendors() {
  const filteredData = filterVendorsByCategory();
  const sortedData = sortData(filteredData, currentSort);
  const paginatedData = paginateData(sortedData, currentPage, rowsPerPage);

  // Calculate total pages
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  updatePagination(totalPages);

  // Clear table body
  vendorBody.innerHTML = '';

  if (paginatedData.length === 0) {
    const emptyRow = document.createElement('tr');
    emptyRow.innerHTML = `
      <td colspan="8" style="text-align: center; padding: 40px; color: #95a5a6;">
        <i class="fas fa-users" style="font-size: 48px; margin-bottom: 15px; display: block;"></i>
        <h3 style="margin-bottom: 10px;">No vendors found</h3>
        <p>Try adjusting your search or filter criteria</p>
      </td>
    `;
    vendorBody.appendChild(emptyRow);
    return;
  }

  // Render each vendor row
  paginatedData.forEach(vendor => {
    const row = document.createElement('tr');
    row.setAttribute('data-vendor-name', vendor.vendor);

    // Calculate average order value
    const avgOrderValue = parseFloat(vendor.sales.replace('£', '')) / vendor.orders;

    // Check if this vendor is selected
    const isSelected = selectedVendors.has(vendor.vendor);

    row.innerHTML = `
      <td class="checkbox-cell">
        <input type="checkbox" class="select-checkbox" 
               ${isSelected ? 'checked' : ''}
               onchange="toggleSelection(this, '${vendor.vendor.replace(/'/g, "\\'")}')">
      </td>
      <td><strong>${vendor.vendor}</strong></td>
      <td><strong>${vendor.orders}</strong> <span style="color: #95a5a6; font-size: 12px;">(Avg: £${avgOrderValue.toFixed(2)})</span></td>
      <td><strong>${vendor.sales}</strong></td>
      <td><strong style="color: #f39c12;">${vendor.commission}</strong></td>
      <td><strong style="color: #27ae60;">${vendor.payout}</strong></td>
      <td><div class="payment-method"><i class="fas fa-credit-card"></i> ${vendor.payment}</div></td>
      <td>
        <div class="actions">
          <button class="btn btn-payable" onclick="processVendorPayment('${vendor.vendor.replace(/'/g, "\\'")}')">
            <i class="fas fa-money-check-alt"></i> Process Payout
          </button>
          <button class="btn btn-detail" onclick="showVendorDetailModal('${vendor.vendor.replace(/'/g, "\\'")}')">
            <i class="fas fa-eye"></i> Details
          </button>
        </div>
      </td>
    `;
    vendorBody.appendChild(row);
  });

  // Show/hide tables based on view
  if (currentView === 'vendors') {
    ordersTable.style.display = 'none';
    vendorTable.style.display = 'table';
  }
}

// Filter orders by current filter
function filterOrdersByCategory() {
  let filtered = ordersData;

  // Apply search filter
  const searchTerm = searchInput.value.toLowerCase();
  if (searchTerm) {
    filtered = filtered.filter(order => 
      order.order.toLowerCase().includes(searchTerm) ||
      order.vendor.toLowerCase().includes(searchTerm) ||
      order.payment.toLowerCase().includes(searchTerm) ||
      order.status.toLowerCase().includes(searchTerm)
    );
  }

  // Apply status filter
  if (currentFilter !== 'all') {
    filtered = filtered.filter(order => order.status === currentFilter);
  }

  return filtered;
}

// Filter vendors by current filter
function filterVendorsByCategory() {
  let filtered = vendorsData;

  // Apply search filter
  const searchTerm = searchInput.value.toLowerCase();
  if (searchTerm) {
    filtered = filtered.filter(vendor => 
      vendor.vendor.toLowerCase().includes(searchTerm) ||
      vendor.payment.toLowerCase().includes(searchTerm)
    );
  }

  // Apply sales filter if needed
  if (currentFilter !== 'all') {
    // You can implement vendor-specific filters here
  }

  return filtered;
}

// Sort data
function sortData(data, sort) {
  const sorted = [...data];

  sorted.sort((a, b) => {
    let aValue = a[sort.column];
    let bValue = b[sort.column];

    // Extract numeric values for sorting
    if (sort.column === 'sales' || sort.column === 'commission' || sort.column === 'payout') {
      aValue = parseFloat(aValue.replace('£', '')) || 0;
      bValue = parseFloat(bValue.replace('£', '')) || 0;
    } else if (sort.column === 'date') {
      aValue = new Date(aValue);
      bValue = new Date(bValue);
    } else if (sort.column === 'orders') {
      aValue = a.orders;
      bValue = b.orders;
    }

    if (sort.direction === 'asc') {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });

  return sorted;
}

// Paginate data
function paginateData(data, page, perPage) {
  const start = (page - 1) * perPage;
  const end = start + perPage;
  return data.slice(start, end);
}

// Update pagination controls
function updatePagination(totalPages) {
  currentPageSpan.textContent = currentPage;
  totalPagesSpan.textContent = totalPages;

  prevPageBtn.disabled = currentPage <= 1;
  nextPageBtn.disabled = currentPage >= totalPages;
}

// Switch between orders and vendors view
function switchView(view) {
  if (view === currentView) return;

  currentView = view;
  currentPage = 1;

  // Update toggle buttons
  toggleButtons.forEach(btn => {
    if (btn.dataset.view === view) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Update filter buttons based on view
  if (view === 'vendors') {
    // Hide status filters for vendors view
    filterButtons.forEach(btn => {
      if (btn.dataset.filter) {
        btn.style.display = btn.dataset.filter === 'all' ? 'inline-block' : 'none';
      }
    });
  } else {
    // Show all filters for orders view
    filterButtons.forEach(btn => {
      if (btn.dataset.filter) {
        btn.style.display = 'inline-block';
      }
    });
  }

  // Clear selections when switching views
  clearSelection();

  // Render appropriate table
  if (view === 'orders') {
    renderOrders();
  } else {
    renderVendors();
  }

  showNotification(`Switched to ${view} view`, 'info');
}

// Switch chart period
function switchChartPeriod(period) {
  chartPeriod = period;

  // Update active button
  document.querySelectorAll('.time-btn').forEach(btn => {
    if (btn.dataset.period === period) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Update distribution percentages
  updateDistributionPercentages();
}

// Calculate and update stats
function calculateStats() {
  const doneTotal = ordersData
    .filter(order => order.status === 'done')
    .reduce((sum, order) => sum + parseFloat(order.sales.replace('£', '')), 0);

  const pendingTotal = ordersData
    .filter(order => order.status === 'pending')
    .reduce((sum, order) => sum + parseFloat(order.sales.replace('£', '')), 0);

  const cancelTotal = ordersData
    .filter(order => order.status === 'cancel')
    .reduce((sum, order) => sum + parseFloat(order.sales.replace('£', '')), 0);

  const totalSales = doneTotal + pendingTotal + cancelTotal;

  // Update stat values
  doneOrdersEl.textContent = `£${doneTotal.toFixed(2)}`;
  pendingOrdersEl.textContent = `£${pendingTotal.toFixed(2)}`;
  cancelOrdersEl.textContent = `£${cancelTotal.toFixed(2)}`;

  // Calculate percentages (simplified for demo)
  const donePercent = totalSales > 0 ? (doneTotal / totalSales * 100).toFixed(1) : '0';
  const pendingPercent = totalSales > 0 ? (pendingTotal / totalSales * 100).toFixed(1) : '0';
  const cancelPercent = totalSales > 0 ? (cancelTotal / totalSales * 100).toFixed(1) : '0';

  doneChangeEl.textContent = `+${donePercent}%`;
  pendingChangeEl.textContent = `-${pendingPercent}%`;
  cancelChangeEl.textContent = `-${cancelPercent}%`;

  // Update progress bars
  doneProgressEl.style.width = `${donePercent}%`;
  pendingProgressEl.style.width = `${pendingPercent}%`;
  cancelProgressEl.style.width = `${cancelPercent}%`;

  // Update distribution percentages
  updateDistributionPercentages();
}

// Update distribution percentages
function updateDistributionPercentages() {
  const data = chartData[chartPeriod];
  const total = data.done.reduce((a, b) => a + b, 0) + 
                data.pending.reduce((a, b) => a + b, 0) + 
                data.cancel.reduce((a, b) => a + b, 0);

  const donePercent = ((data.done.reduce((a, b) => a + b, 0) / total) * 100).toFixed(1);
  const pendingPercent = ((data.pending.reduce((a, b) => a + b, 0) / total) * 100).toFixed(1);
  const cancelPercent = ((data.cancel.reduce((a, b) => a + b, 0) / total) * 100).toFixed(1);

  distributionPercentages.innerHTML = `
    <div class="percentage-item">
      <div class="percentage-icon" style="background: linear-gradient(135deg, #3498db, #2980b9);">
        <i class="fas fa-check-circle"></i>
      </div>
      <div class="percentage-label">Done Orders</div>
      <div class="percentage-value">${donePercent}%</div>
      <div class="percentage-amount">£${(data.done.reduce((a, b) => a + b, 0)).toLocaleString()}</div>
      <div class="percentage-trend positive">
        <i class="fas fa-arrow-up"></i> 12.5%
      </div>
    </div>
    <div class="percentage-item">
      <div class="percentage-icon" style="background: linear-gradient(135deg, #e74c3c, #c0392b);">
        <i class="fas fa-clock"></i>
      </div>
      <div class="percentage-label">Pending Orders</div>
      <div class="percentage-value">${pendingPercent}%</div>
      <div class="percentage-amount">£${(data.pending.reduce((a, b) => a + b, 0)).toLocaleString()}</div>
      <div class="percentage-trend negative">
        <i class="fas fa-arrow-down"></i> 3.2%
      </div>
    </div>
    <div class="percentage-item">
      <div class="percentage-icon" style="background: linear-gradient(135deg, #2ecc71, #27ae60);">
        <i class="fas fa-times-circle"></i>
      </div>
      <div class="percentage-label">Cancel Orders</div>
      <div class="percentage-value">${cancelPercent}%</div>
      <div class="percentage-amount">£${(data.cancel.reduce((a, b) => a + b, 0)).toLocaleString()}</div>
      <div class="percentage-trend negative">
        <i class="fas fa-arrow-down"></i> 8.7%
      </div>
    </div>
  `;
}

// Update order status
function updateOrderStatus(orderId, newStatus) {
  const order = ordersData.find(o => o.order === orderId);
  if (order) {
    const oldStatus = order.status;
    order.status = newStatus;

    // Update payment based on new status
    if (newStatus === 'cancel') {
      order.commission = '£0.00';
      order.payout = '£0.00';
      order.payment = 'None';
    } else if (newStatus === 'done') {
      const sales = parseFloat(order.sales.replace('£', ''));
      order.commission = `£${(sales * 0.15).toFixed(2)}`;
      order.payout = `£${(sales * 0.85).toFixed(2)}`;
      order.payment = getPaymentMethod(order.vendor);
    }

    // Re-render table and update stats
    if (currentView === 'orders') {
      renderOrders();
    }
    calculateStats();

    // Show notification
    showNotification(`Order ${orderId} updated from ${oldStatus} to ${newStatus}`, 'success');

    // Remove from selection if it was selected
    if (selectedOrders.has(orderId)) {
      selectedOrders.delete(orderId);
      updateSelectedCount();
    }
  }
}

// Show detail modal
function showDetailModal(id, type) {
  sessionStorage.setItem('currentDetailItem', JSON.stringify({ id, type }));
  
  if (type === 'order') {
    const order = ordersData.find(o => o.order === id);
    if (order) {
      modalTitle.textContent = `Order Details: ${id}`;
      
      // Populate vendor tab
      vendorTab.innerHTML = `
        <div class="modal-detail-item" style="animation-delay: 0.1s">
          <span class="modal-label">Vendor Name</span>
          <span class="modal-value">${order.vendor}</span>
        </div>
        <div class="modal-detail-item" style="animation-delay: 0.2s">
          <span class="modal-label">Order Date</span>
          <span class="modal-value">${order.date}</span>
        </div>
        <div class="modal-detail-item" style="animation-delay: 0.3s">
          <span class="modal-label">Payment Method</span>
          <span class="modal-value">${order.payment}</span>
        </div>
        <div class="modal-detail-item" style="animation-delay: 0.4s">
          <span class="modal-label">Contact Email</span>
          <span class="modal-value">vendor@${order.vendor.toLowerCase().replace(/\s+/g, '')}.com</span>
        </div>
      `;
      
      // Populate product tab
      productTab.innerHTML = `
        <div class="modal-detail-item" style="animation-delay: 0.1s">
          <span class="modal-label">Order ID</span>
          <span class="modal-value">${id}</span>
        </div>
        <div class="modal-detail-item" style="animation-delay: 0.2s">
          <span class="modal-label">Product Details</span>
          <span class="modal-value">${order.products}</span>
        </div>
        <div class="modal-detail-item" style="animation-delay: 0.3s">
          <span class="modal-label">Order Status</span>
          <span class="modal-value">${order.status.charAt(0).toUpperCase() + order.status.slice(1)}</span>
        </div>
      `;
      
      // Populate payout tab
      const salesValue = parseFloat(order.sales.replace('£', ''));
      const commissionValue = parseFloat(order.commission.replace('£', ''));
      const payoutValue = parseFloat(order.payout.replace('£', ''));
      
      payoutTab.innerHTML = `
        <div class="modal-detail-item" style="animation-delay: 0.1s">
          <span class="modal-label">Total Sales</span>
          <span class="modal-value">${order.sales}</span>
        </div>
        <div class="modal-detail-item" style="animation-delay: 0.2s">
          <span class="modal-label">Commission (15%)</span>
          <span class="modal-value">${order.commission}</span>
        </div>
        <div class="modal-detail-item" style="animation-delay: 0.3s">
          <span class="modal-label">Vendor Payout</span>
          <span class="modal-value positive">${order.payout}</span>
        </div>
        <div class="modal-detail-item" style="animation-delay: 0.4s">
          <span class="modal-label">Profit Margin</span>
          <span class="modal-value positive">${((commissionValue / salesValue) * 100).toFixed(1)}%</span>
        </div>
      `;
    }
  }
  
  detailModal.classList.add('show');
}

// Show vendor detail modal
function showVendorDetailModal(vendorName) {
  const vendor = vendorsData.find(v => v.vendor === vendorName);
  if (vendor) {
    sessionStorage.setItem('currentDetailItem', JSON.stringify({ id: vendorName, type: 'vendor' }));
    modalTitle.textContent = `Vendor Details: ${vendorName}`;
    
    // Populate vendor tab
    vendorTab.innerHTML = `
      <div class="modal-detail-item" style="animation-delay: 0.1s">
        <span class="modal-label">Vendor Name</span>
        <span class="modal-value">${vendor.vendor}</span>
      </div>
      <div class="modal-detail-item" style="animation-delay: 0.2s">
        <span class="modal-label">Total Orders</span>
        <span class="modal-value">${vendor.orders}</span>
      </div>
      <div class="modal-detail-item" style="animation-delay: 0.3s">
        <span class="modal-label">Payment Method</span>
        <span class="modal-value">${vendor.payment}</span>
      </div>
      <div class="modal-detail-item" style="animation-delay: 0.4s">
        <span class="modal-label">Contact Email</span>
        <span class="modal-value">vendor@${vendor.vendor.toLowerCase().replace(/\s+/g, '')}.com</span>
      </div>
    `;
    
    // Populate product tab with vendor's products summary
    productTab.innerHTML = `
      <div class="modal-detail-item" style="animation-delay: 0.1s">
        <span class="modal-label">Active Products</span>
        <span class="modal-value">${Math.floor(vendor.orders * 1.5)}</span>
      </div>
      <div class="modal-detail-item" style="animation-delay: 0.2s">
        <span class="modal-label">Average Rating</span>
        <span class="modal-value">4.7/5.0</span>
      </div>
      <div class="modal-detail-item" style="animation-delay: 0.3s">
        <span class="modal-label">Vendor Since</span>
        <span class="modal-value">2020</span>
      </div>
    `;
    
    // Populate payout tab
    payoutTab.innerHTML = `
      <div class="modal-detail-item" style="animation-delay: 0.1s">
        <span class="modal-label">Total Sales</span>
        <span class="modal-value">${vendor.sales}</span>
      </div>
      <div class="modal-detail-item" style="animation-delay: 0.2s">
        <span class="modal-label">Total Commission</span>
        <span class="modal-value">${vendor.commission}</span>
      </div>
      <div class="modal-detail-item" style="animation-delay: 0.3s">
        <span class="modal-label">Total Payout</span>
        <span class="modal-value positive">${vendor.payout}</span>
      </div>
      <div class="modal-detail-item" style="animation-delay: 0.4s">
        <span class="modal-label">Average Commission Rate</span>
        <span class="modal-value positive">15%</span>
      </div>
    `;
    
    detailModal.classList.add('show');
  }
}

// Process vendor payment
function processVendorPayment(vendorName) {
  const vendorOrders = ordersData.filter(order => order.vendor === vendorName && order.status === 'pending');
  
  if (vendorOrders.length === 0) {
    showNotification(`No pending orders found for ${vendorName}`, 'error');
    return;
  }
  
  // Mark all pending orders as done for this vendor
  vendorOrders.forEach(order => {
    updateOrderStatus(order.order, 'done');
  });
  
  showNotification(`Processed ${vendorOrders.length} pending orders for ${vendorName}`, 'success');
}

// Refresh data
function refreshData() {
  // Show loading state on refresh button
  const originalHTML = refreshDataBtn.innerHTML;
  refreshDataBtn.innerHTML = '<div class="loading"></div>';
  refreshDataBtn.disabled = true;

  // Reload data from storage
  ordersData = loadOrdersFromStorage();
  vendorsData = getVendorsData();

  // Simulate API call delay
  setTimeout(() => {
    // Update display
    if (currentView === 'orders') {
      renderOrders();
    } else {
      renderVendors();
    }
    
    calculateStats();
    updateLastUpdated();
    
    // Restore button
    refreshDataBtn.innerHTML = originalHTML;
    refreshDataBtn.disabled = false;
    
    showNotification('Data refreshed successfully', 'success');
  }, 800);
}

// Update last updated time
function updateLastUpdated() {
  const now = new Date();
  const timeString = now.toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: true 
  });
  const dateString = now.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  });
  
  lastUpdatedEl.textContent = `${dateString} ${timeString}`;
  lastUpdatedText.textContent = 'Data updates in real-time';
}

// Show notification
function showNotification(message, type = 'success') {
  notificationText.textContent = message;
  notification.className = 'notification';
  notification.classList.add(type);
  
  // Show notification
  setTimeout(() => {
    notification.classList.add('show');
  }, 10);
  
  // Hide notification after 5 seconds
  setTimeout(() => {
    notification.classList.remove('show');
  }, 5000);
}

// Debounce function for search
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function openOrderDetails(orderId) {
  // Find selected order
  const order = ordersData.find(o => o.order === orderId);
  if (!order) return;

  // Normalize order number (remove #)
  const cleanOrderId = orderId.replace('#', '');

  // Save full order data for detail page
  localStorage.setItem('currentOrder', JSON.stringify({
    id: `ORD-${cleanOrderId}`,
    customer: 'Customer Name', // can be dynamic later
    date: order.date,
    vendor: order.vendor,
    status: order.status,
    items: order.products.replace(' Products,', ','),
    total: parseFloat(order.sales.replace('£', '')),
    payoutStatus: order.status,
    commission: order.commission,
    payout: order.payout
  }));

  // Redirect to order-view page
  window.location.href = `order-view.html?order=${cleanOrderId}`;
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', init);