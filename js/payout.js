
    let ordersData = [
      {
        date: "05-01-2020 12:18",
        order: "#1028",
        vendor: "VDC",
        products: "1 Products, 1 Items",
        status: "New Orders",
        return: "-",
        sales: "£10.42",
        commission: "£1.55",
        payout: "£9.07",
        payment: "None",
      },
      {
        date: "05-01-2020 10:14",
        order: "#1027",
        vendor: "VDC",
        products: "1 Products, 1 Items",
        status: "Conferred",
        return: "-",
        sales: "£0.74",
        commission: "£0.00",
        payout: "£0.64",
        payment: "None",
      },
      {
        date: "01-01-2020 21:06",
        order: "#1036",
        vendor: "mcwillghtwarkhop",
        products: "1 Products, 1 Items",
        status: "% Fixed",
        return: "-",
        sales: "£178.18",
        commission: "£23.80",
        payout: "£155.02",
        payment: "None",
      },
      {
        date: "01-01-2020 01:19",
        order: "#1025",
        vendor: "mcwillghtwarkhop",
        products: "1 Products, 1 Items",
        status: "% Fixed",
        return: "-",
        sales: "£178.08",
        commission: "£23.15",
        payout: "£154.93",
        payment: "None",
      },
      {
        date: "29-12-2022 02:31",
        order: "#1044",
        vendor: "rflorywatcheo",
        products: "1 Products, 1 Items",
        status: "% Fixed",
        return: "-",
        sales: "£192.47",
        commission: "£25.02",
        payout: "£167.45",
        payment: "None",
      },
      {
        date: "29-12-2023 01:15",
        order: "#1033",
        vendor: "mcwillghtwarkhop",
        products: "1 Products, 1 Items",
        status: "% Fixed",
        return: "-",
        sales: "£177.67",
        commission: "£23.10",
        payout: "£154.97",
        payment: "None",
      },
      {
        date: "22-12-2025 05:46",
        order: "#1022",
        vendor: "mcwillghtwarkhop",
        products: "1 Products, 1 Items",
        status: "New Orders",
        return: "-",
        sales: "£179.12",
        commission: "£23.29",
        payout: "£155.83",
        payment: "None",
      },
      {
        date: "12-12-2025 05:54",
        order: "#1030",
        vendor: "VDC",
        products: "1 Products, 1 Items",
        status: "New Orders",
        return: "-",
        sales: "£1.00",
        commission: "£0.15",
        payout: "£0.85",
        payment: "None",
      },
      {
        date: "11-12-2025 09:26",
        order: "#1019",
        vendor: "VDC",
        products: "1 Products, 1 Items",
        status: "% Fixed",
        return: "-",
        sales: "£392.67",
        commission: "£502.67",
        payout: "£0.00",
        payment: "None",
      },
    ];

    let vendorsData = [
      {
        vendor: "vtx Test",
        orders: 1,
        sales: "£0.00",
        commission: "£7.00",
        payout: "£7.00",
        payment: "None",
        contact: "contact@vtx.com",
        joined: "2023-01-15",
        rating: 4.5,
      },
      {
        vendor: "coretimegiesca",
        orders: 1,
        sales: "£0.00",
        commission: "£0.00",
        payout: "£0.00",
        payment: "None",
        contact: "info@coretime.com",
        joined: "2023-02-20",
        rating: 3.8,
      },
      {
        vendor: "Woo-commerce",
        orders: 3,
        sales: "£0.00",
        commission: "£48.20",
        payout: "£88.20",
        payment: "None",
        contact: "support@woo.com",
        joined: "2023-03-10",
        rating: 4.2,
      },
      {
        vendor: "nfeywatcheo",
        orders: 1,
        sales: "£192.47",
        commission: "£52.02",
        payout: "£107.45",
        payment: "None",
        contact: "sales@nfey.com",
        joined: "2023-04-05",
        rating: 4.7,
      },
      {
        vendor: "moonlightworkshop",
        orders: 5,
        sales: "£897.57",
        commission: "£204.47",
        payout: "£305.10",
        payment: "None",
        contact: "hello@moonlight.com",
        joined: "2023-01-30",
        rating: 4.9,
      },
      {
        vendor: "VOC",
        orders: 4,
        sales: "£524.83",
        commission: "£514.27",
        payout: "£10.50",
        payment: "None",
        contact: "admin@voc.com",
        joined: "2023-05-15",
        rating: 4.0,
      },
    ];

    // Chart data for different time periods
    const chartData = {
      monthly: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        payable: [
          12000, 15000, 18000, 14000, 22000, 19000, 24000, 21000, 18000,
          16000, 14000, 17000,
        ],
        unpaid: [
          8000, 7000, 9000, 6000, 11000, 10000, 13000, 12000, 9000, 8000,
          7000, 8500,
        ],
        paid: [
          20000, 22000, 24000, 21000, 28000, 26000, 30000, 29000, 25000,
          23000, 21000, 24000,
        ],
      },
      quarterly: {
        labels: ["Q1", "Q2", "Q3", "Q4"],
        payable: [45000, 55000, 63000, 47000],
        unpaid: [24000, 27000, 34000, 27500],
        paid: [66000, 75000, 84000, 68000],
      },
      yearly: {
        labels: ["2020", "2021", "2022", "2023", "2024", "2025"],
        payable: [180000, 210000, 240000, 280000, 310000, 350000],
        unpaid: [100000, 110000, 130000, 150000, 170000, 190000],
        paid: [280000, 320000, 370000, 430000, 480000, 540000],
      },
    };

    let currentView = "orders";
    let currentFilter = "all";
    let currentPage = 1;
    let currentSort = { column: "date", direction: "asc" };
    let chartPeriod = "monthly";
    const rowsPerPage = 8;
    let currentDetailItem = null;

    // DOM Elements
    const ordersBody = document.getElementById("ordersBody");
    const vendorBody = document.getElementById("vendorBody");
    const ordersTable = document.getElementById("ordersTable");
    const vendorTable = document.getElementById("vendorTable");
    const searchInput = document.getElementById("searchInput");
    const filterButtons = document.querySelectorAll(".filter-btn");
    const toggleButtons = document.querySelectorAll(".toggle-btn");
    const categoryTabs = document.querySelectorAll(".tab");
    const prevPageBtn = document.getElementById("prevPage");
    const nextPageBtn = document.getElementById("nextPage");
    const currentPageSpan = document.getElementById("currentPage");
    const totalPagesSpan = document.getElementById("totalPages");
    const detailModal = document.getElementById("detailModal");
    const closeModalBtn = document.getElementById("closeModalBtn");
    const closeModal = document.getElementById("closeModal");
    const modalTabs = document.querySelectorAll(".modal-tab");
    const vendorTab = document.getElementById("vendorTab");
    const productTab = document.getElementById("productTab");
    const payoutTab = document.getElementById("payoutTab");
    const modalTitle = document.getElementById("modalTitle");
    const notification = document.getElementById("notification");
    const notificationText = document.getElementById("notificationText");
    const refreshDataBtn = document.getElementById("refreshDataBtn");
    const totalPayableEl = document.getElementById("totalPayable");
    const unpaidInvoicesEl = document.getElementById("unpaidInvoices");
    const paidInvoicesEl = document.getElementById("paidInvoices");
    const payableChangeEl = document.getElementById("payableChange");
    const unpaidChangeEl = document.getElementById("unpaidChange");
    const paidChangeEl = document.getElementById("paidChange");
    const payableProgressEl = document.getElementById("payableProgress");
    const unpaidProgressEl = document.getElementById("unpaidProgress");
    const paidProgressEl = document.getElementById("paidProgress");
    const distributionPercentages = document.getElementById(
      "distributionPercentages"
    );
    const lastUpdatedText = document.getElementById("lastUpdatedText");
    const lastUpdatedEl = document.getElementById("lastUpdated");

    // Calculate dynamic stats
    function calculateStats() {
      let totalPayable = 0;
      let totalUnpaid = 0;
      let totalPaid = 0;

      // Calculate from orders data
      ordersData.forEach((order) => {
        const payout = parseFloat(order.payout.replace("£", "")) || 0;
        if (order.status === "New Orders" || order.status === "% Fixed") {
          totalPayable += payout;
        } else if (order.status === "Conferred") {
          totalUnpaid += payout;
        }
      });

      // Calculate from vendors data (for demonstration)
      vendorsData.forEach((vendor) => {
        const payout = parseFloat(vendor.payout.replace("£", "")) || 0;
        if (payout > 0) {
          totalPaid += payout;
        }
      });

      // Calculate last month's values (for demo, using 80% of current)
      const lastMonthPayable = totalPayable * 0.8;
      const lastMonthUnpaid = totalUnpaid * 1.2; // Increased for negative change
      const lastMonthPaid = totalPaid * 0.9;

      // Calculate percentage changes
      const payableChange = (
        ((totalPayable - lastMonthPayable) / lastMonthPayable) *
        100
      ).toFixed(1);
      const unpaidChange = (
        ((totalUnpaid - lastMonthUnpaid) / lastMonthUnpaid) *
        100
      ).toFixed(1);
      const paidChange = (
        ((totalPaid - lastMonthPaid) / lastMonthPaid) *
        100
      ).toFixed(1);

      // Calculate total for progress bars
      const total = totalPayable + totalUnpaid + totalPaid;
      const payablePercent =
        total > 0 ? ((totalPayable / total) * 100).toFixed(1) : 0;
      const unpaidPercent =
        total > 0 ? ((totalUnpaid / total) * 100).toFixed(1) : 0;
      const paidPercent =
        total > 0 ? ((totalPaid / total) * 100).toFixed(1) : 0;

      // Update DOM with animations
      animateValue(totalPayableEl, totalPayable, "£");
      animateValue(unpaidInvoicesEl, totalUnpaid, "£");
      animateValue(paidInvoicesEl, totalPaid, "£");

      payableChangeEl.textContent = `${payableChange}%`;
      unpaidChangeEl.textContent = `${unpaidChange}%`;
      paidChangeEl.textContent = `${paidChange}%`;

      // Update progress bars with animation
      setTimeout(() => {
        payableProgressEl.style.width = `${payablePercent}%`;
        unpaidProgressEl.style.width = `${unpaidPercent}%`;
        paidProgressEl.style.width = `${paidPercent}%`;
      }, 100);

      // Update distribution percentages
      updateDistributionPercentages(totalPayable, totalUnpaid, totalPaid);
    }

    // Animate number values
    function animateValue(element, targetValue, prefix = "") {
      const currentValue =
        parseFloat(
          element.textContent.replace(prefix, "").replace(",", "")
        ) || 0;
      const duration = 1000;
      const steps = 60;
      const increment = (targetValue - currentValue) / steps;
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        const newValue = currentValue + increment * currentStep;

        if (currentStep >= steps) {
          element.textContent = `${prefix}${targetValue.toLocaleString(
            "en-GB",
            { minimumFractionDigits: 2, maximumFractionDigits: 2 }
          )}`;
          clearInterval(timer);
        } else {
          element.textContent = `${prefix}${newValue.toLocaleString("en-GB", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}`;
        }
      }, duration / steps);
    }

    // Update distribution percentages
    function updateDistributionPercentages(payable, unpaid, paid) {
      const total = payable + unpaid + paid;
      const payablePercent =
        total > 0 ? ((payable / total) * 100).toFixed(1) : 0;
      const unpaidPercent =
        total > 0 ? ((unpaid / total) * 100).toFixed(1) : 0;
      const paidPercent = total > 0 ? ((paid / total) * 100).toFixed(1) : 0;

      distributionPercentages.innerHTML = `
    <div class="percentage-item" onclick="focusOnCategory('payable')">
      <div class="percentage-icon">
        <i class="fas fa-hand-holding-usd"></i>
      </div>
      <div class="percentage-label">Payable</div>
      <div class="percentage-value">${payablePercent}%</div>
      <div class="percentage-amount">£${payable.toLocaleString("en-GB", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}</div>
      <div class="percentage-trend positive">
        <i class="fas fa-arrow-up"></i> 12.5% from last month
      </div>
    </div>
    
    <div class="percentage-item" onclick="focusOnCategory('unpaid')">
      <div class="percentage-icon">
        <i class="fas fa-clock"></i>
      </div>
      <div class="percentage-label">Unpaid</div>
      <div class="percentage-value">${unpaidPercent}%</div>
      <div class="percentage-amount">£${unpaid.toLocaleString("en-GB", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}</div>
      <div class="percentage-trend negative">
        <i class="fas fa-arrow-down"></i> 5.3% from last month
      </div>
    </div>
    
    <div class="percentage-item" onclick="focusOnCategory('paid')">
      <div class="percentage-icon">
        <i class="fas fa-check-circle"></i>
      </div>
      <div class="percentage-label">Paid</div>
      <div class="percentage-value">${paidPercent}%</div>
      <div class="percentage-amount">£${paid.toLocaleString("en-GB", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}</div>
      <div class="percentage-trend positive">
        <i class="fas fa-arrow-up"></i> 18.7% from last month
      </div>
    </div>
  `;
    }

    function focusOnCategory(category) {
      showNotification(`Filtering view to show ${category} items`, "info");
      // In a real app, this would filter the table view
    }

    // Switch chart period
    function switchChartPeriod(period) {
      chartPeriod = period;

      document
        .querySelectorAll(".time-btn")
        .forEach((btn) => btn.classList.remove("active"));
      document
        .querySelector(`[data-period="${period}"]`)
        .classList.add("active");

      // Update the distribution percentages based on selected period
      const data = chartData[period];
      const payableTotal = data.payable.reduce((a, b) => a + b, 0);
      const unpaidTotal = data.unpaid.reduce((a, b) => a + b, 0);
      const paidTotal = data.paid.reduce((a, b) => a + b, 0);

      updateDistributionPercentages(payableTotal, unpaidTotal, paidTotal);
    }

    // Show notification
    function showNotification(message, type = "success") {
      notificationText.textContent = message;
      notification.className = "notification";

      if (type === "error") {
        notification.classList.add("error");
        notification.querySelector("i").className =
          "fas fa-exclamation-circle";
      } else if (type === "info") {
        notification.classList.add("info");
        notification.querySelector("i").className = "fas fa-info-circle";
      } else {
        notification.querySelector("i").className = "fas fa-check-circle";
      }

      notification.classList.add("show");

      setTimeout(() => {
        notification.classList.remove("show");
      }, 3000);
    }

    // Render Orders Table
    function renderOrders() {
      ordersBody.innerHTML = "";

      if (ordersData.length === 0) {
        ordersBody.innerHTML = `
      <tr>
        <td colspan="11" class="empty-state">
          <i class="fas fa-inbox"></i>
          <p>No orders found</p>
        </td>
      </tr>
    `;
        return;
      }

      // Filter orders
      let filteredOrders = [...ordersData];
      if (currentFilter !== "all") {
        filteredOrders = filteredOrders.filter((order) => {
          if (currentFilter === "new") return order.status === "New Orders";
          if (currentFilter === "fixed") return order.status === "% Fixed";
          if (currentFilter === "conferred")
            return order.status === "Conferred";
          return true;
        });
      }

      // Search filter
      const searchTerm = searchInput.value.toLowerCase();
      if (searchTerm) {
        filteredOrders = filteredOrders.filter(
          (order) =>
            order.vendor.toLowerCase().includes(searchTerm) ||
            order.order.toLowerCase().includes(searchTerm) ||
            order.payment.toLowerCase().includes(searchTerm)
        );
      }

      // Sort orders
      filteredOrders.sort((a, b) => {
        let aValue = a[currentSort.column];
        let bValue = b[currentSort.column];

        // Handle numeric values
        if (["sales", "commission", "payout"].includes(currentSort.column)) {
          aValue = parseFloat(aValue.replace("£", "")) || 0;
          bValue = parseFloat(bValue.replace("£", "")) || 0;
        }

        if (currentSort.direction === "asc") {
          return aValue > bValue ? 1 : -1;
        } else {
          return aValue < bValue ? 1 : -1;
        }
      });

      // Pagination
      const totalPages = Math.ceil(filteredOrders.length / rowsPerPage);
      const startIndex = (currentPage - 1) * rowsPerPage;
      const endIndex = startIndex + rowsPerPage;
      const pageOrders = filteredOrders.slice(startIndex, endIndex);

      // Update pagination
      currentPageSpan.textContent = currentPage;
      totalPagesSpan.textContent = totalPages;
      prevPageBtn.disabled = currentPage === 1;
      nextPageBtn.disabled = currentPage === totalPages || totalPages === 0;

      // Render rows with staggered animation
      pageOrders.forEach((order, index) => {
        setTimeout(() => {
          const row = document.createElement("tr");
          row.style.opacity = "0";
          row.style.transform = "translateX(-20px)";

          // Determine status class
          let statusClass = "status-new";
          if (order.status === "% Fixed") statusClass = "status-fixed";
          if (order.status === "Conferred") statusClass = "status-unpaid";

          row.innerHTML = `
        <td>${order.date}</td>
        <td><strong>${order.order}</strong></td>
        <td>${order.vendor}</td>
        <td>${order.products}</td>
        <td><span class="status-badge ${statusClass}">${order.status}</span></td>
        <td>${order.return}</td>
        <td><strong>${order.sales}</strong></td>
        <td>${order.commission}</td>
        <td><strong style="color:#2ecc71">${order.payout}</strong></td>
        <td><span class="payment-method">${order.payment}</span></td>
        <td>
          <div class="actions">
            <button class="btn btn-payable" onclick="pushToPayable('${order.order}', this)">
              Push To Payable
            </button>
            <div class="btn-dropdown">
              <button class="btn btn-detail">
                View Detail <i class="fas fa-chevron-down"></i>
              </button>
              <div class="btn-dropdown-menu">
                <button class="btn-dropdown-item" onclick="showDetails('order', '${order.order}')">
                  <i class="fas fa-eye"></i> View Details
                </button>
                <button class="btn-dropdown-item" onclick="pushToPayable('${order.order}')">
                  <i class="fas fa-paper-plane"></i> Push To Payable
                </button>
                <button class="btn-dropdown-item" onclick="markAsPaid('${order.order}')">
                  <i class="fas fa-check"></i> Mark as Paid
                </button>
              </div>
            </div>
          </div>
        </td>
      `;
          ordersBody.appendChild(row);

          // Animate row entry
          setTimeout(() => {
            row.style.opacity = "1";
            row.style.transform = "translateX(0)";
            row.style.transition = "all 0.3s ease";
          }, 10);
        }, index * 50);
      });
    }

    // Render Vendors Table
    function renderVendors() {
      vendorBody.innerHTML = "";

      if (vendorsData.length === 0) {
        vendorBody.innerHTML = `
      <tr>
        <td colspan="7" class="empty-state">
          <i class="fas fa-users"></i>
          <p>No vendors found</p>
        </td>
      </tr>
    `;
        return;
      }

      // Filter vendors
      let filteredVendors = [...vendorsData];
      const searchTerm = searchInput.value.toLowerCase();
      if (searchTerm) {
        filteredVendors = filteredVendors.filter(
          (vendor) =>
            vendor.vendor.toLowerCase().includes(searchTerm) ||
            vendor.payment.toLowerCase().includes(searchTerm)
        );
      }

      // Sort vendors
      filteredVendors.sort((a, b) => {
        let aValue = a[currentSort.column];
        let bValue = b[currentSort.column];

        // Handle numeric values
        if (
          ["orders", "sales", "commission", "payout"].includes(
            currentSort.column
          )
        ) {
          aValue = parseFloat(aValue.replace("£", "").replace(",", "")) || 0;
          bValue = parseFloat(bValue.replace("£", "").replace(",", "")) || 0;
        }

        if (currentSort.direction === "asc") {
          return aValue > bValue ? 1 : -1;
        } else {
          return aValue < bValue ? 1 : -1;
        }
      });

      // Calculate pagination for vendors
      const totalPages = Math.ceil(filteredVendors.length / rowsPerPage);
      const startIndex = (currentPage - 1) * rowsPerPage;
      const endIndex = startIndex + rowsPerPage;
      const pageVendors = filteredVendors.slice(startIndex, endIndex);

      // Update pagination
      currentPageSpan.textContent = currentPage;
      totalPagesSpan.textContent = totalPages;
      prevPageBtn.disabled = currentPage === 1;
      nextPageBtn.disabled = currentPage === totalPages || totalPages === 0;

      // Render rows with staggered animation
      pageVendors.forEach((vendor, index) => {
        setTimeout(() => {
          const row = document.createElement("tr");
          row.style.opacity = "0";
          row.style.transform = "translateX(-20px)";

          row.innerHTML = `
        <td><strong>${vendor.vendor}</strong></td>
        <td>${vendor.orders}</td>
        <td><strong>${vendor.sales}</strong></td>
        <td>${vendor.commission}</td>
        <td><strong style="color:#2ecc71">${vendor.payout}</strong></td>
        <td><span class="payment-method">${vendor.payment}</span></td>
        <td>
          <div class="actions">
            <button class="btn btn-payable" onclick="pushToPayable('${vendor.vendor}', this)">
              Push To Payable
            </button>
            <div class="btn-dropdown">
              <button class="btn btn-detail">
                View Detail <i class="fas fa-chevron-down"></i>
              </button>
              <div class="btn-dropdown-menu">
                <button class="btn-dropdown-item" onclick="showDetails('vendor', '${vendor.vendor}')">
                  <i class="fas fa-eye"></i> View Details
                </button>
                <button class="btn-dropdown-item" onclick="pushToPayable('${vendor.vendor}')">
                  <i class="fas fa-paper-plane"></i> Push To Payable
                </button>
                <button class="btn-dropdown-item" onclick="exportVendorData('${vendor.vendor}')">
                  <i class="fas fa-download"></i> Export Data
                </button>
              </div>
            </div>
          </div>
        </td>
      `;
          vendorBody.appendChild(row);

          // Animate row entry
          setTimeout(() => {
            row.style.opacity = "1";
            row.style.transform = "translateX(0)";
            row.style.transition = "all 0.3s ease";
          }, 10);
        }, index * 50);
      });
    }

    // Switch between orders and vendors view
    function switchView(view) {
      currentView = view;
      currentPage = 1;

      toggleButtons.forEach((btn) => btn.classList.remove("active"));
      document.querySelector(`[data-view="${view}"]`).classList.add("active");

      if (view === "orders") {
        ordersTable.style.display = "table";
        vendorTable.style.display = "none";
        document.querySelector(".filter-buttons").style.display = "flex";
        renderOrders();
      } else {
        ordersTable.style.display = "none";
        vendorTable.style.display = "table";
        document.querySelector(".filter-buttons").style.display = "none";
        renderVendors();
      }
    }

    // Show details modal
    function showDetails(type, id) {
      currentDetailItem = { type, id };

      // Set modal title
      modalTitle.textContent = `${type === "order" ? "Order" : "Vendor"
        } Details: ${id}`;

      // Load vendor tab
      loadVendorTab(type, id);

      // Load product tab
      loadProductTab(type, id);

      // Load payout tab
      loadPayoutTab(type, id);

      // Reset tabs to vendor tab
      modalTabs.forEach((tab) => tab.classList.remove("active"));
      document.querySelector('[data-tab="vendor"]').classList.add("active");
      vendorTab.style.display = "block";
      productTab.style.display = "none";
      payoutTab.style.display = "none";

      // Show modal
      detailModal.classList.add("show");
    }

    // Load vendor tab content
    function loadVendorTab(type, id) {
      let vendorData = null;

      if (type === "order") {
        const order = ordersData.find((o) => o.order === id);
        vendorData = vendorsData.find((v) => v.vendor === order.vendor);
      } else {
        vendorData = vendorsData.find((v) => v.vendor === id);
      }

      if (!vendorData) return;

      const joinDate = new Date(vendorData.joined);
      const formattedDate = joinDate.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });

      vendorTab.innerHTML = `
    <div style="display:flex;align-items:center;gap:15px;margin-bottom:20px">
      <div style="width:70px;height:70px;background:linear-gradient(135deg, #3498db, #2c3e50);border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:28px;font-weight:bold;box-shadow:0 5px 15px rgba(52,152,219,.3)">
        ${vendorData.vendor.charAt(0)}
      </div>
      <div>
        <h3 style="margin:0 0 5px 0;color:#2c3e50">${vendorData.vendor}</h3>
        <p style="margin:0;color:#7f8c8d">${vendorData.contact}</p>
        <div style="display:flex;align-items:center;gap:5px;margin-top:5px">
          ${getStarRating(vendorData.rating)}
          <span style="color:#f39c12">${vendorData.rating}</span>
        </div>
      </div>
    </div>
    
    <div class="modal-detail-item">
      <span class="modal-label">Contact Email:</span>
      <span class="modal-value">${vendorData.contact}</span>
    </div>
    <div class="modal-detail-item">
      <span class="modal-label">Date Joined:</span>
      <span class="modal-value">${formattedDate}</span>
    </div>
    <div class="modal-detail-item">
      <span class="modal-label">Total Orders:</span>
      <span class="modal-value">${vendorData.orders}</span>
    </div>
    <div class="modal-detail-item">
      <span class="modal-label">Total Sales:</span>
      <span class="modal-value">${vendorData.sales}</span>
    </div>
    <div class="modal-detail-item">
      <span class="modal-label">Total Commission:</span>
      <span class="modal-value">${vendorData.commission}</span>
    </div>
    <div class="modal-detail-item">
      <span class="modal-label">Total Payouts:</span>
      <span class="modal-value positive">${vendorData.payout}</span>
    </div>
    <div class="modal-detail-item">
      <span class="modal-label">Payment Method:</span>
      <span class="modal-value">${vendorData.payment}</span>
    </div>
  `;
    }

    // Load product tab content
    function loadProductTab(type, id) {
      // This would be populated with real product data
      productTab.innerHTML = `
    <div class="empty-state" style="padding:30px 0">
      <i class="fas fa-box"></i>
      <p>Product data loading...</p>
    </div>
  `;
    }

    // Load payout tab content
    function loadPayoutTab(type, id) {
      let payoutData = null;

      if (type === "order") {
        const order = ordersData.find((o) => o.order === id);
        payoutData = order;
      } else {
        const vendor = vendorsData.find((v) => v.vendor === id);
        payoutData = vendor;
      }

      if (!payoutData) return;

      const salesValue = parseFloat(payoutData.sales.replace("£", ""));
      const commissionValue = parseFloat(
        payoutData.commission.replace("£", "")
      );
      const payoutValue = parseFloat(payoutData.payout.replace("£", ""));
      const commissionRate =
        salesValue > 0
          ? ((commissionValue / salesValue) * 100).toFixed(2)
          : "0.00";

      payoutTab.innerHTML = `
    <div style="margin-bottom:20px">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">
        <h3 style="margin:0;color:#2c3e50">Financial Summary</h3>
        <span class="modal-value positive" style="font-size:24px">${payoutData.payout
        }</span>
      </div>
      <p style="color:#7f8c8d;margin:0">Total amount to be paid to ${type === "order" ? "vendor for this order" : "vendor"
        }</p>
    </div>
    
    <div class="modal-detail-item">
      <span class="modal-label">Gross Sales:</span>
      <span class="modal-value">${payoutData.sales}</span>
    </div>
    <div class="modal-detail-item">
      <span class="modal-label">Commission:</span>
      <span class="modal-value">${payoutData.commission}</span>
    </div>
    <div class="modal-detail-item">
      <span class="modal-label">Commission Rate:</span>
      <span class="modal-value">${commissionRate}%</span>
    </div>
    <div class="modal-detail-item">
      <span class="modal-label">Net Payout:</span>
      <span class="modal-value positive">${payoutData.payout}</span>
    </div>
    <div class="modal-detail-item">
      <span class="modal-label">Payment Method:</span>
      <span class="modal-value">${payoutData.payment}</span>
    </div>
    <div class="modal-detail-item">
      <span class="modal-label">Payment Status:</span>
      <span class="modal-value ${payoutValue > 0 ? "positive" : "negative"}">
        ${payoutValue > 0 ? "Payable" : "No Payout Required"}
      </span>
    </div>
    
    <div style="margin-top:25px;padding:15px;background:#f8f9fa;border-radius:8px">
      <div style="display:flex;justify-content:space-between;margin-bottom:10px">
        <span style="color:#7f8c8d">Next Payout Date:</span>
        <span style="font-weight:600;color:#2c3e50">${getNextPayoutDate()}</span>
      </div>
      <div style="display:flex;justify-content:space-between">
        <span style="color:#7f8c8d">Payout Method:</span>
        <span style="font-weight:600;color:#2c3e50">${payoutData.payment}</span>
      </div>
    </div>
  `;
    }

    // Helper function for star rating
    function getStarRating(rating) {
      let stars = "";
      const fullStars = Math.floor(rating);
      const hasHalfStar = rating % 1 >= 0.5;

      for (let i = 1; i <= 5; i++) {
        if (i <= fullStars) {
          stars += '<i class="fas fa-star" style="color:#f39c12"></i>';
        } else if (i === fullStars + 1 && hasHalfStar) {
          stars +=
            '<i class="fas fa-star-half-alt" style="color:#f39c12"></i>';
        } else {
          stars += '<i class="far fa-star" style="color:#ddd"></i>';
        }
      }

      return stars;
    }

    // Helper function for next payout date
    function getNextPayoutDate() {
      const today = new Date();
      const nextPayout = new Date(today);
      nextPayout.setDate(today.getDate() + 7);
      return nextPayout.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });
    }

    // Push to payable function with animation
    function pushToPayable(id, button = null) {
      if (button) {
        // Show loading animation
        const originalText = button.innerHTML;
        button.innerHTML = '<div class="loading"></div>';
        button.disabled = true;

        setTimeout(() => {
          // Restore button
          button.innerHTML = originalText;
          button.disabled = false;

          // Update data
          if (currentView === "orders") {
            const order = ordersData.find((o) => o.order === id);
            if (order) {
              order.status = "Paid";
              showNotification(
                `Order ${id} pushed to payable successfully!`,
                "success"
              );
              calculateStats();
              renderOrders();
            }
          } else {
            const vendor = vendorsData.find((v) => v.vendor === id);
            if (vendor) {
              showNotification(
                `Vendor ${id} processed successfully!`,
                "success"
              );
            }
          }
        }, 1000);
      } else {
        showNotification(`Pushed ${id} to payable successfully!`, "success");
      }
    }

    // Mark as paid
    function markAsPaid(orderId) {
      const order = ordersData.find((o) => o.order === orderId);
      if (order) {
        order.status = "Paid";
        showNotification(`Order ${orderId} marked as paid!`, "success");
        calculateStats();
        renderOrders();
        detailModal.classList.remove("show");
      }
    }

    // Export vendor data
    function exportVendorData(vendorName) {
      showNotification(`Exporting data for ${vendorName}...`, "info");
      setTimeout(() => {
        showNotification(
          `Data for ${vendorName} exported successfully!`,
          "success"
        );
      }, 1500);
    }

    // Refresh data
    function refreshData() {
      lastUpdatedText.innerHTML =
        '<i class="fas fa-sync-alt fa-spin"></i> Updating data...';
      refreshDataBtn.disabled = true;
      refreshDataBtn.innerHTML = '<div class="loading"></div>';

      // Simulate API call
      setTimeout(() => {
        // Update chart data with some random variation
        chartData.monthly.payable = chartData.monthly.payable.map(
          (val) => val * (0.9 + Math.random() * 0.2)
        );
        chartData.monthly.unpaid = chartData.monthly.unpaid.map(
          (val) => val * (0.9 + Math.random() * 0.2)
        );
        chartData.monthly.paid = chartData.monthly.paid.map(
          (val) => val * (0.9 + Math.random() * 0.2)
        );

        calculateStats();

        if (currentView === "orders") {
          renderOrders();
        } else {
          renderVendors();
        }

        updateLastUpdated();
        showNotification("Data refreshed successfully!", "success");

        refreshDataBtn.disabled = false;
        refreshDataBtn.innerHTML = '<i class="fas fa-sync-alt"></i> Refresh';
        lastUpdatedText.textContent = "Data updates in real-time";
      }, 1500);
    }

    // Update last updated time
    function updateLastUpdated() {
      const now = new Date();
      const timeString = now.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      lastUpdatedEl.textContent = `Today ${timeString}`;
    }

    // Initialize
    function init() {
      // Initial render
      renderOrders();
      calculateStats();

      // View toggle buttons event listeners
      toggleButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
          const view = btn.dataset.view;
          switchView(view);
        });
      });

      // Category tabs event listeners
      categoryTabs.forEach((tab) => {
        tab.addEventListener("click", () => {
          categoryTabs.forEach((t) => t.classList.remove("active"));
          tab.classList.add("active");
          const category = tab.dataset.category;

          // Show different views based on category
          if (category === "in-process") {
            switchView("orders");
            currentFilter = "all";
            filterButtons.forEach((btn) => btn.classList.remove("active"));
            document
              .querySelector('[data-filter="all"]')
              .classList.add("active");
          } else {
            switchView("vendors");
          }
        });
      });

      // Filter buttons event listeners
      filterButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
          if (currentView === "vendors") return;

          filterButtons.forEach((b) => b.classList.remove("active"));
          btn.classList.add("active");
          currentFilter = btn.dataset.filter;
          currentPage = 1;
          renderOrders();
        });
      });

      // Search input event listener
      searchInput.addEventListener("input", () => {
        currentPage = 1;
        if (currentView === "orders") {
          renderOrders();
        } else {
          renderVendors();
        }
      });

      // Sortable column headers
      document.querySelectorAll(".sortable").forEach((header) => {
        header.addEventListener("click", () => {
          const column = header.dataset.sort;

          // Update sort direction
          if (currentSort.column === column) {
            currentSort.direction =
              currentSort.direction === "asc" ? "desc" : "asc";
          } else {
            currentSort.column = column;
            currentSort.direction = "asc";
          }

          // Update sort icons
          document.querySelectorAll(".sortable i").forEach((icon) => {
            icon.className = "fas fa-sort";
          });

          const icon = header.querySelector("i");
          icon.className =
            currentSort.direction === "asc"
              ? "fas fa-sort-up"
              : "fas fa-sort-down";

          // Re-render table
          if (currentView === "orders") {
            renderOrders();
          } else {
            renderVendors();
          }
        });
      });

      // Refresh button
      refreshDataBtn.addEventListener("click", refreshData);

      // Chart time period buttons
      document.querySelectorAll(".time-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          const period = btn.dataset.period;
          switchChartPeriod(period);
        });
      });

      // Pagination event listeners
      prevPageBtn.addEventListener("click", () => {
        if (currentPage > 1) {
          currentPage--;
          if (currentView === "orders") {
            renderOrders();
          } else {
            renderVendors();
          }
        }
      });

      nextPageBtn.addEventListener("click", () => {
        const totalRows =
          currentView === "orders" ? ordersData.length : vendorsData.length;
        const totalPages = Math.ceil(totalRows / rowsPerPage);

        if (currentPage < totalPages) {
          currentPage++;
          if (currentView === "orders") {
            renderOrders();
          } else {
            renderVendors();
          }
        }
      });

      // Modal tab event listeners
      modalTabs.forEach((tab) => {
        tab.addEventListener("click", () => {
          modalTabs.forEach((t) => t.classList.remove("active"));
          tab.classList.add("active");

          const tabName = tab.dataset.tab;
          vendorTab.style.display = tabName === "vendor" ? "block" : "none";
          productTab.style.display = tabName === "product" ? "block" : "none";
          payoutTab.style.display = tabName === "payout" ? "block" : "none";
        });
      });

      // Modal close event listeners
      closeModal.addEventListener("click", () => {
        detailModal.classList.remove("show");
      });

      closeModalBtn.addEventListener("click", () => {
        detailModal.classList.remove("show");
      });

      // Close modal when clicking outside
      detailModal.addEventListener("click", (e) => {
        if (e.target === detailModal) {
          detailModal.classList.remove("show");
        }
      });

      // Process payment button
      document
        .getElementById("processPaymentBtn")
        .addEventListener("click", () => {
          if (currentDetailItem) {
            const { type, id } = currentDetailItem;
            pushToPayable(id);
            detailModal.classList.remove("show");
          }
        });

      // Initialize last updated time
      updateLastUpdated();

      // Simulate real-time updates every 30 seconds
      setInterval(() => {
        // In a real app, this would fetch new data
        updateLastUpdated();
      }, 30000);
    }

    // Initialize when DOM is loaded
    document.addEventListener("DOMContentLoaded", init);
