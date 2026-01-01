
    const vendorData = {
      id: 1,
      name: "TechGadgets Inc.",
      email: "contact@techgadgets.com",
      avatarColor: "#4361ee",
      platform: "shopify",
      status: "approved",
      country: "us",
      products: 245,
      orders: 1234,
      revenue: 89560,
      joined: "2023-05-15",
      businessName: "TechGadgets Inc.",
      contactPerson: "John Smith",
      phoneNumber: "+1 (555) 123-4567",
      taxId: "TAX-789456123",
      businessAddress: "123 Tech Street, San Francisco, CA 94107",
      businessType: "Electronics Retailer",
      storeUrl: "techgadgets.myshopify.com",
      apiStatus: "connected",
      lastApiSync: "2023-11-10 10:30:00",
      apiVersion: "2023-10",
      webhookStatus: "active",
      countryName: "United States",
      currencyCode: "USD ($)",
      taxRate: "8.5%",
      timezone: "Pacific Time (PT)",
      language: "English (US)",
      shippingZones: "US, Canada, EU",
      warehouseName: "TechGadgets Central",
      warehouseAddress: "456 Warehouse Ave, Oakland, CA 94601",
      warehouseContact: "warehouse@techgadgets.com",
      warehouseCapacity: "10,000 sq ft",
      shippingMethods: "UPS, FedEx, DHL",
      processingTime: "1-2 Business Days",
      commissionRate: "15%",
      commissionType: "Percentage",
      lastPayout: "Nov 5, 2023 - $2,450.50",
      nextPayout: "Dec 5, 2023",
      totalCommission: "$12,560.75",
    };

    // JavaScript for Rounding Rules
    const roundingConfig = {
      method: "up",
      increment: 0.05,
      enabled: true
    };

    // Initialize rounding rules
    function initRoundingRules() {
      const roundingMethodRadios = document.querySelectorAll('input[name="roundingMethod"]');
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
        roundingStatus.textContent = roundingConfig.enabled ? "Active" : "Inactive";
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


