// orders.js - Order Management System

// DOM Elements
const ordersTableBody = document.getElementById('ordersTableBody');
const totalOrdersEl = document.getElementById('totalOrders');
const pendingOrdersEl = document.getElementById('pendingOrders');
const processingOrdersEl = document.getElementById('processingOrders');
const deliveredOrdersEl = document.getElementById('deliveredOrders');
const paginationInfo = document.getElementById('paginationInfo');
const pageNumbers = document.getElementById('pageNumbers');
const prevPageBtn = document.getElementById('prevPage');
const nextPageBtn = document.getElementById('nextPage');
const loadingOverlay = document.getElementById('loadingOverlay');

// Filter Elements
const statusFilter = document.getElementById('statusFilter');
const vendorFilter = document.getElementById('vendorFilter');
const dateRangeFilter = document.getElementById('dateRangeFilter');
const shippingFilter = document.getElementById('shippingFilter');
const searchInput = document.getElementById('searchInput');
const clearFiltersBtn = document.getElementById('clearFilters');
const refreshOrdersBtn = document.getElementById('refreshOrdersBtn');
const exportOrdersBtn = document.getElementById('exportOrdersBtn');
const createOrderBtn = document.getElementById('createOrderBtn');

// Global Variables
let allOrders = [];
let filteredOrders = [];
let currentPage = 1;
const ordersPerPage = 10;
let currentFilters = {
    status: 'all',
    vendor: 'all',
    dateRange: 'all',
    shipping: 'all',
    search: ''
};

// Sample data (this would typically come from an API)
const sampleOrdersData = {
    "orders": [
        {
            "id": "ORD-1001",
            "customer": {
                "name": "Rahul Sharma",
                "email": "rahul.sharma@example.com",
                "phone": "+91 9876543210",
                "id": "CUST-001"
            },
            "date": "2023-11-12T10:30:00",
            "vendor": "TechGadgets Inc.",
            "status": "pending",
            "shipping": {
                "status": "pending",
                "method": "Standard Shipping",
                "tracking": null
            },
            "payment": {
                "method": "Credit Card",
                "status": "paid",
                "transactionId": "TXN-789012"
            },
            "items": 2,
            "total": 2076,
            "address": "123 Main Street, Mumbai, Maharashtra 400001"
        },
        {
            "id": "ORD-1002",
            "customer": {
                "name": "Priya Patel",
                "email": "priya.patel@example.com",
                "phone": "+91 9876543211",
                "id": "CUST-002"
            },
            "date": "2023-11-11T14:45:00",
            "vendor": "HomeStyle Living",
            "status": "processing",
            "shipping": {
                "status": "processing",
                "method": "Express Shipping",
                "tracking": "TRK-789456"
            },
            "payment": {
                "method": "PayPal",
                "status": "paid",
                "transactionId": "TXN-789013"
            },
            "items": 3,
            "total": 1542,
            "address": "456 Park Avenue, Delhi, Delhi 110001"
        },
        {
            "id": "ORD-1003",
            "customer": {
                "name": "Amit Kumar",
                "email": "amit.kumar@example.com",
                "phone": "+91 9876543212",
                "id": "CUST-003"
            },
            "date": "2023-11-10T09:15:00",
            "vendor": "FashionHub",
            "status": "shipped",
            "shipping": {
                "status": "shipped",
                "method": "Standard Shipping",
                "tracking": "TRK-789457"
            },
            "payment": {
                "method": "Credit Card",
                "status": "paid",
                "transactionId": "TXN-789014"
            },
            "items": 1,
            "total": 899,
            "address": "789 MG Road, Bangalore, Karnataka 560001"
        },
        {
            "id": "ORD-1004",
            "customer": {
                "name": "Sneha Reddy",
                "email": "sneha.reddy@example.com",
                "phone": "+91 9876543213",
                "id": "CUST-004"
            },
            "date": "2023-11-09T16:20:00",
            "vendor": "ElectroWorld",
            "status": "delivered",
            "shipping": {
                "status": "delivered",
                "method": "Express Shipping",
                "tracking": "TRK-789458"
            },
            "payment": {
                "method": "UPI",
                "status": "paid",
                "transactionId": "TXN-789015"
            },
            "items": 4,
            "total": 3249,
            "address": "321 Church Street, Chennai, Tamil Nadu 600001"
        },
        {
            "id": "ORD-1005",
            "customer": {
                "name": "Rajesh Mehta",
                "email": "rajesh.mehta@example.com",
                "phone": "+91 9876543214",
                "id": "CUST-005"
            },
            "date": "2023-11-08T11:45:00",
            "vendor": "BookNook",
            "status": "cancelled",
            "shipping": {
                "status": "cancelled",
                "method": "Standard Shipping",
                "tracking": null
            },
            "payment": {
                "method": "Credit Card",
                "status": "refunded",
                "transactionId": "TXN-789016"
            },
            "items": 2,
            "total": 549,
            "address": "654 Gandhi Road, Kolkata, West Bengal 700001"
        },
        {
            "id": "ORD-1006",
            "customer": {
                "name": "Anjali Singh",
                "email": "anjali.singh@example.com",
                "phone": "+91 9876543215",
                "id": "CUST-006"
            },
            "date": "2023-11-07T13:30:00",
            "vendor": "TechGadgets Inc.",
            "status": "processing",
            "shipping": {
                "status": "processing",
                "method": "Standard Shipping",
                "tracking": "TRK-789459"
            },
            "payment": {
                "method": "PayPal",
                "status": "paid",
                "transactionId": "TXN-789017"
            },
            "items": 1,
            "total": 1299,
            "address": "987 Nehru Place, Hyderabad, Telangana 500001"
        },
        {
            "id": "ORD-1007",
            "customer": {
                "name": "Vikram Joshi",
                "email": "vikram.joshi@example.com",
                "phone": "+91 9876543216",
                "id": "CUST-007"
            },
            "date": "2023-11-06T15:10:00",
            "vendor": "HomeStyle Living",
            "status": "delivered",
            "shipping": {
                "status": "delivered",
                "method": "Standard Shipping",
                "tracking": "TRK-789460"
            },
            "payment": {
                "method": "Credit Card",
                "status": "paid",
                "transactionId": "TXN-789018"
            },
            "items": 5,
            "total": 4199,
            "address": "741 Ashok Nagar, Pune, Maharashtra 411001"
        },
        {
            "id": "ORD-1008",
            "customer": {
                "name": "Meera Nair",
                "email": "meera.nair@example.com",
                "phone": "+91 9876543217",
                "id": "CUST-008"
            },
            "date": "2023-11-05T10:00:00",
            "vendor": "FashionHub",
            "status": "refunded",
            "shipping": {
                "status": "delivered",
                "method": "Express Shipping",
                "tracking": "TRK-789461"
            },
            "payment": {
                "method": "Credit Card",
                "status": "refunded",
                "transactionId": "TXN-789019"
            },
            "items": 3,
            "total": 2697,
            "address": "852 Connaught Place, Delhi, Delhi 110001"
        },
        {
            "id": "ORD-1009",
            "customer": {
                "name": "Arun Verma",
                "email": "arun.verma@example.com",
                "phone": "+91 9876543218",
                "id": "CUST-009"
            },
            "date": "2023-11-04T14:25:00",
            "vendor": "ElectroWorld",
            "status": "pending",
            "shipping": {
                "status": "pending",
                "method": "Standard Shipping",
                "tracking": null
            },
            "payment": {
                "method": "UPI",
                "status": "pending",
                "transactionId": null
            },
            "items": 2,
            "total": 1798,
            "address": "963 Marine Drive, Mumbai, Maharashtra 400002"
        },
        {
            "id": "ORD-1010",
            "customer": {
                "name": "Pooja Gupta",
                "email": "pooja.gupta@example.com",
                "phone": "+91 9876543219",
                "id": "CUST-010"
            },
            "date": "2023-11-03T12:15:00",
            "vendor": "BookNook",
            "status": "shipped",
            "shipping": {
                "status": "shipped",
                "method": "Standard Shipping",
                "tracking": "TRK-789462"
            },
            "payment": {
                "method": "PayPal",
                "status": "paid",
                "transactionId": "TXN-789020"
            },
            "items": 4,
            "total": 1596,
            "address": "147 Brigade Road, Bangalore, Karnataka 560002"
        }
    ]
};

// Initialize the application
function init() {
    showLoading();
    
    // Simulate API call delay
    setTimeout(() => {
        loadOrders();
        setupEventListeners();
        updateStats();
        hideLoading();
    }, 1000);
}

// Load orders from data source
function loadOrders() {
    allOrders = sampleOrdersData.orders;
    applyFilters();
    renderOrdersTable();
    updatePagination();
}

// Setup event listeners
function setupEventListeners() {
    // Filter event listeners
    statusFilter.addEventListener('change', (e) => {
        currentFilters.status = e.target.value;
        applyFilters();
    });

    vendorFilter.addEventListener('change', (e) => {
        currentFilters.vendor = e.target.value;
        applyFilters();
    });

    dateRangeFilter.addEventListener('change', (e) => {
        currentFilters.dateRange = e.target.value;
        applyFilters();
    });

    shippingFilter.addEventListener('change', (e) => {
        currentFilters.shipping = e.target.value;
        applyFilters();
    });

    searchInput.addEventListener('input', debounce((e) => {
        currentFilters.search = e.target.value.toLowerCase();
        applyFilters();
    }, 300));

    clearFiltersBtn.addEventListener('click', clearFilters);
    refreshOrdersBtn.addEventListener('click', refreshOrders);
    
    // Pagination event listeners
    prevPageBtn.addEventListener('click', goToPrevPage);
    nextPageBtn.addEventListener('click', goToNextPage);
    
    // Export button
    exportOrdersBtn.addEventListener('click', exportOrders);
    
    // Create order button
    createOrderBtn.addEventListener('click', createOrder);
}

// Apply all filters
function applyFilters() {
    filteredOrders = allOrders.filter(order => {
        // Status filter
        if (currentFilters.status !== 'all' && order.status !== currentFilters.status) {
            return false;
        }
        
        // Vendor filter
        if (currentFilters.vendor !== 'all' && order.vendor !== currentFilters.vendor) {
            return false;
        }
        
        // Date range filter
        if (currentFilters.dateRange !== 'all') {
            const orderDate = new Date(order.date);
            const now = new Date();
            
            switch(currentFilters.dateRange) {
                case 'today':
                    const today = new Date();
                    today.setHours(0, 0, 0, 0);
                    const orderDay = new Date(orderDate);
                    orderDay.setHours(0, 0, 0, 0);
                    if (orderDay.getTime() !== today.getTime()) return false;
                    break;
                case 'week':
                    const oneWeekAgo = new Date(now - 7 * 24 * 60 * 60 * 1000);
                    if (orderDate < oneWeekAgo) return false;
                    break;
                case 'month':
                    const oneMonthAgo = new Date(now);
                    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
                    if (orderDate < oneMonthAgo) return false;
                    break;
                case 'quarter':
                    const threeMonthsAgo = new Date(now);
                    threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);
                    if (orderDate < threeMonthsAgo) return false;
                    break;
            }
        }
        
        // Shipping filter
        if (currentFilters.shipping !== 'all' && order.shipping.status !== currentFilters.shipping) {
            return false;
        }
        
        // Search filter
        if (currentFilters.search) {
            const searchTerm = currentFilters.search;
            const searchableText = `
                ${order.id}
                ${order.customer.name}
                ${order.customer.email}
                ${order.vendor}
                ${order.address}
            `.toLowerCase();
            
            if (!searchableText.includes(searchTerm)) {
                return false;
            }
        }
        
        return true;
    });
    
    currentPage = 1; // Reset to first page when filters change
    renderOrdersTable();
    updatePagination();
    updateStats();
}

// Clear all filters
function clearFilters() {
    statusFilter.value = 'all';
    vendorFilter.value = 'all';
    dateRangeFilter.value = 'all';
    shippingFilter.value = 'all';
    searchInput.value = '';
    
    currentFilters = {
        status: 'all',
        vendor: 'all',
        dateRange: 'all',
        shipping: 'all',
        search: ''
    };
    
    applyFilters();
}

// Refresh orders
function refreshOrders() {
    showLoading();
    
    // Simulate API call
    setTimeout(() => {
        loadOrders();
        hideLoading();
        showNotification('Orders refreshed successfully!', 'success');
    }, 500);
}

// Export orders
function exportOrders() {
    const ordersToExport = filteredOrders.length > 0 ? filteredOrders : allOrders;
    const csvContent = convertToCSV(ordersToExport);
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    
    link.setAttribute('href', url);
    link.setAttribute('download', `orders_export_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    showNotification('Orders exported successfully!', 'success');
}

// Create new order
function createOrder() {
    // In a real application, this would open a modal or redirect to a create order page
    showNotification('Create order feature coming soon!', 'info');
    
    // For now, simulate creating a new order
    const newOrder = {
        "id": `ORD-${1000 + allOrders.length + 1}`,
        "customer": {
            "name": "New Customer",
            "email": "new.customer@example.com",
            "phone": "+91 9876543200",
            "id": `CUST-${String(allOrders.length + 1).padStart(3, '0')}`
        },
        "date": new Date().toISOString(),
        "vendor": "TechGadgets Inc.",
        "status": "pending",
        "shipping": {
            "status": "pending",
            "method": "Standard Shipping",
            "tracking": null
        },
        "payment": {
            "method": "Credit Card",
            "status": "pending",
            "transactionId": null
        },
        "items": 1,
        "total": 0,
        "address": "New Address"
    };
    
    allOrders.unshift(newOrder);
    applyFilters();
    showNotification('New order created successfully!', 'success');
}

// Filter orders by status (for stat card clicks)
function filterOrdersByStatus(status) {
    statusFilter.value = status;
    currentFilters.status = status;
    applyFilters();
}

// Render orders table
function renderOrdersTable() {
    const startIndex = (currentPage - 1) * ordersPerPage;
    const endIndex = startIndex + ordersPerPage;
    const ordersToDisplay = filteredOrders.slice(startIndex, endIndex);
    
    ordersTableBody.innerHTML = '';
    
    if (ordersToDisplay.length === 0) {
        ordersTableBody.innerHTML = `
            <tr>
                <td colspan="9" class="no-orders">
                    <div class="empty-state">
                        <i class="fas fa-shopping-cart"></i>
                        <h3>No orders found</h3>
                        <p>Try adjusting your filters or search term</p>
                    </div>
                </td>
            </tr>
        `;
        return;
    }
    
    ordersToDisplay.forEach(order => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <div class="order-id">${order.id}</div>
                <small class="text-muted">${order.payment.method}</small>
            </td>
            <td>
                <div class="customer-info">
                    <div class="customer-name">${order.customer.name}</div>
                    <div class="customer-contact">${order.customer.email}</div>
                    <div class="customer-contact">${order.customer.phone}</div>
                </div>
            </td>
            <td>
                <div class="date-info">
                    <div class="order-date">${formatDate(order.date)}</div>
                    <div class="order-time">${formatTime(order.date)}</div>
                </div>
            </td>
            <td>
                <div class="vendor-info">
                    <div class="vendor-name">${order.vendor}</div>
                </div>
            </td>
            <td>
                <span class="status-badge status-${order.status}">
                    ${getStatusLabel(order.status)}
                </span>
            </td>
            <td>
                <span class="shipping-badge shipping-${order.shipping.status}">
                    ${getShippingStatusLabel(order.shipping.status)}
                </span>
                ${order.shipping.tracking ? `<div class="tracking-info">${order.shipping.tracking}</div>` : ''}
            </td>
            <td>
                <div class="items-count">
                    <i class="fas fa-box"></i> ${order.items} items
                </div>
            </td>
            <td>
                <div class="total-amount">
                    ₹${order.total.toLocaleString('en-IN')}
                </div>
            </td>
            <td>
                <div class="action-buttons">
                    <button class="btn-action btn-view" onclick="viewOrder('${order.id}')" title="View Order">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="btn-action btn-edit" onclick="editOrder('${order.id}')" title="Edit Order">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn-action btn-delete" onclick="deleteOrder('${order.id}')" title="Delete Order">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </td>
        `;
        ordersTableBody.appendChild(row);
    });
}

// Update pagination
function updatePagination() {
    const totalPages = Math.ceil(filteredOrders.length / ordersPerPage);
    
    // Update pagination info
    const startOrder = Math.min((currentPage - 1) * ordersPerPage + 1, filteredOrders.length);
    const endOrder = Math.min(currentPage * ordersPerPage, filteredOrders.length);
    paginationInfo.textContent = `Showing ${startOrder}-${endOrder} of ${filteredOrders.length} orders`;
    
    // Update page numbers
    pageNumbers.innerHTML = '';
    const maxPagesToShow = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);
    
    if (endPage - startPage + 1 < maxPagesToShow) {
        startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.className = `page-number ${i === currentPage ? 'active' : ''}`;
        pageBtn.textContent = i;
        pageBtn.addEventListener('click', () => goToPage(i));
        pageNumbers.appendChild(pageBtn);
    }
    
    // Update navigation buttons
    prevPageBtn.disabled = currentPage === 1;
    nextPageBtn.disabled = currentPage === totalPages || totalPages === 0;
}

// Go to specific page
function goToPage(page) {
    currentPage = page;
    renderOrdersTable();
    updatePagination();
}

// Go to previous page
function goToPrevPage() {
    if (currentPage > 1) {
        currentPage--;
        renderOrdersTable();
        updatePagination();
    }
}

// Go to next page
function goToNextPage() {
    const totalPages = Math.ceil(filteredOrders.length / ordersPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        renderOrdersTable();
        updatePagination();
    }
}

// Update stats
function updateStats() {
    totalOrdersEl.textContent = allOrders.length;
    
    const pendingCount = allOrders.filter(order => order.status === 'pending').length;
    const processingCount = allOrders.filter(order => order.status === 'processing').length;
    const deliveredCount = allOrders.filter(order => order.status === 'delivered').length;
    
    pendingOrdersEl.textContent = pendingCount;
    processingOrdersEl.textContent = processingCount;
    deliveredOrdersEl.textContent = deliveredCount;
}

// View order details
function viewOrder(orderId) {
    const order = allOrders.find(o => o.id === orderId);
    if (order) {
        alert(`Viewing Order: ${orderId}\nCustomer: ${order.customer.name}\nTotal: ₹${order.total}`);
        // In a real app, you would open a modal or navigate to order details page
    }
}

// Edit order
function editOrder(orderId) {
    const order = allOrders.find(o => o.id === orderId);
    if (order) {
        showNotification(`Editing order: ${orderId}`, 'info');
        // In a real app, you would open an edit modal
    }
}

// Delete order
function deleteOrder(orderId) {
    if (confirm(`Are you sure you want to delete order ${orderId}?`)) {
        const index = allOrders.findIndex(o => o.id === orderId);
        if (index !== -1) {
            allOrders.splice(index, 1);
            applyFilters();
            showNotification(`Order ${orderId} deleted successfully!`, 'success');
        }
    }
}

// Helper functions
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    });
}

function formatTime(dateString) {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-IN', {
        hour: '2-digit',
        minute: '2-digit'
    });
}

function getStatusLabel(status) {
    const labels = {
        'pending': 'Pending',
        'processing': 'Processing',
        'shipped': 'Shipped',
        'delivered': 'Delivered',
        'cancelled': 'Cancelled',
        'refunded': 'Refunded'
    };
    return labels[status] || status;
}

function getShippingStatusLabel(status) {
    const labels = {
        'pending': 'Pending',
        'processing': 'Processing',
        'shipped': 'Shipped',
        'delivered': 'Delivered',
        'cancelled': 'Cancelled'
    };
    return labels[status] || status;
}

function convertToCSV(orders) {
    const headers = ['Order ID', 'Customer Name', 'Date', 'Vendor', 'Status', 'Shipping Status', 'Items', 'Total', 'Payment Method'];
    const rows = orders.map(order => [
        order.id,
        order.customer.name,
        formatDate(order.date),
        order.vendor,
        getStatusLabel(order.status),
        getShippingStatusLabel(order.shipping.status),
        order.items,
        `₹${order.total}`,
        order.payment.method
    ]);
    
    return [headers, ...rows].map(row => row.join(',')).join('\n');
}

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

function showLoading() {
    loadingOverlay.classList.add('active');
}

function hideLoading() {
    loadingOverlay.classList.remove('active');
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close" onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Add to document
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 3000);
}

// Add CSS for notifications
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        background: white;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        display: flex;
        align-items: center;
        justify-content: space-between;
        min-width: 300px;
        max-width: 400px;
        z-index: 9999;
        animation: slideIn 0.3s ease;
        border-left: 4px solid var(--primary);
    }
    
    .notification-success {
        border-left-color: var(--success);
    }
    
    .notification-info {
        border-left-color: var(--info);
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 10px;
        color: var(--dark);
    }
    
    .notification-close {
        background: none;
        border: none;
        color: var(--gray);
        cursor: pointer;
        padding: 5px;
        margin-left: 10px;
    }
    
    .notification-close:hover {
        color: var(--dark);
    }
    
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    .empty-state {
        text-align: center;
        padding: 40px 20px;
        color: var(--gray);
    }
    
    .empty-state i {
        font-size: 48px;
        margin-bottom: 15px;
        opacity: 0.5;
    }
    
    .empty-state h3 {
        margin-bottom: 10px;
        color: var(--dark);
    }
    
    .no-orders {
        text-align: center;
    }
`;
document.head.appendChild(notificationStyles);

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);