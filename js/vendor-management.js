
      const vendorsData = [
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
          description:
            "Leading provider of innovative tech gadgets and electronics.",
          performance: {
            conversionRate: "3.2%",
            avgOrderValue: "$660",
            customerRating: "4.8/5",
            returnRate: "1.8%",
            growth: "+24%",
            customerSatisfaction: "98%",
          },
          topProducts: [
            {
              name: "Wireless Earbuds Pro",
              price: "$129",
              category: "Audio",
              sales: 1200,
            },
            {
              name: "Smart Watch X3",
              price: "$299",
              category: "Wearables",
              sales: 850,
            },
            {
              name: "Portable Charger 10K",
              price: "$49",
              category: "Accessories",
              sales: 2100,
            },
          ],
          syncLogs: [
            {
              time: "Today, 09:30 AM",
              status: "success",
              items: "24 products synced",
              details: "Inventory updated",
            },
            {
              time: "Yesterday, 18:45 PM",
              status: "success",
              items: "8 products updated",
              details: "Price adjustments",
            },
            {
              time: "Nov 8, 14:20 PM",
              status: "error",
              items: "Failed to sync",
              details: "API connection timeout",
            },
          ],
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
          description:
            "Premium home decor and furniture retailer offering modern living solutions.",
          performance: {
            conversionRate: "2.8%",
            avgOrderValue: "$681",
            customerRating: "4.6/5",
            returnRate: "2.1%",
            growth: "+18%",
            customerSatisfaction: "95%",
          },
          topProducts: [
            {
              name: "Memory Foam Mattress",
              price: "$599",
              category: "Bedroom",
              sales: 450,
            },
            {
              name: "Ergonomic Office Chair",
              price: "$349",
              category: "Office",
              sales: 320,
            },
            {
              name: "Smart LED Lighting Kit",
              price: "$129",
              category: "Lighting",
              sales: 890,
            },
          ],
          syncLogs: [
            {
              time: "Today, 09:15 AM",
              status: "success",
              items: "12 products synced",
              details: "Price updates applied",
            },
            {
              time: "Yesterday, 16:30 PM",
              status: "success",
              items: "5 products updated",
              details: "Inventory adjustments",
            },
            {
              time: "2 days ago, 11:20 AM",
              status: "success",
              items: "3 new products",
              details: "New collection added",
            },
          ],
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
          description:
            "Trendy fashion apparel and accessories for modern women.",
          performance: {
            conversionRate: "1.9%",
            avgOrderValue: "$576",
            customerRating: "4.2/5",
            returnRate: "4.5%",
            growth: "-5%",
            customerSatisfaction: "87%",
          },
          topProducts: [
            {
              name: "Summer Dress Collection",
              price: "$89",
              category: "Women's Clothing",
              sales: 280,
            },
            {
              name: "Designer Handbag",
              price: "$199",
              category: "Accessories",
              sales: 120,
            },
            {
              name: "Premium Denim Jeans",
              price: "$129",
              category: "Bottoms",
              sales: 190,
            },
          ],
          syncLogs: [
            {
              time: "Oct 28, 11:45 AM",
              status: "error",
              items: "Failed to sync",
              details: "Store suspended",
            },
            {
              time: "Oct 25, 10:30 AM",
              status: "success",
              items: "7 products synced",
              details: "Last successful sync",
            },
            {
              time: "Oct 22, 15:20 PM",
              status: "success",
              items: "15 products updated",
              details: "Inventory sync",
            },
          ],
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
          description:
            "Professional sports equipment and athletic wear for all levels.",
          performance: {
            conversionRate: "3.5%",
            avgOrderValue: "$775",
            customerRating: "4.9/5",
            returnRate: "1.2%",
            growth: "+32%",
            customerSatisfaction: "99%",
          },
          topProducts: [
            {
              name: "Pro Training Shoes",
              price: "$149",
              category: "Footwear",
              sales: 1560,
            },
            {
              name: "Yoga Mat Premium",
              price: "$79",
              category: "Fitness",
              sales: 2100,
            },
            {
              name: "Adjustable Dumbbells",
              price: "$299",
              category: "Strength",
              sales: 780,
            },
          ],
          syncLogs: [
            {
              time: "Today, 08:00 AM",
              status: "success",
              items: "32 products synced",
              details: "Automatic daily sync",
            },
            {
              time: "Yesterday, 08:00 AM",
              status: "success",
              items: "28 products synced",
              details: "Inventory update",
            },
            {
              time: "Nov 8, 08:00 AM",
              status: "success",
              items: "45 products synced",
              details: "New arrivals added",
            },
          ],
          storeInfo: {
            storeUrl: "store.sportsgearpro.ca",
            apiStatus: "Connected",
            plan: "Shopify Advanced",
            subscription: "Active",
            renewalDate: "2023-11-05",
          },
        },
      ];

      // Country data
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
      let filteredVendors = [...vendorsData];

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

      function generateVendorDetailsHTML(vendor) {
        return `
    <div class="vendor-header">
      <div class="vendor-header-avatar" style="background-color: ${
        vendor.avatarColor
      }">
        ${vendor.name.charAt(0)}
      </div>
      <div class="vendor-header-info">
        <h1 class="vendor-header-name">${vendor.name}</h1>
        <p class="vendor-header-email">${vendor.email}</p>
        <div class="vendor-header-meta">
          <div class="vendor-meta-item">
            <span class="vendor-meta-label">Joined:</span>
            <span class="vendor-meta-value">${new Date(
              vendor.joinedDate
            ).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}</span>
          </div>
          <div class="vendor-meta-item">
            <span class="vendor-meta-label">Platform:</span>
            <span class="vendor-meta-value">${
              platformNames[vendor.platform]
            }</span>
          </div>
          <div class="vendor-meta-item">
            <span class="vendor-meta-label">Country:</span>
            <span class="vendor-meta-value">${countries[vendor.country].name} ${
          countries[vendor.country].flag
        }</span>
          </div>
        </div>
      </div>
      <div class="vendor-actions">
        <span class="status-badge status-${
          vendor.status
        }" style="background-color: ${statusColors[vendor.status]}0.1; color: ${
          statusColors[vendor.status]
        }">
          ${statusNames[vendor.status]}
        </span>
        <button class="vendor-action-btn primary" onclick="window.approveVendor(${
          vendor.id
        })">
          <i class="fas fa-check"></i> Approve
        </button>
        <button class="vendor-action-btn secondary" onclick="window.suspendVendor(${
          vendor.id
        })">
          <i class="fas fa-ban"></i> Suspend
        </button>
        <a href="mailto:${vendor.email}" class="vendor-action-btn secondary">
          <i class="fas fa-envelope"></i> Email
        </a>
      </div>
    </div>

    <div class="vendor-details-grid">
      <!-- Store Information -->
      <div class="detail-card">
        <h3 class="detail-card-title">
          <i class="fas fa-store"></i> Store Information
        </h3>
        <div class="detail-item">
          <span class="detail-label">Website:</span>
          <a href="${vendor.website}" target="_blank" class="detail-value">${
          vendor.website
        }</a>
        </div>
        <div class="detail-item">
          <span class="detail-label">Platform:</span>
          <span class="detail-value">${platformNames[vendor.platform]}</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">API Status:</span>
          <span class="detail-value" style="color: ${
            vendor.storeInfo.apiStatus === "Connected" ? "#28a745" : "#dc3545"
          }">${vendor.storeInfo.apiStatus}</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">Subscription Plan:</span>
          <span class="detail-value">${vendor.storeInfo.plan}</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">Renewal Date:</span>
          <span class="detail-value">${new Date(
            vendor.storeInfo.renewalDate
          ).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}</span>
        </div>
      </div>

      <!-- Company Information -->
      <div class="detail-card">
        <h3 class="detail-card-title">
          <i class="fas fa-building"></i> Company Information
        </h3>
        ${
          vendor.companyName
            ? `
        <div class="detail-item">
          <span class="detail-label">Company Name:</span>
          <span class="detail-value">${vendor.companyName}</span>
        </div>
        `
            : ""
        }
        ${
          vendor.storeName
            ? `
        <div class="detail-item">
          <span class="detail-label">Store Name:</span>
          <span class="detail-value">${vendor.storeName}</span>
        </div>
        `
            : ""
        }
        ${
          vendor.brandName
            ? `
        <div class="detail-item">
          <span class="detail-label">Brand Name:</span>
          <span class="detail-value">${vendor.brandName}</span>
        </div>
        `
            : ""
        }
        ${
          vendor.phone
            ? `
        <div class="detail-item">
          <span class="detail-label">Phone:</span>
          <span class="detail-value">${vendor.phone}</span>
        </div>
        `
            : ""
        }
        ${
          vendor.address
            ? `
        <div class="detail-item">
          <span class="detail-label">Address:</span>
          <span class="detail-value">${vendor.address}</span>
        </div>
        `
            : ""
        }
        ${
          vendor.description
            ? `
        <div class="detail-item">
          <span class="detail-label">Description:</span>
          <span class="detail-value">${vendor.description}</span>
        </div>
        `
            : ""
        }
      </div>

      <!-- Business Metrics -->
      <div class="detail-card">
        <h3 class="detail-card-title">
          <i class="fas fa-chart-bar"></i> Business Metrics
        </h3>
        <div class="detail-item">
          <span class="detail-label">Total Products:</span>
          <span class="detail-value products">${vendor.products}</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">Total Revenue:</span>
          <span class="detail-value revenue">${vendor.revenue}</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">Total Orders:</span>
          <span class="detail-value orders">${vendor.orders}</span>
        </div>
        
      </div>

      <!-- Top Products -->
      <div class="detail-card">
        <h3 class="detail-card-title">
          <i class="fas fa-boxes"></i> Top Products
        </h3>
        <div class="product-list">
          ${vendor.topProducts
            .map(
              (product) => `
            <div class="product-item">
              <div>
                <div class="product-name">${product.name}</div>
                <div class="product-category">${product.category} • ${product.sales} sales</div>
              </div>
              <div class="product-price">${product.price}</div>
            </div>
          `
            )
            .join("")}
        </div>
        <div class="view-all-products">
          <button class="view-all-btn">
            <i class="fas fa-list"></i> View All Products
          </button>
        </div>
      </div>

      <!-- Manual FX Override Card -->
<div class="detail-card">
    <h3 class="detail-card-title">
        <i class="fas fa-money-bill-wave"></i> Manual FX Override
    </h3>
    
    <div class="card">
        <div class="card-header">
            <h2 class="card-title">
                <i class="fas fa-exchange-alt"></i>
                Set Custom Exchange Rate
            </h2>
            <span class="status-badge status-success" id="fxToggleStatus">
                Active
            </span>
        </div>
        
        <!-- Toggle Switch -->
        <div class="toggle-section">
            <div class="toggle-label">
                <label for="overrideToggle">Enable Manual FX Override</label>
                <div class="hint">Manually override the current market exchange rate</div>
            </div>
            
        </div>

        <!-- Currency Selection Section - UPPER -->
        <div class="currency-selection-section" id="currencySelection">
            <div class="form-row">
               
                
                                                        <label class="form-label">Base Currency</label>

              <div  class= "from-data">
                 <div class="form-group">
                    <div class="currency-selector-large">
                        <div class="currency-flag-large" id="baseFlagLarge">GBP</div>
                        <div class="currency-info-large">
                            <select class="form-control" id="overrideBase" onchange="updateCurrencyDisplay()">
                                <option value="GBP">British Pound (GBP)</option>
                                <option value="USD">US Dollar (USD)</option>
                                <option value="EUR">Euro (EUR)</option>
                                <option value="JPY">Japanese Yen (JPY)</option>
                                <option value="CAD">Canadian Dollar (CAD)</option>
                                <option value="AUD">Australian Dollar (AUD)</option>
                            </select>
                        </div>
                    </div>
                </div><div class="conversion-arrow">
                    <i class="fas fa-arrow-right"></i>
                </div>
                <div class="form-group">
                    <div class="currency-selector-large">
                        <div class="currency-flag-large" id="targetFlagLarge">EUR</div>
                        <div class="currency-info-large">
                            <select class="form-control" id="overrideTarget" onchange="updateCurrencyDisplay()">
                                <option value="EUR">Euro (EUR)</option>
                                <option value="GBP">British Pound (GBP)</option>
                                <option value="USD">US Dollar (USD)</option>
                                <option value="JPY">Japanese Yen (JPY)</option>
                                <option value="CAD">Canadian Dollar (CAD)</option>
                                <option value="AUD">Australian Dollar (AUD)</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
          </div
            <!-- Custom Rate Input -->
            <div class="form-group rate-input-group">
                <label class="form-label">Custom Rate</label>
                <div class="rate-input-container">
                   <div class="rate-data">
                    <div class="rate-prefix-large">1 <span id="baseCurrencyCodeDisplay">GBP</span> =</div>
                                        <div class="rate-suffix-large" id="targetCurrencyCodeDisplay">EUR</div>
                    </div>
                    <input 
                        type="number" 
                        class="form-control rate-input-large" 
                        id="overrideRate"
                        placeholder="0.9234" 
                        step="0.0001" 
                        min="0.0001" 
                        max="999.9999"
                        value="0.9234"
                        oninput="updateRatePreview()"
                    />
                </div>
                <div class="hint">Current market rate: <span id="marketRateDisplay">0.9218</span></div>
            </div>
        </div>

        

        <!-- Action Buttons -->
        <div class="action-buttons" id="actionButtons">
            <button class="btn-secondary" onclick="resetToMarketRate()">
                <i class="fas fa-redo"></i> Reset
            </button>
            <button class="btn-primary" onclick="setCustomExchangeRate()">
                <i class="fas fa-check-circle"></i> Apply Custom Rate
            </button>
        </div>
    </div>
</div>
            
      <!-- Sync History -->
      <div class="detail-card">
        <h3 class="detail-card-title">
          <i class="fas fa-sync-alt"></i> Sync History
        </h3>
        <div class="sync-list">
          ${vendor.syncLogs
            .map(
              (log) => `
            <div class="sync-log">
              <div>
                <div class="sync-time">${log.time}</div>
                <div class="sync-items">${log.items}</div>
              </div>
              <div class="sync-status ${
                log.status === "success" ? "success" : "error"
              }">${log.status === "success" ? "✓ Success" : "✗ Failed"}</div>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    </div>

    <div class="card" style="margin-top: 25px;">
      <div class="card-header">
        <h2 class="card-title">
          <i class="fas fa-calculator"></i>
          Rounding Rules
        </h2>
        <span class="status-badge status-success" id="roundingStatus">
          Active
        </span>
      </div>
      <div class="form-group">
        <label class="form-label">Select Rounding Method</label>
        <div class="radio-group">
          <label class="radio-option">
            <input type="radio" name="roundingMethod" value="up" checked />
            <div>
              <strong>Always Up (Ceiling)</strong>
              <div class="hint">Rounds up to the nearest specified increment</div>
            </div>
          </label>
          <label class="radio-option">
            <input type="radio" name="roundingMethod" value="nearest" />
            <div>
              <strong>Round To Nearest</strong>
              <div class="hint">Rounds to the closest specified increment</div>
            </div>
          </label>
          <label class="radio-option">
            <input type="radio" name="roundingMethod" value="down" />
            <div>
              <strong>Always Down (Floor)</strong>
              <div class="hint">Rounds down to the nearest specified increment</div>
            </div>
          </label>
        </div>
        <div class="form-group">
          <label class="form-label">Rounding Increment</label>
          <select class="form-control" id="roundingIncrement">
            <option value="0.01">0.01 (1 cent)</option>
            <option value="0.05" selected>0.05 (5 cents)</option>
            <option value="0.10">0.10 (10 cents)</option>
            <option value="0.25">0.25 (25 cents)</option>
            <option value="0.50">0.50 (50 cents)</option>
            <option value="1.00">1.00 (whole unit)</option>
          </select>
          <div class="hint">The amount to round to (e.g., 0.05 rounds to nearest 5 cents)</div>
        </div>
      </div>
    </div>

    <div class="vendor-footer-actions">
      <div>
        <a href="sync-vendor-product.html?id=${
          vendor.id
        }" class="vendor-action-btn primary">
          <i class="fas fa-sync-alt"></i> Sync Products Now
        </a>
        <a href="${
          vendor.website
        }" target="_blank" class="vendor-action-btn secondary">
          <i class="fas fa-external-link-alt"></i> Visit Store
        </a>
        <button class="vendor-action-btn danger" onclick="window.deleteVendor(${
          vendor.id
        })">
          <i class="fas fa-trash"></i> Delete Vendor
        </button>
      </div>
      <button class="vendor-action-btn secondary" onclick="window.printVendorDetails()">
        <i class="fas fa-print"></i> Print Details
      </button>
    </div>
  `;
      }

      // FX Override Configuration
      const fxOverrideConfig = {
        enabled: true,
        baseCurrency: "USD",
        targetCurrency: "EUR",
        customRate: 0.9234,
        marketRate: 0.9218,
        lastUpdated: "2024-01-15 14:30:00",
      };

      // Get currency name from code
      function getCurrencyName(code) {
        const currencyNames = {
          USD: "US Dollar",
          EUR: "Euro",
          GBP: "British Pound",
          JPY: "Japanese Yen",
          CAD: "Canadian Dollar",
          AUD: "Australian Dollar",
          CHF: "Swiss Franc",
          CNY: "Chinese Yuan",
        };
        return currencyNames[code] || code;
      }

      // FX Configuration
      const fxConfig = {
        enabled: true,
        baseCurrency: "GBP",
        targetCurrency: "EUR",
        customRate: 0.9234,
        marketRates: {
          GBP_EUR: 0.9218,
          USD_EUR: 0.9234,
          GBP_USD: 1.2765,
          USD_GBP: 0.7834,
          EUR_USD: 1.0832,
          EUR_GBP: 1.085,
        },
        lastUpdated: new Date().toLocaleString(),
      };

      // Update currency display
      function updateCurrencyDisplay() {
        const baseCurrency = document.getElementById("overrideBase").value;
        const targetCurrency = document.getElementById("overrideTarget").value;

        // Update flags
        document.getElementById("baseFlagLarge").textContent = baseCurrency;
        document.getElementById("targetFlagLarge").textContent = targetCurrency;

        // Update currency code displays
        document.getElementById("baseCurrencyCodeDisplay").textContent =
          baseCurrency;
        document.getElementById("targetCurrencyCodeDisplay").textContent =
          targetCurrency;

        // Update preview
        updateRatePreview();
      }

      // Update rate preview
      function updateRatePreview() {
        const baseCurrency = document.getElementById("overrideBase").value;
        const targetCurrency = document.getElementById("overrideTarget").value;
        const customRate = document.getElementById("overrideRate").value;

        // Get market rate for current pair
        const marketRateKey = `${baseCurrency}_${targetCurrency}`;
        const marketRate = fxConfig.marketRates[marketRateKey] || 0.9218;

        // Update displays
        document.getElementById(
          "previewBaseAmount"
        ).textContent = `1 ${baseCurrency}`;
        document.getElementById(
          "previewTargetAmount"
        ).textContent = `${customRate} ${targetCurrency}`;
        document.getElementById("marketRateDisplay").textContent = marketRate;
        document.getElementById(
          "marketRatePreview"
        ).textContent = `1 ${baseCurrency} = ${marketRate} ${targetCurrency}`;
      }

      // Set custom exchange rate
      function setCustomExchangeRate() {
        const baseCurrency = document.getElementById("overrideBase").value;
        const targetCurrency = document.getElementById("overrideTarget").value;
        const customRate = parseFloat(
          document.getElementById("overrideRate").value
        );
        const marketRateKey = `${baseCurrency}_${targetCurrency}`;
        const marketRate = fxConfig.marketRates[marketRateKey] || 0.9218;

        // Validation
        if (isNaN(customRate) || customRate <= 0) {
          alert("Please enter a valid exchange rate.");
          return;
        }

        if (baseCurrency === targetCurrency) {
          alert("Base and target currencies cannot be the same.");
          return;
        }

        // Calculate difference
        const difference = (
          ((customRate - marketRate) / marketRate) *
          100
        ).toFixed(2);

        // Confirmation
        const confirmMsg =
          `Apply custom exchange rate?\n\n` +
          `From: ${baseCurrency}\n` +
          `To: ${targetCurrency}\n` +
          `Rate: 1 ${baseCurrency} = ${customRate} ${targetCurrency}\n` +
          `Market rate: 1 ${baseCurrency} = ${marketRate} ${targetCurrency}\n` +
          `Difference: ${difference}%`;

        if (confirm(confirmMsg)) {
          // Update configuration
          fxConfig.baseCurrency = baseCurrency;
          fxConfig.targetCurrency = targetCurrency;
          fxConfig.customRate = customRate;
          fxConfig.lastUpdated = new Date().toLocaleString();

          // Show success
          alert(
            `✅ Custom exchange rate applied!\n\n` +
              `1 ${baseCurrency} = ${customRate} ${targetCurrency}\n` +
              `Applied: ${fxConfig.lastUpdated}`
          );

          console.log(
            `FX Rate Updated: ${baseCurrency}/${targetCurrency} = ${customRate}`
          );
        }
      }

      // Reset to market rate
      function resetToMarketRate() {
        const baseCurrency = document.getElementById("overrideBase").value;
        const targetCurrency = document.getElementById("overrideTarget").value;
        const marketRateKey = `${baseCurrency}_${targetCurrency}`;
        const marketRate = fxConfig.marketRates[marketRateKey] || 0.9218;

        if (
          confirm(
            `Reset to market rate: 1 ${baseCurrency} = ${marketRate} ${targetCurrency}?`
          )
        ) {
          document.getElementById("overrideRate").value = marketRate;
          updateRatePreview();
          alert("Rate reset to market value.");
        }
      }

      // Toggle override
      function toggleFXOverride() {
        const toggle = document.getElementById("overrideToggle");
        const currencySection = document.getElementById("currencySelection");
        const previewSection = document.getElementById("ratePreview");
        const actionButtons = document.getElementById("actionButtons");
        const toggleStatus = document.getElementById("fxToggleStatus");

        fxConfig.enabled = toggle.checked;

        if (toggle.checked) {
          currencySection.style.display = "block";
          previewSection.style.display = "block";
          actionButtons.style.display = "flex";
          toggleStatus.textContent = "Active";
          toggleStatus.className = "status-badge status-success";
        } else {
          currencySection.style.display = "none";
          previewSection.style.display = "none";
          actionButtons.style.display = "none";
          toggleStatus.textContent = "Inactive";
          toggleStatus.className = "status-badge status-warning";
        }
      }

      // Initialize
      function initFXOverride() {
        // Set initial values
        document.getElementById("overrideBase").value = fxConfig.baseCurrency;
        document.getElementById("overrideTarget").value =
          fxConfig.targetCurrency;
        document.getElementById("overrideRate").value = fxConfig.customRate;
        document.getElementById("overrideToggle").checked = fxConfig.enabled;

        // Initialize display
        updateCurrencyDisplay();

        // Add event listeners
        document
          .getElementById("overrideToggle")
          .addEventListener("change", toggleFXOverride);

        // Initial toggle
        toggleFXOverride();
      }

      // Initialize on load
      document.addEventListener("DOMContentLoaded", initFXOverride);
      // Update currency preview
      function updateCurrencyPreview() {
        const baseCode = document.getElementById("overrideBase").value;
        const targetCode = document.getElementById("overrideTarget").value;
        const customRate = document.getElementById("overrideRate").value;

        // Update flag display
        document.getElementById("baseCurrencyFlag").textContent = baseCode;
        document.getElementById("baseCurrencyText").textContent =
          getCurrencyName(baseCode);
        document.getElementById("targetCurrencyFlag").textContent = targetCode;
        document.getElementById("targetCurrencyText").textContent =
          getCurrencyName(targetCode);

        // Update preview
        document.getElementById("previewBase").textContent = `1 ${baseCode}`;
        document.getElementById(
          "previewTarget"
        ).textContent = `${customRate} ${targetCode}`;

        // Update market rate display
        document.getElementById(
          "previewMarketRate"
        ).textContent = `1 ${baseCode} = ${fxOverrideConfig.marketRate} ${targetCode}`;
      }

      // Set Custom Exchange Rate function
      function setCustomExchangeRate() {
        try {
          // Get form values
          const baseCurrency = document.getElementById("overrideBase").value;
          const targetCurrency =
            document.getElementById("overrideTarget").value;
          const rateInput = document.getElementById("overrideRate");
          const rate = parseFloat(rateInput.value);

          // Validation
          if (!baseCurrency || !targetCurrency) {
            alert("Please select both currencies.");
            return false;
          }

          if (isNaN(rate) || rate <= 0) {
            alert(
              "Please enter a valid exchange rate (must be a number greater than 0)."
            );
            rateInput.focus();
            return false;
          }

          if (baseCurrency === targetCurrency) {
            alert("Base and target currencies cannot be the same.");
            return false;
          }

          // Calculate difference from market rate
          const marketRate = fxOverrideConfig.marketRate;
          const difference = (((rate - marketRate) / marketRate) * 100).toFixed(
            2
          );

          // Confirmation message
          const confirmMsg =
            `Confirm Custom Exchange Rate:\n\n` +
            `From: ${baseCurrency} (${getCurrencyName(baseCurrency)})\n` +
            `To: ${targetCurrency} (${getCurrencyName(targetCurrency)})\n` +
            `Custom Rate: 1 ${baseCurrency} = ${rate} ${targetCurrency}\n` +
            `Market Rate: 1 ${baseCurrency} = ${marketRate} ${targetCurrency}\n` +
            `Difference: ${difference}%\n\n` +
            `This rate will override market rates for all transactions.`;

          if (confirm(confirmMsg)) {
            // Update configuration
            fxOverrideConfig.baseCurrency = baseCurrency;
            fxOverrideConfig.targetCurrency = targetCurrency;
            fxOverrideConfig.customRate = rate;
            fxOverrideConfig.lastUpdated = new Date().toLocaleString();

            // Update preview
            updateCurrencyPreview();

            // Show success message with timestamp
            const successMsg =
              `✅ Exchange Rate Updated Successfully!\n\n` +
              `Rate: 1 ${baseCurrency} = ${rate} ${targetCurrency}\n` +
              `Updated: ${fxOverrideConfig.lastUpdated}\n\n` +
              `This custom rate will be applied to all future transactions.`;

            alert(successMsg);

            // Log to console
            console.log(
              `Custom FX Rate Set: ${baseCurrency}/${targetCurrency} = ${rate}`
            );

            return true;
          }

          return false;
        } catch (error) {
          console.error("Error setting exchange rate:", error);
          alert(
            "An error occurred while setting the exchange rate. Please try again."
          );
          return false;
        }
      }

      // Toggle FX Override on/off
      function toggleFXOverride() {
        const toggle = document.getElementById("overrideToggle");
        const overrideForm = document.getElementById("overrideForm");
        const disabledMessage = document.getElementById(
          "overrideDisabledMessage"
        );
        const toggleStatus = document.getElementById("fxToggleStatus");

        fxOverrideConfig.enabled = toggle.checked;

        if (toggle.checked) {
          overrideForm.style.display = "block";
          disabledMessage.style.display = "none";
          toggleStatus.textContent = "Active";
          toggleStatus.className = "status-badge status-success";
          console.log("FX Override enabled");
        } else {
          overrideForm.style.display = "none";
          disabledMessage.style.display = "block";
          toggleStatus.textContent = "Inactive";
          toggleStatus.className = "status-badge status-warning";
          console.log("FX Override disabled");
        }
      }

      // Reset to market rate
      function resetToMarketRate() {
        if (confirm("Reset custom rate to current market rate?")) {
          const baseCurrency = document.getElementById("overrideBase").value;
          const targetCurrency =
            document.getElementById("overrideTarget").value;

          document.getElementById("overrideRate").value =
            fxOverrideConfig.marketRate;
          updateCurrencyPreview();

          alert(
            `Rate reset to market rate: 1 ${baseCurrency} = ${fxOverrideConfig.marketRate} ${targetCurrency}`
          );
        }
      }

      // Initialize FX Override functionality
      function initFXOverride() {
        // Set initial values
        document.getElementById("overrideBase").value =
          fxOverrideConfig.baseCurrency;
        document.getElementById("overrideTarget").value =
          fxOverrideConfig.targetCurrency;
        document.getElementById("overrideRate").value =
          fxOverrideConfig.customRate;
        document.getElementById("overrideToggle").checked =
          fxOverrideConfig.enabled;

        // Initialize toggle
        toggleFXOverride();

        // Update preview
        updateCurrencyPreview();

        // Add event listeners
        document
          .getElementById("overrideToggle")
          .addEventListener("change", toggleFXOverride);
        document
          .getElementById("overrideBase")
          .addEventListener("change", updateCurrencyPreview);
        document
          .getElementById("overrideTarget")
          .addEventListener("change", updateCurrencyPreview);
        document
          .getElementById("overrideRate")
          .addEventListener("input", updateCurrencyPreview);

        // Add reset button if not exists
        if (!document.getElementById("resetRateBtn")) {
          const formGroup = document.querySelector(".form-group");
          if (formGroup) {
            const resetBtn = document.createElement("button");
            resetBtn.id = "resetRateBtn";
            resetBtn.type = "button";
            resetBtn.className = "btn-secondary";
            resetBtn.innerHTML =
              '<i class="fas fa-undo"></i> Reset to Market Rate';
            resetBtn.onclick = resetToMarketRate;
            resetBtn.style.marginTop = "10px";
            formGroup.appendChild(resetBtn);
          }
        }
      }

      // Initialize when DOM is loaded
      document.addEventListener("DOMContentLoaded", function () {
        setTimeout(initFXOverride, 100);
      });
      // DOM Elements
      const vendorsListPage = document.getElementById("vendorsListPage");
      const vendorDetailsPage = document.getElementById("vendorDetailsPage");
      const backToVendorsBtn = document.getElementById("backToVendorsBtn");
      const pageMainTitle = document.getElementById("pageMainTitle");
      const pageSubtitle = document.getElementById("pageSubtitle");
      // JavaScript for Rounding Rules
      const roundingConfig = {
        method: "up",
        increment: 0.05,
        enabled: true,
      };

      // Initialize rounding rules
      function initRoundingRules() {
        const roundingMethodRadios = document.querySelectorAll(
          'input[name="roundingMethod"]'
        );
        const roundingIncrement = document.getElementById("roundingIncrement");
        const roundingStatus = document.getElementById("roundingStatus");

        if (!roundingMethodRadios.length) return;

        // Set initial values
        roundingMethodRadios.forEach((radio) => {
          if (radio.value === roundingConfig.method) {
            radio.checked = true;
          }
        });

        if (roundingIncrement) {
          roundingIncrement.value = roundingConfig.increment;
        }

        if (roundingStatus) {
          roundingStatus.textContent = roundingConfig.enabled
            ? "Active"
            : "Inactive";
        }

        // Add event listeners
        roundingMethodRadios.forEach((radio) => {
          radio.addEventListener("change", function () {
            if (this.checked) {
              roundingConfig.method = this.value;
              updateRoundingPreview();
            }
          });
        });

        if (roundingIncrement) {
          roundingIncrement.addEventListener("change", function () {
            roundingConfig.increment = parseFloat(this.value);
            updateRoundingPreview();
          });
        }

        updateRoundingPreview();
      }

      // Apply rounding to a price
      function applyRounding(price) {
        const increment = roundingConfig.increment;
        const method = roundingConfig.method;

        if (!roundingConfig.enabled) return price;

        switch (method) {
          case "up":
            return Math.ceil(price / increment) * increment;
          case "down":
            return Math.floor(price / increment) * increment;
          case "nearest":
            return Math.round(price / increment) * increment;
          default:
            return price;
        }
      }

      // Update rounding preview
      function updateRoundingPreview() {
        const samplePrices = [12.34, 45.67, 89.99, 123.45];
        const previewElement = document.getElementById("roundingPreview");

        if (!previewElement) return;

        const previewHTML = `
    <div style="margin-top: 15px; padding: 15px; background: #f8f9fa; border-radius: 8px;">
      <strong style="display: block; margin-bottom: 10px;">Preview:</strong>
      ${samplePrices
        .map((price) => {
          const rounded = applyRounding(price);
          return `<div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
          <span>$${price.toFixed(2)}</span>
          <span>→</span>
          <span>$${rounded.toFixed(2)}</span>
        </div>`;
        })
        .join("")}
    </div>
  `;

        previewElement.innerHTML = previewHTML;
      }

      // Toggle rounding on/off
      function toggleRounding(enabled) {
        roundingConfig.enabled = enabled;
        const roundingStatus = document.getElementById("roundingStatus");

        if (roundingStatus) {
          roundingStatus.textContent = enabled ? "Active" : "Inactive";
          roundingStatus.className = `status-badge ${
            enabled ? "status-success" : "status-warning"
          }`;
        }

        updateRoundingPreview();
      }

      // Save rounding configuration
      function saveRoundingConfig() {
        // Here you would typically send to server
        console.log("Saving rounding config:", roundingConfig);
        return roundingConfig;
      }

      // Reset to defaults
      function resetRoundingConfig() {
        roundingConfig.method = "up";
        roundingConfig.increment = 0.05;
        roundingConfig.enabled = true;
        initRoundingRules();
      }

      // Initialize when DOM is loaded
      document.addEventListener("DOMContentLoaded", function () {
        initRoundingRules();

        // Add rounding preview element if it doesn't exist
        const card = document.querySelector(".card");
        if (card && !document.getElementById("roundingPreview")) {
          const previewDiv = document.createElement("div");
          previewDiv.id = "roundingPreview";
          card.appendChild(previewDiv);
          updateRoundingPreview();
        }
      });

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

      // Bulk approve function
      function bulkApproveVendors() {
        const selectedIds = getSelectedVendorIds();

        if (selectedIds.length === 0) {
          alert("Please select at least one vendor to approve.");
          return;
        }

        const confirmMessage = `Are you sure you want to approve ${selectedIds.length} selected vendor(s)?`;

        if (confirm(confirmMessage)) {
          selectedIds.forEach((vendorId) => {
            const vendor = vendorsData.find((v) => v.id === vendorId);
            if (vendor) {
              vendor.status = "approved";
            }
          });

          alert(`Successfully approved ${selectedIds.length} vendor(s).`);
          clearSelection();
          window.filterVendors();
        }
      }

      // Bulk suspend function
      function bulkSuspendVendors() {
        const selectedIds = getSelectedVendorIds();

        if (selectedIds.length === 0) {
          alert("Please select at least one vendor to suspend.");
          return;
        }

        const confirmMessage = `Are you sure you want to suspend ${selectedIds.length} selected vendor(s)?`;

        if (confirm(confirmMessage)) {
          selectedIds.forEach((vendorId) => {
            const vendor = vendorsData.find((v) => v.id === vendorId);
            if (vendor) {
              vendor.status = "suspended";
            }
          });

          alert(`Successfully suspended ${selectedIds.length} vendor(s).`);
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
        updateBulkActions();
      }

      // Update bulk actions UI
      function updateBulkActions() {
        const selectedCount = document.querySelectorAll(
          ".custom-checkbox.checked"
        ).length;
        document.getElementById(
          "selectedCount"
        ).textContent = `${selectedCount} vendor${
          selectedCount !== 1 ? "s" : ""
        } selected`;

        if (selectedCount > 0) {
          document.getElementById("bulkActions").classList.add("active");
        } else {
          document.getElementById("bulkActions").classList.remove("active");
        }
      }

      // Add checkbox listeners
      function addCheckboxListeners() {
        const checkboxes = document.querySelectorAll(".custom-checkbox");
        checkboxes.forEach((checkbox) => {
          checkbox.addEventListener("click", function (e) {
            e.stopPropagation();
            if (this.classList.contains("checked")) {
              this.classList.remove("checked");
            } else {
              this.classList.add("checked");
            }
            updateBulkActions();
          });
        });
      }

      // Add row click listeners
      function addRowClickListeners() {
        const rows = document.querySelectorAll("#vendorsTableBody tr");
        rows.forEach((row) => {
          row.addEventListener("click", function (e) {
            if (
              e.target.closest(".checkbox-cell") ||
              e.target.closest(".table-actions") ||
              e.target.classList.contains("custom-checkbox") ||
              e.target.closest(".sync-action-btn")
            ) {
              return;
            }

            const vendorId = this.getAttribute("data-vendor-id");
            showVendorDetails(vendorId);
          });
        });
      }

      // Navigation Functions
      function showVendorDetails(vendorId) {
        const vendor = vendorsData.find((v) => v.id == vendorId);
        if (!vendor) return;

        pageMainTitle.textContent = `Vendor: ${vendor.name}`;
        pageSubtitle.textContent = `Viewing detailed information for ${vendor.name}`;

        document.getElementById("vendorDetailsContent").innerHTML =
          generateVendorDetailsHTML(vendor);

        vendorsListPage.classList.remove("active");
        vendorDetailsPage.classList.add("active");

        setTimeout(() => {
          addVendorDetailEventListeners(vendorId);
        }, 100);
      }

      function showVendorsList() {
        pageMainTitle.textContent = "Vendor Management";
        pageSubtitle.textContent =
          "Manage all vendors, review applications, and monitor activity";

        vendorsListPage.classList.add("active");
        vendorDetailsPage.classList.remove("active");

        window.filterVendors();
      }

      // Vendor detail event listeners
      function addVendorDetailEventListeners(vendorId) {
        const vendor = vendorsData.find((v) => v.id == vendorId);

        // Approve button
        const approveBtn = document.querySelector(
          '.vendor-action-btn.primary[onclick*="approveVendor"]'
        );
        if (approveBtn) {
          approveBtn.onclick = () => {
            if (confirm(`Approve ${vendor.name}?`)) {
              vendor.status = "approved";
              alert("Vendor approved successfully!");
              showVendorsList();
            }
          };
        }

        // Suspend button
        const suspendBtn = document.querySelector(
          '.vendor-action-btn.secondary[onclick*="suspendVendor"]'
        );
        if (suspendBtn) {
          suspendBtn.onclick = () => {
            if (confirm(`Suspend ${vendor.name}?`)) {
              vendor.status = "suspended";
              alert("Vendor suspended successfully!");
              showVendorsList();
            }
          };
        }

        // Delete button
        const deleteBtn = document.querySelector(
          '.vendor-action-btn.danger[onclick*="deleteVendor"]'
        );
        if (deleteBtn) {
          deleteBtn.onclick = () => {
            if (confirm(`Are you sure you want to delete ${vendor.name}?`)) {
              const index = vendorsData.findIndex((v) => v.id == vendorId);
              if (index > -1) {
                vendorsData.splice(index, 1);
                alert("Vendor deleted successfully!");
                showVendorsList();
              }
            }
          };
        }

        // Print button
        const printBtn = document.querySelector(
          '.vendor-action-btn[onclick*="printVendorDetails"]'
        );
        if (printBtn) {
          printBtn.onclick = () => {
            window.print();
          };
        }
      }

      // Show more actions dropdown
      function showMoreActions(vendorId) {
        const vendor = vendorsData.find((v) => v.id == vendorId);
        if (!vendor) return;

        const action = prompt(
          `Actions for ${vendor.name}:\n1. Approve\n2. Suspend\n3. Email\n4. View Details\n\nEnter action number:`
        );

        switch (action) {
          case "1":
            if (confirm(`Approve ${vendor.name}?`)) {
              vendor.status = "approved";
              window.filterVendors();
              alert("Vendor approved!");
            }
            break;
          case "2":
            if (confirm(`Suspend ${vendor.name}?`)) {
              vendor.status = "suspended";
              window.filterVendors();
              alert("Vendor suspended!");
            }
            break;
          case "3":
            window.location.href = `mailto:${vendor.email}`;
            break;
          case "4":
            showVendorDetails(vendorId);
            break;
        }
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

        vendorsToShow.forEach((vendor) => {
          const row = document.createElement("tr");
          row.setAttribute("data-vendor-id", vendor.id);
          row.innerHTML = `
      <td class="checkbox-cell">
        <div class="custom-checkbox" data-id="${vendor.id}"></div>
      </td>
      <td>
        <div class="vendor-info">
          <div class="vendor-avatar" style="background-color: ${
            vendor.avatarColor
          }">
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
        <span class="status-badge status-${
          vendor.status
        }" style="background-color: ${statusColors[vendor.status]}0.1; color: ${
            statusColors[vendor.status]
          }">
          ${statusNames[vendor.status]}
        </span>
      </td>
      <td>
        <div class="country-flag">
          <span class="flag-icon">${countries[vendor.country].flag}</span>
          ${countries[vendor.country].name}
        </div>
      </td>
      <td><strong>${vendor.products}</strong> products</td>
      <td>${timeAgo(vendor.lastSync)}</td>
      <td>
        <div class="table-actions">
          <a href="sync-vendor-product.html?id=${
            vendor.id
          }" class="sync-action-btn" title="Sync Settings">
            <i class="fas fa-sync-alt"></i> Sync
          </a>
          <button class="action-btn" title="View Details" onclick="showVendorDetails(${
            vendor.id
          })">
            <i class="fas fa-eye"></i>
          </button>
          <button class="action-btn" title="More" onclick="showMoreActions(${
            vendor.id
          })">
            <i class="fas fa-ellipsis-h"></i>
          </button>
        </div>
      </td>
    `;
          tableBody.appendChild(row);
        });

        updatePaginationInfo();
        renderPageNumbers();
        addCheckboxListeners();
        addRowClickListeners();
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
          pageBtn.className = `page-number ${
            i === currentVendorPage ? "active" : ""
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

      // Add Vendor Modal functionality
      const addVendorBtn = document.getElementById("addVendorBtn");
      const modalHTML = `
 <div id="addVendorModal" class="modal-overlay" style="display: none;">
      <div class="modal-container">
        <div class="modal-header">
          <h2>Add New Vendor</h2>
          <button class="modal-close-btn">&times;</button>
        </div>
        <div class="modal-body">
          <form id="addVendorForm">
            <div class="form-grid">
              <div class="form-group">
                <label for="vendorName">Vendor Name *</label>
                <input type="text" id="vendorName" required placeholder="Enter vendor name">
              </div>
              <div class="form-group">
                <label for="vendorEmail">Email Address *</label>
                <input type="email" id="vendorEmail" required placeholder="vendor@example.com">
              </div>
              <div class="form-group">
                <label for="vendorStoreName">Store Name</label>
                <input type="text" id="vendorStoreName" placeholder="Enter store name">
              </div>
              <div class="form-group">
                <label for="vendorCompanyName">Company Name</label>
                <input type="text" id="vendorCompanyName" placeholder="Enter company name">
              </div>
              <div class="form-group">
                <label for="vendorBrandName">Brand Name</label>
                <input type="text" id="vendorBrandName" placeholder="Enter brand name">
              </div>
              <div class="form-group">
                <label for="vendorPlatform">Platform *</label>
                <select id="vendorPlatform" required>
                  <option value="">Select Platform</option>
                  <option value="shopify">Shopify</option>
                  <option value="woo">WooCommerce</option>
                  <option value="wix">Wix</option>
                </select>
              </div>
              <div class="form-group">
                <label for="vendorCountry">Country *</label>
                <select id="vendorCountry" required>
                  <option value="">Select Country</option>
                  <option value="us">United States</option>
                  <option value="uk">United Kingdom</option>
                  <option value="ca">Canada</option>
                  <option value="au">Australia</option>
                  <option value="de">Germany</option>
                  <option value="fr">France</option>
                </select>
              </div>
              <div class="form-group">
                <label for="vendorSubscriptionPlan">Subscription Plan</label>
                <select id="vendorSubscriptionPlan">
                  <option value="">Select Plan</option>
                  <option value="Basic">Basic</option>
                  <option value="Standard">Standard</option>
                  <option value="Pro">Pro</option>
                  <option value="Enterprise">Enterprise</option>
                  <option value="Shopify Plus">Shopify Plus</option>
                  <option value="WooCommerce Pro">WooCommerce Pro</option>
                  <option value="Wix Business Elite">Wix Business Elite</option>
                </select>
              </div>
              <div class="form-group">
                <label for="vendorRenewalDate">Renewal Date</label>
                <input type="date" id="vendorRenewalDate">
              </div>
              <div class="form-group full-width">
                <label for="vendorWebsite">Website URL</label>
                <input type="url" id="vendorWebsite" placeholder="https://example.com">
              </div>
              <div class="form-group full-width">
                <label for="vendorAddress">Address</label>
                <input type="text" id="vendorAddress" placeholder="Enter full address">
              </div>
              <div class="form-group">
                <label for="vendorPhone">Phone</label>
                <input type="tel" id="vendorPhone" placeholder="+1 (555) 123-4567">
              </div>
              <div class="form-group">
                <label for="vendorDescription">Description</label>
                <textarea id="vendorDescription" rows="3" placeholder="Brief description about the vendor..."></textarea>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn-secondary modal-cancel-btn">Cancel</button>
              <button type="submit" class="btn-primary">Add Vendor</button>
            </div>
          </form>
        </div>
      </div>
    </div>
`;

      // Add modal styles
      const modalStyles = `
<style>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.modal-container {
  background-color: white;
  border-radius: 15px;
  width: 90%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  animation: slideUp 0.3s ease;
}

@keyframes slideUp {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  border-bottom: 1px solid var(--light-gray);
}

.modal-header h2 {
  font-size: 24px;
  color: var(--dark);
  margin: 0;
}

.modal-close-btn {
  background: none;
  border: none;
  font-size: 28px;
  color: var(--gray);
  cursor: pointer;
  padding: 0;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.modal-close-btn:hover {
  background-color: var(--light-gray);
  color: var(--dark);
}

.modal-body {
  padding: 30px;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 30px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group.full-width {
  grid-column: 1 / -1;
}

.form-group label {
  font-weight: 600;
  margin-bottom: 8px;
  color: var(--dark);
  font-size: 14px;
}

.form-group input,
.form-group select,
.form-group textarea {
  padding: 12px 15px;
  border: 1px solid var(--light-gray);
  border-radius: var(--border-radius);
  font-size: 14px;
  transition: var(--transition);
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(67, 97, 238, 0.1);
}

.form-group input::placeholder {
  color: #adb5bd;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: 15px;
  padding-top: 20px;
  border-top: 1px solid var(--light-gray);
}

.btn-primary, .btn-secondary {
  padding: 12px 24px;
  border-radius: var(--border-radius);
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: var(--transition);
  font-size: 16px;
}

.btn-primary {
  background-color: var(--primary);
  color: white;
}

.btn-primary:hover {
  background-color: var(--secondary);
  transform: translateY(-2px);
}

.btn-secondary {
  background-color: var(--light);
  color: var(--dark);
}

.btn-secondary:hover {
  background-color: #e9ecef;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .form-grid {
    grid-template-columns: 1fr;
  }
  
  .modal-container {
    width: 95%;
    margin: 10px;
  }
}
</style>
`;

      // Add modal to DOM
      document.head.insertAdjacentHTML("beforeend", modalStyles);
      document.body.insertAdjacentHTML("beforeend", modalHTML);

      const addVendorModal = document.getElementById("addVendorModal");
      const modalCloseBtn = document.querySelector(".modal-close-btn");
      const modalCancelBtn = document.querySelector(".modal-cancel-btn");
      const addVendorForm = document.getElementById("addVendorForm");

      // Open modal
      addVendorBtn.addEventListener("click", () => {
        addVendorModal.style.display = "flex";
        document.body.style.overflow = "hidden";
      });

      // Close modal functions
      function closeModal() {
        addVendorModal.style.display = "none";
        document.body.style.overflow = "auto";
        addVendorForm.reset();
      }

      modalCloseBtn.addEventListener("click", closeModal);
      modalCancelBtn.addEventListener("click", closeModal);

      // Close modal when clicking outside
      addVendorModal.addEventListener("click", (e) => {
        if (e.target === addVendorModal) {
          closeModal();
        }
      });

      // Handle form submission

      // Handle form submission
      addVendorForm.addEventListener("submit", (e) => {
        e.preventDefault();

        // Get form values
        const vendorName = document.getElementById("vendorName").value.trim();
        const vendorEmail = document.getElementById("vendorEmail").value.trim();
        const vendorPlatform = document.getElementById("vendorPlatform").value;
        const vendorCountry = document.getElementById("vendorCountry").value;
        const vendorStoreName = document
          .getElementById("vendorStoreName")
          .value.trim();
        const vendorCompanyName = document
          .getElementById("vendorCompanyName")
          .value.trim();
        const vendorBrandName = document
          .getElementById("vendorBrandName")
          .value.trim();
        const vendorPhone = document.getElementById("vendorPhone").value.trim();
        const vendorAddress = document
          .getElementById("vendorAddress")
          .value.trim();
        const vendorWebsite = document
          .getElementById("vendorWebsite")
          .value.trim();
        const vendorDescription = document
          .getElementById("vendorDescription")
          .value.trim();
        const vendorPlan = document.getElementById(
          "vendorSubscriptionPlan"
        ).value;
        const vendorRenewalDate =
          document.getElementById("vendorRenewalDate").value;

        // Validate required fields
        if (!vendorName || !vendorEmail || !vendorPlatform || !vendorCountry) {
          alert("Please fill in all required fields (*)");
          return;
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(vendorEmail)) {
          alert("Please enter a valid email address");
          return;
        }

        // Generate unique ID
        const newId = Math.max(...vendorsData.map((v) => v.id)) + 1;

        // Generate random color for avatar
        const colors = [
          "#4361ee",
          "#4cc9f0",
          "#f72585",
          "#06d6a0",
          "#9d4edd",
          "#ff9e00",
        ];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];

        // Create new vendor object with all company info
        const newVendor = {
          id: newId,
          name: vendorName,
          email: vendorEmail,
          platform: vendorPlatform,
          status: "pending",
          country: vendorCountry,
          products: 0,
          revenue: "$0",
          orders: 0,
          joinedDate: new Date().toISOString().split("T")[0],
          lastSync: new Date().toISOString().replace("T", " ").split(".")[0],
          phone: vendorPhone,
          website:
            vendorWebsite ||
            `https://${vendorName.toLowerCase().replace(/\s+/g, "")}.com`,
          avatarColor: randomColor,
          address: vendorAddress,
          description: vendorDescription || "No description provided.",

          // Company Information Fields
          storeName: vendorStoreName,
          companyName: vendorCompanyName,
          brandName: vendorBrandName,

          performance: {
            conversionRate: "0%",
            avgOrderValue: "$0",
            customerRating: "0/5",
            returnRate: "0%",
            growth: "0%",
            customerSatisfaction: "0%",
          },
          topProducts: [],
          syncLogs: [
            {
              time: "Just now",
              status: "success",
              items: "Vendor account created",
              details: "Initial setup complete",
            },
          ],
          storeInfo: {
            storeUrl: vendorWebsite || "",
            apiStatus: "Pending",
            plan: vendorPlan || `${platformNames[vendorPlatform]} Basic`,
            subscription: "Pending",
            renewalDate:
              vendorRenewalDate ||
              new Date(new Date().setFullYear(new Date().getFullYear() + 1))
                .toISOString()
                .split("T")[0],
          },
        };

        // Add to vendors data
        vendorsData.unshift(newVendor);

        // Close modal
        closeModal();

        // Show success message
        alert(`Vendor "${vendorName}" added successfully!`);

        // Refresh table
        window.filterVendors();
      });

      // Filter vendors function
      window.filterVendors = function () {
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

        currentVendorPage = 1;
        renderTable();
      };

      // Initialize Table Functions
      function initializeTable() {
        document
          .getElementById("statusFilter")
          .addEventListener("change", window.filterVendors);
        document
          .getElementById("platformFilter")
          .addEventListener("change", window.filterVendors);
        document
          .getElementById("countryFilter")
          .addEventListener("change", window.filterVendors);
        document
          .getElementById("searchInput")
          .addEventListener("input", window.filterVendors);
        document
          .getElementById("clearFilters")
          .addEventListener("click", () => {
            document.getElementById("statusFilter").value = "all";
            document.getElementById("platformFilter").value = "all";
            document.getElementById("countryFilter").value = "all";
            document.getElementById("searchInput").value = "";
            window.filterVendors();
          });

        document
          .getElementById("selectAllCheckbox")
          .addEventListener("click", function () {
            const isChecked = this.classList.contains("checked");
            const checkboxes = document.querySelectorAll(
              ".custom-checkbox:not(#selectAllCheckbox)"
            );

            checkboxes.forEach((cb) => {
              if (isChecked) {
                cb.classList.remove("checked");
              } else {
                cb.classList.add("checked");
              }
            });

            if (isChecked) {
              this.classList.remove("checked");
            } else {
              this.classList.add("checked");
            }

            updateBulkActions();
          });

        document
          .getElementById("bulkApprove")
          .addEventListener("click", bulkApproveVendors);
        document
          .getElementById("bulkSuspend")
          .addEventListener("click", bulkSuspendVendors);
        document
          .getElementById("clearSelection")
          .addEventListener("click", clearSelection);

        window.filterVendors();
      }

      // Initialize when DOM is loaded
      document.addEventListener("DOMContentLoaded", () => {
        initializeTable();

        backToVendorsBtn.addEventListener("click", showVendorsList);

        document
          .getElementById("addVendorBtn")
          .addEventListener("click", function () {
            alert(
              "Add New Vendor functionality would open a modal or form here."
            );
          });

        window.showVendorDetails = showVendorDetails;
        window.showVendorsList = showVendorsList;
        window.showMoreActions = showMoreActions;
        window.renderTable = renderTable;
        window.approveVendor = (vendorId) => {
          const vendor = vendorsData.find((v) => v.id == vendorId);
          if (vendor && confirm(`Approve ${vendor.name}?`)) {
            vendor.status = "approved";
            showVendorsList();
          }
        };
        window.suspendVendor = (vendorId) => {
          const vendor = vendorsData.find((v) => v.id == vendorId);
          if (vendor && confirm(`Suspend ${vendor.name}?`)) {
            vendor.status = "suspended";
            showVendorsList();
          }
        };
        window.deleteVendor = (vendorId) => {
          const vendor = vendorsData.find((v) => v.id == vendorId);
          if (vendor && confirm(`Delete ${vendor.name}?`)) {
            const index = vendorsData.findIndex((v) => v.id == vendorId);
            vendorsData.splice(index, 1);
            showVendorsList();
          }
        };
        window.printVendorDetails = () => {
          window.print();
        };
      });
