    // ===== TEMPLATE DATA =====
    const templateData = {
      "order-confirmation": {
        title: "Order Confirmation",
        subject: "Order Confirmation - #{order_id}",
        content: `Dear {customer_name},

Thank you for your order #{order_id} placed on {order_date}.

Your order is being processed and we will notify you once it ships.

Order Details:
- Item: {item_name}
- Quantity: {quantity}
- Total: {order_total}

We appreciate your business!

Best regards,
The {company_name} Team`,
        variables: [
          "customer_name",
          "order_id",
          "order_date",
          "item_name",
          "quantity",
          "order_total",
          "company_name",
        ],
        html: `<style>
  .order-confirmation {
    font-family: Arial, sans-serif;
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background: #ffffff;
    border: 1px solid #e2e8f0;
  }
  .order-confirmation h2 {
    color: #4f46e5;
    font-size: 24px;
    margin-bottom: 20px;
  }
  .order-details {
    background: #f8fafc;
    padding: 20px;
    border-radius: 8px;
    border-left: 4px solid #4f46e5;
  }
</style>

<div class="order-confirmation">
  <h2>Order Confirmation</h2>
  <p>Dear {customer_name},</p>
  <p>Thank you for your order #{order_id} placed on {order_date}.</p>
  <p>Your order is being processed and we will notify you once it ships.</p>
  
  <div class="order-details">
    <h3>Order Details:</h3>
    <ul>
      <li><strong>Item:</strong> {item_name}</li>
      <li><strong>Quantity:</strong> {quantity}</li>
      <li><strong>Total:</strong> {order_total}</li>
    </ul>
  </div>
  
  <p>We appreciate your business!</p>
  <p>Best regards,<br>The {company_name} Team</p>
</div>`,
      },
      "shipment-update": {
        title: "Shipment Update",
        subject: "Your Order #{order_id} Has Shipped!",
        content: `Hello {customer_name},

Your order #{order_id} has been shipped!

Tracking Number: {tracking_number}
Carrier: {carrier}
Estimated Delivery: {delivery_date}

You can track your package here: {tracking_link}

Thank you for shopping with us!

Sincerely,
{company_name}`,
        variables: [
          "customer_name",
          "order_id",
          "tracking_number",
          "carrier",
          "delivery_date",
          "tracking_link",
          "company_name",
        ],
        html: `<style>
  .shipment-update {
    font-family: Arial, sans-serif;
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background: #ffffff;
    border: 1px solid #e2e8f0;
  }
  .shipment-update h2 {
    color: #10b981;
    font-size: 24px;
    margin-bottom: 20px;
  }
  .tracking-info {
    background: #f0f9ff;
    padding: 20px;
    border-radius: 8px;
    border: 1px solid #bae6fd;
  }
  .tracking-number {
    font-family: monospace;
    color: #0369a1;
    font-size: 14px;
  }
</style>

<div class="shipment-update">
  <h2>Shipment Update</h2>
  <p>Hello {customer_name},</p>
  <p>Your order #{order_id} has been shipped!</p>
  
  <div class="tracking-info">
    <h3>Shipping Details:</h3>
    <p><strong>Tracking Number:</strong> <span class="tracking-number">{tracking_number}</span></p>
    <p><strong>Carrier:</strong> {carrier}</p>
    <p><strong>Estimated Delivery:</strong> {delivery_date}</p>
    <a href="{tracking_link}" style="background: #10b981; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block; margin-top: 10px;">
      Track Your Package
    </a>
  </div>
  
  <p>Thank you for shopping with us!</p>
  <p>Sincerely,<br>{company_name}</p>
</div>`,
      },
      "welcome-email": {
        title: "Welcome Email",
        subject: "Welcome to {company_name}!",
        content: `Welcome to {company_name}, {customer_name}!

We're excited to have you join our community. Here's what you can do next:

1. Complete your profile
2. Explore our products
3. Save items to your wishlist

As a welcome gift, use code WELCOME10 for 10% off your first purchase!

Let us know if you have any questions.

Cheers,
The {company_name} Team`,
        variables: ["customer_name", "company_name"],
        html: `<style>
  .welcome-email {
    font-family: Arial, sans-serif;
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background: #ffffff;
    border: 1px solid #e2e8f0;
  }
  .welcome-header {
    background: linear-gradient(135deg, #4f46e5 0%, #7c73e6 100%);
    border-radius: 8px;
    padding: 30px;
    text-align: center;
    margin-bottom: 20px;
  }
  .welcome-header h2 {
    color: white;
    font-size: 28px;
    margin-bottom: 10px;
  }
  .step-box {
    background: #f8fafc;
    padding: 15px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 10px;
  }
  .welcome-gift {
    background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
    border-radius: 8px;
    padding: 25px;
    text-align: center;
    margin: 25px 0;
    border: 2px dashed #d97706;
  }
</style>

<div class="welcome-email">
  <div class="welcome-header">
    <h2>Welcome to {company_name}!</h2>
    <p style="color: rgba(255, 255, 255, 0.9);">Welcome to {company_name}, {customer_name}!</p>
  </div>
  
  <p>We're excited to have you join our community. Here's what you can do next:</p>
  
  <div class="step-box" style="border-left: 4px solid #4f46e5;">
    <div style="background: #4f46e5; color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold;">1</div>
    <div>
      <strong>Complete your profile</strong><br>
      <small>Get personalized recommendations</small>
    </div>
  </div>
  
  <div class="step-box" style="border-left: 4px solid #10b981;">
    <div style="background: #10b981; color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold;">2</div>
    <div>
      <strong>Explore our products</strong><br>
      <small>Discover amazing products</small>
    </div>
  </div>
  
  <div class="step-box" style="border-left: 4px solid #f59e0b;">
    <div style="background: #f59e0b; color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold;">3</div>
    <div>
      <strong>Save items to your wishlist</strong><br>
      <small>Keep track of favorites</small>
    </div>
  </div>
  
  <div class="welcome-gift">
    <h3 style="color: #92400e;">🎁 Welcome Gift!</h3>
    <p style="font-size: 28px; font-weight: bold; color: #92400e;">
      Use code: <span style="color: #b45309; text-decoration: underline;">WELCOME10</span>
    </p>
    <p style="color: #92400e;">For 10% off your first purchase!</p>
  </div>
  
  <p>Let us know if you have any questions.</p>
  <p>Cheers,<br>The {company_name} Team</p>
</div>`,
      },
      "password-reset": {
        title: "Password Reset",
        subject: "Password Reset Request - {company_name}",
        content: `Hello {customer_name},

We received a request to reset your password for your {company_name} account.

To reset your password, click the link below:
{reset_link}

This link will expire in 24 hours. If you didn't request this password reset, you can safely ignore this email.

For security, never share your password with anyone.

Best regards,
{company_name} Security Team`,
        variables: ["customer_name", "company_name", "reset_link"],
        html: `<style>
  .password-reset {
    font-family: Arial, sans-serif;
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background: #ffffff;
    border: 1px solid #e2e8f0;
  }
  .warning-box {
    background: #fef2f2;
    border-radius: 8px;
    padding: 20px;
    margin: 25px 0;
    border-left: 4px solid #dc2626;
  }
  .security-tip {
    background: #f8fafc;
    border-radius: 8px;
    padding: 15px;
    margin: 20px 0;
    border: 1px solid #e2e8f0;
  }
</style>

<div class="password-reset">
  <div style="text-align: center; margin-bottom: 30px;">
    <div style="background: #fee2e2; width: 60px; height: 60px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 15px;">
      <span style="color: #dc2626; font-size: 28px; font-weight: bold;">!</span>
    </div>
    <h2 style="color: #dc2626; font-size: 24px; margin-bottom: 10px;">Password Reset Request</h2>
  </div>
  
  <p>Hello {customer_name},</p>
  <p>We received a request to reset your password for your {company_name} account.</p>
  
  <div style="text-align: center; margin: 30px 0;">
    <a href="{reset_link}" style="background: linear-gradient(135deg, #dc2626 0%, #ef4444 100%); color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; display: inline-block; font-weight: 600; font-size: 16px; box-shadow: 0 4px 6px rgba(220, 38, 38, 0.2);">
      Reset Your Password
    </a>
  </div>
  
  <div class="warning-box">
    <div style="display: flex; align-items: flex-start; gap: 10px;">
      <span style="color: #dc2626; font-size: 18px;">⚠️</span>
      <div>
        <strong style="color: #991b1b;">Important Security Notice</strong>
        <p style="color: #7f1d1d; font-size: 14px; margin: 0; line-height: 1.5;">
          This link will expire in 24 hours. If you didn't request this password reset, you can safely ignore this email.
        </p>
      </div>
    </div>
  </div>
  
  <div class="security-tip">
    <div style="display: flex; align-items: center; gap: 10px;">
      <span style="color: #1e293b; font-size: 18px;">🔒</span>
      <div>
        <strong style="color: #1e293b;">Security Tip</strong>
        <p style="color: #64748b; font-size: 14px; margin: 0;">For security, never share your password with anyone.</p>
      </div>
    </div>
  </div>
  
  <p>Best regards,<br><strong style="color: #dc2626;">{company_name} Security Team</strong></p>
</div>`,
      },
    };

    // ===== STATE MANAGEMENT =====
    let currentTemplateId = null;
    let currentTab = "edit";
    let htmlHasBeenEdited = false;
    let originalTemplateData = null;

    // ===== INITIALIZE =====
    document.addEventListener("DOMContentLoaded", () => {
      // Check URL for template parameter
      const urlParams = new URLSearchParams(window.location.search);
      const templateId = urlParams.get('template');

      if (templateId && templateData[templateId]) {
        // Show editor page
        showEditorPage(templateId);
      } else {
        // Show main page
        showMainPage();
      }

      initializeMainPage();
    });

    // ===== PAGE MANAGEMENT =====
    function showMainPage() {
      document.getElementById('main-page').style.display = 'block';
      document.getElementById('editor-page').style.display = 'none';
    }

    function showEditorPage(templateId) {
      document.getElementById('main-page').style.display = 'none';
      document.getElementById('editor-page').style.display = 'block';

      openTemplate(templateId);
    }

    function goToEditor(templateId) {
      // Update URL without reloading
      const newUrl = window.location.pathname + '?template=' + templateId;
      window.history.pushState({ template: templateId }, '', newUrl);
      showEditorPage(templateId);
    }

    function goToMainPage() {
      // Update URL without reloading
      window.history.pushState({}, '', window.location.pathname);
      showMainPage();
    }

    // Handle browser back/forward buttons
    window.addEventListener('popstate', () => {
      const urlParams = new URLSearchParams(window.location.search);
      const templateId = urlParams.get('template');

      if (templateId && templateData[templateId]) {
        showEditorPage(templateId);
      } else {
        showMainPage();
      }
    });

    // ===== MAIN PAGE FUNCTIONS =====
    function initializeMainPage() {
      initializeToggleSwitches();
      initializeTestEmail();

      // Add event listeners to edit template buttons
      document.querySelectorAll('.edit-template').forEach(button => {
        button.addEventListener('click', (e) => {
          const templateId = e.target.dataset.template;
          goToEditor(templateId);
        });
      });

      showToast("Email settings loaded successfully");
    }

    // ===== TOGGLE SWITCHES =====
    function initializeToggleSwitches() {
      const toggles = document.querySelectorAll(".switch input");

      toggles.forEach((toggle) => {
        toggle.addEventListener("change", () => {
          const settingName = toggle
            .closest(".setting")
            .querySelector("strong").innerText;
          const state = toggle.checked ? "enabled" : "disabled";

          showToast(`${settingName} notifications ${state}`);
          localStorage.setItem(settingName, toggle.checked);

          const settingElement = toggle.closest(".setting");
          settingElement.style.backgroundColor = toggle.checked
            ? "#f0f9ff"
            : "#f8fafc";
        });

        // Load saved states
        const settingName = toggle
          .closest(".setting")
          .querySelector("strong").innerText;
        if (localStorage.getItem(settingName) !== null) {
          toggle.checked = localStorage.getItem(settingName) === "true";
          if (toggle.checked) {
            const settingElement = toggle.closest(".setting");
            settingElement.style.backgroundColor = "#f0f9ff";
          }
        }
      });

      // Enable/Disable all buttons
      document.getElementById("enableAll").addEventListener("click", () => {
        toggles.forEach((toggle) => {
          toggle.checked = true;
          toggle.dispatchEvent(new Event("change"));
        });
        showToast("All notifications enabled");
      });

      document.getElementById("disableAll").addEventListener("click", () => {
        toggles.forEach((toggle) => {
          toggle.checked = false;
          toggle.dispatchEvent(new Event("change"));
        });
        showToast("All notifications disabled");
      });
    }

    // ===== TEST EMAIL =====
    function initializeTestEmail() {
      document.getElementById("sendTest").addEventListener("click", () => {
        const email = document.getElementById("testEmail").value.trim();
        const subject = document.getElementById("testSubject").value.trim();
        const message = document.getElementById("testMessage").value.trim();

        if (!email || !subject || !message) {
          showToast("⚠️ Please fill in all fields before sending", "warning");
          return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          showToast("⚠️ Please enter a valid email address", "warning");
          return;
        }

        // Simulate sending
        console.log({ email, subject, message });
        showToast(`✅ Test email sent successfully to ${email}!`);

        // Clear form after successful send
        document.getElementById("testEmail").value = "";
        document.getElementById("testSubject").value = "";
        document.getElementById("testMessage").value = "";
      });

      // Clear form button
      document.getElementById("clearForm").addEventListener("click", () => {
        document.getElementById("testEmail").value = "";
        document.getElementById("testSubject").value = "";
        document.getElementById("testMessage").value = "";
        showToast("Form cleared");
      });
    }

    // ===== EDITOR PAGE FUNCTIONS =====
    function openTemplate(templateId) {
      currentTemplateId = templateId;
      const template = templateData[templateId];

      if (!template) return;

      // Save original template data for reset functionality
      originalTemplateData = {
        subject: template.subject,
        content: template.content,
        html: template.html
      };

      // Reset the edited flag
      htmlHasBeenEdited = false;

      // Update page title
      document.getElementById("current-template-title").textContent =
        `Editing: ${template.title}`;

      // Load saved content or default
      const savedSubject = localStorage.getItem(`${templateId}_subject`) || template.subject;
      const savedContent = localStorage.getItem(`${templateId}_content`) || template.content;
      const savedHtml = localStorage.getItem(`${templateId}_html`) || template.html;

      // Update form fields
      document.getElementById("template-subject").value = savedSubject;
      document.getElementById("template-content").value = savedContent;
      document.getElementById("template-html").value = savedHtml;

      // Update variables
      updateVariableTags(template.variables);

      // Update preview
      updatePreview();

      // Initialize editor tabs and buttons
      initializeEditorTabs();
      initializeEditorButtons();

      showToast(`Opened "${template.title}" template`);
    }

    function updateVariableTags(variables) {
      const container = document.getElementById("variable-tags");
      container.innerHTML = "";

      variables.forEach((variable) => {
        const tag = document.createElement("div");
        tag.className = "variable-tag";
        tag.textContent = `{${variable}}`;
        tag.title = `Click to insert {${variable}}`;
        tag.addEventListener("click", () => {
          insertVariable(`{${variable}}`);
        });
        container.appendChild(tag);
      });
    }

    function insertVariable(variable) {
      const textarea = document.getElementById("template-content");
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const text = textarea.value;

      textarea.value = text.substring(0, start) + variable + text.substring(end);
      textarea.focus();
      textarea.setSelectionRange(start + variable.length, start + variable.length);

      const event = new Event('input', { bubbles: true });
      textarea.dispatchEvent(event);

      syncTextToHtml();
    }

    // ===== SYNC FUNCTIONS =====
    function syncTextToHtml() {
      if (htmlHasBeenEdited) return;

      const lines = document.getElementById("template-content").value.split('\n');
      const simpleHtml = lines.map(line => {
        if (line.trim() === '') return '<br>';
        return `<p style="color: #333; font-size: 16px; line-height: 1.5; margin-bottom: 15px;">${line}</p>`;
      }).join('');

      document.getElementById("template-html").value = simpleHtml;
      updatePreview();
    }

    function syncHtmlToText() {
      const div = document.createElement('div');
      div.innerHTML = document.getElementById("template-html").value;
      document.getElementById("template-content").value = div.textContent || div.innerText || '';
    }

    function updatePreview() {
      if (!currentTemplateId) {
        const previewContainer = document.getElementById("template-preview");
        previewContainer.innerHTML = '<p class="placeholder">Select a template to preview...</p>';
        return;
      }

      const subject = document.getElementById("template-subject").value;
      const content = document.getElementById("template-content").value;
      const html = document.getElementById("template-html").value;
      const previewContainer = document.getElementById("template-preview");

      // Replace variables with sample data
      const sampleData = {
        customer_name: "John Doe",
        order_id: "ORD-12345",
        order_date: "March 15, 2024",
        item_name: "Premium Headphones",
        quantity: "1",
        order_total: "$129.99",
        company_name: "Shopify Store",
        tracking_number: "TRK-7890123456",
        carrier: "FedEx",
        delivery_date: "March 18, 2024",
        tracking_link: "https://example.com/track/TRK-7890123456",
        reset_link: "https://example.com/reset-password?token=abc123",
      };

      let previewContent = "";
      let previewSubject = subject;

      // Replace variables in subject
      Object.keys(sampleData).forEach((key) => {
        const regex = new RegExp(`{${key}}`, "g");
        previewSubject = previewSubject.replace(regex, sampleData[key]);
      });

      if (currentTab === "preview") {
        // For preview tab, use HTML content
        let previewHtml = html;

        // Replace all variables in HTML
        Object.keys(sampleData).forEach((key) => {
          const regex = new RegExp(`{${key}}`, "g");
          previewHtml = previewHtml.replace(regex, sampleData[key]);
        });

        previewContent = `
            <div style="margin-bottom: 20px; padding-bottom: 15px; border-bottom: 1px solid #e2e8f0;">
              <strong style="color: #333; font-size: 16px;">Subject:</strong> 
              <span style="color: #4f46e5; font-weight: 600;">${previewSubject}</span>
            </div>
            ${previewHtml}
          `;
      } else if (currentTab === "edit") {
        // For edit tab, use the text content
        let previewText = content;

        // Replace all variables in text
        Object.keys(sampleData).forEach((key) => {
          const regex = new RegExp(`{${key}}`, "g");
          previewText = previewText.replace(regex, sampleData[key]);
        });

        previewContent = `
            <div style="margin-bottom: 20px; padding-bottom: 15px; border-bottom: 1px solid #e2e8f0;">
              <strong style="color: #333; font-size: 16px;">Subject:</strong> 
              <span style="color: #4f46e5; font-weight: 600;">${previewSubject}</span>
            </div>
            <div style="white-space: pre-line; font-family: inherit; line-height: 1.6; color: #333; font-size: 16px;">
              ${previewText.replace(/\n/g, "<br>")}
            </div>
          `;
      } else {
        // For code tab
        previewContent = `
            <div style="margin-bottom: 20px; padding-bottom: 15px; border-bottom: 1px solid #e2e8f0;">
              <strong style="color: #333; font-size: 16px;">Subject:</strong> 
              <span style="color: #4f46e5; font-weight: 600;">${previewSubject}</span>
            </div>
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0;">
              <p style="color: #64748b;">Switch to Preview tab to see rendered HTML.</p>
            </div>
          `;
      }

      previewContainer.innerHTML = previewContent;
    }

    function saveTemplate() {
      if (!currentTemplateId) {
        showToast("Please select a template first", "warning");
        return;
      }

      const subject = document.getElementById("template-subject").value;
      const content = document.getElementById("template-content").value;
      const html = document.getElementById("template-html").value;

      if (!subject.trim() || !content.trim()) {
        showToast("Subject and content cannot be empty", "warning");
        return;
      }

      // Save to localStorage
      localStorage.setItem(`${currentTemplateId}_subject`, subject);
      localStorage.setItem(`${currentTemplateId}_content`, content);
      localStorage.setItem(`${currentTemplateId}_html`, html);

      // Update template data
      templateData[currentTemplateId].subject = subject;
      templateData[currentTemplateId].content = content;
      templateData[currentTemplateId].html = html;

      showToast(`"${templateData[currentTemplateId].title}" saved successfully!`);

      return true;
    }

    function saveAndCloseTemplate() {
      if (saveTemplate()) {
        goToMainPage();
      }
    }

    function resetTemplate() {
      if (!currentTemplateId || !originalTemplateData) {
        showToast("No template to reset", "warning");
        return;
      }

      if (confirm("Are you sure you want to reset this template to default? Your changes will be lost.")) {
        document.getElementById("template-subject").value = originalTemplateData.subject;
        document.getElementById("template-content").value = originalTemplateData.content;
        document.getElementById("template-html").value = originalTemplateData.html;

        // Clear saved data from localStorage
        localStorage.removeItem(`${currentTemplateId}_subject`);
        localStorage.removeItem(`${currentTemplateId}_content`);
        localStorage.removeItem(`${currentTemplateId}_html`);

        // Reset edited flag
        htmlHasBeenEdited = false;

        // Update preview
        updatePreview();

        showToast("Template reset to default");
      }
    }

    function loadSavedTemplates() {
      Object.keys(templateData).forEach((templateId) => {
        const savedSubject = localStorage.getItem(`${templateId}_subject`);
        const savedContent = localStorage.getItem(`${templateId}_content`);
        const savedHtml = localStorage.getItem(`${templateId}_html`);

        if (savedSubject) templateData[templateId].subject = savedSubject;
        if (savedContent) templateData[templateId].content = savedContent;
        if (savedHtml) templateData[templateId].html = savedHtml;
      });
    }

    // ===== EDITOR TAB FUNCTIONS =====
    function initializeEditorTabs() {
      const tabs = document.querySelectorAll(".editor-tab");

      tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
          const tabId = tab.dataset.tab;
          switchTab(tabId);
        });
      });

      // Listen for content changes to update preview in REAL-TIME
      const subjectInput = document.getElementById("template-subject");
      const contentInput = document.getElementById("template-content");
      const htmlInput = document.getElementById("template-html");

      subjectInput.addEventListener("input", updatePreview);

      contentInput.addEventListener("input", () => {
        syncTextToHtml();
        updatePreview();
      });

      htmlInput.addEventListener("input", () => {
        // Mark HTML as edited when user types in HTML textarea
        htmlHasBeenEdited = true;
        syncHtmlToText();
        updatePreview();
      });
    }

    function switchTab(tabId) {
      if (!currentTemplateId && tabId !== "edit") {
        showToast("Please select a template first", "warning");
        return;
      }

      currentTab = tabId;

      // Update tabs
      document.querySelectorAll(".editor-tab").forEach((tab) => {
        tab.classList.toggle("active", tab.dataset.tab === tabId);
      });

      // Update tab contents
      document.querySelectorAll(".editor-tab-content").forEach((content) => {
        content.classList.toggle(
          "active",
          content.dataset.tabContent === tabId
        );
      });

      // If switching to code tab AND HTML hasn't been edited, sync HTML with text content
      if (tabId === "code" && !htmlHasBeenEdited) {
        syncTextToHtml();
      }

      // Always update preview when switching tabs
      updatePreview();
    }

    // ===== EDITOR BUTTON FUNCTIONS =====
    function initializeEditorButtons() {
      // Save template button
      document.getElementById("save-template").addEventListener("click", saveTemplate);

      // Save and close button
      document.getElementById("save-and-close").addEventListener("click", saveAndCloseTemplate);

      // Preview button
      document.getElementById("preview-template").addEventListener("click", () => {
        if (!currentTemplateId) {
          showToast("Please select a template first", "warning");
          return;
        }
        switchTab("preview");
        updatePreview();
      });

      // Reset template button
      document.getElementById("reset-template").addEventListener("click", resetTemplate);

      // Back buttons
      document.getElementById("back-to-templates").addEventListener("click", goToMainPage);
      document.getElementById("back-to-templates-bottom").addEventListener("click", goToMainPage);
    }

    // ===== TOAST NOTIFICATION =====
    function showToast(message, type = "success") {
      const toast = document.getElementById("toast");
      const toastMessage = document.getElementById("toastMessage");

      toastMessage.textContent = message;

      if (type === "warning") {
        toast.style.background = "var(--warning)";
      } else if (type === "error") {
        toast.style.background = "var(--danger)";
      } else {
        toast.style.background = "var(--primary)";
      }

      toast.classList.add("show");

      setTimeout(() => {
        toast.classList.remove("show");
      }, 3000);
    }
