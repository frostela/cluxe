document.addEventListener("DOMContentLoaded", function () {

  // Menubar adding -------------------------------------------------------------------------------------------------

  const manubar = document.getElementById("manubar");
  if (manubar) {
    manubar.addEventListener("click", function () {
      const menu = document.getElementById("menu");
      menu.classList.toggle("expanded"); // Add/remove the expanded class
    });
  } else {
    console.error("Manubar element not found");
  }

  // Lenis Scroll Adding ---------------------------------------------------------------------------------------------

  // Initialize Lenis
  const lenis = new Lenis({
    autoRaf: true,
  });

  // -------------------------------------------------------------- Best Seller  Section ---------------------------------------------------------------------------------------------

  // --------------------------------------------------------------
  // Arrow visibility function (used by both sliders)
  // --------------------------------------------------------------
  function updateArrows(container, prevBtn, nextBtn) {
    const maxScroll = container.scrollWidth - container.clientWidth;

    // Hide left arrow at start
    if (container.scrollLeft <= 0) {
      prevBtn.style.display = "none";
    } else {
      prevBtn.style.display = "block";
    }

    // Hide right arrow at end
    if (container.scrollLeft >= maxScroll - 1) {
      nextBtn.style.display = "none";
    } else {
      nextBtn.style.display = "block";
    }
  }

  // --------------------------------------------------------------
  // Best Seller Section
  // --------------------------------------------------------------

  // Card datas
  const cardData = [
    {
      title: "Floral Pearl Jhumka",
      image: "contents/product_images/Earrings/earring_1.png",
      star: "contents/stars.png",
      reviews: "34 Reviews",
      Price: "Rs. 450.00",
      msrp: "Rs. 650.00"
    },
    {
      title: "Antique Bell Jhumka",
      image: "contents/product_images/Earrings/earring_4.png",
      star: "contents/stars.png",
      reviews: "42 Reviews",
      Price: "Rs. 480.00",
      msrp: "Rs. 690.00"
    },
    {
      title: "Crystal Drop Earrings",
      image: "contents/product_images/Earrings/earring_5.png",
      star: "contents/stars.png",
      reviews: "27 Reviews",
      Price: "Rs. 410.00",
      msrp: "Rs. 560.00"
    },
    {
      title: "Floral Engraved Churi",
      image: "contents/product_images/Churies/ch2.png",
      star: "contents/stars.png",
      reviews: "24 Reviews",
      Price: "Rs. 560.00",
      msrp: "Rs. 780.00"
    },
    {
      title: "Minimalist Golden Pair",
      image: "contents/product_images/Churies/ch5.png",
      star: "contents/stars.png",
      reviews: "20 Reviews",
      Price: "Rs. 480.00",
      msrp: "Rs. 650.00"
    },
    {
      title: "Crystal Bloom Ring",
      image: "contents/product_images/Rings/ring_2.png",
      star: "contents/stars.png",
      reviews: "19 Reviews",
      Price: "Rs. 340.00",
      msrp: "Rs. 520.00"
    },
    {
      title: "Antique Gold Ring",
      image: "contents/product_images/Rings/ring_3.png",
      star: "contents/stars.png",
      reviews: "14 Reviews",
      Price: "Rs. 310.00",
      msrp: "Rs. 470.00"
    },
    {
      title: "Floral Charm Pendant",
      image: "contents/product_images/Pendants/pend_2.png",
      star: "contents/stars.png",
      reviews: "33 Reviews",
      Price: "Rs. 570.00",
      msrp: "Rs. 760.00"
    },
    {
      title: "Pearl Drop Pendant",
      image: "contents/product_images/Pendants/pend_3.png",
      star: "contents/stars.png",
      reviews: "28 Reviews",
      Price: "Rs. 540.00",
      msrp: "Rs. 710.00"
    }
  ];


  // Generate cards
  const container = document.getElementById("cardContainer");

  cardData.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
    <img src="${item.image}" alt="${item.title}" class="card-img">
    <div class="info">
      <h3>${item.title}</h3>
      <div class="review-div">
        <img src="${item.star}" alt="stars" class="stars">
        <p>${item.reviews}</p>
      </div>
      <div class="price-div">
          <span class="item-price">${item.Price}</span>
          <span class="item-msrp">${item.msrp}</span>
      </div>
    </div>
  `;

    container.appendChild(card);
  });

  // Scroll buttons
  function getScrollAmount() {
    const card = container.querySelector(".card");
    if (!card) return 300; // fallback

    const style = window.getComputedStyle(card);
    const gap = parseInt(style.marginRight) || 0;

    return card.offsetWidth + gap;
  }

  next.onclick = () => {
    container.scrollLeft += getScrollAmount();
  };

  prev.onclick = () => {
    container.scrollLeft -= getScrollAmount();
  };

  // --------------------------------------------------------------
  // Shop by Category Section
  // --------------------------------------------------------------

  const categoryData = {

    rings: [
      {
        title: "Floral Statement Ring",
        image: "contents/product_images/Rings/ring_1.png",
        star: "contents/stars.png",
        reviews: "12 Reviews",
        Price: "Rs. 299.00",
        msrp: "Rs. 450.00"
      },
      {
        title: "Crystal Bloom Ring",
        image: "contents/product_images/Rings/ring_2.png",
        star: "contents/stars.png",
        reviews: "19 Reviews",
        Price: "Rs. 340.00",
        msrp: "Rs. 520.00"
      },
      {
        title: "Antique Gold Ring",
        image: "contents/product_images/Rings/ring_3.png",
        star: "contents/stars.png",
        reviews: "14 Reviews",
        Price: "Rs. 310.00",
        msrp: "Rs. 470.00"
      },
      {
        title: "Pearl Accent Ring",
        image: "contents/product_images/Rings/ring_4.png",
        star: "contents/stars.png",
        reviews: "22 Reviews",
        Price: "Rs. 360.00",
        msrp: "Rs. 540.00"
      }
    ],

    earrings: [
      {
        title: "Floral Pearl Jhumka",
        image: "contents/product_images/Earrings/earring_1.png",
        star: "contents/stars.png",
        reviews: "34 Reviews",
        Price: "Rs. 450.00",
        msrp: "Rs. 650.00"
      },
      {
        title: "Golden Leaf Drop",
        image: "contents/product_images/Earrings/earring_2.png",
        star: "contents/stars.png",
        reviews: "21 Reviews",
        Price: "Rs. 390.00",
        msrp: "Rs. 520.00"
      },
      {
        title: "Classic Pearl Stud",
        image: "contents/product_images/Earrings/earring_3.png",
        star: "contents/stars.png",
        reviews: "18 Reviews",
        Price: "Rs. 320.00",
        msrp: "Rs. 450.00"
      },
      {
        title: "Antique Bell Jhumka",
        image: "contents/product_images/Earrings/earring_4.png",
        star: "contents/stars.png",
        reviews: "42 Reviews",
        Price: "Rs. 480.00",
        msrp: "Rs. 690.00"
      },
      {
        title: "Crystal Drop Earrings",
        image: "contents/product_images/Earrings/earring_5.png",
        star: "contents/stars.png",
        reviews: "27 Reviews",
        Price: "Rs. 410.00",
        msrp: "Rs. 560.00"
      },
      {
        title: "Temple Style Jhumka",
        image: "contents/product_images/Earrings/earring_6.png",
        star: "contents/stars.png",
        reviews: "36 Reviews",
        Price: "Rs. 530.00",
        msrp: "Rs. 720.00"
      },
      {
        title: "Rose Gold Drops",
        image: "contents/product_images/Earrings/earring_7.png",
        star: "contents/stars.png",
        reviews: "25 Reviews",
        Price: "Rs. 440.00",
        msrp: "Rs. 610.00"
      }
    ],

    churies: [
      {
        title: "Traditional Gold Churi",
        image: "contents/product_images/Churies/ch1.png",
        star: "contents/stars.png",
        reviews: "18 Reviews",
        Price: "Rs. 520.00",
        msrp: "Rs. 720.00"
      },
      {
        title: "Floral Engraved Churi",
        image: "contents/product_images/Churies/ch2.png",
        star: "contents/stars.png",
        reviews: "24 Reviews",
        Price: "Rs. 560.00",
        msrp: "Rs. 780.00"
      },
      {
        title: "Classic Red Churi",
        image: "contents/product_images/Churies/ch3.png",
        star: "contents/stars.png",
        reviews: "15 Reviews",
        Price: "Rs. 430.00",
        msrp: "Rs. 600.00"
      },
      {
        title: "Bridal Gold Set",
        image: "contents/product_images/Churies/ch4.png",
        star: "contents/stars.png",
        reviews: "29 Reviews",
        Price: "Rs. 690.00",
        msrp: "Rs. 920.00"
      },
      {
        title: "Minimalist Golden Pair",
        image: "contents/product_images/Churies/ch5.png",
        star: "contents/stars.png",
        reviews: "20 Reviews",
        Price: "Rs. 480.00",
        msrp: "Rs. 650.00"
      }
    ],

    pendants: [
      {
        title: "Lotus Gold Pendant",
        image: "contents/product_images/Pendants/pend_1.png",
        star: "contents/stars.png",
        reviews: "41 Reviews",
        Price: "Rs. 610.00",
        msrp: "Rs. 800.00"
      },
      {
        title: "Floral Charm Pendant",
        image: "contents/product_images/Pendants/pend_2.png",
        star: "contents/stars.png",
        reviews: "33 Reviews",
        Price: "Rs. 570.00",
        msrp: "Rs. 760.00"
      },
      {
        title: "Pearl Drop Pendant",
        image: "contents/product_images/Pendants/pend_3.png",
        star: "contents/stars.png",
        reviews: "28 Reviews",
        Price: "Rs. 540.00",
        msrp: "Rs. 710.00"
      }
    ]
  };


  const categoryContainer = document.getElementById("categoryContainer");
  const catTabs = document.querySelectorAll(".cat-tab");
  const catNext = document.querySelector(".cat-next");
  const catPrev = document.querySelector(".cat-prev");

  // Render function
  function renderCategoryCards(category) {
    categoryContainer.innerHTML = "";

    categoryData[category].forEach(item => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
      <img src="${item.image}" alt="${item.title}" class="card-img">
      <div class="info">
        <h3>${item.title}</h3>
        <div class="review-div">
          <img src="${item.star}" alt="stars" class="stars">
          <p>${item.reviews}</p>
        </div>
        <div class="price-div">
          <span class="item-price">${item.Price}</span>
          <span class="item-msrp">${item.msrp}</span>
        </div>
      </div>
    `;

      categoryContainer.appendChild(card);
    });

    categoryContainer.scrollLeft = 0;

    // Update arrows after rendering
    updateArrows(categoryContainer, catPrev, catNext);
  }

  // Tab switching
  catTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      catTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      renderCategoryCards(tab.dataset.category);
    });
  });

  // Scroll buttons
catNext.onclick = () => {
  categoryContainer.scrollLeft += getScrollAmount();
};

catPrev.onclick = () => {
  categoryContainer.scrollLeft -= getScrollAmount();
};

  // Update arrows on scroll
  categoryContainer.addEventListener("scroll", () => {
    updateArrows(categoryContainer, catPrev, catNext);
  });

  // Initial load
  renderCategoryCards("rings");



});
