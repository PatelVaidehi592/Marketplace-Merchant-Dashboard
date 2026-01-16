const sampleReturns = [
    {
        returnId: "RET-1001",
        orderId: "ORD-2001",
        product: "Smartphone X",
        customer: "John Smith",
        returnDate: "2024-01-10",
        reason: "Damaged Product",
        quantity: 1,
        refundAmount: 899.99,
        refundMethod: "Credit Card",
        refundStatus: "pending",
        status: "requested",
        pickupAddress: "123 Main Street, Apt 4B, New York",
        pickupDate: null,
        pickupStatus: "pending",
        courier: null,
        comments: "The screen arrived cracked",
        timeline: [
            {
                date: "2024-01-10 14:30",
                action: "Return Requested",
                description: "Customer requested return for damaged product"
            }
        ]
    },
    {
        returnId: "RET-1002",
        orderId: "ORD-1005",
        product: "Laptop Pro",
        customer: "Sarah Johnson",
        returnDate: "2024-01-09",
        reason: "Wrong Item Received",
        quantity: 1,
        refundAmount: 1250.00,
        refundMethod: "Bank Transfer",
        refundStatus: "approved",
        status: "approved",
        pickupAddress: "456 Oak Avenue, Suite 12, Chicago",
        pickupDate: "2024-01-12",
        pickupStatus: "scheduled",
        courier: "BlueDart",
        comments: "Received different model than ordered",
        timeline: [
            {
                date: "2024-01-09 10:15",
                action: "Return Requested",
                description: "Customer requested return for wrong item"
            },
            {
                date: "2024-01-09 15:45",
                action: "Return Approved",
                description: "Return request approved by admin"
            }
        ]
    },
    {
        returnId: "RET-1003",
        orderId: "ORD-3021",
        product: "Wireless Headphones",
        customer: "Mike Williams",
        returnDate: "2024-01-08",
        reason: "Product Not Working",
        quantity: 1,
        refundAmount: 199.99,
        refundMethod: "Original Payment",
        refundStatus: "processing",
        status: "pickedup",
        pickupAddress: "789 Pine Road, Floor 3, Los Angeles",
        pickupDate: "2024-01-10",
        pickupStatus: "completed",
        courier: "Delhivery",
        comments: "Headphones don't turn on",
        timeline: [
            {
                date: "2024-01-08 09:30",
                action: "Return Requested",
                description: "Customer reported defective product"
            },
            {
                date: "2024-01-08 14:20",
                action: "Return Approved",
                description: "Technical team verified the issue"
            },
            {
                date: "2024-01-10 11:00",
                action: "Pickup Scheduled",
                description: "Pickup scheduled with Delhivery"
            },
            {
                date: "2024-01-10 16:45",
                action: "Product Picked Up",
                description: "Product collected from customer"
            }
        ]
    },
    {
        returnId: "RET-1004",
        orderId: "ORD-2014",
        product: "Gaming Console",
        customer: "Emily Davis",
        returnDate: "2024-01-07",
        reason: "Changed Mind",
        quantity: 1,
        refundAmount: 499.99,
        refundMethod: "Store Credit",
        refundStatus: "completed",
        status: "refunded",
        pickupAddress: "101 Maple Lane, Boston",
        pickupDate: "2024-01-09",
        pickupStatus: "completed",
        courier: "DTDC",
        comments: "No longer need the product",
        timeline: [
            {
                date: "2024-01-07 16:20",
                action: "Return Requested",
                description: "Customer changed mind"
            },
            {
                date: "2024-01-08 10:15",
                action: "Return Approved",
                description: "Approved as per return policy"
            },
            {
                date: "2024-01-09 14:30",
                action: "Product Picked Up",
                description: "Product collected by DTDC"
            },
            {
                date: "2024-01-11 11:45",
                action: "Product Received",
                description: "Warehouse received returned product"
            },
            {
                date: "2024-01-12 09:30",
                action: "Refund Processed",
                description: "$499.99 credited as store credit"
            }
        ]
    },
    {
        returnId: "RET-1005",
        orderId: "ORD-2321",
        product: "Coffee Maker",
        customer: "David Brown",
        returnDate: "2024-01-06",
        reason: "Missing Parts",
        quantity: 1,
        refundAmount: 89.99,
        refundMethod: "Original Payment",
        refundStatus: "completed",
        status: "returned",
        pickupAddress: "202 Cedar Street, Unit 5, Seattle",
        pickupDate: "2024-01-08",
        pickupStatus: "completed",
        courier: "FedEx",
        comments: "Power cord was missing from package",
        timeline: [
            {
                date: "2024-01-06 11:45",
                action: "Return Requested",
                description: "Customer reported missing parts"
            },
            {
                date: "2024-01-06 15:30",
                action: "Return Approved",
                description: "Approved for missing parts"
            },
            {
                date: "2024-01-08 13:15",
                action: "Product Picked Up",
                description: "FedEx collected the product"
            },
            {
                date: "2024-01-10 10:00",
                action: "Product Received",
                description: "Warehouse inspection completed"
            }
        ]
    },
    {
        returnId: "RET-1006",
        orderId: "ORD-0381",
        product: "Smart Watch Y",
        customer: "John Smith",
        returnDate: "2024-05-20",
        reason: "Old Product",
        quantity: 1,
        refundAmount: 299.99,
        refundMethod: "Credit Card",
        refundStatus: "pending",
        status: "requested",
        pickupAddress: "123 Main Street, Apt 4B, New York",
        pickupDate: null,
        pickupStatus: "pending",
        courier: null,
        comments: "Received an older model",
        timeline: [
            {
                date: "2024-05-20 14:30",
                action: "Return Requested",
                description: "Customer requested return for old product model"
            }
        ]
    }
];

let returns = [...sampleReturns];
let filteredReturns = [...returns];
let selectedReturns = new Set();

// DOM Elements
const returnsTableBody = document.getElementById('returnsTableBody');
const totalReturnsElement = document.getElementById('totalReturns');
const pendingReturnsElement = document.getElementById('pendingReturns');
const pickupReturnsElement = document.getElementById('pickupReturns');
const completedReturnsElement = document.getElementById('completedReturns');
const statusFilter = document.getElementById('statusFilter');
const dateFilter = document.getElementById('dateFilter');
const searchReturn = document.getElementById('searchReturn');
const applyFilter = document.getElementById('applyFilter');
const batchActions = document.getElementById('batchActions');
const selectedCount = document.getElementById('selectedCount');
const selectAllCheckbox = document.getElementById('selectAll');
const bulkActionBtn = document.getElementById('bulkActionBtn');
const bulkActionDropdown = document.getElementById('bulkActionDropdown');
const bulkApproveBtn = document.getElementById('bulkApprove');
const bulkRejectBtn = document.getElementById('bulkReject');

// Initialize on page load
document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM Content Loaded - Initializing Return Orders');

    // Initialize data
    returns = [...sampleReturns];
    filteredReturns = [...returns];
    selectedReturns.clear();

    console.log('Total returns:', returns.length);
    console.log('Filtered returns:', filteredReturns.length);

    // Initialize UI
    initializeEventListeners();
    updateStats();
    renderReturnsTable();
    updateBulkActionButton();

    // Set default filters
    resetFilters();
    
    // Initialize responsive features
    initResponsiveFeatures();
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.bulk-action-group')) {
            bulkActionDropdown.classList.remove('show');
        }
    });
});

function resetFilters() {
    statusFilter.value = 'all';
    dateFilter.value = 'all';
    searchReturn.value = '';
}

function initializeEventListeners() {
    // Apply filter button
    applyFilter.addEventListener('click', filterReturns);

    // Real-time filtering on input and select changes
    searchReturn.addEventListener('input', filterReturns);
    statusFilter.addEventListener('change', filterReturns);
    dateFilter.addEventListener('change', filterReturns);

    // Export button
    document.getElementById('exportReturns').addEventListener('click', exportReturns);
    
    // Mobile filter toggle
    setupMobileFilterToggle();
    
    // Batch action buttons
    document.getElementById('batchExport').addEventListener('click', batchExportReturns);
    document.getElementById('clearSelection').addEventListener('click', clearSelection);
    
    // Bulk action dropdown
    bulkActionBtn.addEventListener('click', toggleBulkActionDropdown);
    bulkApproveBtn.addEventListener('click', bulkApproveReturns);
    bulkRejectBtn.addEventListener('click', bulkRejectReturns);
}

function updateStats() {
    // Calculate stats based on ALL returns, not filtered ones
    const total = returns.length;
    const pending = returns.filter(r => r.status === 'requested').length;
    const pickup = returns.filter(r => r.status === 'approved' || r.status === 'pickedup').length;
    const completed = returns.filter(r => r.status === 'refunded' || r.status === 'returned' || r.status === 'rejected').length;

    totalReturnsElement.textContent = total;
    pendingReturnsElement.textContent = pending;
    pickupReturnsElement.textContent = pickup;
    completedReturnsElement.textContent = completed;
}

function renderReturnsTable() {
    console.log('Rendering table with', filteredReturns.length, 'items');

    returnsTableBody.innerHTML = '';

    if (filteredReturns.length === 0) {
        returnsTableBody.innerHTML = `
        <tr>
            <td colspan="10" style="text-align: center; padding: 40px;">
                <i class="fas fa-search" style="font-size: 48px; color: #ccc; margin-bottom: 20px;"></i>
                <h3 style="color: #666;">No return orders found</h3>
                <p style="color: #888;">Try changing your filter criteria</p>
            </td>
        </tr>
    `;
        updateBatchActions();
        updateBulkActionButton();
        return;
    }

    filteredReturns.forEach(returnItem => {
        const statusClass = `status-${returnItem.status}`;
        const statusText = getStatusText(returnItem.status);
        const isSelected = selectedReturns.has(returnItem.returnId);

        const row = document.createElement('tr');
        if (isSelected) row.classList.add('selected');
        
        row.innerHTML = `
        <td class="checkbox-cell">
            <input type="checkbox" class="table-checkbox" 
                   data-return-id="${returnItem.returnId}" 
                   ${isSelected ? 'checked' : ''}
                   onclick="toggleReturnSelection('${returnItem.returnId}', this)">
        </td>
        <td><strong>${returnItem.returnId}</strong></td>
        <td>${returnItem.orderId}</td>
        <td>${returnItem.product}</td>
        <td>${returnItem.customer}</td>
        <td>${formatDate(returnItem.returnDate)}</td>
        <td>${returnItem.reason}</td>
        <td><strong>$${returnItem.refundAmount.toFixed(2)}</strong></td>
        <td><span class="status-badge ${statusClass}">${statusText}</span></td>
        <td>
            <div class="action-buttons">
                <button class="action-btn btn-view" onclick="viewReturnDetails('${returnItem.returnId}')">
                    <i class="fas fa-eye"></i> View
                </button>
                ${returnItem.status === 'requested' ? `
                    <button class="action-btn btn-process" onclick="approveReturn('${returnItem.returnId}')">
                        <i class="fas fa-check"></i> Approve
                    </button>
                    <button class="action-btn btn-reject" onclick="rejectReturnModal('${returnItem.returnId}')">
                        <i class="fas fa-times"></i> Reject
                    </button>
                ` : ''}
            </div>
        </td>
    `;

        returnsTableBody.appendChild(row);
    });
    
    // Update select all checkbox state
    updateSelectAllCheckbox();
    
    // Add mobile touch events after rendering
    if (window.innerWidth <= 768) {
        addMobileTouchEvents();
    }
}

function filterReturns() {
    const statusValue = statusFilter.value;
    const dateValue = dateFilter.value;
    const searchValue = searchReturn.value.toLowerCase().trim();

    console.log('Filtering with:', { statusValue, dateValue, searchValue });

    filteredReturns = returns.filter(returnItem => {
        let matches = true;

        // Status filter
        if (statusValue !== 'all') {
            matches = matches && returnItem.status === statusValue;
        }

        // Date filter
        if (dateValue !== 'all' && matches) {
            const returnDate = new Date(returnItem.returnDate);
            const today = new Date();

            switch (dateValue) {
                case 'today':
                    const todayStart = new Date();
                    todayStart.setHours(0, 0, 0, 0);
                    const todayEnd = new Date();
                    todayEnd.setHours(23, 59, 59, 999);
                    matches = matches && (returnDate >= todayStart && returnDate <= todayEnd);
                    break;
                case 'week':
                    const weekAgo = new Date();
                    weekAgo.setDate(today.getDate() - 7);
                    matches = matches && (returnDate >= weekAgo);
                    break;
                case 'month':
                    const monthAgo = new Date();
                    monthAgo.setMonth(today.getMonth() - 1);
                    matches = matches && (returnDate >= monthAgo);
                    break;
            }
        }

        // Search filter
        if (searchValue && matches) {
            const searchFields = [
                returnItem.returnId,
                returnItem.orderId,
                returnItem.product,
                returnItem.customer,
                returnItem.reason
            ];

            const searchText = searchFields.join(' ').toLowerCase();
            matches = matches && searchText.includes(searchValue);
        }

        return matches;
    });

    console.log('Filtered results:', filteredReturns.length);
    renderReturnsTable();
}

// ===== BULK ACTION DROPDOWN FUNCTIONS =====

function toggleBulkActionDropdown() {
    bulkActionDropdown.classList.toggle('show');
}

function closeBulkActionDropdown() {
    bulkActionDropdown.classList.remove('show');
}

function updateBulkActionButton() {
    const selectedCount = selectedReturns.size;
    
    if (selectedCount > 0) {
        bulkActionBtn.innerHTML = `<i class="fas fa-bolt"></i> Bulk Actions (${selectedCount})`;
        bulkApproveBtn.disabled = false;
        bulkRejectBtn.disabled = false;
    } else {
        bulkActionBtn.innerHTML = `<i class="fas fa-bolt"></i> Bulk Actions`;
        bulkApproveBtn.disabled = true;
        bulkRejectBtn.disabled = true;
    }
}

// ===== CHECKBOX SELECTION FUNCTIONS =====

function toggleReturnSelection(returnId, checkbox) {
    const row = checkbox.closest('tr');
    
    if (checkbox.checked) {
        selectedReturns.add(returnId);
        row.classList.add('selected');
    } else {
        selectedReturns.delete(returnId);
        row.classList.remove('selected');
    }
    
    updateBatchActions();
    updateBulkActionButton();
    updateSelectAllCheckbox();
}

function toggleSelectAll(checkbox) {
    const allCheckboxes = document.querySelectorAll('.table-checkbox:not(#selectAll)');
    
    if (checkbox.checked) {
        // Select all visible rows
        filteredReturns.forEach(returnItem => {
            selectedReturns.add(returnItem.returnId);
        });
        allCheckboxes.forEach(cb => cb.checked = true);
        document.querySelectorAll('.returns-table tbody tr').forEach(row => row.classList.add('selected'));
    } else {
        // Deselect all
        selectedReturns.clear();
        allCheckboxes.forEach(cb => cb.checked = false);
        document.querySelectorAll('.returns-table tbody tr').forEach(row => row.classList.remove('selected'));
    }
    
    updateBatchActions();
    updateBulkActionButton();
}

function updateSelectAllCheckbox() {
    if (!selectAllCheckbox) return;
    
    const visibleCheckboxes = document.querySelectorAll('.table-checkbox:not(#selectAll)');
    const checkedCheckboxes = Array.from(visibleCheckboxes).filter(cb => cb.checked);
    
    if (visibleCheckboxes.length === 0) {
        selectAllCheckbox.checked = false;
        selectAllCheckbox.indeterminate = false;
    } else if (checkedCheckboxes.length === visibleCheckboxes.length) {
        selectAllCheckbox.checked = true;
        selectAllCheckbox.indeterminate = false;
    } else if (checkedCheckboxes.length > 0) {
        selectAllCheckbox.checked = false;
        selectAllCheckbox.indeterminate = true;
    } else {
        selectAllCheckbox.checked = false;
        selectAllCheckbox.indeterminate = false;
    }
}

function updateBatchActions() {
    const selectedCountValue = selectedReturns.size;
    
    if (selectedCountValue > 0) {
        batchActions.classList.add('active');
        selectedCount.textContent = `${selectedCountValue} item${selectedCountValue !== 1 ? 's' : ''} selected`;
    } else {
        batchActions.classList.remove('active');
    }
}

function clearSelection() {
    selectedReturns.clear();
    document.querySelectorAll('.table-checkbox').forEach(cb => cb.checked = false);
    document.querySelectorAll('.returns-table tbody tr').forEach(row => row.classList.remove('selected'));
    updateBatchActions();
    updateBulkActionButton();
    updateSelectAllCheckbox();
    closeBulkActionDropdown();
}

// ===== BULK ACTION FUNCTIONS =====

function bulkApproveReturns() {
    const selectedCount = selectedReturns.size;
    if (selectedCount === 0) return;
    
    if (!confirm(`Are you sure you want to approve ${selectedCount} return${selectedCount !== 1 ? 's' : ''}?`)) {
        closeBulkActionDropdown();
        return;
    }
    
    let approvedCount = 0;
    selectedReturns.forEach(returnId => {
        const returnIndex = returns.findIndex(r => r.returnId === returnId);
        if (returnIndex !== -1 && returns[returnIndex].status === 'requested') {
            // Update the return status
            returns[returnIndex].status = 'approved';
            returns[returnIndex].timeline.push({
                date: new Date().toISOString().replace('T', ' ').substring(0, 16),
                action: 'Return Approved',
                description: 'Return request approved by admin (bulk action)'
            });
            approvedCount++;
        }
    });
    
    // Update filtered returns
    updateFilteredReturns();
    
    // Update UI
    updateStats();
    renderReturnsTable();
    clearSelection();
    closeBulkActionDropdown();
    
    alert(`Successfully approved ${approvedCount} return${approvedCount !== 1 ? 's' : ''}!`);
}

function bulkRejectReturns() {
    const selectedCount = selectedReturns.size;
    if (selectedCount === 0) return;
    
    if (!confirm(`Are you sure you want to reject ${selectedCount} return${selectedCount !== 1 ? 's' : ''}?`)) {
        closeBulkActionDropdown();
        return;
    }
    
    let rejectedCount = 0;
    selectedReturns.forEach(returnId => {
        const returnIndex = returns.findIndex(r => r.returnId === returnId);
        if (returnIndex !== -1 && returns[returnIndex].status === 'requested') {
            // Update the return status
            returns[returnIndex].status = 'rejected';
            returns[returnIndex].timeline.push({
                date: new Date().toISOString().replace('T', ' ').substring(0, 16),
                action: 'Return Rejected',
                description: 'Return request rejected by admin (bulk action)'
            });
            rejectedCount++;
        }
    });
    
    // Update filtered returns
    updateFilteredReturns();
    
    // Update UI
    updateStats();
    renderReturnsTable();
    clearSelection();
    closeBulkActionDropdown();
    
    alert(`Successfully rejected ${rejectedCount} return${rejectedCount !== 1 ? 's' : ''}!`);
}

function batchExportReturns() {
    const selectedCount = selectedReturns.size;
    if (selectedCount === 0) return;
    
    // Create CSV content
    let csvContent = "Return ID,Order ID,Product,Customer,Return Date,Reason,Refund Amount,Status\n";

    returns.forEach(returnItem => {
        if (selectedReturns.has(returnItem.returnId)) {
            csvContent += `"${returnItem.returnId}","${returnItem.orderId}","${returnItem.product}","${returnItem.customer}","${formatDate(returnItem.returnDate)}","${returnItem.reason}","${returnItem.refundAmount}","${getStatusText(returnItem.status)}"\n`;
        }
    });

    // Create and download the file
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);

    link.setAttribute("href", url);
    link.setAttribute("download", `selected_returns_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    alert(`Exported ${selectedCount} return${selectedCount !== 1 ? 's' : ''} successfully!`);
}

function updateFilteredReturns() {
    filteredReturns = filteredReturns.map(filteredItem => {
        const updatedItem = returns.find(r => r.returnId === filteredItem.returnId);
        return updatedItem || filteredItem;
    });
}

// ===== INDIVIDUAL ACTION FUNCTIONS =====

function viewReturnDetails(returnId) {
    console.log('Viewing return details for:', returnId);

    // Store the return data in localStorage
    const returnItem = returns.find(r => r.returnId === returnId);
    if (returnItem) {
        localStorage.setItem('currentReturn', JSON.stringify(returnItem));
        console.log('Saved to localStorage:', returnItem);
    }

    // Redirect to details page
    window.location.href = `return-order-details.html?id=${returnId}`;
}

function approveReturn(returnId) {
    if (!confirm('Are you sure you want to approve this return request?')) {
        return;
    }

    const returnIndex = returns.findIndex(r => r.returnId === returnId);
    if (returnIndex === -1) return;

    // Update the return status
    returns[returnIndex].status = 'approved';
    returns[returnIndex].timeline.push({
        date: new Date().toISOString().replace('T', ' ').substring(0, 16),
        action: 'Return Approved',
        description: 'Return request approved by admin'
    });

    // Update filtered returns if it exists there
    updateFilteredReturns();

    // Update UI
    updateStats();
    renderReturnsTable();

    alert('Return approved successfully!');
}

function rejectReturnModal(returnId) {
    if (confirm('Are you sure you want to reject this return request?')) {
        rejectReturn(returnId);
    }
}

function rejectReturn(returnId) {
    const returnIndex = returns.findIndex(r => r.returnId === returnId);
    if (returnIndex === -1) return;

    // Update the return status
    returns[returnIndex].status = 'rejected';
    returns[returnIndex].timeline.push({
        date: new Date().toISOString().replace('T', ' ').substring(0, 16),
        action: 'Return Rejected',
        description: 'Return request rejected by admin'
    });

    // Update filtered returns if it exists there
    updateFilteredReturns();

    // Update UI
    updateStats();
    renderReturnsTable();

    alert('Return rejected successfully!');
}

function exportReturns() {
    // Create CSV content
    let csvContent = "Return ID,Order ID,Product,Customer,Return Date,Reason,Refund Amount,Status\n";

    filteredReturns.forEach(returnItem => {
        csvContent += `"${returnItem.returnId}","${returnItem.orderId}","${returnItem.product}","${returnItem.customer}","${formatDate(returnItem.returnDate)}","${returnItem.reason}","${returnItem.refundAmount}","${getStatusText(returnItem.status)}"\n`;
    });

    // Create and download the file
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);

    link.setAttribute("href", url);
    link.setAttribute("download", `returns_export_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    alert(`Exported ${filteredReturns.length} return records successfully!`);
}

// ===== RESPONSIVE FUNCTIONS =====

function initResponsiveFeatures() {
    // Handle window resize
    window.addEventListener('resize', handleResponsiveLayout);
    
    // Initial call to set correct layout
    handleResponsiveLayout();
    
    // Add resize listener for table re-render
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            renderReturnsTable();
        }, 250);
    });
}

function handleResponsiveLayout() {
    const isMobile = window.innerWidth <= 768;
    const container = document.querySelector('.container');
    const table = document.querySelector('.returns-table');
    
    if (isMobile) {
        // Add mobile class to container for mobile-specific styles
        if (container) container.classList.add('mobile-view');
        if (table) table.classList.add('mobile-table');
        
        // Adjust table scrolling
        const tableContainer = document.querySelector('.table-container');
        if (tableContainer) {
            tableContainer.style.overflowX = 'auto';
            tableContainer.style.WebkitOverflowScrolling = 'touch';
        }
    } else {
        // Remove mobile classes
        if (container) container.classList.remove('mobile-view');
        if (table) table.classList.remove('mobile-table');
        
        // Reset table scrolling
        const tableContainer = document.querySelector('.table-container');
        if (tableContainer) {
            tableContainer.style.overflowX = 'visible';
        }
    }
}

function addMobileTouchEvents() {
    const tableRows = document.querySelectorAll('.returns-table tbody tr');
    
    tableRows.forEach(row => {
        // Add touch feedback
        row.addEventListener('touchstart', function() {
            this.style.backgroundColor = 'rgba(67, 97, 238, 0.1)';
        }, { passive: true });
        
        row.addEventListener('touchend', function() {
            this.style.backgroundColor = '';
        }, { passive: true });
    });
}

function setupMobileFilterToggle() {
    // Only on small mobile screens
    if (window.innerWidth <= 480) {
        const filtersSection = document.querySelector('.filters-section');
        const filtersGrid = document.querySelector('.filters-grid');
        const filterButton = document.getElementById('applyFilter');
        
        if (filtersSection && filtersGrid && filterButton) {
            // Check if toggle already exists
            if (!document.querySelector('.mobile-filter-toggle')) {
                // Create toggle button
                const toggleBtn = document.createElement('button');
                toggleBtn.className = 'btn btn-light mobile-filter-toggle';
                toggleBtn.innerHTML = '<i class="fas fa-filter"></i> Show Filters';
                toggleBtn.type = 'button';
                
                filtersSection.insertBefore(toggleBtn, filtersGrid);
                
                // Initially hide filters on very small screens
                filtersGrid.style.display = 'none';
                
                // Toggle filters visibility
                toggleBtn.addEventListener('click', function() {
                    if (filtersGrid.style.display === 'none') {
                        filtersGrid.style.display = 'grid';
                        toggleBtn.innerHTML = '<i class="fas fa-times"></i> Hide Filters';
                    } else {
                        filtersGrid.style.display = 'none';
                        toggleBtn.innerHTML = '<i class="fas fa-filter"></i> Show Filters';
                    }
                });
                
                // Hide filters when Apply Filter is clicked
                filterButton.addEventListener('click', function() {
                    filtersGrid.style.display = 'none';
                    toggleBtn.innerHTML = '<i class="fas fa-filter"></i> Show Filters';
                });
            }
        }
    }
}

// Check if mobile device
function isMobileDevice() {
    return window.innerWidth <= 768;
}

// Utility Functions
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

function getStatusText(status) {
    const statusMap = {
        'requested': 'Return Requested',
        'approved': 'Approved',
        'pickedup': 'Picked Up',
        'returned': 'Returned',
        'refunded': 'Refunded',
        'rejected': 'Rejected'
    };
    return statusMap[status] || status;
}

// Add CSS class for mobile view
document.head.insertAdjacentHTML('beforeend', `
<style>
    .mobile-view .main-header {
        flex-direction: column;
        text-align: center;
    }
    
    .mobile-view .header-actions {
        justify-content: center;
    }
    
    .mobile-table {
        font-size: 0.9em;
    }
    
    @media (max-width: 480px) {
        .action-btn span {
            display: none;
        }
        
        .action-btn i {
            margin-right: 0;
        }
    }
</style>
`);