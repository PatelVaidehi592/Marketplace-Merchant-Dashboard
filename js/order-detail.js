// Order Detail Page JavaScript

// Sample detailed order data
const orderDetails = {
    "ORD-1001": {
        id: "ORD-1001",
        customer: {
            name: "Rahul Sharma",
            email: "rahul.sharma@example.com",
            phone: "+91 9876543210",
            id: "CUST-001",
            address: {
                shipping: "123 Main Street, Mumbai, Maharashtra 400001",
                billing: "Same as shipping",
                city: "Mumbai",
                state: "Maharashtra",
                pincode: "400001"
            }
        },
        date: "2023-11-12T10:30:00",
        vendor: "TechGadgets Inc.",
        status: "pending",
        shipping: {
            status: "pending",
            method: "Standard Shipping",
            estimatedDelivery: "2023-11-16",
            tracking: null,
            cost: 50
        },
        payment: {
            method: "Credit Card",
            status: "paid",
            transactionId: "TXN-789012",
            gateway: "Razorpay",
            date: "2023-11-12T10:35:00",
            amount: 2076
        },
        items: [
            {
                id: 1,
                name: "Wireless Bluetooth Headphones",
                description: "Noise cancelling headphones with 30hr battery",
                price: 1250,
                quantity: 1,
                image: "https://via.placeholder.com/50",
                vendor: "TechGadgets Inc.",
                sku: "TG-HP001"
            },
            {
                id: 2,
                name: "Phone Case",
                description: "Premium silicone case for iPhone 14",
                price: 299,
                quantity: 2,
                image: "https://via.placeholder.com/50",
                vendor: "TechGadgets Inc.",
                sku: "TG-PC001"
            }
        ],
        totals: {
            subtotal: 1848,
            shipping: 50,
            tax: 278,
            discount: 100,
            total: 2076
        },
        notes: "Please deliver before 5 PM",
        syncHistory: [
            {
                id: 1,
                type: "order_created",
                status: "success",
                message: "Order synced with marketplace",
                details: "Successfully synced with Amazon",
                timestamp: "2023-11-12T10:30:00"
            },
            {
                id: 2,
                type: "inventory_check",
                status: "warning",
                message: "Inventory update failed",
                details: "Product out of stock",
                timestamp: "2023-11-12T10:25:00"
            },
            {
                id: 3,
                type: "payment_processed",
                status: "success",
                message: "Payment processed successfully",
                details: "Transaction ID: TXN-789012",
                timestamp: "2023-11-12T10:35:00"
            }
        ],
        tracking: {
            steps: [
                {
                    id: 1,
                    name: "Order Placed",
                    status: "completed",
                    timestamp: "2023-11-12T10:30:00"
                },
                {
                    id: 2,
                    name: "Payment Confirmed",
                    status: "completed",
                    timestamp: "2023-11-12T10:35:00"
                },
                {
                    id: 3,
                    name: "Processing",
                    status: "current",
                    estimated: "2023-11-13"
                },
                {
                    id: 4,
                    name: "Shipped",
                    status: "pending"
                },
                {
                    id: 5,
                    name: "Delivered",
                    status: "pending",
                    estimated: "2023-11-16"
                }
            ]
        }
    }
};

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    loadOrderDetails();
    initializeEventListeners();
    initializeModals();
});

function loadOrderDetails() {
    // Get order ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const orderId = urlParams.get('id');
    
    if (!orderId) {
        showNotification('No order ID provided', 'error');
        return;
    }
    
    // Show loading
    const loadingOverlay = document.getElementById('loadingOverlay');
    loadingOverlay.style.display = 'flex';
    
    // Simulate API call delay
    setTimeout(() => {
        const order = orderDetails[orderId];
        
        if (!order) {
            showNotification('Order not found', 'error');
            loadingOverlay.style.display = 'none';
            return;
        }
        
        // Update page title
        document.title = `Order ${order.id} - Order Management`;
        
        // Update header
        document.getElementById('orderHeaderInfo').textContent = 
            `Order placed on ${formatDate(order.date)}`;
        
        // Update order overview
        document.getElementById('orderIdDisplay').textContent = `Order #${order.id}`;
        document.getElementById('orderStatusBadge').textContent = 
            order.status.charAt(0).toUpperCase() + order.status.slice(1);
        document.getElementById('orderStatusBadge').className = `status-badge status-${order.status}`;
        
        document.getElementById('paymentStatusBadge').textContent = 
            order.payment.status.charAt(0).toUpperCase() + order.payment.status.slice(1);
        document.getElementById('paymentStatusBadge').className = `payment-status ${order.payment.status}`;
        
        document.getElementById('orderDate').textContent = formatDate(order.date);
        document.getElementById('shippingMethod').textContent = order.shipping.method;
        document.getElementById('paymentMethod').textContent = order.payment.method;
        document.getElementById('orderTotal').textContent = formatCurrency(order.totals.total);
        
        // Update customer details
        document.getElementById('customerName').textContent = order.customer.name;
        document.getElementById('customerEmail').textContent = order.customer.email;
        document.getElementById('customerPhone').textContent = order.customer.phone;
        document.getElementById('customerId').textContent = order.customer.id;
        
        // Update shipping details
        document.getElementById('shippingAddressText').textContent = order.customer.address.shipping;
        document.getElementById('shippingCity').textContent = order.customer.address.city;
        document.getElementById('shippingState').textContent = order.customer.address.state;
        document.getElementById('shippingPincode').textContent = order.customer.address.pincode;
        document.getElementById('shippingStatus').textContent = 
            order.shipping.status.charAt(0).toUpperCase() + order.shipping.status.slice(1);
        
        // Update billing details
        document.getElementById('billingAddress').textContent = order.customer.address.billing;
        
        // Group items by vendor
        const vendorItems = {};
        order.items.forEach(item => {
            if (!vendorItems[item.vendor]) {
                vendorItems[item.vendor] = [];
            }
            vendorItems[item.vendor].push(item);
        });
        
        // Render vendor items
        const vendorItemsContainer = document.getElementById('vendorItemsContainer');
        vendorItemsContainer.innerHTML = '';
        
        Object.keys(vendorItems).forEach(vendorName => {
            const vendorSection = document.createElement('div');
            vendorSection.className = 'vendor-items';
            
            let vendorTotal = 0;
            const itemsHtml = vendorItems[vendorName].map(item => {
                const itemTotal = item.price * item.quantity;
                vendorTotal += itemTotal;
                
                return `
                    <tr>
                        <td>
                            <div class="item-info">
                                <img src="${item.image}" alt="${item.name}" class="item-image">
                                <div class="item-details">
                                    <h4>${item.name}</h4>
                                    <p>${item.description}</p>
                                    <p style="font-size: 11px; color: var(--gray);">SKU: ${item.sku}</p>
                                </div>
                            </div>
                        </td>
                        <td>${formatCurrency(item.price)}</td>
                        <td>${item.quantity}</td>
                        <td class="item-total">${formatCurrency(itemTotal)}</td>
                    </tr>
                `;
            }).join('');
            
            vendorSection.innerHTML = `
                <div class="vendor-header">
                    <div class="vendor-name">
                        <i class="fas fa-store"></i>
                        ${vendorName}
                    </div>
                    <span class="vendor-status">Pending Sync</span>
                </div>
                <table class="items-table">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${itemsHtml}
                    </tbody>
                </table>
                <div class="vendor-total">
                    <div class="total-row">
                        <span>Vendor Total:</span>
                        <span>${formatCurrency(vendorTotal)}</span>
                    </div>
                </div>
            `;
            
            vendorItemsContainer.appendChild(vendorSection);
        });
        
        // Update payment details
        document.getElementById('transactionId').textContent = order.payment.transactionId;
        document.getElementById('paymentStatus').textContent = 
            order.payment.status.charAt(0).toUpperCase() + order.payment.status.slice(1);
        document.getElementById('paymentDate').textContent = formatDate(order.payment.date);
        document.getElementById('paymentGateway').textContent = order.payment.gateway;
        document.getElementById('amountPaid').textContent = formatCurrency(order.payment.amount);
        
        // Update tracking timeline
        const trackingTimeline = document.querySelector('.tracking-timeline');
        if (trackingTimeline) {
            trackingTimeline.innerHTML = '';
            
            order.tracking.steps.forEach(step => {
                const stepElement = document.createElement('div');
                stepElement.className = `tracking-step ${step.status}`;
                
                const stepIcon = step.status === 'completed' ? 'check-circle' :
                                step.status === 'current' ? 'spinner fa-spin' : 'circle';
                
                stepElement.innerHTML = `
                    <div class="step-icon">
                        <i class="fas fa-${stepIcon}"></i>
                    </div>
                    <div class="step-content">
                        <h4>${step.name}</h4>
                        <p>${step.timestamp ? formatDate(step.timestamp) : 
                           step.estimated ? `Estimated: ${step.estimated}` : ''}</p>
                    </div>
                `;
                
                trackingTimeline.appendChild(stepElement);
            });
        }
        
        // Update order totals
        document.getElementById('modalSubtotal').textContent = formatCurrency(order.totals.subtotal);
        document.getElementById('modalShipping').textContent = formatCurrency(order.totals.shipping);
        document.getElementById('modalTax').textContent = formatCurrency(order.totals.tax);
        document.getElementById('modalDiscount').textContent = formatCurrency(order.totals.discount);
        document.getElementById('modalFinalTotal').textContent = formatCurrency(order.totals.total);
        
        // Hide loading
        loadingOverlay.style.display = 'none';
        
        // Show success message
        showNotification(`Loaded order ${order.id}`, 'success');
        
    }, 1000); // Simulate network delay
}

function initializeEventListeners() {
    // Edit customer button
    document.getElementById('editCustomer').addEventListener('click', function() {
        showNotification('Edit customer functionality would open here', 'info');
    });
    
    // Edit shipping button
    document.getElementById('editShipping').addEventListener('click', function() {
        showNotification('Edit shipping functionality would open here', 'info');
    });
    
    // Update tracking button
    document.getElementById('updateTracking').addEventListener('click', function() {
        showNotification('Update tracking functionality would open here', 'info');
    });
    
    // Print invoice
    document.getElementById('printInvoice').addEventListener('click', function() {
        const btn = this;
        const originalText = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Preparing...';
        
        setTimeout(() => {
            btn.innerHTML = originalText;
            showNotification('Invoice sent to printer', 'success');
        }, 1000);
    });
    
    // Sync order
    document.getElementById('syncOrder').addEventListener('click', function() {
        const btn = this;
        const originalText = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Syncing...';
        btn.disabled = true;
        
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.disabled = false;
            showNotification('Order synced successfully with marketplace', 'success');
        }, 2000);
    });
    
    // Order actions
    document.getElementById('updateStatusBtn').addEventListener('click', function() {
        document.getElementById('statusModal').style.display = 'flex';
    });
    
    document.getElementById('cancelOrderBtn').addEventListener('click', function() {
        if (confirm('Are you sure you want to cancel this order?')) {
            showNotification('Order cancellation initiated', 'warning');
        }
    });
    
    document.getElementById('refundOrderBtn').addEventListener('click', function() {
        if (confirm('Are you sure you want to refund this order?')) {
            showNotification('Refund process initiated', 'warning');
        }
    });
    
    document.getElementById('sendEmailBtn').addEventListener('click', function() {
        showNotification('Email composer would open here', 'info');
    });
    
    // View full history
    document.getElementById('viewFullHistory').addEventListener('click', function() {
        showNotification('Full sync history would open here', 'info');
    });
}

function initializeModals() {
    const statusModal = document.getElementById('statusModal');
    const closeModal = document.querySelector('.close-modal');
    const cancelBtn = document.getElementById('cancelStatusUpdate');
    const confirmBtn = document.getElementById('confirmStatusUpdate');
    
    // Close modal
    closeModal.addEventListener('click', () => {
        statusModal.style.display = 'none';
    });
    
    cancelBtn.addEventListener('click', () => {
        statusModal.style.display = 'none';
    });
    
    // Confirm status update
    confirmBtn.addEventListener('click', () => {
        const newStatus = document.getElementById('newStatusSelect').value;
        const notes = document.getElementById('statusNotes').value;
        
        // Show loading
        confirmBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Updating...';
        confirmBtn.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            // Update UI
            const statusBadge = document.getElementById('orderStatusBadge');
            statusBadge.textContent = newStatus.charAt(0).toUpperCase() + newStatus.slice(1);
            statusBadge.className = `status-badge status-${newStatus}`;
            
            // Close modal and reset
            statusModal.style.display = 'none';
            document.getElementById('statusNotes').value = '';
            confirmBtn.innerHTML = 'Update Status';
            confirmBtn.disabled = false;
            
            // Show success message
            showNotification(`Order status updated to ${newStatus}`, 'success');
        }, 1000);
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', (event) => {
        if (event.target === statusModal) {
            statusModal.style.display = 'none';
        }
    });
}