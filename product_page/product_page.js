document.addEventListener("DOMContentLoaded", function () {

  const params = new URLSearchParams(window.location.search);
  const category = params.get("category");
  const index = params.get("index");

  if (!categoryData[category] || !categoryData[category][index]) {
    console.error("Invalid product");
    return;
  }

  const product = categoryData[category][index];

  // ================= BASIC INFO =================

  document.querySelector(".info-name h2").textContent = product.title;
  document.querySelector(".info-name span").textContent = product.shortName;
  document.querySelector(".star-ammount").textContent = product.rating;
  document.querySelector(".review-ammount").textContent = product.reviews;

  document.querySelector(".price h2").textContent =
    "₹" + product.price;

  document.querySelector(".price span").textContent =
    "MRP ₹" + product.msrp;

  const discount =
    Math.round(((product.msrp - product.price) / product.msrp) * 100);

  document.querySelector(".price h3").textContent =
    "(" + discount + "% off)";

  // ================= IMAGES =================

  document.querySelector(".thumbnail-img img").src =
    product.images[0];

  const sideImages =
    document.querySelectorAll(".other-imgs img");

  sideImages.forEach((img, i) => {
    img.src = product.images[i];

    img.addEventListener("click", () => {
      document.querySelector(".thumbnail-img img").src =
        product.images[i];
    });
  });

  // ================= DESCRIPTION =================

  document.querySelector(".desc h2").textContent =
    product.title;

  document.querySelector(".desc h3").textContent =
    product.description;

  // WHY
  const whyBox =
    document.querySelector(".why_youll_love_it h3");
  whyBox.innerHTML = "";
  product.why.forEach(item => {
    whyBox.innerHTML += `<li>${item}</li>`;
  });

  // DETAILS
  const detailBox =
    document.querySelector(".product_details h3");
  detailBox.innerHTML = "";
  product.details.forEach(item => {
    detailBox.innerHTML += `<li>${item}</li>`;
  });

  // CARE
  const careBox =
    document.querySelector(".care_instructions h3");
  careBox.innerHTML = "";
  product.care.forEach(item => {
    careBox.innerHTML += `<li>${item}</li>`;
  });

});