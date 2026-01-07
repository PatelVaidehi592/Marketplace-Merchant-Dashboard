
    const sampleOrders = [
      {
        id: "ORD-1001",
        customer: "John Smith",
        date: "2023-10-15",
        vendor: "TechGadgets Inc.",
        status: "pending",
        shipping: "pending",
        items: "Laptop, Mouse",
        total: 1250.99,
        pushed: false,
      },
      {
        id: "ORD-1002",
        customer: "Sarah Johnson",
        date: "2023-10-16",
        vendor: "HomeStyle Living",
        status: "processing",
        shipping: "processing",
        items: "Coffee Table, Lamp",
        total: 345.5,
        pushed: false,
      },
      {
        id: "ORD-1003",
        customer: "Mike Williams",
        date: "2023-10-17",
        vendor: "FashionHub",
        status: "delivered",
        shipping: "shipped",
        items: "Jacket, Jeans",
        total: 189.99,
        pushed: true,
      },
      {
        id: "ORD-1004",
        customer: "Emily Davis",
        date: "2023-10-18",
        vendor: "ElectroWorld",
        status: "delivered",
        shipping: "delivered",
        items: "Smartphone, Case",
        total: 899.99,
        pushed: false,
      },
      {
        id: "ORD-1005",
        customer: "David Brown",
        date: "2023-10-19",
        vendor: "BookNook",
        status: "cancelled",
        shipping: "pending",
        items: "Novels, Guidebook",
        total: 75.25,
        pushed: false,
      },
      {
        id: "ORD-1006",
        customer: "Lisa Anderson",
        date: "2023-10-20",
        vendor: "TechGadgets Inc.",
        status: "cancelled",
        shipping: "delivered",
        items: "Tablet, Stylus",
        total: 650.0,
        pushed: true,
      },
      {
        id: "ORD-1007",
        customer: "Robert Wilson",
        date: "2023-10-21",
        vendor: "HomeStyle Living",
        status: "pending",
        shipping: "pending",
        items: "Sofa, Cushions",
        total: 1200.0,
        pushed: false,
      },
      {
        id: "ORD-1008",
        customer: "Jennifer Taylor",
        date: "2023-10-22",
        vendor: "FashionHub",
        status: "processing",
        shipping: "processing",
        items: "Dress, Shoes",
        total: 245.75,
        pushed: false,
      },
      {
        id: "ORD-1009",
        customer: "Thomas Moore",
        date: "2023-10-23",
        vendor: "ElectroWorld",
        status: "delivered",
        shipping: "shipped",
        items: "Headphones, Adapter",
        total: 199.99,
        pushed: false,
      },
      {
        id: "ORD-1010",
        customer: "Amanda Clark",
        date: "2023-10-24",
        vendor: "BookNook",
        status: "delivered",
        shipping: "delivered",
        items: "Cookbook, Magazine",
        total: 45.5,
        pushed: true,
      },
    ];

    // Application state
    let orders = [...sampleOrders];
    let filteredOrders = [...orders];
    let selectedOrders = new Set();
    let currentPage = 1;
    const ordersPerPage = 5;
    let editingOrderId = null;

    // DOM elements
    const ordersTableBody = document.getElementById("ordersTableBody");
    const totalOrdersElement = document.getElementById("totalOrders");
    const pendingOrdersElement = document.getElementById("pendingOrders");
    const processingOrdersElement =
      document.getElementById("processingOrders");
    const deliveredOrdersElement = document.getElementById("deliveredOrders");
    const paginationInfo = document.getElementById("paginationInfo");
    const pageNumbers = document.getElementById("pageNumbers");
    const prevPageBtn = document.getElementById("prevPage");
    const nextPageBtn = document.getElementById("nextPage");
    const loadingOverlay = document.getElementById("loadingOverlay");
    const orderModal = document.getElementById("orderModal");
    const bulkActionsBar = document.getElementById("bulkActionsBar");
    const bulkSelectionInfo = document.getElementById("bulkSelectionInfo");
    const bulkStatusSelect = document.getElementById("bulkStatusSelect");
    const selectAllCheckbox = document.getElementById("selectAllCheckbox");
    const bulkPushBtn = document.getElementById("bulkPushBtn");
    const applyBulkPush = document.getElementById("applyBulkPush");

    // Initialize the application
    document.addEventListener("DOMContentLoaded", function () {
      initializeEventListeners();
      updateStats();
      renderOrders();
      updatePagination();
    });

    // Set up all event listeners
    function initializeEventListeners() {
      // Filter event listeners
      document
        .getElementById("statusFilter")
        .addEventListener("change", filterOrders);
      document
        .getElementById("vendorFilter")
        .addEventListener("change", filterOrders);
      document
        .getElementById("dateRangeFilter")
        .addEventListener("change", filterOrders);
      document
        .getElementById("searchInput")
        .addEventListener("input", filterOrders);
      document
        .getElementById("clearFilters")
        .addEventListener("click", clearFilters);

      // Pagination event listeners
      prevPageBtn.addEventListener("click", goToPrevPage);
      nextPageBtn.addEventListener("click", goToNextPage);

      // Action button event listeners
      document
        .getElementById("createOrderBtn")
        .addEventListener("click", openCreateOrderModal);
      document
        .getElementById("refreshOrdersBtn")
        .addEventListener("click", refreshOrders);
      document
        .getElementById("exportOrdersBtn")
        .addEventListener("click", exportOrders);
      bulkPushBtn.addEventListener("click", bulkPushToVendor);

      // Modal event listeners
      document
        .getElementById("closeModal")
        .addEventListener("click", closeModal);
      document
        .getElementById("cancelOrderBtn")
        .addEventListener("click", closeModal);
      document
        .getElementById("saveOrderBtn")
        .addEventListener("click", saveOrder);

      // Bulk actions event listeners
      document
        .getElementById("applyBulkUpdate")
        .addEventListener("click", applyBulkUpdate);
      document
        .getElementById("applyBulkPush")
        .addEventListener("click", bulkPushSelectedOrders);
      document
        .getElementById("clearBulkSelection")
        .addEventListener("click", clearBulkSelection);
      selectAllCheckbox.addEventListener("change", toggleSelectAll);

      // Click outside modal to close
      orderModal.addEventListener("click", function (e) {
        if (e.target === orderModal) closeModal();
      });
    }

    // Update statistics
    function updateStats() {
      const total = orders.length;
      const pending = orders.filter(
        (order) => order.status === "pending"
      ).length;
      const processing = orders.filter(
        (order) => order.status === "processing"
      ).length;
      const delivered = orders.filter(
        (order) => order.status === "delivered"
      ).length;

      totalOrdersElement.textContent = total;
      pendingOrdersElement.textContent = pending;
      processingOrdersElement.textContent = processing;
      deliveredOrdersElement.textContent = delivered;
    }

    // Render orders to the table
    function renderOrders() {
      // Calculate pagination
      const startIndex = (currentPage - 1) * ordersPerPage;
      const endIndex = startIndex + ordersPerPage;
      const pageOrders = filteredOrders.slice(startIndex, endIndex);

      // Clear table body
      ordersTableBody.innerHTML = "";

      // Populate table with orders
      pageOrders.forEach((order) => {
        const row = document.createElement("tr");
        row.dataset.id = order.id;

        // Load saved data for this order
        const savedData = loadOrderFromStorage(order.id);

        // Use saved data if available, otherwise use default
        const displayCustomer = savedData?.customerName || order.customer;
        const displayStatus = savedData?.status || order.status;
        const displayVendor = savedData?.vendorName || order.vendor;

        // Determine status badge class
        const statusClass = `status-${displayStatus.toLowerCase()}`;

        // Determine if order is already pushed
        const isPushed = order.pushed;
        const pushButtonText = isPushed ? "Pushed" : "Push to Vendor";
        const pushButtonClass = isPushed ? "btn-pushed" : "btn-push";
        const pushButtonDisabled = isPushed ? "disabled" : "";

        // Create checkbox for bulk selection
        const isSelected = selectedOrders.has(order.id);

        row.innerHTML = `
            <td>
                <input type="checkbox" class="bulk-checkbox order-checkbox" data-id="${order.id}" ${isSelected ? "checked" : ""}>
            </td>
            <td><strong>${order.id}</strong></td>
            <td>${displayCustomer}</td>
            <td>${formatDate(order.date)}</td>
            <td>${displayVendor}</td>
            <td><span class="status-badge ${statusClass}">${capitalizeFirstLetter(displayStatus)}</span></td>
            <td>${order.items}</td>
            <td><strong>$${order.total.toFixed(2)}</strong></td>
            <td>
                <div class="action-buttons">
                    <a href="order-detail.html?id=${order.id}" class="action-btn view" title="View" onclick="saveOrderData('${order.id}')">
                        <i class="fas fa-eye"></i>
                    </a>
                    
                    <button class="action-btn delete" onclick="deleteOrder('${order.id}')" title="Delete">
                        <i class="fas fa-trash"></i>
                    </button>
                    <button class="push-btn ${pushButtonClass}" onclick="pushToVendor('${order.id}')" ${pushButtonDisabled} title="${isPushed ? 'Already pushed to vendor' : 'Push this order to vendor'}">
                        <i class="fas fa-paper-plane"></i> ${pushButtonText}
                    </button>
                </div>
            </td>
        `;

        ordersTableBody.appendChild(row);
      });

      // Add event listeners to checkboxes
      document.querySelectorAll(".order-checkbox").forEach((checkbox) => {
        checkbox.addEventListener("change", function () {
          const orderId = this.dataset.id;
          if (this.checked) {
            selectedOrders.add(orderId);
          } else {
            selectedOrders.delete(orderId);
            selectAllCheckbox.checked = false;
          }
          updateBulkActionsBar();
        });
      });

      // Update select all checkbox state
      updateSelectAllCheckbox();
    }

    // Format date for display
    function formatDate(dateString) {
      const options = { year: "numeric", month: "short", day: "numeric" };
      return new Date(dateString).toLocaleDateString("en-US", options);
    }

    // Capitalize first letter
    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    // Update pagination controls
    function updatePagination() {
      const totalPages = Math.ceil(filteredOrders.length / ordersPerPage);
      const startOrder = (currentPage - 1) * ordersPerPage + 1;
      const endOrder = Math.min(
        currentPage * ordersPerPage,
        filteredOrders.length
      );

      // Update pagination info
      paginationInfo.textContent = `Showing ${startOrder}-${endOrder} of ${filteredOrders.length} orders`;

      // Update pagination buttons
      prevPageBtn.disabled = currentPage === 1;
      nextPageBtn.disabled = currentPage === totalPages || totalPages === 0;

      // Update page numbers
      pageNumbers.innerHTML = "";

      // Show up to 5 page numbers
      let startPage = Math.max(1, currentPage - 2);
      let endPage = Math.min(totalPages, startPage + 4);

      // Adjust if we're near the end
      if (endPage - startPage < 4 && startPage > 1) {
        startPage = Math.max(1, endPage - 4);
      }

      for (let i = startPage; i <= endPage; i++) {
        const pageBtn = document.createElement("div");
        pageBtn.className = `page-number ${i === currentPage ? "active" : ""
          }`;
        pageBtn.textContent = i;
        pageBtn.addEventListener("click", () => goToPage(i));
        pageNumbers.appendChild(pageBtn);
      }
    }

    // Go to specific page
    function goToPage(page) {
      currentPage = page;
      renderOrders();
      updatePagination();
    }

    // Go to previous page
    function goToPrevPage() {
      if (currentPage > 1) {
        currentPage--;
        renderOrders();
        updatePagination();
      }
    }

    // Go to next page
    function goToNextPage() {
      const totalPages = Math.ceil(filteredOrders.length / ordersPerPage);
      if (currentPage < totalPages) {
        currentPage++;
        renderOrders();
        updatePagination();
      }
    }

    // Filter orders based on selected filters
    function filterOrders() {
      const statusFilter = document.getElementById("statusFilter").value;
      const vendorFilter = document.getElementById("vendorFilter").value;
      const dateRangeFilter =
        document.getElementById("dateRangeFilter").value;
      const searchQuery = document
        .getElementById("searchInput")
        .value.toLowerCase();

      filteredOrders = orders.filter((order) => {
        // Status filter
        if (statusFilter !== "all" && order.status !== statusFilter)
          return false;

        // Vendor filter
        if (vendorFilter !== "all" && order.vendor !== vendorFilter)
          return false;

        // Date range filter (simplified implementation)
        if (dateRangeFilter !== "all") {
          const orderDate = new Date(order.date);
          const today = new Date();

          if (dateRangeFilter === "today") {
            if (orderDate.toDateString() !== today.toDateString())
              return false;
          } else if (dateRangeFilter === "week") {
            const weekAgo = new Date();
            weekAgo.setDate(today.getDate() - 7);
            if (orderDate < weekAgo) return false;
          } else if (dateRangeFilter === "month") {
            const monthAgo = new Date();
            monthAgo.setMonth(today.getMonth() - 1);
            if (orderDate < monthAgo) return false;
          } else if (dateRangeFilter === "quarter") {
            const quarterAgo = new Date();
            quarterAgo.setMonth(today.getMonth() - 3);
            if (orderDate < quarterAgo) return false;
          }
        }

        // Search filter
        if (searchQuery) {
          const searchableText =
            `${order.id} ${order.customer} ${order.vendor} ${order.items}`.toLowerCase();
          if (!searchableText.includes(searchQuery)) return false;
        }

        return true;
      });

      // Reset to first page after filtering
      currentPage = 1;
      renderOrders();
      updatePagination();
    }

    // Filter orders by status (for stat cards)
    function filterOrdersByStatus(status) {
      document.getElementById("statusFilter").value = status;
      filterOrders();
    }

    // Clear all filters
    function clearFilters() {
      document.getElementById("statusFilter").value = "all";
      document.getElementById("vendorFilter").value = "all";
      document.getElementById("dateRangeFilter").value = "all";
      document.getElementById("searchInput").value = "";
      filterOrders();
    }

    // Refresh orders
    function refreshOrders() {
      showLoading();
      // Simulate API call delay
      setTimeout(() => {
        // In a real app, this would fetch new data from server
        hideLoading();
        filterOrders();
        updateStats();
        showNotification("Orders refreshed successfully!", "success");
      }, 1000);
    }

    // Export orders
    function exportOrders() {
      showLoading();
      // Simulate export process
      setTimeout(() => {
        hideLoading();
        showNotification(
          `Exported ${filteredOrders.length} orders to CSV`,
          "success"
        );
      }, 1500);
    }

    // Open modal to create new order
    function openCreateOrderModal() {
      document.getElementById("modalTitle").textContent = "Create New Order";
      document.getElementById("orderForm").reset();
      editingOrderId = null;
      orderModal.classList.add("show");
    }

    // Add this function to load order data from localStorage
    function loadOrderFromStorage(orderId) {
      const savedOrders = JSON.parse(localStorage.getItem('orderDetails')) || {};
      return savedOrders[orderId] || null;
    }

    // Update the editOrder function to use saved data
    function editOrder(orderId) {
      // Load saved data first
      const savedData = loadOrderFromStorage(orderId);
      const order = savedData || orders.find((o) => o.id === orderId);

      if (!order) return;

      document.getElementById(
        "modalTitle"
      ).textContent = `Edit Order ${orderId}`;
      document.getElementById("orderCustomer").value = order.customerName || order.customer;
      document.getElementById("orderVendor").value = order.vendorName || order.vendor;
      document.getElementById("orderStatus").value = order.status;
      document.getElementById("orderItems").value = order.items;
      document.getElementById("orderTotal").value = order.total;

      editingOrderId = orderId;
      orderModal.classList.add("show");
    }

    // Delete order
    function deleteOrder(orderId) {
      if (confirm("Are you sure you want to delete this order?")) {
        orders = orders.filter((order) => order.id !== orderId);
        selectedOrders.delete(orderId);
        filterOrders();
        updateStats();
        updateBulkActionsBar();
        showNotification("Order deleted successfully!", "success");
      }
    }

    // Close modal
    function closeModal() {
      orderModal.classList.remove("show");
    }

    // Save order (create or update)
    function saveOrder() {
      const customer = document.getElementById("orderCustomer").value;
      const vendor = document.getElementById("orderVendor").value;
      const status = document.getElementById("orderStatus").value;
      const items = document.getElementById("orderItems").value;
      const total = parseFloat(document.getElementById("orderTotal").value);

      if (!customer || !vendor || !items || !total) {
        showNotification("Please fill all required fields", "error");
        return;
      }

      if (editingOrderId) {
        // Update existing order
        const orderIndex = orders.findIndex(
          (order) => order.id === editingOrderId
        );
        if (orderIndex !== -1) {
          orders[orderIndex] = {
            ...orders[orderIndex],
            customer,
            vendor,
            status,
            items,
            total,
          };

          // Also update in localStorage if exists
          let savedOrders = JSON.parse(localStorage.getItem('orderDetails')) || {};
          if (savedOrders[editingOrderId]) {
            savedOrders[editingOrderId] = {
              ...savedOrders[editingOrderId],
              customerName: customer,
              vendorName: vendor,
              status: status,
              items: items,
              total: total
            };
            localStorage.setItem('orderDetails', JSON.stringify(savedOrders));
          }
        }
        showNotification("Order updated successfully!", "success");
      } else {
        // Create new order
        const newOrderId = `ORD-${1000 + orders.length + 1}`;
        const newOrder = {
          id: newOrderId,
          customer,
          date: new Date().toISOString().split("T")[0],
          vendor,
          status,
          shipping: "pending",
          items,
          total,
          pushed: false,
        };
        orders.unshift(newOrder);
        showNotification("Order created successfully!", "success");
      }

      closeModal();
      filterOrders();
      updateStats();
    }

    // Add this function to update order in main orders array from saved data
    function updateOrderFromSavedData() {
      const savedOrders = JSON.parse(localStorage.getItem('orderDetails')) || {};

      Object.keys(savedOrders).forEach(orderId => {
        const savedData = savedOrders[orderId];
        const orderIndex = orders.findIndex(o => o.id === orderId);

        if (orderIndex !== -1 && savedData) {
          // Update the main orders array with saved data
          orders[orderIndex] = {
            ...orders[orderIndex],
            customer: savedData.customerName || orders[orderIndex].customer,
            vendor: savedData.vendorName || orders[orderIndex].vendor,
            status: savedData.status || orders[orderIndex].status,
          };
        }
      });
    }

    // Call this function when loading orders
    function initializeOrders() {
      // First update orders from saved data
      updateOrderFromSavedData();

      // Then update stats and render
      updateStats();
      renderOrders();
      updatePagination();
    }

    // Update the DOMContentLoaded event listener
    document.addEventListener("DOMContentLoaded", function () {
      initializeEventListeners();
      initializeOrders(); // Changed from updateStats() and renderOrders()
    });

    // Push single order to vendor
    function pushToVendor(orderId) {
      const order = orders.find((o) => o.id === orderId);
      if (!order) return;

      if (order.pushed) {
        showNotification("Order already pushed to vendor", "warning");
        return;
      }

      if (confirm(`Push order ${orderId} to ${order.vendor}?`)) {
        // Update order status
        order.pushed = true;
        order.status = "delivered";

        // Update UI
        filterOrders();
        updateStats();
        showNotification(
          `Order ${orderId} pushed to ${order.vendor} successfully!`,
          "success"
        );

        // In a real application, you would make an API call here
        // to send the order data to the vendor's system
        console.log(`Pushing order ${orderId} to vendor:`, order);

        // Simulate API call
        simulatePushToVendorAPI(orderId, order.vendor);
      }
    }

    // Add this function to refresh orders from saved data
    function refreshOrdersFromSaved() {
      showLoading();

      setTimeout(() => {
        // Reload orders from localStorage to get latest updates
        const savedMainOrders = JSON.parse(localStorage.getItem('mainOrders'));
        if (savedMainOrders) {
          orders = savedMainOrders;
          filteredOrders = [...orders];
        }

        // Also update from individual order details
        updateOrderFromSavedData();

        renderOrders();
        updateStats();
        hideLoading();
        showNotification("Orders refreshed with latest data!", "success");
      }, 500);
    }

    // Update the refreshOrders function
    document.getElementById("refreshOrdersBtn").addEventListener("click", refreshOrdersFromSaved);

    // Bulk push selected orders to vendor
    function bulkPushToVendor() {
      if (selectedOrders.size === 0) {
        showNotification("Please select orders to push", "warning");
        return;
      }

      // Filter out already pushed orders
      const ordersToPush = Array.from(selectedOrders).filter((orderId) => {
        const order = orders.find((o) => o.id === orderId);
        return order && !order.pushed;
      });

      if (ordersToPush.length === 0) {
        showNotification(
          "Selected orders are already pushed to vendor",
          "warning"
        );
        return;
      }

      if (
        confirm(
          `Push ${ordersToPush.length} selected order(s) to their respective vendors?`
        )
      ) {
        showLoading();

        // Simulate API call delay
        setTimeout(() => {
          // Update each order
          ordersToPush.forEach((orderId) => {
            const order = orders.find((o) => o.id === orderId);
            if (order) {
              order.pushed = true;
              order.status = "delivered";
              console.log(`Pushing order ${orderId} to ${order.vendor}`);
            }
          });

          hideLoading();

          // Clear selection and refresh
          clearBulkSelection();
          filterOrders();
          updateStats();

          showNotification(
            `${ordersToPush.length} order(s) pushed to vendors successfully!`,
            "success"
          );
        }, 1500);
      }
    }

    // Bulk push from bulk actions bar
    function bulkPushSelectedOrders() {
      if (selectedOrders.size === 0) {
        showNotification("No orders selected", "warning");
        return;
      }

      bulkPushToVendor();
    }

    // Simulate API call to push order to vendor
    function simulatePushToVendorAPI(orderId, vendor) {
      showLoading();

      // Simulate API call delay
      setTimeout(() => {
        hideLoading();
        console.log(
          `API Call: Order ${orderId} successfully sent to ${vendor}'s system`
        );

        // In a real app, you would handle the API response here
        // and update the UI accordingly
      }, 1000);
    }

    // Bulk Actions Functions
    function updateBulkActionsBar() {
      const selectedCount = selectedOrders.size;
      bulkSelectionInfo.textContent = `${selectedCount} order${selectedCount !== 1 ? "s" : ""
        } selected`;

      if (selectedCount > 0) {
        bulkActionsBar.classList.add("show");
      } else {
        bulkActionsBar.classList.remove("show");
      }
    }

    function toggleSelectAll() {
      const checkboxes = document.querySelectorAll(".order-checkbox");
      const isChecked = selectAllCheckbox.checked;

      checkboxes.forEach((checkbox) => {
        checkbox.checked = isChecked;
        const orderId = checkbox.dataset.id;

        if (isChecked) {
          selectedOrders.add(orderId);
        } else {
          selectedOrders.delete(orderId);
        }
      });

      updateBulkActionsBar();
    }

    function updateSelectAllCheckbox() {
      const checkboxes = document.querySelectorAll(".order-checkbox");
      const allChecked =
        checkboxes.length > 0 &&
        Array.from(checkboxes).every((cb) => cb.checked);
      selectAllCheckbox.checked = allChecked;
    }

    function clearBulkSelection() {
      selectedOrders.clear();
      selectAllCheckbox.checked = false;
      renderOrders();
      updateBulkActionsBar();
    }

    // Apply bulk status update
    function applyBulkUpdate() {
      const newStatus = bulkStatusSelect.value;
      if (!newStatus) {
        showNotification("Please select a status to update", "warning");
        return;
      }

      if (selectedOrders.size === 0) {
        showNotification("No orders selected", "warning");
        return;
      }

      if (
        confirm(`Update ${selectedOrders.size} order(s) to "${newStatus}"?`)
      ) {
        // Update orders in the data
        orders = orders.map((order) => {
          if (selectedOrders.has(order.id)) {
            return { ...order, status: newStatus };
          }
          return order;
        });

        // Clear selection and refresh
        clearBulkSelection();
        filterOrders();
        updateStats();
        showNotification(
          `Updated ${selectedOrders.size} order(s) successfully!`,
          "success"
        );

        // Reset status select
        bulkStatusSelect.value = "";
      }
    }

    // Show/hide loading overlay
    function showLoading() {
      loadingOverlay.classList.add("show");
    }

    function hideLoading() {
      loadingOverlay.classList.remove("show");
    }

    // Show notification
    function showNotification(message, type = "info") {
      // Create notification element
      const notification = document.createElement("div");
      notification.className = `notification notification-${type}`;
      notification.innerHTML = `
                <i class="fas fa-${type === "success"
          ? "check-circle"
          : type === "error"
            ? "exclamation-circle"
            : "info-circle"
        }"></i>
                <span>${message}</span>
            `;

      // Style the notification
      notification.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background-color: ${type === "success"
          ? "#d4edda"
          : type === "error"
            ? "#f8d7da"
            : "#d1ecf1"
        };
                color: ${type === "success"
          ? "#155724"
          : type === "error"
            ? "#721c24"
            : "#0c5460"
        };
                padding: 15px 20px;
                border-radius: var(--border-radius);
                box-shadow: var(--box-shadow);
                display: flex;
                align-items: center;
                gap: 10px;
                z-index: 4000;
                animation: slideIn 0.3s ease;
            `;

      // Add to document
      document.body.appendChild(notification);

      // Remove after 3 seconds
      setTimeout(() => {
        notification.style.animation = "slideOut 0.3s ease";
        setTimeout(() => {
          if (notification.parentNode) {
            document.body.removeChild(notification);
          }
        }, 300);
      }, 3000);
    }

    // Add CSS for notification animation
    const style = document.createElement("style");
    style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOut {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
    document.head.appendChild(style);

    // ============ ORDER DETAILS FUNCTIONS ============

    // New function add karo order.html ma
    function saveOrderData(orderId) {
      const order = orders.find(o => o.id === orderId);
      if (order) {
        // Generate detailed data
        const detailedData = getOrderDetails(orderId);

        // Save to localStorage
        let savedOrders = JSON.parse(localStorage.getItem('orderDetails')) || {};
        savedOrders[orderId] = detailedData;
        localStorage.setItem('orderDetails', JSON.stringify(savedOrders));

        console.log('Saved order data for:', orderId, detailedData);
      }
    }

    // Order.html ma function add karo (line 650 par chhe, aama add karo)
    function getOrderDetails(orderId) {
      // Order.html ma thi order data levo
      const order = orders.find(o => o.id === orderId);

      if (!order) return null;

      // Generate detailed data based on basic order data
      const detailedData = {
        ...order,
        // Generate customer details
        customerName: order.customer,
        customerEmail: `${order.customer.toLowerCase().replace(' ', '.')}@email.com`,
        customerPhone: "+91 " + Math.floor(1000000000 + Math.random() * 9000000000).toString().slice(0, 10),
        customerId: `CUST-${order.id.split('-')[1]}`,

        // Generate shipping details
        shippingAddress: getRandomAddress(),
        shippingCity: getRandomCity(),
        shippingState: getRandomState(),
        shippingPincode: getRandomPincode(),
        shippingStatus: "pending",

        // Billing same as shipping
        billingAddress: getRandomAddress(),
        gstNumber: generateGSTNumber(),
        invoiceNumber: `INV-${order.date.replace(/-/g, '')}-${order.id.split('-')[1]}`,

        // Vendor details
        vendorName: order.vendor.toLowerCase().replace(/[^a-z]/g, '') + 'vendor',
        vendorType: getRandomVendorType(),
        vendorEarning: getRandomEarning(),
        payoutStatus: getRandomPayoutStatus(),

        // Payment details
        transactionId: `TXN-${Date.now().toString().slice(-6)}`,
        paymentStatus: order.status === 'pending' ? 'Pending' : 'Paid',
        paymentDate: new Date(order.date).toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        }),
        paymentGateway: getRandomPaymentGateway(),
        amountPaid: `₹${order.total.toFixed(2)}`,

        // Tracking details
        trackingNumber: generateTrackingNumber(),
        courierService: getRandomCourier(),
        trackingLastUpdated: new Date().toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        }) + ' PM',

        warehouseStatus: getRandomWarehouseStatus(),
        pickupStatus: Math.random() > 0.5,
        payoutsStatus: Math.random() > 0.5
      };

      return detailedData;
    }

    // Helper functions
    function getRandomAddress() {
      const addresses = [
        "123 Main Street, Apartment 4B",
        "456 Oak Avenue, Suite 12",
        "789 Pine Road, Floor 3",
        "101 Maple Lane, Building A",
        "202 Cedar Street, Unit 5"
      ];
      return addresses[Math.floor(Math.random() * addresses.length)];
    }

    function getRandomCity() {
      const cities = ["Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata"];
      return cities[Math.floor(Math.random() * cities.length)];
    }

    function getRandomState() {
      const states = ["Maharashtra", "Delhi", "Karnataka", "Tamil Nadu", "West Bengal"];
      return states[Math.floor(Math.random() * states.length)];
    }

    function getRandomPincode() {
      return Math.floor(400000 + Math.random() * 100000).toString();
    }

    function generateGSTNumber() {
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      let gst = '';
      for (let i = 0; i < 15; i++) {
        gst += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return gst;
    }

    function getRandomVendorType() {
      const types = ["Vendor", "Supplier", "Partner", "Reseller"];
      return types[Math.floor(Math.random() * types.length)];
    }

    function getRandomEarning() {
      const earnings = ["10% MCNO", "15% Fixed", "20% Commission", "12% + GST", "8% Net"];
      return earnings[Math.floor(Math.random() * earnings.length)];
    }

    function getRandomPayoutStatus() {
      const statuses = ["UNPAID", "PAID", "PROCESSING", "FAILED"];
      return statuses[Math.floor(Math.random() * statuses.length)];
    }

    function getRandomPaymentGateway() {
      const gateways = ["Razorpay", "Stripe", "PayPal", "Cash on Delivery"];
      return gateways[Math.floor(Math.random() * gateways.length)];
    }

    function generateTrackingNumber() {
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      let tracking = '';
      for (let i = 0; i < 12; i++) {
        tracking += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return tracking;
    }

    function getRandomCourier() {
      const couriers = ["BlueDart", "DTDC", "Delhivery", "FedEx", "Amazon Logistics"];
      return couriers[Math.floor(Math.random() * couriers.length)];
    }

    function getRandomWarehouseStatus() {
      const statuses = ["No Warehouse", "Has Warehouse", "Dropship", "Third Party"];
      return statuses[Math.floor(Math.random() * statuses.length)];
    }
