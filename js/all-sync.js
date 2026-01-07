
      const urlParams = new URLSearchParams(window.location.search);
      const vendorId = urlParams.get("id") || 1; 
      
      document.addEventListener("DOMContentLoaded", function () {
        loadVendorInfo();
        initializeSyncSettings();
        loadErrorLogs();
        loadSyncLogs();
      });

      function loadVendorInfo() {
        const vendor =
          vendorsData.find((v) => v.id == vendorId) || vendorsData[0];
        const vendorInfoCard = document.getElementById("vendorInfoCard");

        vendorInfoCard.innerHTML = `
                <div class="vendor-avatar" style="background-color: ${
                  vendor.avatarColor
                }">
                    ${vendor.name.charAt(0)}
                </div>
                <div class="vendor-details">
                    <h3>${vendor.name}</h3>
                    <p>${vendor.email}</p>
                    <p><strong>Platform:</strong> ${
                      vendor.platform === "shopify"
                        ? "Shopify"
                        : vendor.platform === "woo"
                        ? "WooCommerce"
                        : "Wix"
                    }</p>
                    <div class="vendor-stats">
                        <div class="stat-item">
                            <div class="stat-value">${vendor.products}</div>
                            <div class="stat-label">Products</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-value" style="color: #28a745;">${Math.floor(
                              vendor.products * 0.95
                            )}</div>
                            <div class="stat-label">Active</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-value" style="color: #ffc107;">${Math.floor(
                              vendor.products * 0.03
                            )}</div>
                            <div class="stat-label">Pending</div>
                        </div>
                    </div>
                </div>
            `;

        document.getElementById("totalProducts").textContent = vendor.products;
        document.getElementById("syncedProducts").textContent = Math.floor(
          vendor.products * 0.95
        );
        document.getElementById("failedProducts").textContent = Math.floor(
          vendor.products * 0.02
        );
        document.getElementById("pendingProducts").textContent = Math.floor(
          vendor.products * 0.03
        );
      }

      function initializeSyncSettings() {
        const vendor =
          vendorsData.find((v) => v.id == vendorId) || vendorsData[0];
        const settings = vendor.syncSettings;

        document
          .querySelectorAll("#productSyncMode .frequency-option")
          .forEach((option) => {
            if (option.dataset.value === settings.productSyncMode) {
              option.classList.add("active");
            } else {
              option.classList.remove("active");
            }
          });

        document.getElementById("inventorySyncToggle").checked =
          settings.inventorySync;
        document.getElementById("priceSyncToggle").checked = settings.priceSync;
        document.getElementById("imageSyncToggle").checked = settings.imageSync;
        document.getElementById("descriptionSyncToggle").checked =
          settings.descriptionSync;
        document.getElementById("variantsSyncToggle").checked =
          settings.variantsSync;
        document.getElementById("outOfStockSyncToggle").checked =
          settings.outOfStockSync;
        document.getElementById("categoriesSyncToggle").checked =
          settings.categoriesSync;
        document.getElementById("reviewsSyncToggle").checked =
          settings.reviewsSync;

        document.getElementById("lastProductSync").textContent = formatTime(
          new Date(vendor.lastSync)
        );

        document
          .querySelectorAll("#productSyncMode .frequency-option")
          .forEach((option) => {
            option.addEventListener("click", function () {
              document
                .querySelectorAll("#productSyncMode .frequency-option")
                .forEach((opt) => {
                  opt.classList.remove("active");
                });
              this.classList.add("active");

              const mode = this.dataset.value;
              const statusText = document.getElementById(
                "productSyncStatusText"
              );
              const statusIndicator =
                document.getElementById("productSyncStatus");

              if (mode === "realtime") {
                statusText.textContent = "Real-time sync active";
                statusIndicator.style.backgroundColor = "#4cc9f0";
              } else if (mode === "scheduled") {
                statusText.textContent = "Scheduled sync (every 4 hours)";
                statusIndicator.style.backgroundColor = "#ffc107";
              } else {
                statusText.textContent = "Manual sync only";
                statusIndicator.style.backgroundColor = "#6c757d";
              }
            });
          });

      
        document
          .getElementById("productSyncNow")
          .addEventListener("click", function () {
            const syncBtn = this;
            const originalText = syncBtn.innerHTML;

         
            syncBtn.innerHTML =
              '<i class="fas fa-spinner fa-spin"></i> Syncing...';
            syncBtn.disabled = true;

            document.getElementById("productSyncStatusText").textContent =
              "Syncing...";
            document.getElementById("productSyncStatus").style.backgroundColor =
              "#ffc107";

          
            setTimeout(() => {
        
              const vendor =
                vendorsData.find((v) => v.id == vendorId) || vendorsData[0];
              vendor.lastSync = new Date().toISOString();

            
              document.getElementById("lastProductSync").textContent =
                "Just now";
              document.getElementById("productSyncStatusText").textContent =
                "Last sync: Just now";
              document.getElementById(
                "productSyncStatus"
              ).style.backgroundColor = "#4cc9f0";

            
              syncBtn.innerHTML = originalText;
              syncBtn.disabled = false;

           
              addSyncLog(
                "Product Sync",
                "success",
                `${vendor.products} products`,
                "Products synced successfully"
              );
 showNotification(
                "Product sync completed successfully!",
                "success"
              );

              updateSyncStats();
            }, 2000);
          });

        document
          .getElementById("saveProductSettings")
          .addEventListener("click", function () {
            const saveBtn = this;
            const originalText = saveBtn.innerHTML;

            
            const activeMode = document.querySelector(
              "#productSyncMode .frequency-option.active"
            );

          
            const vendor =
              vendorsData.find((v) => v.id == vendorId) || vendorsData[0];
            vendor.syncSettings.productSyncMode = activeMode
              ? activeMode.dataset.value
              : "realtime";
            vendor.syncSettings.inventorySync = document.getElementById(
              "inventorySyncToggle"
            ).checked;
            vendor.syncSettings.priceSync =
              document.getElementById("priceSyncToggle").checked;
            vendor.syncSettings.imageSync =
              document.getElementById("imageSyncToggle").checked;
            vendor.syncSettings.descriptionSync = document.getElementById(
              "descriptionSyncToggle"
            ).checked;
            vendor.syncSettings.variantsSync =
              document.getElementById("variantsSyncToggle").checked;
            vendor.syncSettings.outOfStockSync = document.getElementById(
              "outOfStockSyncToggle"
            ).checked;
            vendor.syncSettings.categoriesSync = document.getElementById(
              "categoriesSyncToggle"
            ).checked;
            vendor.syncSettings.reviewsSync =
              document.getElementById("reviewsSyncToggle").checked;

           
            saveBtn.innerHTML = '<i class="fas fa-check"></i> Settings Saved';
            saveBtn.style.backgroundColor = "#28a745";

            
            addSyncLog(
              "Settings Update",
              "success",
              "Product sync settings",
              "Settings updated successfully"
            );

            setTimeout(() => {
              saveBtn.innerHTML = originalText;
              saveBtn.style.backgroundColor = "";
            }, 2000);

            showNotification("Sync settings saved successfully!", "success");
          });
      }

      function loadErrorLogs() {
        const errorLogContainer = document.getElementById("errorLogContainer");
        const errors = [
          {
            time: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
            message: "Failed to sync product #45678: Connection timeout",
          },
          {
            time: new Date(Date.now() - 5 * 60 * 60 * 1000), // 5 hours ago
            message: "Inventory update failed for SKU: TECH-12345",
          },
          {
            time: new Date(Date.now() - 24 * 60 * 60 * 1000), // 24 hours ago
            message: "Product image sync failed: Invalid image format",
          },
        ];

        errorLogContainer.innerHTML = "";
        errors.forEach((error) => {
          const errorEntry = document.createElement("div");
          errorEntry.className = "error-entry";
          errorEntry.innerHTML = `
                    <div class="error-time">${formatTime(error.time)}</div>
                    <div class="error-message">${error.message}</div>
                `;
          errorLogContainer.appendChild(errorEntry);
        });

        document.getElementById(
          "errorLogCount"
        ).textContent = `${errors.length} errors in last 24 hours`;
      }

      function loadSyncLogs() {
        const syncLogsTable = document.getElementById("syncLogsTable");
        const logs = [
          {
            time: new Date(),
            type: "Product Sync",
            status: "success",
            items: "245 products",
            details: "Updated prices and inventory",
          },
          {
            time: new Date(Date.now() - 2 * 60 * 60 * 1000),
            type: "Product Sync",
            status: "error",
            items: "1 product",
            details: "Connection timeout",
          },
          {
            time: new Date(Date.now() - 6 * 60 * 60 * 1000),
            type: "Product Sync",
            status: "success",
            items: "15 products",
            details: "New products added",
          },
          {
            time: new Date(Date.now() - 12 * 60 * 60 * 1000),
            type: "Settings Update",
            status: "success",
            items: "Sync settings",
            details: "Settings updated",
          },
        ];

        syncLogsTable.innerHTML = "";
        logs.forEach((log) => {
          const row = document.createElement("tr");
          row.innerHTML = `
                    <td>${formatTime(log.time)}</td>
                    <td>${log.type}</td>
                    <td><span class="log-status ${log.status}">${
            log.status.charAt(0).toUpperCase() + log.status.slice(1)
          }</span></td>
                    <td>${log.items}</td>
                    <td>${log.details}</td>
                `;
          syncLogsTable.appendChild(row);
        });
      }

      function addSyncLog(type, status, items, details) {
        const syncLogsTable = document.getElementById("syncLogsTable");
        const now = new Date();

        const row = document.createElement("tr");
        row.innerHTML = `
                <td>${formatTime(now)}</td>
                <td>${type}</td>
                <td><span class="log-status ${status}">${
          status.charAt(0).toUpperCase() + status.slice(1)
        }</span></td>
                <td>${items}</td>
                <td>${details}</td>
            `;

      
        if (syncLogsTable.firstChild) {
          syncLogsTable.insertBefore(row, syncLogsTable.firstChild);
        } else {
          syncLogsTable.appendChild(row);
        }

    
        const rows = syncLogsTable.querySelectorAll("tr");
        if (rows.length > 10) {
          syncLogsTable.removeChild(rows[rows.length - 1]);
        }
      }

   
      function updateSyncStats() {
        const vendor =
          vendorsData.find((v) => v.id == vendorId) || vendorsData[0];
        const synced = Math.floor(vendor.products * 0.95 + Math.random() * 5);
        const failed = Math.floor(vendor.products * 0.02 + Math.random() * 2);
        const pending = vendor.products - synced - failed;

        document.getElementById("syncedProducts").textContent = synced;
        document.getElementById("failedProducts").textContent = failed;
        document.getElementById("pendingProducts").textContent = pending;
      }

   
      function formatTime(date) {
        const now = new Date();
        const diffMs = now - date;
        const diffMins = Math.floor(diffMs / 60000);
        const diffHours = Math.floor(diffMs / 3600000);
        const diffDays = Math.floor(diffMs / 86400000);

        if (diffMins < 1) return "Just now";
        if (diffMins < 60)
          return `${diffMins} minute${diffMins > 1 ? "s" : ""} ago`;
        if (diffHours < 24)
          return `${diffHours} hour${diffHours > 1 ? "s" : ""} ago`;

        return date.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        });
      }

      function showNotification(message, type = "success") {
 
        const notification = document.createElement("div");
        notification.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                padding: 15px 25px;
                background-color: ${type === "success" ? "#28a745" : "#dc3545"};
                color: white;
                border-radius: var(--border-radius);
                box-shadow: var(--box-shadow);
                z-index: 1000;
                animation: slideIn 0.3s ease;
            `;

        const style = document.createElement("style");
        style.textContent = `
                @keyframes slideIn {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
            `;
        document.head.appendChild(style);

        notification.innerHTML = `
                <i class="fas fa-${
                  type === "success" ? "check-circle" : "exclamation-circle"
                }"></i>
                ${message}
            `;

        document.body.appendChild(notification);

        setTimeout(() => {
          notification.style.animation = "slideOut 0.3s ease";
          notification.style.transform = "translateX(100%)";
          setTimeout(() => {
            document.body.removeChild(notification);
          }, 300);
        }, 3000);
      }
