  // EmailJS Configuration
  const EMAILJS_SERVICE_ID = 'service_9fq6tb6'; // Replace with your EmailJS Service ID
  const EMAILJS_TEMPLATE_ID = 'template_uw0c3ec'; // Replace with your EmailJS Template ID
  const EMAILJS_USER_ID = 'C7-vSfS6YwU3OnjX5'; // Replace with your EmailJS User ID

  // Sub-package data structure
  const subPackagesData = {
    package1: [
      { value: "sub1_1", text: "Package 1: Everest Base Camp (15 Days)" },
      { value: "sub1_2", text: "Package 2: Everest View Trek (10 Days)" },
      { value: "sub1_3", text: "Package 3: Everest Luxury Trek (18 Days)" },
      { value: "sub1_4", text: "Package 4: Everest Family Trek (12 Days)" },
      {
        value: "sub1_5",
        text: "Package 5: Everest Helicopter Tour (5 Days)",
      },
    ],
    package2: [
      { value: "sub2_1", text: "Package 1: Annapurna Circuit (21 Days)" },
      { value: "sub2_2", text: "Package 2: Annapurna Base Camp (14 Days)" },
      { value: "sub2_3", text: "Package 3: Poon Hill Trek (7 Days)" },
      { value: "sub2_4", text: "Package 4: Mardi Himal Trek (12 Days)" },
      { value: "sub2_5", text: "Package 5: Annapurna Sanctuary (16 Days)" },
    ],
    package3: [
      {
        value: "sub3_1",
        text: "Package 1: Kailash Yatra via Heli - Ex Lucknow(18 Days)",
      },
      { value: "sub3_2", text: "Package 2: Kailash Helicopter (10 Days)" },
      { value: "sub3_3", text: "Package 3: Kailash with Lhasa (22 Days)" },
      { value: "sub3_4", text: "Package 4: Kailash Family Tour (15 Days)" },
      { value: "sub3_5", text: "Package 5: Kailash Spiritual (25 Days)" },
    ],
    package4: [
      { value: "sub4_1", text: "Package 1: Langtang Valley (10 Days)" },
      {
        value: "sub4_2",
        text: "Package 2: Langtang with Gosainkunda (14 Days)",
      },
      { value: "sub4_3", text: "Package 3: Langtang Helicopter (5 Days)" },
      { value: "sub4_4", text: "Package 4: Langtang Family Trek (8 Days)" },
      { value: "sub4_5", text: "Package 5: Langtang Cultural (12 Days)" },
    ],
    package5: [
      { value: "sub5_1", text: "Package 1: Muktinath by Road (7 Days)" },
      { value: "sub5_2", text: "Package 2: Muktinath by Flight (5 Days)" },
      {
        value: "sub5_3",
        text: "package 3: Muktinath with Pokhara (10 Days)",
      },
      { value: "sub5_4", text: "Package 4: Muktinath Luxury (8 Days)" },
      { value: "sub5_5", text: "Package 5: Muktinath Spiritual (12 Days)" },
    ],
    package6: [
      { value: "sub6_1", text: "Package 1: Custom Trekking Tour" },
      { value: "sub6_2", text: "Package 2: Cultural Heritage Tour" },
      { value: "sub6_3", text: "Package 3: Adventure Sports Package" },
      { value: "sub6_4", text: "Package 4: Photography Expedition" },
      { value: "sub6_5", text: "Package 5: Luxury VIP Experience" },
    ],
  };

  // Main application initialization
  document.addEventListener("DOMContentLoaded", function () {
    // Load EmailJS SDK
    loadEmailJS();
    
    initializeBurgerMenu();
    initializePackageSelection();
    initializeFAQ();
    initializeFormSubmission();
    setupActiveNavLinks();
  });

  // Load EmailJS SDK
  function loadEmailJS() {
    // Create and append EmailJS script
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
    script.onload = function() {
      // Initialize EmailJS with your user ID
      if (typeof emailjs !== 'undefined') {
        emailjs.init(EMAILJS_USER_ID);
        console.log('EmailJS initialized successfully');
      }
    };
    document.head.appendChild(script);
  }

  // Burger Menu Functionality
  function initializeBurgerMenu() {
    const burgerMenu = document.getElementById("burgerMenu");
    const mainNav = document.getElementById("mainNav");

    if (burgerMenu && mainNav) {
      // Create overlay for mobile menu
      const overlay = document.createElement("div");
      overlay.className = "menu-overlay";
      document.body.appendChild(overlay);

      // Toggle menu function
      const toggleMenu = () => {
        burgerMenu.classList.toggle("active");
        mainNav.classList.toggle("active");
        overlay.classList.toggle("active");
        document.body.style.overflow = mainNav.classList.contains("active")
          ? "hidden"
          : "";
      };

      // Burger menu click
      burgerMenu.addEventListener("click", toggleMenu);

      // Overlay click to close
      overlay.addEventListener("click", toggleMenu);

      // Close menu when clicking on nav links
      document.querySelectorAll(".nav-link").forEach((link) => {
        link.addEventListener("click", () => {
          if (window.innerWidth <= 768) {
            burgerMenu.classList.remove("active");
            mainNav.classList.remove("active");
            overlay.classList.remove("active");
            document.body.style.overflow = "";
          }
        });
      });

      // Close menu on window resize (if resizing to larger screen)
      window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
          burgerMenu.classList.remove("active");
          mainNav.classList.remove("active");
          overlay.classList.remove("active");
          document.body.style.overflow = "";
        }
      });
    }
  }

  // Package Selection Functionality
  function initializePackageSelection() {
    const mainPackageSelect = document.getElementById("mainPackage");
    const subPackageSelect = document.getElementById("subPackage");

    if (mainPackageSelect && subPackageSelect) {
      // Handle main package selection change
      mainPackageSelect.addEventListener("change", function () {
        const selectedPackage = this.value;

        // Enable or disable sub-package based on selection
        if (selectedPackage) {
          subPackageSelect.disabled = false;
          populateSubPackages(selectedPackage, subPackageSelect);
          subPackageSelect.style.borderColor = "rgba(88, 101, 242, 0.2)";
        } else {
          subPackageSelect.disabled = true;
          subPackageSelect.innerHTML =
            '<option value="">Select Package</option>';
          subPackageSelect.style.borderColor = "#ccc";
        }
      });

      // Reset sub-package when main package is cleared
      mainPackageSelect.addEventListener("input", function () {
        if (!this.value) {
          subPackageSelect.disabled = true;
          subPackageSelect.innerHTML =
            '<option value="">Select Package</option>';
        }
      });
    }
  }

  // Populate sub-packages based on main package selection
  function populateSubPackages(packageKey, subPackageSelect) {
    // Clear existing options
    subPackageSelect.innerHTML = '<option value="">Select Package</option>';

    // Get sub-packages for selected main package
    const subPackages = subPackagesData[packageKey];

    if (subPackages) {
      // Add sub-package options
      subPackages.forEach((subPackage) => {
        const option = document.createElement("option");
        option.value = subPackage.value;
        option.textContent = subPackage.text;
        subPackageSelect.appendChild(option);
      });
    }
  }

  // FAQ Toggle Functionality
  function initializeFAQ() {
    // FAQ Toggle
    document.querySelectorAll(".faq-question").forEach((question) => {
      question.addEventListener("click", () => {
        const faqItem = question.parentElement;
        faqItem.classList.toggle("active");
      });
    });

    // FAQ Search Functionality
    const faqSearchInput = document.getElementById("faqSearch");
    if (faqSearchInput) {
      faqSearchInput.addEventListener("input", function (e) {
        const searchTerm = e.target.value.toLowerCase();
        const faqItems = document.querySelectorAll(".faq-item");
        let hasResults = false;

        faqItems.forEach((item) => {
          const question = item
            .querySelector(".faq-question")
            .textContent.toLowerCase();
          const answer = item
            .querySelector(".faq-answer")
            .textContent.toLowerCase();

          if (question.includes(searchTerm) || answer.includes(searchTerm)) {
            item.style.display = "block";
            hasResults = true;
          } else {
            item.style.display = "none";
          }
        });
      });
    }

    // Auto-open first FAQ item
    const firstFaqItem = document.querySelector(".faq-item");
    if (firstFaqItem) {
      firstFaqItem.classList.add("active");
    }
  }

  // Form Submission Functionality
  function initializeFormSubmission() {
    const enquiryForm = document.getElementById("enquiryForm");
    if (enquiryForm) {
      enquiryForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Validate form first
        if (!validateForm()) {
          return;
        }

        // Collect form data
        const formData = collectFormData();
        
        // Show choice modal instead of automatically sending
        showSendChoiceModal(formData);
      });
    }

    // Reset form field styles on input
    document.querySelectorAll(".form-control").forEach((field) => {
      field.addEventListener("input", function () {
        if (this.style.borderColor === "var(--danger)") {
          this.style.borderColor = "";
        }
      });
    });

    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        const href = this.getAttribute("href");
        if (href === "#") return;

        if (href.startsWith("#")) {
          e.preventDefault();
          const targetElement = document.querySelector(href);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        }
      });
    });
  }

  // Show choice modal for sending method
  function showSendChoiceModal(formData) {
    // Create modal overlay
    const modalOverlay = document.createElement("div");
    modalOverlay.className = "choice-modal-overlay";
    
    // Create modal
    const modal = document.createElement("div");
    modal.className = "choice-modal";
    
    modal.innerHTML = `
      <div class="choice-modal-content">
        <h3><i class="fas fa-paper-plane"></i> Send Your Enquiry</h3>
        <p>How would you like to send your enquiry?</p>
        
        <div class="choice-options">
          <button class="choice-btn whatsapp-choice" id="whatsappChoice">
            <i class="fab fa-whatsapp"></i>
            <span>Send via WhatsApp</span>
            <small>Fast response, instant messaging</small>
          </button>
          
          <button class="choice-btn email-choice" id="emailChoice">
            <i class="fas fa-envelope"></i>
            <span>Send via Email</span>
            <small>Direct email submission to our team</small>
          </button>
        </div>
        
        <div class="choice-footer">
          <button class="cancel-choice" id="cancelChoice">Cancel</button>
        </div>
      </div>
    `;
    
    modalOverlay.appendChild(modal);
    document.body.appendChild(modalOverlay);
    
    // Add CSS styles for the modal
    addModalStyles();
    
    // Add event listeners for choices
    document.getElementById("whatsappChoice").addEventListener("click", function() {
      sendToWhatsApp(formData);
      closeChoiceModal(modalOverlay);
      showSuccessMessage(formData, 'whatsapp');
    });
    
    document.getElementById("emailChoice").addEventListener("click", function() {
      // Show loading state for email button
      const emailBtn = this;
      const originalHTML = emailBtn.innerHTML;
      emailBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
      emailBtn.disabled = true;
      
      // Send email via EmailJS
      sendToEmail(formData)
        .then(() => {
          closeChoiceModal(modalOverlay);
          showSuccessMessage(formData, 'email');
        })
        .catch((error) => {
          console.error('Email sending failed:', error);
          alert('Failed to send email. Please try again or use WhatsApp instead.');
          emailBtn.innerHTML = originalHTML;
          emailBtn.disabled = false;
        });
    });
    
    document.getElementById("cancelChoice").addEventListener("click", function() {
      closeChoiceModal(modalOverlay);
      // Re-enable the submit button since user canceled
      const submitBtn = document.getElementById("submitBtn");
      if (submitBtn) {
        submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Enquiry';
        submitBtn.disabled = false;
      }
    });
    
    // Close modal when clicking outside
    modalOverlay.addEventListener("click", function(e) {
      if (e.target === modalOverlay) {
        closeChoiceModal(modalOverlay);
        // Re-enable the submit button
        const submitBtn = document.getElementById("submitBtn");
        if (submitBtn) {
          submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Enquiry';
          submitBtn.disabled = false;
        }
      }
    });
    
    // Disable submit button while modal is open
    const submitBtn = document.getElementById("submitBtn");
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
    }
  }

  // Add CSS styles for the modal
  function addModalStyles() {
    const style = document.createElement('style');
    style.textContent = `
      .choice-modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        animation: fadeIn 0.3s ease;
      }
      
      .choice-modal {
        background: white;
        border-radius: 12px;
        width: 90%;
        max-width: 500px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
        animation: slideUp 0.3s ease;
        overflow: hidden;
      }
      
      .choice-modal-content {
        padding: 30px;
      }
      
      .choice-modal h3 {
        color: #2c3e50;
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        gap: 10px;
      }
      
      .choice-modal h3 i {
        color: #5865F2;
      }
      
      .choice-modal p {
        color: #666;
        margin-bottom: 25px;
        font-size: 16px;
      }
      
      .choice-options {
        display: flex;
        flex-direction: column;
        gap: 15px;
        margin-bottom: 30px;
      }
      
      .choice-btn {
        padding: 20px;
        border: 2px solid #e0e0e0;
        border-radius: 10px;
        background: white;
        cursor: pointer;
        text-align: left;
        transition: all 0.3s ease;
        display: flex;
        flex-direction: column;
        gap: 5px;
      }
      
      .choice-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      }
      
      .whatsapp-choice {
        border-color: #25D366;
      }
      
      .whatsapp-choice:hover {
        border-color: #25D366;
        background: rgba(37, 211, 102, 0.05);
      }
      
      .email-choice {
        border-color: #5865F2;
      }
      
      .email-choice:hover {
        border-color: #5865F2;
        background: rgba(88, 101, 242, 0.05);
      }
      
      .choice-btn i {
        font-size: 24px;
        margin-bottom: 10px;
      }
      
      .whatsapp-choice i {
        color: #25D366;
      }
      
      .email-choice i {
        color: #5865F2;
      }
      
      .choice-btn span {
        font-weight: 600;
        color: #333;
        font-size: 16px;
      }
      
      .choice-btn small {
        color: #666;
        font-size: 14px;
      }
      
      .choice-footer {
        text-align: right;
      }
      
      .cancel-choice {
        padding: 10px 20px;
        background: #f5f5f5;
        border: none;
        border-radius: 6px;
        color: #666;
        cursor: pointer;
        transition: all 0.3s ease;
      }
      
      .cancel-choice:hover {
        background: #e0e0e0;
      }
      
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      
      @keyframes slideUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      @media (max-width: 480px) {
        .choice-modal {
          width: 95%;
        }
        
        .choice-modal-content {
          padding: 20px;
        }
        
        .choice-btn {
          padding: 15px;
        }
      }
    `;
    document.head.appendChild(style);
  }

  // Close choice modal
  function closeChoiceModal(modalOverlay) {
    modalOverlay.style.animation = 'fadeOut 0.3s ease';
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
      }
    `;
    document.head.appendChild(style);
    
    setTimeout(() => {
      document.body.removeChild(modalOverlay);
    }, 300);
  }

  // Validate form
  function validateForm() {
    const form = document.getElementById("enquiryForm");
    const requiredFields = form.querySelectorAll("[required]");
    let isValid = true;

    // Reset border colors
    requiredFields.forEach((field) => {
      field.style.borderColor = "";
    });

    // Validate required fields
    requiredFields.forEach((field) => {
      if (!field.value.trim()) {
        isValid = false;
        field.style.borderColor = "var(--danger)";
        field.focus();
      }
    });

    // Validate main package selection
    const mainPackage = document.getElementById("mainPackage");
    if (!mainPackage.value) {
      isValid = false;
      mainPackage.style.borderColor = "var(--danger)";
    }

    // Validate email format
    const emailField = document.getElementById("email");
    if (emailField.value && !validateEmail(emailField.value)) {
      isValid = false;
      emailField.style.borderColor = "var(--danger)";
      alert("Please enter a valid email address");
    }

    // Validate phone format
    const phoneField = document.getElementById("phone");
    if (phoneField.value && !validatePhone(phoneField.value)) {
      isValid = false;
      phoneField.style.borderColor = "var(--danger)";
      alert("Please enter a valid phone number");
    }

    if (!isValid) {
      alert("Please fill in all required fields marked with *");
      return false;
    }

    return true;
  }

  // Collect form data
  function collectFormData() {
    const mainPackageSelect = document.getElementById("mainPackage");
    const subPackageSelect = document.getElementById("subPackage");
    
    return {
      fullName: document.getElementById("fullName").value.trim(),
      email: document.getElementById("email").value.trim(),
      phone: document.getElementById("phone").value.trim(),
      country: document.getElementById("country").value,
      mainPackage: mainPackageSelect.value,
      mainPackageText: mainPackageSelect.options[mainPackageSelect.selectedIndex]?.text || "",
      subPackage: subPackageSelect.value,
      subPackageText: subPackageSelect.options[subPackageSelect.selectedIndex]?.text || "",
      travelDates: document.getElementById("travelDates").value.trim(),
      groupSize: document.getElementById("groupSize").value,
      groupSizeText: document.getElementById("groupSize").options[document.getElementById("groupSize").selectedIndex]?.text || "",
      message: document.getElementById("message").value.trim(),
      newsletter: document.getElementById("newsletter").checked,
      terms: document.getElementById("terms").checked,
      timestamp: new Date().toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      })
    };
  }

  // Create WhatsApp message
  function createWhatsAppMessage(formData) {
    let message = `*NEW TRAVEL ENQUIRY - HONEST TRAVEL TOURS AND EXPEDITION*%0A%0A`;
    
    // Personal Information
    message += `*PERSONAL INFORMATION*%0A`;
    message += `Name: ${formData.fullName}%0A`;
    message += `Email: ${formData.email}%0A`;
    message += `Phone: ${formData.phone}%0A`;
    if (formData.country) {
      message += `Country: ${formData.country}%0A`;
    }
    message += `%0A`;
    
    // Travel Details
    message += `*TRAVEL DETAILS*%0A`;
    message += `Destination: ${formData.mainPackageText || 'Not specified'}%0A`;
    if (formData.subPackageText && formData.subPackageText !== "Select Package") {
      message += `Package: ${formData.subPackageText}%0A`;
    }
    if (formData.travelDates) {
      message += `Travel Dates: ${formData.travelDates}%0A`;
    }
    if (formData.groupSizeText && formData.groupSizeText !== "Select group size") {
      message += `Group Size: ${formData.groupSizeText}%0A`;
    }
    message += `%0A`;
    
    // Message
    message += `*MESSAGE*%0A`;
    message += `${formData.message}%0A%0A`;
    
    // Footer
    message += `---%0A`;
    message += `Submitted: ${formData.timestamp}%0A`;
    message += `Via: HONEST TRAVEL TOURS AND EXPEDITION Enquiry Form%0A`;
    return message;
  }

  // Send to WhatsApp
  function sendToWhatsApp(formData) {
    const message = createWhatsAppMessage(formData);
    const phoneNumber = 9779851140110;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
  }

  // Send to Email using EmailJS
  async function sendToEmail(formData) {
    return new Promise((resolve, reject) => {
      if (typeof emailjs === 'undefined') {
        reject(new Error('EmailJS not loaded'));
        return;
      }
      
      // Prepare template parameters
      const templateParams = {
        to_name: 'Honest Travel Team',
        from_name: formData.fullName,
        from_email: formData.email,
        phone: formData.phone,
        country: formData.country || 'Not specified',
        destination: formData.mainPackageText || 'Not specified',
        package: formData.subPackageText || 'Not specified',
        travel_dates: formData.travelDates || 'Flexible',
        group_size: formData.groupSizeText || 'Not specified',
        message: formData.message,
        submission_date: formData.timestamp,
        subject: `New Travel Enquiry from ${formData.fullName}`
      };
      
      // Send email using EmailJS
      emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
        .then(function(response) {
          console.log('Email sent successfully!', response.status, response.text);
          resolve(response);
        })
        .catch(function(error) {
          console.error('Email sending failed:', error);
          reject(error);
        });
    });
  }

  // Show success message after sending
  function showSuccessMessage(formData, method = 'whatsapp') {
    const enquiryForm = document.getElementById("enquiryForm");
    const successMessage = document.getElementById("successMessage");
    const submitBtn = document.getElementById("submitBtn");

    if (successMessage && enquiryForm) {
      // Update success message based on method
      const methodText = method === 'whatsapp' ? 'WhatsApp' : 'Email';
      successMessage.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <h3>Thank You for Your Enquiry!</h3>
        <p>
          Your message has been sent successfully via ${methodText}. Our travel expert will
          contact you within 24 hours to discuss your dream Himalayan adventure.
        </p>
        <p style="margin-top: 1rem; font-size: 0.9rem">
          ${method === 'email' ? 'Check your email for a confirmation message.' : 'Please check your WhatsApp for any follow-up messages.'}
        </p>
      `;
      
      // Show success message
      successMessage.style.display = "block";
      enquiryForm.style.display = "none";

      // Reset form
      enquiryForm.reset();

      // Reset sub-package dropdown
      const subPackageSelect = document.getElementById("subPackage");
      if (subPackageSelect) {
        subPackageSelect.disabled = true;
        subPackageSelect.innerHTML = '<option value="">Select Package</option>';
      }

      // Scroll to success message
      successMessage.scrollIntoView({ behavior: "smooth" });

      // Reset button
      setTimeout(() => {
        if (submitBtn) {
          submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Enquiry';
          submitBtn.disabled = false;
        }
      }, 3000);
    }
  }

  // Set active navigation links based on current page
  function setupActiveNavLinks() {
    const currentPage = window.location.pathname;
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach((link) => {
      if (currentPage.includes(link.getAttribute("href"))) {
        link.classList.add("active-nav");
      }
    });
  }

  // Form validation helper functions
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  function validatePhone(phone) {
    // Basic phone validation - accepts + and numbers
    const re = /^[\+]?[1-9][\d]{0,15}$/;
    return re.test(phone.replace(/\s/g, ""));
  }