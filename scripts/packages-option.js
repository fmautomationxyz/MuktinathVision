// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
const nav = document.querySelector("nav");

if (mobileMenuToggle) {
  mobileMenuToggle.addEventListener("click", function () {
    this.classList.toggle("active");
    nav.classList.toggle("active");
    document.body.classList.toggle("menu-open");
  });

  // Close menu when clicking on a link
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      mobileMenuToggle.classList.remove("active");
      nav.classList.remove("active");
      document.body.classList.remove("menu-open");
    });
  });

  // Close menu when clicking on overlay
  document.addEventListener("click", function (event) {
    const isClickInsideNav = nav.contains(event.target);
    const isClickOnToggle = mobileMenuToggle.contains(event.target);

    if (
      !isClickInsideNav &&
      !isClickOnToggle &&
      nav.classList.contains("active")
    ) {
      mobileMenuToggle.classList.remove("active");
      nav.classList.remove("active");
      document.body.classList.remove("menu-open");
    }
  });
}

// Currency Converter Functionality
document.addEventListener("DOMContentLoaded", function () {
  // Currency exchange rates (you can update these as needed)
 const marketUsdToInr = 92;
const markupPercent = 15;

// Exchange rates based on market rate with markup
const exchangeRates = {
  INR: { 
    rate: 1, 
    symbol: "₹", 
    name: "INR" 
  },
  USD: { 
    rate: (1 / marketUsdToInr) * (1 + markupPercent / 100), 
    symbol: "$", 
    name: "USD" 
  },
  NRP: { 
    rate: 1.6, 
    symbol: "रु", 
    name: "NRP" 
  },
};

  let currentCurrency = "INR";

  // Get DOM elements
  const currencySelector = document.querySelector(".currency-selector");
  const selectedCurrency = document.getElementById("selectedCurrency");
  const currencyOptions = document.querySelectorAll(".currency-option");

  // Store original prices and currency
  const packageCards = document.querySelectorAll(".pkg-card");
  const originalPrices = [];

  packageCards.forEach((card, index) => {
    const priceElement = card.querySelector(".pkg-price");
    const originalText = priceElement.textContent.trim();

    // Extract price value and currency
    let priceValue = 0;
    let currencyType = "INR";

    if (originalText.includes("₹")) {
      priceValue = parseFloat(originalText.replace(/[₹,]/g, ""));
      currencyType = "INR";
    } else if (originalText.includes("$")) {
      priceValue = parseFloat(originalText.replace(/[$,\s]/g, ""));
      currencyType = "USD";
    } else if (originalText.includes("रु")) {
      priceValue = parseFloat(originalText.replace(/[रु,\s]/g, ""));
      currencyType = "NRP";
    } else if (originalText.includes("Enquire for Price")) {
      priceValue = null; // Special case for "Enquire for Price"
    } else if(originalText.includes("Enquire for Custom Adventure")){
      priceValue = null;
    }else {
      // Try to extract any number
      const match = originalText.match(/\d+/);
      if (match) {
        priceValue = parseFloat(match[0]);
      }
    }

    originalPrices[index] = {
      element: priceElement,
      originalText: originalText,
      originalPrice: priceValue,
      originalCurrency: currencyType,
      isSpecialCase: originalText.includes("Enquire for Price"),
    };
  });

  // Toggle currency dropdown
  selectedCurrency.addEventListener("click", function (e) {
    e.stopPropagation();
    currencySelector.classList.toggle("active");
  });

  // Select currency option
  currencyOptions.forEach((option) => {
    option.addEventListener("click", function () {
      const newCurrency = this.getAttribute("data-currency");

      // Update selected currency display
      selectedCurrency.querySelector("span").textContent = newCurrency;
      currentCurrency = newCurrency;

      // Update active state
      currencyOptions.forEach((opt) => opt.classList.remove("active"));
      this.classList.add("active");

      // Convert all prices
      convertPrices(newCurrency);

      // Close dropdown
      currencySelector.classList.remove("active");
    });
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", function (e) {
    if (!currencySelector.contains(e.target)) {
      currencySelector.classList.remove("active");
    }
  });

  // Function to convert prices
  function convertPrices(targetCurrency) {
    // If target currency is same as original, show original prices
    if (targetCurrency === "INR") {
      // Show all prices in INR (original format)
      originalPrices.forEach((item) => {
        if (item.isSpecialCase) {
          item.element.textContent = item.originalText;
          item.element.style.fontSize = "1.6rem";
          item.element.style.color = "#5865f2";
        } else {
          item.element.textContent = `₹ ${formatNumber(item.originalPrice)}`;
          item.element.style.fontSize = "2.4rem";
          item.element.style.color = "";
        }
      });
      return;
    }

    // Convert to target currency
    const targetRate = exchangeRates[targetCurrency].rate;
    const targetSymbol = exchangeRates[targetCurrency].symbol;

    originalPrices.forEach((item) => {
      if (item.isSpecialCase) {
        // Keep special cases as is
        item.element.textContent = item.originalText;
        item.element.style.fontSize = "1.6rem";
        item.element.style.color = "#5865f2";
      } else if (item.originalPrice !== null) {
        // Convert price
        let convertedPrice;

        // First convert to INR if original is not INR
        let priceInINR = item.originalPrice;
        if (item.originalCurrency !== "INR") {
          // Convert to INR first
          const originalRate = exchangeRates[item.originalCurrency].rate;
          priceInINR = item.originalPrice / originalRate;
        }

        // Convert from INR to target currency
        convertedPrice = priceInINR * targetRate;

        // Format and display
        item.element.textContent = `${targetSymbol} ${formatNumber(
          convertedPrice
        )}`;
        item.element.style.fontSize = "2.4rem";
        item.element.style.color = "";
      }
    });
  }

  // Function to format numbers with commas
  function formatNumber(num) {
    if (num >= 1000) {
      return num.toLocaleString("en-IN", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      });
    } else if (num >= 100) {
      return num.toFixed(0);
    } else {
      return num.toFixed(2);
    }
  }

  // Initialize currency options with INR as active
  currencyOptions.forEach((option) => {
    if (option.getAttribute("data-currency") === "INR") {
      option.classList.add("active");
    }
  });
});
