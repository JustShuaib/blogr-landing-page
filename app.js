const hamburger = document.getElementById("hamburger");
const closeIcon = document.getElementById("close-icon");

// PRODUCT, COMPANY, CONNECT
const product = document.getElementById("product");
const company = document.getElementById("company");
const connect = document.getElementById("connect");
// COMPANY LIST, PRODUCT LIST, CONNECT LIST

const productList = document.getElementById("product-list");
const companyList = document.getElementById("company-list");
const connectList = document.getElementById("connect-list");

// Main header
const mainHeader = document.getElementById("main-header");

hamburger.addEventListener("click", () => {
  document.getElementById("main-nav").classList.remove("invisible");
  document.querySelector("nav").classList.remove("hidden");
  closeIcon.classList.remove("hidden");
  hamburger.classList.add("hidden");
  // To close the main header when the nav bar is active
  mainHeader.classList.add("hidden");
});

closeIcon.addEventListener("click", () => {
  document.getElementById("main-nav").classList.add("invisible");
  document.querySelector("nav").classList.add("hidden");
  closeIcon.classList.add("hidden");
  hamburger.classList.remove("hidden");
  // To show the main header when the nav bar is not active
  mainHeader.classList.remove("hidden");
});

// Product, Company and Connect
product.addEventListener("click", () => {
  productList.classList.toggle("hidden");
  // Close the other two menus
  if (!company.classList.contains("hidden")) {
    companyList.classList.add("hidden");
    if (!connect.classList.contains("hidden")) {
      connectList.classList.add("hidden");
    }
  }
});

company.addEventListener("click", () => {
  companyList.classList.toggle("hidden");
  // Close the other two menus
  if (!product.classList.contains("hidden")) {
    productList.classList.add("hidden");
    if (!connect.classList.contains("hidden")) {
      connectList.classList.add("hidden");
    }
  }
});

connect.addEventListener("click", () => {
  connectList.classList.toggle("hidden");
  // Close the other two menus
  if (!company.classList.contains("hidden")) {
    companyList.classList.add("hidden");
    if (!product.classList.contains("hidden")) {
      productList.classList.add("hidden");
    }
  }
});
