// sidebar.js

// Sidebar functionality
function initSidebar() {
  const sidebar = document.getElementById("sidebar");
  const sidebarToggle = document.getElementById("sidebarToggle");
  const toggleCollapse = document.getElementById("toggleCollapse");
  const dropdownToggles = document.querySelectorAll(".dropdown-toggle");
  const navLinks = document.querySelectorAll(".nav-links a");

  // Toggle sidebar on mobile
  if (sidebarToggle) {
    sidebarToggle.addEventListener("click", () => {
      sidebar.classList.toggle("active");
    });
  }

  // Toggle sidebar collapse on desktop
  if (toggleCollapse) {
    toggleCollapse.addEventListener("click", () => {
      sidebar.classList.toggle("collapsed");
      // Adjust main content width
      const mainContent = document.querySelector(".main-content");
      if (mainContent) {
        if (sidebar.classList.contains("collapsed")) {
          mainContent.style.width = "calc(100% - 70px)";
        } else {
          mainContent.style.width = "calc(100% - 260px)";
        }
      }
    });
  }

  // Handle dropdown toggles
  dropdownToggles.forEach((toggle) => {
    toggle.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();

      const parent = this.closest(".has-dropdown");
      parent.classList.toggle("active");

      // Close other dropdowns
      dropdownToggles.forEach((otherToggle) => {
        if (otherToggle !== this) {
          const otherParent = otherToggle.closest(".has-dropdown");
          if (otherParent) {
            otherParent.classList.remove("active");
          }
        }
      });
    });
  });

  // Set active link based on current page
  function setActiveLink() {
    // Remove active class from all links
    navLinks.forEach((link) => {
      link.classList.remove("active");
    });

    // Get current page filename
    const currentPage = window.location.pathname.split("/").pop() || "Dashboard.html";
    
    // Find and activate current page link
    navLinks.forEach((link) => {
      const href = link.getAttribute("href");
      if (href === currentPage) {
        link.classList.add("active");
        // Also activate its parent dropdown if exists
        const dropdown = link.closest(".has-dropdown");
        if (dropdown) {
          dropdown.classList.add("active");
        }
      }
    });
  }

  // Initialize active link
  setActiveLink();

  // Close dropdowns when clicking outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".has-dropdown")) {
      document.querySelectorAll(".has-dropdown").forEach((item) => {
        item.classList.remove("active");
      });
    }
  });

  // Handle window resize
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      sidebar.classList.remove("active");
    }
  });
}

    const sidebar = document.querySelector(".sidebar");
    const toggleBtn = document.getElementById("sidebarToggle");
    const dropdowns = document.querySelectorAll(".dropdown-toggle");
    const links = document.querySelectorAll(".nav-links a");
    const frame = document.getElementById("contentFrame");

    toggleBtn.addEventListener("click", () => {
      sidebar.classList.toggle("active");
      toggleBtn.querySelector("i").classList.toggle("fa-bars");
      toggleBtn.querySelector("i").classList.toggle("fa-times");
    });

    dropdowns.forEach((toggle) => {
      toggle.addEventListener("click", (e) => {
        e.preventDefault();
        const parent = toggle.closest(".has-dropdown");

        document.querySelectorAll(".has-dropdown").forEach((menu) => {
          if (menu !== parent) menu.classList.remove("active");
        });

        parent.classList.toggle("active");
      });
    });

    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        const href = link.getAttribute("href");
        if (href === "javascript:void(0)") return;

        e.preventDefault();
        frame.classList.remove("loaded");
        frame.src = href;

        links.forEach((a) => a.classList.remove("active"));
        link.classList.add("active");

        const parent = link.closest(".has-dropdown");
        if (parent) parent.classList.add("active");

        if (window.innerWidth <= 768) {
          sidebar.classList.remove("active");
          toggleBtn.querySelector("i").classList.add("fa-bars");
          toggleBtn.querySelector("i").classList.remove("fa-times");
        }
      });
    });

    frame.addEventListener("load", () => {
      frame.classList.add("loaded");
    });


    document.getElementById('sidebarToggle').addEventListener('click', function () {
      document.querySelector('.sidebar').classList.toggle('active');
    });

    document.getElementById('contentFrame').addEventListener('load', function () {
      this.classList.add('loaded');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
      if (link.getAttribute('href') && !link.getAttribute('href').startsWith('javascript:')) {
        link.addEventListener('click', function (e) {
          e.preventDefault();
          const href = this.getAttribute('href');
          document.getElementById('contentFrame').src = href;

          document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
          this.classList.add('active');

          if (window.innerWidth <= 768) {
            document.querySelector('.sidebar').classList.remove('active');
          }
        });
      }
    });

    document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
      toggle.addEventListener('click', function (e) {
        if (window.innerWidth <= 768) {
          const parent = this.parentElement;
          parent.classList.toggle('active');
        } else {
          const sidebar = document.querySelector('.sidebar');
          if (sidebar.matches(':hover')) {
            const parent = this.parentElement;
            parent.classList.toggle('active');
          }
        }
      });
    });

    document.addEventListener('click', function (e) {
      if (window.innerWidth <= 768) {
        if (!e.target.closest('.has-dropdown')) {
          document.querySelectorAll('.has-dropdown').forEach(item => {
            item.classList.remove('active');
          });
        }
      }
    });