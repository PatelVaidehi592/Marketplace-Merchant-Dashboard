
    const countries = {
      us: { name: "United States", flag: "🇺🇸" },
      uk: { name: "United Kingdom", flag: "🇬🇧" },
      ca: { name: "Canada", flag: "🇨🇦" },
      au: { name: "Australia", flag: "🇦🇺" },
      de: { name: "Germany", flag: "🇩🇪" },
      fr: { name: "France", flag: "🇫🇷" },
    };

    const platformNames = {
      shopify: "Shopify",
      woo: "WooCommerce",
      wix: "Wix",
    };

    const statusNames = {
      approved: "Approved",
      pending: "Pending Review",
      suspended: "Suspended",
    };

    const statusColors = {
      approved: "#28a745",
      pending: "#ffc107",
      suspended: "#dc3545",
    };

    // Global variables
    let currentVendorPage = 1;
    const itemsPerPage = 10;
    let filteredVendors = [];
    let vendorsData = [];
    let currentActionVendorId = null;
    let currentActionDropdown = null;
    let currentBulkActionsDropdown = null;

    // Function to get vendors from localStorage or use default
    function getVendorsData() {
      const storedVendors = localStorage.getItem('vendorsData');
      if (storedVendors) {
        return JSON.parse(storedVendors);
      }

      // Default vendors if nothing in localStorage
      return [
        {
          id: 1,
          name: "TechGadgets Inc",
          email: "contact@techgadgets.com",
          platform: "shopify",
          status: "approved",
          country: "us",
          products: 156,
          revenue: "$124,850",
          orders: 189,
          joinedDate: "2023-01-15",
          lastSync: "2023-11-10 09:30:00",
          phone: "+1 (555) 123-4567",
          website: "https://techgadgets.com",
          avatarColor: "#4361ee",
          address: "123 Tech Street, San Francisco, CA 94107",
          description: "Leading provider of innovative tech gadgets and electronics.",
          storeInfo: {
            storeUrl: "store.techgadgets.com",
            apiStatus: "Connected",
            plan: "Shopify Plus",
            subscription: "Active",
            renewalDate: "2024-01-15",
          },
        },
        {
          id: 2,
          name: "HomeStyle Living",
          email: "info@homestyle.com",
          platform: "woo",
          status: "pending",
          country: "uk",
          products: 89,
          revenue: "$45,620",
          orders: 67,
          joinedDate: "2023-08-22",
          lastSync: "2023-11-09 14:15:00",
          phone: "+44 20 7946 0958",
          website: "https://homestyleliving.co.uk",
          avatarColor: "#4cc9f0",
          address: "45 Home Lane, London, UK EC1A 1BB",
          description: "Premium home decor and furniture retailer offering modern living solutions.",
          storeInfo: {
            storeUrl: "homestyleliving.com",
            apiStatus: "Connected",
            plan: "WooCommerce Pro",
            subscription: "Active",
            renewalDate: "2024-08-22",
          },
        },
        {
          id: 3,
          name: "Fashion Trends",
          email: "hello@fashiontrends.com",
          platform: "wix",
          status: "suspended",
          country: "fr",
          products: 45,
          revenue: "$18,450",
          orders: 32,
          joinedDate: "2023-05-10",
          lastSync: "2023-10-28 11:45:00",
          phone: "+33 1 23 45 67 89",
          website: "https://fashiontrends.fr",
          avatarColor: "#f72585",
          address: "78 Rue de la Mode, Paris, France 75001",
          description: "Trendy fashion apparel and accessories for modern women.",
          storeInfo: {
            storeUrl: "fashiontrends.fr",
            apiStatus: "Disconnected",
            plan: "Wix Business",
            subscription: "Suspended",
            renewalDate: "2024-05-10",
          },
        },
        {
          id: 4,
          name: "Sports Gear Pro",
          email: "sales@sportsgearpro.com",
          platform: "shopify",
          status: "approved",
          country: "ca",
          products: 210,
          revenue: "$189,750",
          orders: 245,
          joinedDate: "2022-11-05",
          lastSync: "2023-11-10 08:00:00",
          phone: "+1 (416) 555-7890",
          website: "https://sportsgearpro.ca",
          avatarColor: "#06d6a0",
          address: "456 Athletic Ave, Toronto, ON M5H 2N2",
          description: "Professional sports equipment and athletic wear for all levels.",
          storeInfo: {
            storeUrl: "store.sportsgearpro.ca",
            apiStatus: "Connected",
            plan: "Shopify Advanced",
            subscription: "Active",
            renewalDate: "2023-11-05",
          },
        },
        {
          id: 5,
          name: "Healthy Foods Co",
          email: "orders@healthyfoods.com",
          platform: "woo",
          status: "approved",
          country: "us",
          products: 120,
          revenue: "$89,300",
          orders: 145,
          joinedDate: "2023-03-18",
          lastSync: "2023-11-09 16:20:00",
          phone: "+1 (555) 987-6543",
          website: "https://healthyfoods.com",
          avatarColor: "#38b000",
          address: "789 Wellness Blvd, Austin, TX 73301",
          description: "Organic and natural foods for healthy living.",
          storeInfo: {
            storeUrl: "shop.healthyfoods.com",
            apiStatus: "Connected",
            plan: "WooCommerce Business",
            subscription: "Active",
            renewalDate: "2024-03-18",
          },
        },
        {
          id: 6,
          name: "Book Haven",
          email: "support@bookhaven.com",
          platform: "wix",
          status: "pending",
          country: "uk",
          products: 320,
          revenue: "$56,800",
          orders: 89,
          joinedDate: "2023-09-05",
          lastSync: "2023-11-08 10:45:00",
          phone: "+44 20 7946 1234",
          website: "https://bookhaven.co.uk",
          avatarColor: "#7209b7",
          address: "22 Library Street, Oxford, UK OX1 2JD",
          description: "Online bookstore with rare and collectible editions.",
          storeInfo: {
            storeUrl: "bookhaven.co.uk",
            apiStatus: "Pending",
            plan: "Wix Premium",
            subscription: "Pending",
            renewalDate: "2024-09-05",
          },
        },
      ];
    }

    // Helper Functions
    function timeAgo(dateString) {
      const date = new Date(dateString);
      const now = new Date();
      const seconds = Math.floor((now - date) / 1000);

      let interval = Math.floor(seconds / 31536000);
      if (interval >= 1) return interval + " years ago";

      interval = Math.floor(seconds / 2592000);
      if (interval >= 1) return interval + " months ago";

      interval = Math.floor(seconds / 86400);
      if (interval >= 1) return interval + " days ago";

      interval = Math.floor(seconds / 3600);
      if (interval >= 1) return interval + " hours ago";

      interval = Math.floor(seconds / 60);
      if (interval >= 1) return interval + " minutes ago";

      return "just now";
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

    // Show action dropdown (simplified - only View, Edit, Delete)
    function showActionDropdown(vendorId, buttonElement) {
      // Close any open dropdown
      if (currentActionDropdown) {
        currentActionDropdown.classList.remove('show');
      }

      // Create new dropdown
      const dropdown = document.getElementById('actionDropdownTemplate').cloneNode(true);
      dropdown.id = `actionDropdown_${vendorId}`;
      dropdown.style.display = 'block';
      dropdown.classList.add('show');

      // Position dropdown
      const rect = buttonElement.getBoundingClientRect();
      dropdown.style.position = 'absolute';
      dropdown.style.top = `${rect.bottom + window.scrollY}px`;
      dropdown.style.right = `${window.innerWidth - rect.right}px`;

      // Add event listeners to dropdown items
      const dropdownItems = dropdown.querySelectorAll('.action-dropdown-item');
      dropdownItems.forEach(item => {
        item.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          handleActionClick(vendorId, item.getAttribute('data-action'));
          dropdown.classList.remove('show');
        });
      });

      // Add dropdown to body
      document.body.appendChild(dropdown);
      currentActionDropdown = dropdown;
      currentActionVendorId = vendorId;

      // Close dropdown when clicking outside
      setTimeout(() => {
        document.addEventListener('click', closeDropdownOnClickOutside);
      }, 10);
    }

    // Show bulk actions dropdown
    function showBulkActionsDropdown() {
      const selectedIds = getSelectedVendorIds();

      if (selectedIds.length === 0) {
        showToast("Please select at least one vendor.", 'warning');
        return;
      }

      // Close any open dropdown
      if (currentBulkActionsDropdown) {
        currentBulkActionsDropdown.classList.remove('show');
      }

      const button = document.getElementById('bulkActionsBtn');
      const dropdown = document.getElementById('bulkActionsDropdown');

      dropdown.classList.add('show');
      currentBulkActionsDropdown = dropdown;

      // Position dropdown
      const rect = button.getBoundingClientRect();
      dropdown.style.top = `${rect.bottom + window.scrollY + 5}px`;
      dropdown.style.right = `${window.innerWidth - rect.right}px`;

      // Add event listeners to dropdown items
      const dropdownItems = dropdown.querySelectorAll('.bulk-dropdown-item');
      dropdownItems.forEach(item => {
        item.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          handleBulkAction(item.getAttribute('data-action'));
          dropdown.classList.remove('show');
        });
      });

      // Close dropdown when clicking outside
      setTimeout(() => {
        document.addEventListener('click', closeBulkDropdownOnClickOutside);
      }, 10);
    }

    // Close dropdown when clicking outside
    function closeDropdownOnClickOutside(e) {
      if (currentActionDropdown && !currentActionDropdown.contains(e.target)) {
        currentActionDropdown.classList.remove('show');
        document.removeEventListener('click', closeDropdownOnClickOutside);
        setTimeout(() => {
          if (currentActionDropdown && currentActionDropdown.parentNode) {
            currentActionDropdown.parentNode.removeChild(currentActionDropdown);
          }
          currentActionDropdown = null;
          currentActionVendorId = null;
        }, 300);
      }
    }

    // Close bulk dropdown when clicking outside
    function closeBulkDropdownOnClickOutside(e) {
      const button = document.getElementById('bulkActionsBtn');
      const dropdown = document.getElementById('bulkActionsDropdown');

      if (dropdown.classList.contains('show') &&
        !dropdown.contains(e.target) &&
        !button.contains(e.target)) {
        dropdown.classList.remove('show');
        document.removeEventListener('click', closeBulkDropdownOnClickOutside);
        currentBulkActionsDropdown = null;
      }
    }

    // Handle action click (simplified)
    function handleActionClick(vendorId, action) {
      const vendor = vendorsData.find(v => v.id == vendorId);
      if (!vendor) return;

      switch (action) {
        case 'view':
          window.location.href = `vendor-details.html?id=${vendorId}`;
          break;
        case 'edit':
          // Redirect to vendor-add.html with vendor ID as parameter
          window.location.href = `vendor-add.html?id=${vendorId}`;
          break;
        case 'delete':
          openDeleteModal(vendor);
          break;
      }
    }

    // Handle bulk action
    function handleBulkAction(action) {
      const selectedIds = getSelectedVendorIds();

      if (selectedIds.length === 0) {
        showToast("Please select at least one vendor.", 'warning');
        return;
      }

      switch (action) {
        case 'approve':
          bulkApproveVendors(selectedIds);
          break;
        case 'activate':
          bulkActivateVendors(selectedIds);
          break;
        case 'suspend':
          bulkSuspendVendors(selectedIds);
          break;
        case 'email':
          bulkEmailVendors(selectedIds);
          break;
        case 'export':
          bulkExportVendors(selectedIds);
          break;
        case 'delete':
          bulkDeleteVendors(selectedIds);
          break;
      }
    }

    // Open edit modal (not used when redirecting to vendor-add.html)
    function openEditModal(vendor) {
      document.getElementById('editVendorName').value = vendor.name;
      document.getElementById('editVendorEmail').value = vendor.email;
      document.getElementById('editVendorPlatform').value = vendor.platform;
      document.getElementById('editVendorStatus').value = vendor.status;
      document.getElementById('editVendorCountry').value = vendor.country;
      document.getElementById('editVendorProducts').value = vendor.products;
      document.getElementById('editVendorPhone').value = vendor.phone || '';
      document.getElementById('editVendorDescription').value = vendor.description || '';

      currentActionVendorId = vendor.id;
      document.getElementById('editVendorModal').classList.add('show');
    }

    // Open delete modal
    function openDeleteModal(vendor) {
      document.getElementById('deleteConfirmText').textContent =
        `Are you sure you want to delete "${vendor.name}"? This action cannot be undone.`;
      currentActionVendorId = vendor.id;
      document.getElementById('deleteConfirmModal').classList.add('show');
    }

    // Save vendors data to localStorage
    function saveVendorsData() {
      localStorage.setItem('vendorsData', JSON.stringify(vendorsData));
    }

    // Get selected vendor IDs
    function getSelectedVendorIds() {
      const selectedCheckboxes = document.querySelectorAll(
        ".custom-checkbox.checked:not(#selectAllCheckbox)"
      );
      const selectedIds = [];

      selectedCheckboxes.forEach((checkbox) => {
        const vendorId = checkbox.getAttribute("data-id");
        if (vendorId) {
          selectedIds.push(parseInt(vendorId));
        }
      });

      return selectedIds;
    }

    // Get all vendor IDs on current page
    function getAllVendorIdsOnPage() {
      const vendorIds = [];
      const rows = document.querySelectorAll("#vendorsTableBody tr[data-vendor-id]");
      rows.forEach(row => {
        const vendorId = parseInt(row.getAttribute("data-vendor-id"));
        if (vendorId) {
          vendorIds.push(vendorId);
        }
      });
      return vendorIds;
    }

    // Bulk approve function
    function bulkApproveVendors(selectedIds) {
      selectedIds.forEach((vendorId) => {
        const vendor = vendorsData.find((v) => v.id === vendorId);
        if (vendor) {
          vendor.status = "approved";
        }
      });

      saveVendorsData();
      showToast(`Successfully approved ${selectedIds.length} vendor(s).`, 'success');
      clearSelection();
      window.filterVendors();
    }

    // Bulk activate function
    function bulkActivateVendors(selectedIds) {
      selectedIds.forEach((vendorId) => {
        const vendor = vendorsData.find((v) => v.id === vendorId);
        if (vendor) {
          vendor.status = "approved";
        }
      });

      saveVendorsData();
      showToast(`Successfully activated ${selectedIds.length} vendor(s).`, 'success');
      clearSelection();
      window.filterVendors();
    }

    // Bulk suspend function
    function bulkSuspendVendors(selectedIds) {
      selectedIds.forEach((vendorId) => {
        const vendor = vendorsData.find((v) => v.id === vendorId);
        if (vendor) {
          vendor.status = "suspended";
        }
      });

      saveVendorsData();
      showToast(`Successfully suspended ${selectedIds.length} vendor(s).`, 'warning');
      clearSelection();
      window.filterVendors();
    }

    // Bulk email function
    function bulkEmailVendors(selectedIds) {
      const vendors = vendorsData.filter(v => selectedIds.includes(v.id));
      const emailList = vendors.map(v => v.email).join(',');
      window.location.href = `mailto:${emailList}?subject=Vendor%20Management&body=Dear%20Vendor`;
      showToast(`Opened email client for ${selectedIds.length} vendor(s).`, 'info');
    }

    // Bulk export function
    function bulkExportVendors(selectedIds) {
      const vendorsToExport = vendorsData.filter(v => selectedIds.includes(v.id));

      if (vendorsToExport.length === 0) return;

      const dataStr = JSON.stringify(vendorsToExport, null, 2);
      const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);

      const exportFileDefaultName = `vendors_export_${new Date().toISOString().slice(0, 10)}.json`;

      const linkElement = document.createElement('a');
      linkElement.setAttribute('href', dataUri);
      linkElement.setAttribute('download', exportFileDefaultName);
      linkElement.click();

      showToast(`Exported data for ${selectedIds.length} vendor(s).`, 'info');
    }

    // Bulk delete function
    function bulkDeleteVendors(selectedIds) {
      if (confirm(`Are you sure you want to delete ${selectedIds.length} selected vendor(s)? This action cannot be undone.`)) {
        // Remove selected vendors
        vendorsData = vendorsData.filter(vendor => !selectedIds.includes(vendor.id));
        saveVendorsData();
        showToast(`Successfully deleted ${selectedIds.length} vendor(s).`, 'success');
        clearSelection();
        window.filterVendors();
      }
    }

    // Clear selection
    function clearSelection() {
      document
        .querySelectorAll(".custom-checkbox.checked")
        .forEach((checkbox) => {
          checkbox.classList.remove("checked");
        });
      updateSelectAllCheckbox();
      updateBulkActionsUI();
    }

    // Update select all checkbox state
    function updateSelectAllCheckbox() {
      const selectAllCheckbox = document.getElementById('selectAllCheckbox');
      const totalCheckboxes = document.querySelectorAll(".custom-checkbox:not(#selectAllCheckbox)").length;
      const selectedCount = getSelectedVendorIds().length;

      // Remove previous states
      selectAllCheckbox.classList.remove("checked");
      selectAllCheckbox.classList.remove("indeterminate");

      // Set new state
      if (selectedCount === 0) {
        // No checkboxes selected
        selectAllCheckbox.classList.remove("checked");
        selectAllCheckbox.classList.remove("indeterminate");
      } else if (selectedCount === totalCheckboxes) {
        // All checkboxes selected
        selectAllCheckbox.classList.add("checked");
        selectAllCheckbox.classList.remove("indeterminate");
      } else {
        // Some checkboxes selected (indeterminate state)
        selectAllCheckbox.classList.remove("checked");
        selectAllCheckbox.classList.add("indeterminate");
      }
    }

    // Update bulk actions UI
    function updateBulkActionsUI() {
      const selectedCount = getSelectedVendorIds().length;
      const bulkActionsBtn = document.getElementById('bulkActionsBtn');
      const badge = document.getElementById('selectedCountBadge');

      badge.textContent = selectedCount;

      if (selectedCount > 0) {
        bulkActionsBtn.classList.add('has-selection');
      } else {
        bulkActionsBtn.classList.remove('has-selection');
      }
    }

    // Toggle checkbox for a specific vendor
    function toggleVendorCheckbox(vendorId) {
      const checkbox = document.querySelector(`.custom-checkbox[data-id="${vendorId}"]`);
      if (checkbox) {
        checkbox.classList.toggle("checked");
        updateSelectAllCheckbox();
        updateBulkActionsUI();
      }
    }

    // Select/Deselect all checkboxes
    function toggleAllCheckboxes() {
      const selectAllCheckbox = document.getElementById('selectAllCheckbox');
      const isCurrentlyChecked = selectAllCheckbox.classList.contains("checked");
      const checkboxes = document.querySelectorAll(
        ".custom-checkbox:not(#selectAllCheckbox)"
      );

      if (isCurrentlyChecked) {
        // Deselect all
        checkboxes.forEach((cb) => {
          cb.classList.remove("checked");
        });
        selectAllCheckbox.classList.remove("checked");
        selectAllCheckbox.classList.remove("indeterminate");
      } else {
        // Select all
        checkboxes.forEach((cb) => {
          cb.classList.add("checked");
        });
        selectAllCheckbox.classList.add("checked");
        selectAllCheckbox.classList.remove("indeterminate");
      }

      updateBulkActionsUI();
    }

    // Add checkbox listeners
    function addCheckboxListeners() {
      const checkboxes = document.querySelectorAll(".custom-checkbox");
      checkboxes.forEach((checkbox) => {
        // Remove existing listeners
        const newCheckbox = checkbox.cloneNode(true);
        checkbox.parentNode.replaceChild(newCheckbox, checkbox);

        // Add click listener to new checkbox
        newCheckbox.addEventListener("click", function (e) {
          e.stopPropagation();

          if (this.id === "selectAllCheckbox") {
            toggleAllCheckboxes();
          } else {
            this.classList.toggle("checked");
            updateSelectAllCheckbox();
            updateBulkActionsUI();
          }
        });
      });
    }

    // Add vendor-info click listeners
    function addVendorInfoClickListeners() {
      const vendorInfoElements = document.querySelectorAll(".vendor-info");
      vendorInfoElements.forEach((vendorInfo) => {
        vendorInfo.addEventListener("click", function (e) {
          e.stopPropagation();
          const vendorId = this.closest("tr").getAttribute("data-vendor-id");
          if (vendorId) {
            window.location.href = `vendor-details.html?id=${vendorId}`;
          }
        });
      });
    }

    // Add row click listeners
    function addRowClickListeners() {
      const rows = document.querySelectorAll("#vendorsTableBody tr");
      rows.forEach((row) => {
        row.addEventListener("click", function (e) {
          // Don't trigger for specific elements
          if (
            e.target.closest(".table-actions") ||
            e.target.closest(".sync-action-btn") ||
            e.target.closest(".action-dropdown") ||
            e.target.closest(".bulk-actions-btn") ||
            e.target.closest(".bulk-actions-dropdown") ||
            e.target.closest(".action-btn")
          ) {
            return;
          }

          // If clicking directly on vendor-info, let that handler take over
          if (e.target.closest(".vendor-info")) {
            return;
          }

          // If clicking on checkbox area, let checkbox handler take over
          if (e.target.closest(".checkbox-cell") || e.target.closest(".custom-checkbox")) {
            return;
          }

          // Otherwise, toggle the checkbox for this row
          const vendorId = this.getAttribute("data-vendor-id");
          if (vendorId) {
            toggleVendorCheckbox(vendorId);
          }
        });
      });
    }

    // Main render table function
    function renderTable() {
      const tableBody = document.getElementById("vendorsTableBody");
      const paginationInfo = document.getElementById("paginationInfo");
      const pageNumbers = document.getElementById("pageNumbers");
      const prevPageBtn = document.getElementById("prevPage");
      const nextPageBtn = document.getElementById("nextPage");

      tableBody.innerHTML = "";

      const startIndex = (currentVendorPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const vendorsToShow = filteredVendors.slice(startIndex, endIndex);

      if (vendorsToShow.length === 0) {
        tableBody.innerHTML = `
        <tr>
          <td colspan="8" style="text-align: center; padding: 40px; color: var(--gray);">
            <i class="fas fa-store-slash" style="font-size: 48px; margin-bottom: 20px; display: block; color: #e9ecef;"></i>
            <h3>No vendors found</h3>
            <p>Try adjusting your filters or add a new vendor</p>
          </td>
        </tr>
      `;
      } else {
        vendorsToShow.forEach((vendor) => {
          const row = document.createElement("tr");
          row.setAttribute("data-vendor-id", vendor.id);
          row.innerHTML = `
          <td class="checkbox-cell">
            <div class="custom-checkbox" data-id="${vendor.id}"></div>
          </td>
          <td>
            <div class="vendor-info" data-vendor-id="${vendor.id}">
              <div class="vendor-avatar" style="background-color: ${vendor.avatarColor}">
                ${vendor.name.charAt(0)}
              </div>
              <div>
                <div class="vendor-name">${vendor.name}</div>
                <div class="vendor-email">${vendor.email}</div>
              </div>
            </div>
          </td>
          <td>
            <span class="platform-badge platform-${vendor.platform}">
              ${platformNames[vendor.platform]}
            </span>
          </td>
          <td>
            <span class="status-badge status-${vendor.status}" style="background-color: ${statusColors[vendor.status]}0.1; color: ${statusColors[vendor.status]}">
              ${statusNames[vendor.status]}
            </span>
          </td>
          <td>
            <div class="country-flag">
              <span class="flag-icon">${countries[vendor.country]?.flag || "🌐"}</span>
              ${countries[vendor.country]?.name || vendor.country}
            </div>
          </td>
          <td>
            <strong>${vendor.products}</strong> products
          </td>
          <td>${timeAgo(vendor.lastSync)}</td>
          <td>
            <div class="table-actions">
              <a href="sync-vendor-product.html?id=${vendor.id}" class="sync-action-btn" title="Sync Settings">
                <i class="fas fa-sync-alt"></i> Sync
              </a>
              <div>
             <button class="login-icon-b" title="Login" onclick="window.location.href='Dashboard.html'">
    👤
</button>
            </div>
              <button class="action-btn" title="More Actions" onclick="showActionDropdown(${vendor.id}, this)">
                <i class="fas fa-ellipsis-h"></i>
              </button>
            </div>
          </td>
        `;
          tableBody.appendChild(row);
        });
      }

      updatePaginationInfo();
      renderPageNumbers();
      addCheckboxListeners();
      addVendorInfoClickListeners();
      addRowClickListeners();
      updateSelectAllCheckbox();
      updateBulkActionsUI();
    }

    // Update pagination info
    function updatePaginationInfo() {
      const start = (currentVendorPage - 1) * itemsPerPage + 1;
      const end = Math.min(
        currentVendorPage * itemsPerPage,
        filteredVendors.length
      );
      const total = filteredVendors.length;

      document.getElementById(
        "paginationInfo"
      ).textContent = `Showing ${start}-${end} of ${total} vendors`;

      document.getElementById("prevPage").disabled = currentVendorPage === 1;
      document.getElementById("nextPage").disabled =
        currentVendorPage ===
        Math.ceil(filteredVendors.length / itemsPerPage);
    }

    // Render page numbers
    function renderPageNumbers() {
      const pageNumbers = document.getElementById("pageNumbers");
      const totalPages = Math.ceil(filteredVendors.length / itemsPerPage);

      const maxVisiblePages = 5;
      let startPage = Math.max(
        1,
        currentVendorPage - Math.floor(maxVisiblePages / 2)
      );
      let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

      if (endPage - startPage + 1 < maxVisiblePages) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
      }

      pageNumbers.innerHTML = "";

      document.getElementById("prevPage").onclick = () => {
        if (currentVendorPage > 1) {
          currentVendorPage--;
          renderTable();
        }
      };

      document.getElementById("nextPage").onclick = () => {
        if (currentVendorPage < totalPages) {
          currentVendorPage++;
          renderTable();
        }
      };

      if (startPage > 1) {
        const firstBtn = document.createElement("div");
        firstBtn.className = "page-number";
        firstBtn.textContent = "1";
        firstBtn.onclick = () => {
          currentVendorPage = 1;
          renderTable();
        };
        pageNumbers.appendChild(firstBtn);

        if (startPage > 2) {
          const ellipsis = document.createElement("div");
          ellipsis.className = "page-number";
          ellipsis.textContent = "...";
          ellipsis.style.cursor = "default";
          pageNumbers.appendChild(ellipsis);
        }
      }

      for (let i = startPage; i <= endPage; i++) {
        const pageBtn = document.createElement("div");
        pageBtn.className = `page-number ${i === currentVendorPage ? "active" : ""
          }`;
        pageBtn.textContent = i;
        pageBtn.onclick = () => {
          currentVendorPage = i;
          renderTable();
        };
        pageNumbers.appendChild(pageBtn);
      }

      if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
          const ellipsis = document.createElement("div");
          ellipsis.className = "page-number";
          ellipsis.textContent = "...";
          ellipsis.style.cursor = "default";
          pageNumbers.appendChild(ellipsis);
        }

        const lastBtn = document.createElement("div");
        lastBtn.className = "page-number";
        lastBtn.textContent = totalPages;
        lastBtn.onclick = () => {
          currentVendorPage = totalPages;
          renderTable();
        };
        pageNumbers.appendChild(lastBtn);
      }
    }

    // Filter vendors function
    window.filterVendors = function () {
      // Refresh vendors data from localStorage
      vendorsData = getVendorsData();

      const status = document.getElementById("statusFilter").value;
      const platform = document.getElementById("platformFilter").value;
      const country = document.getElementById("countryFilter").value;
      const search = document
        .getElementById("searchInput")
        .value.toLowerCase();

      filteredVendors = vendorsData.filter((vendor) => {
        if (status !== "all" && vendor.status !== status) return false;
        if (platform !== "all" && vendor.platform !== platform) return false;
        if (country !== "all" && vendor.country !== country) return false;
        if (search) {
          const searchInName = vendor.name.toLowerCase().includes(search);
          const searchInEmail = vendor.email.toLowerCase().includes(search);
          if (!searchInName && !searchInEmail) return false;
        }
        return true;
      });

      // Sort by most recent first
      filteredVendors.sort((a, b) => new Date(b.joinedDate) - new Date(a.joinedDate));

      currentVendorPage = 1;
      renderTable();
    };

    // Initialize Table Functions
    function initializeTable() {
      // Load vendors from localStorage
      vendorsData = getVendorsData();

      // Filter and search event listeners
      document.getElementById("statusFilter").addEventListener("change", window.filterVendors);
      document.getElementById("platformFilter").addEventListener("change", window.filterVendors);
      document.getElementById("countryFilter").addEventListener("change", window.filterVendors);
      document.getElementById("searchInput").addEventListener("input", window.filterVendors);

      // Clear filters
      document.getElementById("clearFilters").addEventListener("click", () => {
        document.getElementById("statusFilter").value = "all";
        document.getElementById("platformFilter").value = "all";
        document.getElementById("countryFilter").value = "all";
        document.getElementById("searchInput").value = "";
        window.filterVendors();
      });

      // Select all checkbox
      document.getElementById("selectAllCheckbox").addEventListener("click", function (e) {
        e.stopPropagation();
        toggleAllCheckboxes();
      });

      // Bulk actions button
      document.getElementById("bulkActionsBtn").addEventListener("click", (e) => {
        e.stopPropagation();
        showBulkActionsDropdown();
      });

      // Modal close buttons (for delete modal)
      document.getElementById("closeDeleteModal").addEventListener("click", () => {
        document.getElementById("deleteConfirmModal").classList.remove("show");
      });

      document.getElementById("cancelDeleteModal").addEventListener("click", () => {
        document.getElementById("deleteConfirmModal").classList.remove("show");
      });

      // Confirm delete
      document.getElementById("confirmDeleteVendor").addEventListener("click", () => {
        if (!currentActionVendorId) return;

        const index = vendorsData.findIndex(v => v.id == currentActionVendorId);
        if (index !== -1) {
          const vendorName = vendorsData[index].name;
          vendorsData.splice(index, 1);
          saveVendorsData();
          showToast(`Vendor "${vendorName}" deleted successfully!`, 'success');
          document.getElementById("deleteConfirmModal").classList.remove("show");
          window.filterVendors();
        }
      });

      // Close modals when clicking outside
      window.addEventListener('click', (e) => {
        const deleteModal = document.getElementById('deleteConfirmModal');

        if (deleteModal.classList.contains('show') && e.target === deleteModal) {
          deleteModal.classList.remove('show');
        }
      });

      // Initial render
      window.filterVendors();
    }

    // Initialize when DOM is loaded
    document.addEventListener("DOMContentLoaded", () => {
      initializeTable();

      // Set up global functions
      window.showActionDropdown = showActionDropdown;
      window.showBulkActionsDropdown = showBulkActionsDropdown;
      window.renderTable = renderTable;
      window.toggleVendorCheckbox = toggleVendorCheckbox;
      window.toggleAllCheckboxes = toggleAllCheckboxes;
      window.getSelectedVendorIds = getSelectedVendorIds;
      window.clearSelection = clearSelection;
    });
