// ================= SIDEBAR.JS (FIXED FOR ALL DEVICES) =================

document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.querySelector(".sidebar");
  const sidebarToggle = document.getElementById("sidebarToggle");
  const dropdownToggles = document.querySelectorAll(".dropdown-toggle");
  const navLinks = document.querySelectorAll(".nav-links a");
  const iframe = document.getElementById("contentFrame");
  
  // Track if we're on mobile/tablet
  let isMobileView = window.innerWidth <= 1024;

  /* ================= MOBILE SIDEBAR TOGGLE ================= */
  if (sidebarToggle) {
    sidebarToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      sidebar.classList.toggle("active");

      const icon = sidebarToggle.querySelector("i");
      if (icon) {
        icon.classList.toggle("fa-bars");
        icon.classList.toggle("fa-times");
      }
      
      // Add/remove overlay
      const mainContent = document.querySelector(".main-content");
      if (sidebar.classList.contains("active")) {
        document.body.classList.add("sidebar-open");
        if (mainContent) {
          const overlay = document.createElement("div");
          overlay.className = "sidebar-overlay";
          overlay.addEventListener("click", closeSidebarMobile);
          mainContent.appendChild(overlay);
        }
      } else {
        document.body.classList.remove("sidebar-open");
        const overlay = document.querySelector(".sidebar-overlay");
        if (overlay) overlay.remove();
      }
    });
  }

  /* ================= DROPDOWN HANDLING - FIXED FOR ALL DEVICES ================= */
  dropdownToggles.forEach(toggle => {
    toggle.addEventListener("click", e => {
      e.preventDefault();
      e.stopPropagation();

      const parent = toggle.closest(".has-dropdown");
      const isActive = parent.classList.contains("active");
      
      // On mobile/tablet, close other dropdowns only
      if (isMobileView) {
        closeAllDropdownsExcept(parent);
        
        // Toggle the clicked dropdown
        if (!isActive) {
          parent.classList.add("active");
        } else {
          parent.classList.remove("active");
        }
      } else {
        // On desktop, handle differently
        closeAllDropdowns();
        
        if (!isActive) {
          parent.classList.add("active");
        }
      }
    });
  });

  /* ================= NAVIGATION (IFRAME LOAD) ================= */
  navLinks.forEach(link => {
    const href = link.getAttribute("href");

    // Skip invalid links
    if (!href || href.startsWith("javascript")) return;

    link.addEventListener("click", e => {
      e.preventDefault();

      // Load iframe dynamically
      if (iframe) {
        iframe.classList.remove("loaded");
        iframe.src = href;
      }

      // Active state
      navLinks.forEach(a => a.classList.remove("active"));
      link.classList.add("active");

      // Close all dropdowns
      closeAllDropdowns();

      // Open parent dropdown if exists
      const parentDropdown = link.closest(".has-dropdown");
      if (parentDropdown) {
        parentDropdown.classList.add("active");
      }

      // Close sidebar on mobile/tablet
      if (isMobileView) {
        closeSidebarMobile();
      }
    });
  });

  /* ================= IFRAME LOAD EFFECT ================= */
  if (iframe) {
    iframe.addEventListener("load", () => {
      iframe.classList.add("loaded");
    });
  }

  /* ================= AUTO ACTIVE MENU (ON PAGE LOAD) ================= */
  function setActiveMenu() {
    const currentPage = window.location.pathname.split("/").pop() || "Dashboard.html";

    navLinks.forEach(link => {
      const href = link.getAttribute("href");
      if (href === currentPage) {
        link.classList.add("active");
        link.closest(".has-dropdown")?.classList.add("active");
      }
    });
  }

  setActiveMenu();

  /* ================= CLICK OUTSIDE CLOSE ================= */
  document.addEventListener("click", e => {
    // Close dropdowns if clicked outside
    if (!e.target.closest(".sidebar")) {
      closeAllDropdowns();
    }
    
    // On mobile, close sidebar if clicking outside
    if (isMobileView && !e.target.closest(".sidebar") && !e.target.closest(".sidebar-toggle")) {
      closeSidebarMobile();
    }
  });

  /* ================= WINDOW RESIZE FIX ================= */
  window.addEventListener("resize", () => {
    isMobileView = window.innerWidth <= 1024;
    
    if (!isMobileView) {
      // Desktop: close mobile sidebar
      closeSidebarMobile();
      
      // Remove mobile overlay
      const overlay = document.querySelector(".sidebar-overlay");
      if (overlay) overlay.remove();
      
      // Reset toggle icon
      if (sidebarToggle) {
        const icon = sidebarToggle.querySelector("i");
        if (icon) {
          icon.classList.add("fa-bars");
          icon.classList.remove("fa-times");
        }
      }
    } else {
      // Mobile: collapse sidebar by default
      sidebar.classList.remove("active");
      document.body.classList.remove("sidebar-open");
    }
  });

  /* ================= HELPER FUNCTIONS ================= */
  function closeAllDropdowns(except = null) {
    document.querySelectorAll(".has-dropdown").forEach(item => {
      if (item !== except) {
        item.classList.remove("active");
      }
    });
  }
  
  function closeAllDropdownsExcept(except = null) {
    document.querySelectorAll(".has-dropdown").forEach(item => {
      if (item !== except) {
        item.classList.remove("active");
      }
    });
  }
  
  function closeSidebarMobile() {
    sidebar.classList.remove("active");
    document.body.classList.remove("sidebar-open");
    
    const overlay = document.querySelector(".sidebar-overlay");
    if (overlay) overlay.remove();
    
    if (sidebarToggle) {
      const icon = sidebarToggle.querySelector("i");
      if (icon) {
        icon.classList.add("fa-bars");
        icon.classList.remove("fa-times");
      }
    }
  }

  // Close dropdowns when clicking dropdown items on mobile
  document.querySelectorAll('.dropdown-menu a').forEach(item => {
    item.addEventListener('click', () => {
      if (isMobileView) {
        closeAllDropdowns();
        closeSidebarMobile();
      }
    });
  });
  
  // Prevent iframe clicks from closing sidebar
  if (iframe) {
    iframe.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  }
});