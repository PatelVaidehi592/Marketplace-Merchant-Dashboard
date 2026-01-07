
    document.addEventListener('DOMContentLoaded', function () {
      // Order.html ma thi order ID levo
      const urlParams = new URLSearchParams(window.location.search);
      const orderId = urlParams.get('id');

      if (orderId) {
        console.log('Loading order:', orderId);
        // Order details load karo
        loadOrderDetails(orderId);
        document.getElementById('orderHeaderInfo').textContent = `Order ID: ${orderId}`;
      } else {
        document.getElementById('orderHeaderInfo').textContent = 'No order selected';
      }

      // Sample order data (same as order.html)

      function getOrderData(orderId) {
        // First check localStorage
        const savedOrders = JSON.parse(localStorage.getItem('orderDetails')) || {};
        if (savedOrders[orderId]) {
          return savedOrders[orderId];
        }

        // If not in localStorage, generate from order ID
        return generateOrderDataFromId(orderId);
      }

      function generateOrderDataFromId(orderId) {
        // Extract order number
        const orderNum = orderId.split('-')[1];

        // Generate basic data based on order number
        const baseData = {
          id: orderId,
          customer: `Customer ${orderNum}`,
          date: `2023-${10 + Math.floor(Math.random() * 2)}-${15 + Math.floor(Math.random() * 10)}`,
          vendor: `Vendor ${orderNum}`,
          status: ["pending", "processing", "shipped", "delivered"][Math.floor(Math.random() * 4)],
          shipping: ["pending", "processing", "shipped", "delivered"][Math.floor(Math.random() * 4)],
          items: ["Laptop", "Mouse", "Keyboard", "Monitor", "Headphones"][Math.floor(Math.random() * 5)],
          total: (100 + Math.random() * 2000).toFixed(2),
          pushed: Math.random() > 0.5,

          // Generate detailed data
          customerName: `Customer ${orderNum}`,
          customerEmail: `customer${orderNum}@email.com`,
          customerPhone: `+91 ${Math.floor(1000000000 + Math.random() * 9000000000)}`,
          customerId: `CUST-${orderNum}`,

          shippingAddress: `${Math.floor(100 + Math.random() * 900)} Main Street`,
          shippingCity: ["Mumbai", "Delhi", "Bangalore", "Chennai"][Math.floor(Math.random() * 4)],
          shippingState: ["Maharashtra", "Delhi", "Karnataka", "Tamil Nadu"][Math.floor(Math.random() * 4)],
          shippingPincode: Math.floor(400000 + Math.random() * 100000).toString(),
          shippingStatus: ["Pending", "Processing", "Shipped", "Delivered"][Math.floor(Math.random() * 4)],

          billingAddress: `${Math.floor(100 + Math.random() * 900)} Billing Avenue`,
          gstNumber: `27AABC${Math.floor(1000 + Math.random() * 9000)}Z${Math.floor(1 + Math.random() * 9)}`,
          invoiceNumber: `INV-2023-${orderNum}`,

          vendorName: `vendor${orderNum}`,
          vendorType: ["Vendor", "Supplier", "Partner"][Math.floor(Math.random() * 3)],
          vendorEarning: `${Math.floor(5 + Math.random() * 20)}% Commission`,
          payoutStatus: ["UNPAID", "PAID", "PROCESSING"][Math.floor(Math.random() * 3)],

          transactionId: `TXN-${Date.now().toString().slice(-6)}`,
          paymentStatus: ["Pending", "Paid", "Failed"][Math.floor(Math.random() * 3)],
          paymentDate: new Date().toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          }),
          paymentGateway: ["Razorpay", "Stripe", "PayPal"][Math.floor(Math.random() * 3)],
          amountPaid: `₹${(100 + Math.random() * 2000).toFixed(2)}`,

          trackingNumber: `TRK${Math.floor(1000000000 + Math.random() * 9000000000)}`,
          courierService: ["BlueDart", "DTDC", "Delhivery"][Math.floor(Math.random() * 3)],
          trackingLastUpdated: new Date().toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          }) + ' PM',

          warehouseStatus: ["No Warehouse", "Has Warehouse", "Dropship"][Math.floor(Math.random() * 3)],
          pickupStatus: Math.random() > 0.5,
          payoutsStatus: Math.random() > 0.5
        };

        return baseData;
      }

      function loadOrderDetails(orderId) {
        const orderData = getOrderData(orderId);

        if (!orderData) {
          showNotification('Order not found!', 'error');
          return;
        }

        // Display order details
        displayOrderDetails(orderData);
      }

      function displayOrderDetails(orderData) {
        // Update header
        document.getElementById('orderHeaderInfo').textContent =
          `Order ID: ${orderData.id} | Date: ${orderData.date} | Status: ${orderData.status}`;

        // Customer details
        document.getElementById('customerName').textContent = orderData.customerName || orderData.customer;
        document.getElementById('customerEmail').textContent = orderData.customerEmail || 'N/A';
        document.getElementById('customerPhone').textContent = orderData.customerPhone || 'N/A';
        document.getElementById('customerId').textContent = orderData.customerId || 'N/A';

        // Shipping details
        document.getElementById('shippingAddressText').textContent = orderData.shippingAddress || 'N/A';
        document.getElementById('shippingCity').textContent = orderData.shippingCity || 'N/A';
        document.getElementById('shippingState').textContent = orderData.shippingState || 'N/A';
        document.getElementById('shippingPincode').textContent = orderData.shippingPincode || 'N/A';
        document.getElementById('shippingStatus').textContent = orderData.shippingStatus || 'N/A';

        // Billing details
        document.getElementById('billingAddress').textContent = orderData.billingAddress || orderData.shippingAddress || 'N/A';
        document.getElementById('gstNumber').textContent = orderData.gstNumber || 'N/A';
        document.getElementById('invoiceNumber').textContent = orderData.invoiceNumber || 'N/A';

        // Vendor details
        document.getElementById('vendorNameDisplay').textContent = orderData.vendorName || orderData.vendor;
        document.getElementById('vendorTypeDisplay').textContent = orderData.vendorType || 'Vendor';
        document.getElementById('vendorEarningDisplay').textContent = orderData.vendorEarning || 'N/A';

        const payoutStatusElement = document.getElementById('payoutStatusDisplay');
        payoutStatusElement.textContent = orderData.payoutStatus || 'N/A';
        payoutStatusElement.className = `status-${(orderData.payoutStatus || '').toLowerCase()}`;

        document.getElementById('warehouseDisplay').textContent = orderData.warehouseStatus || 'No Warehouse';

        // Show/hide badges based on status
        document.getElementById('pickupBadge').style.display = orderData.pickupStatus ? 'inline-block' : 'none';
        document.getElementById('payoutsBadge').style.display = orderData.payoutsStatus ? 'inline-block' : 'none';

        // Payment details
        document.getElementById('transactionId').textContent = orderData.transactionId || 'N/A';
        document.getElementById('paymentStatus').textContent = orderData.paymentStatus || 'N/A';
        document.getElementById('paymentDate').textContent = orderData.paymentDate || 'N/A';
        document.getElementById('paymentGateway').textContent = orderData.paymentGateway || 'N/A';
        document.getElementById('amountPaid').textContent = orderData.amountPaid || '₹0.00';

        // Tracking details
        document.getElementById('trackingNumberText').textContent = orderData.trackingNumber || 'N/A';
        document.getElementById('courierService').textContent = orderData.courierService || 'N/A';
        document.getElementById('trackingLastUpdated').textContent = orderData.trackingLastUpdated || 'N/A';

        // Set edit form values
        setEditFormValues(orderData);
      }

      function setEditFormValues(orderData) {
        // Customer edit form
        document.getElementById('editCustomerName').value = orderData.customerName || orderData.customer;
        document.getElementById('editCustomerEmail').value = orderData.customerEmail || '';
        document.getElementById('editCustomerPhone').value = orderData.customerPhone || '';

        // Shipping edit form
        document.getElementById('editShippingAddress').value = orderData.shippingAddress || '';
        document.getElementById('editShippingCity').value = orderData.shippingCity || '';
        document.getElementById('editShippingState').value = orderData.shippingState || '';
        document.getElementById('editShippingPincode').value = orderData.shippingPincode || '';
        document.getElementById('editShippingStatus').value = orderData.shippingStatus ? orderData.shippingStatus.toLowerCase() : 'pending';

        // Billing edit form
        document.getElementById('editBillingAddress').value = orderData.billingAddress || orderData.shippingAddress || '';
        document.getElementById('editGstNumber').value = orderData.gstNumber || '';
        document.getElementById('editInvoiceNumber').value = orderData.invoiceNumber || '';

        // Vendor edit form
        document.getElementById('editVendorName').value = orderData.vendorName || orderData.vendor;
        document.getElementById('editVendorType').value = orderData.vendorType ? orderData.vendorType.toLowerCase() : 'vendor';
        document.getElementById('editWarehouseStatus').value = orderData.warehouseStatus || 'No Warehouse';
        document.getElementById('editVendorEarning').value = orderData.vendorEarning || '';
        document.getElementById('editPayoutStatus').value = orderData.payoutStatus || 'UNPAID';
        document.getElementById('editPickupStatus').checked = orderData.pickupStatus || false;
        document.getElementById('editPayoutsStatus').checked = orderData.payoutsStatus || false;

        // Payment edit form
        document.getElementById('editTransactionId').value = orderData.transactionId || '';
        document.getElementById('editPaymentStatus').value = orderData.paymentStatus ? orderData.paymentStatus.toLowerCase() : 'pending';
        document.getElementById('editPaymentGateway').value = orderData.paymentGateway || 'Razorpay';
        document.getElementById('editAmountPaid').value = orderData.amountPaid ? orderData.amountPaid.replace('₹', '') : '';

        // Tracking edit form
        document.getElementById('editTrackingNumber').value = orderData.trackingNumber || '';
        document.getElementById('editCourierService').value = orderData.courierService || 'BlueDart';
        document.getElementById('editTrackingStatus').value = orderData.shippingStatus ? orderData.shippingStatus.toLowerCase() : 'pending';
      }

      // Rest of your existing functions (showNotification, edit functions, etc.)
      function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
          <i class="fas fa-${type === 'success' ? 'check-circle' :
            type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
          <span>${message}</span>
        `;

        document.body.appendChild(notification);

        setTimeout(() => {
          notification.classList.add('show');
        }, 10);

        setTimeout(() => {
          notification.classList.remove('show');
          setTimeout(() => {
            if (notification.parentNode) {
              notification.parentNode.removeChild(notification);
            }
          }, 3);
        }, 1000);
      }

      document.querySelectorAll('.edit-section-btn').forEach(button => {
        button.addEventListener('click', function () {
          const section = this.getAttribute('data-section');
          const displayElement = document.getElementById(`${section}Display`);
          const editElement = document.getElementById(`${section}EditForm`);

          if (displayElement && editElement) {
            displayElement.style.display = 'none';
            editElement.style.display = 'block';
          }
        });
      });

      document.querySelectorAll('.cancel-edit-btn').forEach(button => {
        button.addEventListener('click', function () {
          const section = this.getAttribute('data-section');
          const displayElement = document.getElementById(`${section}Display`);
          const editElement = document.getElementById(`${section}EditForm`);

          if (displayElement && editElement) {
            displayElement.style.display = 'block';
            editElement.style.display = 'none';
          }
        });
      });

      document.querySelectorAll('.save-edit-btn').forEach(button => {
        button.addEventListener('click', function () {
          const section = this.getAttribute('data-section');
          saveSectionChanges(section);
        });
      });

      document.addEventListener('click', function (e) {
        if (e.target.closest('.copy-tracking-btn')) {
          const trackingNumber = document.getElementById('trackingNumberText').textContent;
          navigator.clipboard.writeText(trackingNumber).then(() => {
            showNotification('Tracking number copied!', 'success');
          });
        }
      });

      const sameAsShippingCheckbox = document.getElementById('sameAsShipping');
      if (sameAsShippingCheckbox) {
        sameAsShippingCheckbox.addEventListener('change', function () {
          const billingAddressField = document.getElementById('editBillingAddress');
          if (this.checked) {
            const shippingAddress = document.getElementById('editShippingAddress').value;
            billingAddressField.value = shippingAddress;
          }
        });
      }


      // Add this function to sync changes back to main orders array
      function syncChangesToMainOrders(orderId, updatedData) {
        // Get the current orders from localStorage or initialize
        let mainOrders = JSON.parse(localStorage.getItem('mainOrders')) || [...sampleOrders];

        // Find the order index
        const orderIndex = mainOrders.findIndex(o => o.id === orderId);

        if (orderIndex !== -1) {
          // Update the main order with relevant data
          mainOrders[orderIndex] = {
            ...mainOrders[orderIndex],
            customer: updatedData.customerName || mainOrders[orderIndex].customer,
            vendor: updatedData.vendorName || mainOrders[orderIndex].vendor,
            status: updatedData.status || mainOrders[orderIndex].status,
            shipping: updatedData.shippingStatus || mainOrders[orderIndex].shipping
          };

          // Save back to localStorage
          localStorage.setItem('mainOrders', JSON.stringify(mainOrders));
          console.log('Synced changes to main orders:', mainOrders[orderIndex]);
        }
      }

      // Modify the saveSectionChanges function to call sync
      function saveSectionChanges(section) {
        const displayElement = document.getElementById(`${section}Display`);
        const editElement = document.getElementById(`${section}EditForm`);
        const orderId = urlParams.get('id');

        switch (section) {
          case 'customer':
            const customerName = document.getElementById('editCustomerName').value;
            const customerEmail = document.getElementById('editCustomerEmail').value;
            const customerPhone = document.getElementById('editCustomerPhone').value;

            document.getElementById('customerName').textContent = customerName;
            document.getElementById('customerEmail').textContent = customerEmail;
            document.getElementById('customerPhone').textContent = customerPhone;
            break;

          case 'shipping':
            const shippingAddress = document.getElementById('editShippingAddress').value;
            const shippingCity = document.getElementById('editShippingCity').value;
            const shippingState = document.getElementById('editShippingState').value;
            const shippingPincode = document.getElementById('editShippingPincode').value;
            const shippingStatus = document.getElementById('editShippingStatus').value;

            document.getElementById('shippingAddressText').textContent = shippingAddress;
            document.getElementById('shippingCity').textContent = shippingCity;
            document.getElementById('shippingState').textContent = shippingState;
            document.getElementById('shippingPincode').textContent = shippingPincode;
            document.getElementById('shippingStatus').textContent = shippingStatus;
            break;

          // ... other cases remain the same ...

          case 'vendor':
            const vendorName = document.getElementById('editVendorName').value;
            const vendorType = document.getElementById('editVendorType').value;
            const warehouseStatus = document.getElementById('editWarehouseStatus').value;
            const vendorEarning = document.getElementById('editVendorEarning').value;
            const payoutStatus = document.getElementById('editPayoutStatus').value;
            const pickupStatus = document.getElementById('editPickupStatus').checked;
            const payoutsStatus = document.getElementById('editPayoutsStatus').checked;

            document.getElementById('vendorNameDisplay').textContent = vendorName;
            document.getElementById('vendorTypeDisplay').textContent = vendorType.charAt(0).toUpperCase() + vendorType.slice(1);
            document.getElementById('vendorEarningDisplay').textContent = vendorEarning;

            const payoutStatusDisplay = document.getElementById('payoutStatusDisplay');
            payoutStatusDisplay.textContent = payoutStatus;
            payoutStatusDisplay.className = `status-${payoutStatus.toLowerCase()}`;

            document.getElementById('warehouseDisplay').textContent = warehouseStatus;
            document.getElementById('pickupBadge').style.display = pickupStatus ? 'inline-block' : 'none';
            document.getElementById('payoutsBadge').style.display = payoutsStatus ? 'inline-block' : 'none';
            break;

          // ... other cases ...
        }

        showNotification(`${section.charAt(0).toUpperCase() + section.slice(1)} information updated successfully!`, 'success');

        if (displayElement && editElement) {
          displayElement.style.display = 'block';
          editElement.style.display = 'none';
        }

        // Save to localStorage
        saveToLocalStorage(orderId, section);

        // Sync changes back to main orders
        syncChangesBack(orderId);
      }

      // New function to sync changes back
      function syncChangesBack(orderId) {
        // Get all saved data
        const savedOrders = JSON.parse(localStorage.getItem('orderDetails')) || {};
        const updatedData = savedOrders[orderId];

        if (updatedData) {
          // Get main orders from localStorage or use sample
          let mainOrders = JSON.parse(localStorage.getItem('mainOrders')) || [...sampleOrders];

          // Find and update the order
          const orderIndex = mainOrders.findIndex(o => o.id === orderId);
          if (orderIndex !== -1) {
            mainOrders[orderIndex] = {
              ...mainOrders[orderIndex],
              customer: updatedData.customerName || mainOrders[orderIndex].customer,
              vendor: updatedData.vendorName || mainOrders[orderIndex].vendor,
              status: updatedData.status || mainOrders[orderIndex].status,
              shipping: updatedData.shippingStatus || mainOrders[orderIndex].shipping
            };

            // Save back
            localStorage.setItem('mainOrders', JSON.stringify(mainOrders));
          }
        }
      }

      // Also update the saveToLocalStorage function to include all data
      function saveToLocalStorage(orderId, section) {
        let savedOrders = JSON.parse(localStorage.getItem('orderDetails')) || {};

        if (!savedOrders[orderId]) {
          savedOrders[orderId] = {};
        }

        // Save all current values, not just the section being edited
        switch (section) {
          case 'customer':
            savedOrders[orderId].customerName = document.getElementById('editCustomerName').value;
            savedOrders[orderId].customerEmail = document.getElementById('editCustomerEmail').value;
            savedOrders[orderId].customerPhone = document.getElementById('editCustomerPhone').value;
            break;
          case 'shipping':
            savedOrders[orderId].shippingAddress = document.getElementById('editShippingAddress').value;
            savedOrders[orderId].shippingCity = document.getElementById('editShippingCity').value;
            savedOrders[orderId].shippingState = document.getElementById('editShippingState').value;
            savedOrders[orderId].shippingPincode = document.getElementById('editShippingPincode').value;
            savedOrders[orderId].shippingStatus = document.getElementById('editShippingStatus').value;
            savedOrders[orderId].status = document.getElementById('editShippingStatus').value; // Also update status
            break;
          case 'billing':
            savedOrders[orderId].billingAddress = document.getElementById('editBillingAddress').value;
            savedOrders[orderId].gstNumber = document.getElementById('editGstNumber').value;
            savedOrders[orderId].invoiceNumber = document.getElementById('editInvoiceNumber').value;
            break;
          case 'vendor':
            savedOrders[orderId].vendorName = document.getElementById('editVendorName').value;
            savedOrders[orderId].vendorType = document.getElementById('editVendorType').value;
            savedOrders[orderId].warehouseStatus = document.getElementById('editWarehouseStatus').value;
            savedOrders[orderId].vendorEarning = document.getElementById('editVendorEarning').value;
            savedOrders[orderId].payoutStatus = document.getElementById('editPayoutStatus').value;
            savedOrders[orderId].pickupStatus = document.getElementById('editPickupStatus').checked;
            savedOrders[orderId].payoutsStatus = document.getElementById('editPayoutsStatus').checked;
            break;
          case 'payment':
            savedOrders[orderId].transactionId = document.getElementById('editTransactionId').value;
            savedOrders[orderId].paymentStatus = document.getElementById('editPaymentStatus').value;
            savedOrders[orderId].paymentGateway = document.getElementById('editPaymentGateway').value;
            savedOrders[orderId].amountPaid = `₹${document.getElementById('editAmountPaid').value}`;
            break;
          case 'tracking':
            savedOrders[orderId].trackingNumber = document.getElementById('editTrackingNumber').value;
            savedOrders[orderId].courierService = document.getElementById('editCourierService').value;
            savedOrders[orderId].shippingStatus = document.getElementById('editTrackingStatus').value;
            break;
        }

        localStorage.setItem('orderDetails', JSON.stringify(savedOrders));
        console.log('Saved to localStorage:', savedOrders[orderId]);
      }
      // Load saved data from localStorage on page load
      function loadSavedData(orderId) {
        const savedOrders = JSON.parse(localStorage.getItem('orderDetails')) || {};
        const savedData = savedOrders[orderId];

        if (savedData) {
          console.log('Loading saved data:', savedData);
          // Merge saved data with base data
          const baseData = getOrderData(orderId) || {};
          const mergedData = { ...baseData, ...savedData };

          // Update display with saved data
          displayOrderDetails(mergedData);
        }
      }

      // Call loadSavedData after page loads
      if (orderId) {
        loadSavedData(orderId);
      }

      // Button event listeners
      document.getElementById('printInvoice').addEventListener('click', function () {
        showNotification('Invoice printing started...', 'info');
        // In real app, implement actual print functionality
        window.print();
      });

      document.getElementById('syncOrder').addEventListener('click', function () {
        showNotification('Syncing order with marketplace...', 'info');
        // Simulate sync delay
        setTimeout(() => {
          showNotification('Order synced successfully!', 'success');
        }, 1500);
      });
    });
