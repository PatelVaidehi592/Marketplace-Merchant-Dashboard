
    // Get vendor ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const vendorId = urlParams.get("id");

    // Global variables
    let currentVendor = null;
    let vendorsData = [];

    // Platform display names
    const platformNames = {
      shopify: "Shopify",
      woo: "WooCommerce",
      wix: "Wix",
    };

    // Country data
    const countries = {
      us: { name: "United States", flag: "🇺🇸" },
      uk: { name: "United Kingdom", flag: "🇬🇧" },
      ca: { name: "Canada", flag: "🇨🇦" },
      au: { name: "Australia", flag: "🇦🇺" },
      de: { name: "Germany", flag: "🇩🇪" },
      fr: { name: "France", flag: "🇫🇷" },
    };

    // Initialize page
    document.addEventListener("DOMContentLoaded", async function () {
      await loadVendorData();
      if (currentVendor) {
        loadVendorInfo();
        initializeSyncSettings();
        loadSyncLogs();
        attachEventListeners();
      } else {
        showToast("Vendor not found!", "error");
        setTimeout(() => {
          window.location.href = "vendor-management.html";
        }, 2000);
      }
    });

    // Load vendor data from localStorage
    async function loadVendorData() {
      try {
        // Get all vendors from localStorage
        const storedVendors = localStorage.getItem('vendorsData');
        if (storedVendors) {
          vendorsData = JSON.parse(storedVendors);

          // Find the specific vendor by ID
          const vendor = vendorsData.find(v => v.id == vendorId);

          if (vendor) {
            currentVendor = vendor;

            // Ensure vendor has sync settings
            if (!currentVendor.syncSettings) {
              currentVendor.syncSettings = getDefaultSyncSettings();
            }

            // Ensure vendor has sync stats
            if (!currentVendor.syncStats) {
              currentVendor.syncStats = getDefaultSyncStats();
            }

            // Ensure vendor has sync logs
            if (!currentVendor.syncLogs) {
              currentVendor.syncLogs = getDefaultSyncLogs();
            }

            // Save updated vendor data
            saveVendorData();
            return true;
          }
        }
        return false;
      } catch (error) {
        console.error("Error loading vendor data:", error);
        return false;
      }
    }

    // Get default sync settings
    function getDefaultSyncSettings() {
      return {
        productSyncMode: "realtime",
        inventorySync: true,
        priceSync: true,
        imageSync: true,
        descriptionSync: true,
        variantsSync: true,
        outOfStockSync: true,
        categoriesSync: true,
        reviewsSync: false,
      };
    }

    // Get default sync stats
    function getDefaultSyncStats() {
      return {
        total: currentVendor?.products || 0,
        synced: Math.floor((currentVendor?.products || 0) * 0.9),
        failed: Math.floor((currentVendor?.products || 0) * 0.05),
        pending: Math.floor((currentVendor?.products || 0) * 0.05),
        lastSync: new Date().toISOString(),
      };
    }

    // Get default sync logs
    function getDefaultSyncLogs() {
      const now = new Date();
      return [
        {
          id: Date.now(),
          time: new Date(now.getTime() - 2 * 60 * 60 * 1000).toISOString(),
          type: "Product Sync",
          status: "success",
          items: `${Math.floor(currentVendor?.products * 0.8) || 0} products`,
          details: "Initial product sync completed",
        },
        {
          id: Date.now() - 1,
          time: new Date(now.getTime() - 4 * 60 * 60 * 1000).toISOString(),
          type: "Settings Update",
          status: "success",
          items: "Sync settings",
          details: "Default sync settings applied",
        },
      ];
    }

    // Save vendor data to localStorage
    function saveVendorData() {
      try {
        // Update the vendor in the vendors array
        const index = vendorsData.findIndex(v => v.id == currentVendor.id);
        if (index !== -1) {
          vendorsData[index] = currentVendor;
          localStorage.setItem('vendorsData', JSON.stringify(vendorsData));
        }
      } catch (error) {
        console.error("Error saving vendor data:", error);
      }
    }

    // Load vendor information
    function loadVendorInfo() {
      if (!currentVendor) return;

      const vendorInfoCard = document.getElementById("vendorInfoCard");
      const stats = currentVendor.syncStats || getDefaultSyncStats();

      vendorInfoCard.innerHTML = `
        <div class="vendor-avatar" style="background-color: ${currentVendor.avatarColor || '#4361ee'}">
          ${currentVendor.name.charAt(0)}
        </div>
        <div class="vendor-details">
          <h3>${currentVendor.name}</h3>
          <p>${currentVendor.email}</p>
          <p>
            <strong>Platform:</strong> 
            <span class="platform-badge platform-${currentVendor.platform}">
              ${platformNames[currentVendor.platform] || currentVendor.platform}
            </span>
          </p>
          <p>
            <strong>Country:</strong> 
            <span class="country-flag">
              ${countries[currentVendor.country]?.flag || "🌐"}
              ${countries[currentVendor.country]?.name || currentVendor.country}
            </span>
          </p>
          <div class="vendor-stats">
            <div class="stat-item">
              <div class="stat-value">${stats.total}</div>
              <div class="stat-label">Total Products</div>
            </div>
            <div class="stat-item">
              <div class="stat-value" style="color: #28a745;">${stats.synced}</div>
              <div class="stat-label">Synced</div>
            </div>
            <div class="stat-item">
              <div class="stat-value" style="color: #dc3545;">${stats.failed}</div>
              <div class="stat-label">Failed</div>
            </div>
            <div class="stat-item">
              <div class="stat-value" style="color: #ffc107;">${stats.pending}</div>
              <div class="stat-label">Pending</div>
            </div>
          </div>
        </div>
      `;

      // Update product stats
      document.getElementById("totalProducts").textContent = stats.total;
      document.getElementById("syncedProducts").textContent = stats.synced;
      document.getElementById("failedProducts").textContent = stats.failed;
      document.getElementById("pendingProducts").textContent = stats.pending;
      document.getElementById("lastProductSync").textContent = formatTime(stats.lastSync);
    }

    // Initialize sync settings
    function initializeSyncSettings() {
      if (!currentVendor || !currentVendor.syncSettings) return;

      const settings = currentVendor.syncSettings;

      // Set sync mode
      document.querySelectorAll("#productSyncMode .frequency-option").forEach((option) => {
        if (option.dataset.value === settings.productSyncMode) {
          option.classList.add("active");
        } else {
          option.classList.remove("active");
        }
      });

      // Set toggle switches
      document.getElementById("inventorySyncToggle").checked = settings.inventorySync;
      document.getElementById("priceSyncToggle").checked = settings.priceSync;
      document.getElementById("imageSyncToggle").checked = settings.imageSync;
      document.getElementById("descriptionSyncToggle").checked = settings.descriptionSync;
      document.getElementById("variantsSyncToggle").checked = settings.variantsSync;
      document.getElementById("outOfStockSyncToggle").checked = settings.outOfStockSync;
      document.getElementById("categoriesSyncToggle").checked = settings.categoriesSync;
      document.getElementById("reviewsSyncToggle").checked = settings.reviewsSync;

      // Update status display
      updateSyncStatusDisplay();
    }

    // Update sync status display
    function updateSyncStatusDisplay() {
      if (!currentVendor || !currentVendor.syncSettings) return;

      const mode = currentVendor.syncSettings.productSyncMode;
      const statusText = document.getElementById("productSyncStatusText");
      const statusIndicator = document.getElementById("productSyncStatus");

      switch (mode) {
        case "realtime":
          statusText.textContent = "Real-time sync active";
          statusIndicator.style.backgroundColor = "#4cc9f0";
          break;
        case "scheduled":
          statusText.textContent = "Scheduled sync (every 4 hours)";
          statusIndicator.style.backgroundColor = "#ffc107";
          break;
        case "manual":
          statusText.textContent = "Manual sync only";
          statusIndicator.style.backgroundColor = "#6c757d";
          break;
        default:
          statusText.textContent = "Sync status unknown";
          statusIndicator.style.backgroundColor = "#6c757d";
      }
    }

    // Load sync logs
    function loadSyncLogs() {
      if (!currentVendor) return;

      const syncLogsTable = document.getElementById("syncLogsTable");
      const logsCount = document.getElementById("logsCount");
      const logs = currentVendor.syncLogs || [];

      syncLogsTable.innerHTML = "";

      if (logs.length === 0) {
        syncLogsTable.innerHTML = `
          <tr>
            <td colspan="5" style="text-align: center; padding: 40px; color: var(--gray);">
              <i class="fas fa-history" style="font-size: 32px; margin-bottom: 10px; display: block; color: #e9ecef;"></i>
              <p>No sync logs available</p>
            </td>
          </tr>
        `;
      } else {
        // Sort logs by time (newest first)
        logs.sort((a, b) => new Date(b.time) - new Date(a.time));

        // Display only the 10 most recent logs
        const recentLogs = logs.slice(0, 10);

        recentLogs.forEach((log) => {
          const row = document.createElement("tr");
          row.innerHTML = `
            <td>${formatTime(log.time)}</td>
            <td>${log.type}</td>
            <td><span class="log-status ${log.status}">${log.status.charAt(0).toUpperCase() + log.status.slice(1)}</span></td>
            <td>${log.items}</td>
            <td>${log.details}</td>
          `;
          syncLogsTable.appendChild(row);
        });
      }

      logsCount.textContent = `${logs.length} logs`;
    }

    // Add sync log
    function addSyncLog(type, status, items, details) {
      if (!currentVendor) return;

      const log = {
        id: Date.now(),
        time: new Date().toISOString(),
        type,
        status,
        items,
        details,
      };

      // Initialize sync logs array if it doesn't exist
      if (!currentVendor.syncLogs) {
        currentVendor.syncLogs = [];
      }

      // Add log to beginning of array
      currentVendor.syncLogs.unshift(log);

      // Keep only the last 50 logs
      if (currentVendor.syncLogs.length > 50) {
        currentVendor.syncLogs = currentVendor.syncLogs.slice(0, 50);
      }

      // Save data
      saveVendorData();

      // Update UI
      loadSyncLogs();
    }

    // Attach event listeners
    function attachEventListeners() {
      // Sync mode selection
      document.querySelectorAll("#productSyncMode .frequency-option").forEach((option) => {
        option.addEventListener("click", function () {
          document.querySelectorAll("#productSyncMode .frequency-option").forEach((opt) => {
            opt.classList.remove("active");
          });
          this.classList.add("active");

          if (currentVendor) {
            currentVendor.syncSettings.productSyncMode = this.dataset.value;
            updateSyncStatusDisplay();
          }
        });
      });

      // Sync Now button
      document.getElementById("productSyncNow").addEventListener("click", async function () {
        await syncProducts();
      });

      // Save Settings button
      document.getElementById("saveProductSettings").addEventListener("click", function () {
        saveSyncSettings();
      });
    }

    // Sync products function
    async function syncProducts() {
      if (!currentVendor) return;

      const syncBtn = document.getElementById("productSyncNow");
      const originalText = syncBtn.innerHTML;

      // Disable button and show loading
      syncBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Syncing...';
      syncBtn.disabled = true;

      // Update status display
      document.getElementById("productSyncStatusText").textContent = "Syncing...";
      document.getElementById("productSyncStatus").style.backgroundColor = "#ffc107";

      try {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Update sync stats
        const stats = currentVendor.syncStats || getDefaultSyncStats();

        // Simulate some changes
        const newSynced = Math.min(stats.total, stats.synced + Math.floor(Math.random() * 10) + 1);
        const newFailed = Math.max(0, stats.failed - Math.floor(Math.random() * 2));
        const newPending = stats.total - newSynced - newFailed;

        currentVendor.syncStats = {
          ...stats,
          synced: newSynced,
          failed: newFailed,
          pending: newPending,
          lastSync: new Date().toISOString(),
        };

        // Update vendor info in the main vendors list
        updateVendorInMainList();

        // Save data
        saveVendorData();

        // Update UI
        loadVendorInfo();
        updateSyncStatusDisplay();

        // Add sync log
        addSyncLog(
          "Product Sync",
          "success",
          `${newSynced - stats.synced} products`,
          "Products synced successfully"
        );

        // Show success message
        showToast("Product sync completed successfully!", "success");

      } catch (error) {
        console.error("Sync error:", error);

        // Add error log
        addSyncLog(
          "Product Sync",
          "error",
          "0 products",
          `Sync failed: ${error.message || "Unknown error"}`
        );

        // Show error message
        showToast("Sync failed. Please try again.", "error");

        // Update status to error
        document.getElementById("productSyncStatusText").textContent = "Sync failed";
        document.getElementById("productSyncStatus").style.backgroundColor = "#dc3545";
      } finally {
        // Restore button
        syncBtn.innerHTML = originalText;
        syncBtn.disabled = false;
      }
    }

    // Save sync settings
    function saveSyncSettings() {
      if (!currentVendor) return;

      const saveBtn = document.getElementById("saveProductSettings");
      const originalText = saveBtn.innerHTML;

      // Get current settings from UI
      const activeMode = document.querySelector("#productSyncMode .frequency-option.active");

      // Update sync settings
      currentVendor.syncSettings = {
        productSyncMode: activeMode ? activeMode.dataset.value : "realtime",
        inventorySync: document.getElementById("inventorySyncToggle").checked,
        priceSync: document.getElementById("priceSyncToggle").checked,
        imageSync: document.getElementById("imageSyncToggle").checked,
        descriptionSync: document.getElementById("descriptionSyncToggle").checked,
        variantsSync: document.getElementById("variantsSyncToggle").checked,
        outOfStockSync: document.getElementById("outOfStockSyncToggle").checked,
        categoriesSync: document.getElementById("categoriesSyncToggle").checked,
        reviewsSync: document.getElementById("reviewsSyncToggle").checked,
      };

      // Update vendor in main list
      updateVendorInMainList();

      // Save data
      saveVendorData();

      // Update status display
      updateSyncStatusDisplay();

      // Show saving state
      saveBtn.innerHTML = '<i class="fas fa-check"></i> Settings Saved';
      saveBtn.style.backgroundColor = "#28a745";

      // Add sync log
      addSyncLog(
        "Settings Update",
        "success",
        "Sync settings",
        "Settings updated successfully"
      );

      // Show notification
      showToast("Sync settings saved successfully!", "success");

      // Restore button after 2 seconds
      setTimeout(() => {
        saveBtn.innerHTML = originalText;
        saveBtn.style.backgroundColor = "";
      }, 2000);
    }

    // Update vendor in the main vendors list
    function updateVendorInMainList() {
      try {
        const allVendors = JSON.parse(localStorage.getItem('vendorsData') || '[]');
        const index = allVendors.findIndex(v => v.id == currentVendor.id);

        if (index !== -1) {
          // Update only the relevant fields to preserve other data
          allVendors[index] = {
            ...allVendors[index],
            syncSettings: currentVendor.syncSettings,
            syncStats: currentVendor.syncStats,
            syncLogs: currentVendor.syncLogs,
          };

          localStorage.setItem('vendorsData', JSON.stringify(allVendors));
        }
      } catch (error) {
        console.error("Error updating vendor in main list:", error);
      }
    }

    // Format time
    function formatTime(dateString) {
      try {
        const date = new Date(dateString);
        const now = new Date();
        const diffMs = now - date;
        const diffMins = Math.floor(diffMs / 60000);
        const diffHours = Math.floor(diffMs / 3600000);
        const diffDays = Math.floor(diffMs / 86400000);

        if (diffMins < 1) return "Just now";
        if (diffMins < 60) return `${diffMins} minute${diffMins > 1 ? "s" : ""} ago`;
        if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? "s" : ""} ago`;

        return date.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        });
      } catch (error) {
        return "Unknown time";
      }
    }

    // Show toast notification
    function showToast(message, type = 'success') {
      const toast = document.getElementById('toastNotification');
      const toastMessage = document.getElementById('toastMessage');

      toastMessage.textContent = message;
      toast.className = `toast ${type}`;
      toast.style.display = 'flex';

      setTimeout(() => {
        toast.style.display = 'none';
      }, 3000);
    }
