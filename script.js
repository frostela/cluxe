document.addEventListener("DOMContentLoaded", function () {

  // ==========================================================
  // MENU BAR
  // ==========================================================

  const manubar = document.getElementById("manubar");
  if (manubar) {
    manubar.addEventListener("click", function () {
      const menu = document.getElementById("menu");
      menu.classList.toggle("expanded");
    });
  }

  // ==========================================================
  // LENIS SCROLL
  // ==========================================================

  const lenis = new Lenis({ autoRaf: true });

  // ==========================================================
  // ARROW VISIBILITY
  // ==========================================================

  function updateArrows(container, prevBtn, nextBtn) {
    const maxScroll = container.scrollWidth - container.clientWidth;

    if (container.scrollLeft <= 0) {
      prevBtn.style.display = "none";
    } else {
      prevBtn.style.display = "block";
    }

    if (container.scrollLeft >= maxScroll - 1) {
      nextBtn.style.display = "none";
    } else {
      nextBtn.style.display = "block";
    }
  }

  function getScrollAmount(container) {
    const card = container.querySelector(".card");
    if (!card) return 300;
    return card.offsetWidth + 20;
  }

  // ==========================================================
  // BEST SELLER SECTION
  // ==========================================================

  const bestSellerProducts = [
    { category: "earrings", index: 0 },
    { category: "earrings", index: 3 },
    { category: "earrings", index: 4 },
    { category: "churies", index: 1 },
    { category: "churies", index: 4 },
    { category: "rings", index: 1 },
    { category: "rings", index: 2 },
    { category: "pendants", index: 1 },
    { category: "pendants", index: 2 }
  ];

  const container = document.getElementById("cardContainer");

  if (container) {
    bestSellerProducts.forEach(item => {

      const product = categoryData[item.category][item.index];

      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <img src="${product.images[0]}" alt="${product.title}" class="card-img">
        <div class="info">
          <h3>${product.title}</h3>
          <div class="review-div">
            <img src="/${product.star}" alt="stars" class="stars">
            <p>${product.reviews}</p>
          </div>
          <div class="price-div">
            <span class="item-price">Rs. ${product.price}.00</span>
            <span class="item-msrp">Rs. ${product.msrp}.00</span>
          </div>
        </div>
      `;

      card.addEventListener("click", () => {
        window.location.href =
          `/product_page/product_page.html?category=${item.category}&index=${item.index}`;
      });

      container.appendChild(card);

    });

    const next = document.getElementById("next");
    const prev = document.getElementById("prev");

    if (next && prev) {
      next.onclick = () => {
        container.scrollLeft += getScrollAmount(container);
      };

      prev.onclick = () => {
        container.scrollLeft -= getScrollAmount(container);
      };
    }
  }

  // ==========================================================
  // SHOP BY CATEGORY SECTION
  // ==========================================================

  const categoryContainer = document.getElementById("categoryContainer");
  const catTabs = document.querySelectorAll(".cat-tab");
  const catNext = document.querySelector(".cat-next");
  const catPrev = document.querySelector(".cat-prev");

  function renderCategoryCards(category) {

    if (!categoryContainer) return;

    categoryContainer.innerHTML = "";

    categoryData[category].forEach((product, index) => {

      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <img src="${product.images[0]}" alt="${product.title}" class="card-img">
        <div class="info">
          <h3>${product.title}</h3>
          <div class="review-div">
            <img src="${product.star}" alt="stars" class="stars">
            <p>${product.reviews}</p>
          </div>
          <div class="price-div">
            <span class="item-price">Rs. ${product.price}.00</span>
            <span class="item-msrp">Rs. ${product.msrp}.00</span>
          </div>
        </div>
      `;

      card.addEventListener("click", () => {
        window.location.href =
          `/product_page/product_page.html?category=${category}&index=${index}`;
      });

      categoryContainer.appendChild(card);

    });

    categoryContainer.scrollLeft = 0;

    if (catPrev && catNext) {
      updateArrows(categoryContainer, catPrev, catNext);
    }
  }

  if (catTabs) {
    catTabs.forEach(tab => {
      tab.addEventListener("click", () => {

        catTabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");

        renderCategoryCards(tab.dataset.category);
      });
    });
  }

  if (catNext && catPrev) {

    catNext.onclick = () => {
      categoryContainer.scrollLeft += getScrollAmount(categoryContainer);
    };

    catPrev.onclick = () => {
      categoryContainer.scrollLeft -= getScrollAmount(categoryContainer);
    };

    categoryContainer.addEventListener("scroll", () => {
      updateArrows(categoryContainer, catPrev, catNext);
    });
  }

  // Default load
  renderCategoryCards("rings");

});