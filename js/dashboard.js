    document.addEventListener("DOMContentLoaded", function () {
      // Pending Approvals Data
      const approvalsData = [
        {
          type: "Vendor",
          name: "TechGadgets Inc.",
          time: "2 hours ago",
        },
        {
          type: "Product",
          name: "Wireless Earbuds Pro",
          time: "3 hours ago",
        },
        {
          type: "Vendor",
          name: "HomeStyle Living",
          time: "5 hours ago",
        },
        {
          type: "Product",
          name: "Ergonomic Office Chair",
          time: "1 day ago",
        },
        {
          type: "Vendor",
          name: "EcoFriendly Supplies",
          time: "1 day ago",
        },
      ];

      const syncStatusData = [
        {
          service: "Product Database",
          status: "success",
          time: "5 mins ago",
        },
        {
          service: "Vendor API",
          status: "warning",
          time: "15 mins ago",
        },
        {
          service: "Payment Gateway",
          status: "success",
          time: "30 mins ago",
        },
        {
          service: "Inventory System",
          status: "warning",
          time: "2 hours ago",
        },
        {
          service: "Shipping Service",
          status: "success",
          time: "1 hour ago",
        },
      ];

      // Populate Pending Approvals List
      const approvalsList = document.getElementById("approvalsList");
      approvalsData.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.className = "list-item";
        listItem.innerHTML = `
                    <div class="list-item-info">
                        <h4>${item.name}</h4>
                        <p>${item.type} • ${item.time}</p>
                    </div>
                    <span class="status ${item.type === "Vendor" ? "status-warning" : "status-info"
          }">${item.type}</span>
                `;
        approvalsList.appendChild(listItem);
      });

      // Populate Sync Status List
      const syncStatusList = document.getElementById("syncStatusList");
      syncStatusData.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.className = "list-item";

        let statusText, statusClass;
        if (item.status === "success") {
          statusText = "Synced";
          statusClass = "status-success";
        } else {
          statusText = "Error";
          statusClass = "status-warning";
        }

        listItem.innerHTML = `
                    <div class="list-item-info">
                        <h4>${item.service}</h4>
                        <p>Last sync: ${item.time}</p>
                    </div>
                    <span class="status ${statusClass}">${statusText}</span>
                `;
        syncStatusList.appendChild(listItem);
      });

      // Chart Simulation
      const ordersChart = document.getElementById("ordersChart");
      const chartData = {
        today: 342,
        week: 2184,
        month: 8920,
      };

      // Create a simple bar chart visualization
      ordersChart.innerHTML = "";
      ordersChart.style.flexDirection = "column";
      ordersChart.style.padding = "20px";

      const chartBars = document.createElement("div");
      chartBars.style.display = "flex";
      chartBars.style.justifyContent = "space-around";
      chartBars.style.alignItems = "flex-end";
      chartBars.style.height = "180px";
      chartBars.style.width = "100%";
      chartBars.style.marginBottom = "20px";

      // Create bars for each time period
      const periods = [
        {
          label: "Today",
          value: chartData.today,
          color: "#4361ee",
          height: 70,
        },
        {
          label: "This Week",
          value: chartData.week,
          color: "#3a86ff",
          height: 85,
        },
        {
          label: "This Month",
          value: chartData.month,
          color: "#8338ec",
          height: 100,
        },
      ];

      periods.forEach((period) => {
        const barContainer = document.createElement("div");
        barContainer.style.display = "flex";
        barContainer.style.flexDirection = "column";
        barContainer.style.alignItems = "center";

        const bar = document.createElement("div");
        bar.style.width = "60px";
        bar.style.height = `${period.height}%`;
        bar.style.backgroundColor = period.color;
        bar.style.borderRadius = "5px";
        bar.style.marginBottom = "10px";
        bar.style.transition = "height 0.5s ease";

        const barLabel = document.createElement("div");
        barLabel.textContent = period.label;
        barLabel.style.fontWeight = "600";
        barLabel.style.marginBottom = "5px";

        const barValue = document.createElement("div");
        barValue.textContent = period.value.toLocaleString();
        barValue.style.fontSize = "14px";
        barValue.style.color = "#6c757d";

        barContainer.appendChild(barLabel);
        barContainer.appendChild(bar);
        barContainer.appendChild(barValue);
        chartBars.appendChild(barContainer);
      });

      ordersChart.appendChild(chartBars);

      // Add chart title
      const chartTitle = document.createElement("div");
      chartTitle.textContent = "Orders by Time Period";
      chartTitle.style.fontWeight = "600";
      chartTitle.style.marginBottom = "10px";
      chartTitle.style.fontSize = "18px";
      ordersChart.insertBefore(chartTitle, chartBars);

      // Add some animation to bars
      setTimeout(() => {
        const bars = chartBars.querySelectorAll("div > div");
        bars.forEach((bar, index) => {
          if (bar.style.backgroundColor) {
            bar.style.height = periods[index].height + "%";
          }
        });
      }, 300);

      const approvalsLink = document.getElementById("approvalsLink");
      const approvalsAction = document.getElementById("approvalsAction");

      approvalsLink.addEventListener("click", function (e) {
        e.preventDefault();
        window.location.href = "vendor-management.html";
      });

      approvalsAction.addEventListener("click", function (e) {
        e.preventDefault();
      
      });

      setInterval(() => {
        const ordersTodayWidget = document.querySelector(
          ".widget:nth-child(5) .widget-stat"
        );
        const currentOrders = parseInt(
          ordersTodayWidget.textContent.replace(/,/g, "")
        );
        const change = Math.floor(Math.random() * 10) - 3; // -3 to +6
        const newOrders = Math.max(300, currentOrders + change);
        ordersTodayWidget.textContent = newOrders.toLocaleString();

        // Update the chart with new data
        const newChartData = {
          today: newOrders,
          week: Math.floor(newOrders * 6.5),
          month: Math.floor(newOrders * 26),
        };

        // Update chart bars
        const bars = chartBars.querySelectorAll("div > div");
        const newHeights = [70, 85, 100];

        bars.forEach((bar, index) => {
          if (bar.style.backgroundColor) {
            // Update the value label
            const barContainer = bar.parentElement;
            const valueElement = barContainer.lastChild;
            if (index === 0)
              valueElement.textContent = newChartData.today.toLocaleString();
            if (index === 1)
              valueElement.textContent = newChartData.week.toLocaleString();
            if (index === 2)
              valueElement.textContent = newChartData.month.toLocaleString();
          }
        });
      }, 5000); // Update every 5 seconds

      // Add click handlers to widgets that should navigate to vendor management
      const vendorWidgets = document.querySelectorAll(".widget");
      vendorWidgets[0].addEventListener("click", function () {
        // Total Vendors widget
        window.location.href = "vendor-management.html";
      });

      vendorWidgets[1].addEventListener("click", function () {
        // Active Vendors widget
        window.location.href = "vendor-management.html?filter=active";
      });

      vendorWidgets[7].addEventListener("click", function () {
        // Pending Approvals widget
        window.location.href = "vendor-management.html?filter=pending";
      });

      // Handle navigation based on URL parameters
      const urlParams = new URLSearchParams(window.location.search);
      const fromPage = urlParams.get("from");
      if (fromPage === "vendor-management") {
        // Show a welcome back message or update something
        console.log("Navigated back from vendor management page");
      }
    });
