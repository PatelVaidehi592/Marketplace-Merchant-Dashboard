// Centralized data management with realistic loading simulation
const DataManager = {
    // In-memory cache
    cache: {
        orders: null,
        lastFetch: null
    },
    
    // Get all orders with proper loading simulation
    async getOrders() {
        // Return cached data if available and not expired (5 minutes)
        if (this.cache.orders && this.cache.lastFetch && 
            (Date.now() - this.cache.lastFetch) < 300000) {
            return this.cache.orders;
        }
        
        // Show loading
        this.showLoading();
        
        // Simulate API delay (500ms - 1.5s random)
        await this.delay(500 + Math.random() * 1000);
        
        // Generate sample data
        const orders = this.generateOrdersData(50);
        
        // Cache the data
        this.cache.orders = orders;
        this.cache.lastFetch = Date.now();
        
        // Hide loading
        this.hideLoading();
        
        return orders;
    },
    
    // Get single order by ID
    async getOrderById(orderId) {
        // First try to get from cache
        if (this.cache.orders) {
            const order = this.cache.orders.find(o => o.id === orderId);
            if (order) return order;
        }
        
        // Show loading
        this.showLoading();
        
        // Simulate API delay
        await this.delay(300 + Math.random() * 700);
        
        // Generate or fetch single order
        const order = this.generateOrderDetails(orderId);
        
        // Hide loading
        this.hideLoading();
        
        return order;
    },
    
    // Simulate delay
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    },
    
    // Show loading indicator
    showLoading() {
        const overlay = document.getElementById('loadingOverlay');
        if (overlay) {
            overlay.style.display = 'flex';
        }
    },
    
    // Hide loading indicator
    hideLoading() {
        const overlay = document.getElementById('loadingOverlay');
        if (overlay) {
            overlay.style.display = 'none';
        }
    },
    
    // Generate realistic orders data
    generateOrdersData(count = 30) {
        const vendors = ["TechGadgets Inc.", "HomeStyle Living", "FashionHub", "ElectroWorld", "BookNook"];
        const statuses = ["pending", "processing", "shipped", "delivered", "cancelled", "refunded"];
        const shippingStatuses = ["pending", "processing", "shipped", "delivered"];
        const paymentMethods = ["Credit Card", "PayPal", "Cash on Delivery", "Bank Transfer"];
        const paymentStatuses = ["paid", "pending", "failed", "refunded"];
        
        const firstNames = ["Rahul", "Priya", "Amit", "Neha", "Vikram", "Sanya", "Rohan", "Anjali", "Karan", "Divya"];
        const lastNames = ["Sharma", "Patel", "Kumar", "Gupta", "Singh", "Verma", "Mehta", "Reddy", "Malhotra", "Joshi"];
        const cities = ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Pune", "Ahmedabad", "Jaipur", "Lucknow", "Chandigarh"];
        
        const orders = [];
        
        for (let i = 1; i <= count; i++) {
            const customerName = `${firstNames[i % 10]} ${lastNames[i % 10]}`;
            const email = `${firstNames[i % 10].toLowerCase()}.${lastNames[i % 10].toLowerCase()}@example.com`;
            const status = statuses[i % 6];
            const shippingStatus = shippingStatuses[i % 4];
            const vendor = vendors[i % 5];
            const paymentMethod = paymentMethods[i % 4];
            const paymentStatus = paymentStatuses[i % 4];
            
            // Generate random date within last 30 days
            const orderDate = new Date();
            orderDate.setDate(orderDate.getDate() - Math.floor(Math.random() * 30));
            orderDate.setHours(8 + Math.floor(Math.random() * 10), Math.floor(Math.random() * 60));
            
            // Generate random items count and total
            const itemsCount = Math.floor(Math.random() * 5) + 1;
            const subtotal = Math.floor(Math.random() * 10000) + 500;
            const shipping = Math.floor(Math.random() * 100) + 20;
            const tax = Math.floor(subtotal * 0.18);
            const discount = Math.floor(Math.random() * 200);
            const total = subtotal + shipping + tax - discount;
            
            orders.push({
                id: `ORD-${1000 + i}`,
                customer: {
                    name: customerName,
                    email: email,
                    phone: `+91 ${Math.floor(Math.random() * 9000000000) + 1000000000}`,
                    id: `CUST-${1000 + i}`
                },
                date: orderDate.toISOString(),
                vendor: vendor,
                status: status,
                shipping: {
                    status: shippingStatus,
                    method: shippingStatus === 'pending' ? 'Standard Shipping' : 
                            shippingStatus === 'processing' ? 'Standard Shipping' :
                            shippingStatus === 'shipped' ? 'Express Shipping' : 'Express Shipping',
                    tracking: shippingStatus === 'shipped' || shippingStatus === 'delivered' ? 
                             `TRK-${789000 + i}` : null,
                    cost: shipping
                },
                payment: {
                    method: paymentMethod,
                    status: paymentStatus,
                    transactionId: paymentStatus === 'paid' ? `TXN-${789000 + i}` : null
                },
                items: itemsCount,
                total: total,
                address: `${Math.floor(Math.random() * 1000) + 1} ${['Main St', 'Park Ave', 'Gandhi Rd', 'Lake View'][i % 4]}, ${cities[i % 10]}`
            });
        }
        
        // Sort by date (newest first)
        return orders.sort((a, b) => new Date(b.date) - new Date(a.date));
    },
    
    // Generate detailed order data
    generateOrderDetails(orderId) {
        const orderNumber = parseInt(orderId.split('-')[1]) - 1000;
        const vendors = ["TechGadgets Inc.", "HomeStyle Living", "FashionHub", "ElectroWorld", "BookNook"];
        const statuses = ["pending", "processing", "shipped", "delivered", "cancelled", "refunded"];
        
        const order = {
            id: orderId,
            customer: {
                name: `Customer ${orderNumber}`,
                email: `customer${orderNumber}@example.com`,
                phone: `+91 98765${10000 + orderNumber}`,
                id: `CUST-${1000 + orderNumber}`,
                address: {
                    shipping: `${orderNumber} Main Street, City ${orderNumber}, State ${orderNumber}, ${100000 + orderNumber}`,
                    billing: "Same as shipping",
                    city: `City ${orderNumber}`,
                    state: `State ${orderNumber}`,
                    pincode: `${100000 + orderNumber}`
                }
            },
            date: new Date(Date.now() - orderNumber * 86400000).toISOString(),
            vendor: vendors[orderNumber % 5],
            status: statuses[orderNumber % 6],
            shipping: {
                status: orderNumber % 4 === 0 ? 'delivered' : 
                        orderNumber % 4 === 1 ? 'shipped' :
                        orderNumber % 4 === 2 ? 'processing' : 'pending',
                method: orderNumber % 2 === 0 ? 'Express Shipping' : 'Standard Shipping',
                estimatedDelivery: new Date(Date.now() + (orderNumber % 7) * 86400000).toISOString().split('T')[0],
                tracking: orderNumber % 3 === 0 ? `TRK-${789000 + orderNumber}` : null,
                cost: 50 + (orderNumber % 5) * 10
            },
            payment: {
                method: orderNumber % 4 === 0 ? 'Credit Card' : 
                        orderNumber % 4 === 1 ? 'PayPal' :
                        orderNumber % 4 === 2 ? 'Cash on Delivery' : 'Bank Transfer',
                status: orderNumber % 4 === 0 ? 'paid' : 
                        orderNumber % 4 === 1 ? 'pending' :
                        orderNumber % 4 === 2 ? 'failed' : 'refunded',
                transactionId: `TXN-${789000 + orderNumber}`,
                gateway: orderNumber % 3 === 0 ? 'Razorpay' : 'Stripe',
                date: new Date(Date.now() - orderNumber * 86400000 + 300000).toISOString(),
                amount: 1000 + (orderNumber % 10) * 500
            },
            items: [
                {
                    id: 1,
                    name: `Product A${orderNumber}`,
                    description: `Description for product A${orderNumber}`,
                    price: 500 + (orderNumber % 10) * 100,
                    quantity: 1 + (orderNumber % 3),
                    image: `https://via.placeholder.com/50/4361ee/ffffff?text=P${orderNumber}`,
                    vendor: vendors[orderNumber % 5],
                    sku: `SKU-${1000 + orderNumber}`
                },
                {
                    id: 2,
                    name: `Product B${orderNumber}`,
                    description: `Description for product B${orderNumber}`,
                    price: 300 + (orderNumber % 10) * 50,
                    quantity: 1,
                    image: `https://via.placeholder.com/50/3f37c9/ffffff?text=P${orderNumber}B`,
                    vendor: vendors[orderNumber % 5],
                    sku: `SKU-${2000 + orderNumber}`
                }
            ],
            totals: {
                subtotal: 0,
                shipping: 50 + (orderNumber % 5) * 10,
                tax: 0,
                discount: orderNumber % 4 === 0 ? 100 : 0,
                total: 0
            },
            notes: orderNumber % 3 === 0 ? "Special instructions provided" : "",
            syncHistory: [
                {
                    id: 1,
                    type: "order_created",
                    status: "success",
                    message: "Order synced with marketplace",
                    details: "Successfully synced with marketplace",
                    timestamp: new Date(Date.now() - orderNumber * 86400000).toISOString()
                }
            ]
        };
        
        // Calculate totals
        order.totals.subtotal = order.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        order.totals.tax = Math.floor(order.totals.subtotal * 0.18);
        order.totals.total = order.totals.subtotal + order.totals.shipping + order.totals.tax - order.totals.discount;
        order.payment.amount = order.totals.total;
        
        return order;
    },
    
    // Clear cache (for testing)
    clearCache() {
        this.cache.orders = null;
        this.cache.lastFetch = null;
    },
    
    // Force refresh data
    async refreshOrders() {
        this.clearCache();
        return await this.getOrders();
    }
};

// Make it globally available
window.DataManager = DataManager;