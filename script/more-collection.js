document.addEventListener("DOMContentLoaded", function () {
    const collectionContainer = document.querySelector(".collection-container");
    const priceFilter = document.getElementById("priceRange");
    const ratingFilter = document.getElementById("ratingFilter");

    const clothingItems = [
        { id: 1, category: "women", name: "Floral Dress", price: 45, rating: 4, img: "clothing1.jpg" },
        { id: 2, category: "men", name: "Casual Shirt", price: 30, rating: 5, img: "clothing2.jpg" },
        { id: 3, category: "kids", name: "Kids Hoodie", price: 25, rating: 4.5, img: "clothing3.jpg" },
        { id: 4, category: "women", name: "Elegant Skirt", price: 40, rating: 4.2, img: "clothing4.jpg" },
        { id: 5, category: "men", name: "Denim Jacket", price: 50, rating: 4.8, img: "clothing5.jpg" },
        { id: 6, category: "kids", name: "Cute T-shirt", price: 15, rating: 4.3, img: "clothing6.jpg" },
        { id: 7, category: "women", name: "Red Dress", price: 55, rating: 5, img: "clothing7.jpg" },
        { id: 8, category: "men", name: "Winter Coat", price: 70, rating: 4.6, img: "clothing8.jpg" },
    ];

    function displayClothing() {
        collectionContainer.innerHTML = "";

        let filteredItems = clothingItems.filter(item => {
            // Price filter
            if (priceFilter.value === "low" && item.price >= 30) return false;
            if (priceFilter.value === "medium" && (item.price < 30 || item.price > 50)) return false;
            if (priceFilter.value === "high" && item.price <= 50) return false;

            // Rating filter
            if (ratingFilter.value !== "all" && item.rating < parseFloat(ratingFilter.value)) return false;

            return true;
        });

        filteredItems.forEach(item => {
            const card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = `
                <img src="${item.img}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p class="price">$${item.price}</p>
                <p class="rating">${"★".repeat(Math.round(item.rating))}</p>
                <div class="actions">
                    <button class="like-btn">❤️</button>
                    <button class="cart-btn">🛒</button>
                </div>
            `;
            collectionContainer.appendChild(card);
        });
    }

    // Apply filters when selection changes
    priceFilter.addEventListener("change", displayClothing);
    ratingFilter.addEventListener("change", displayClothing);

    // Load all clothing items on page load
    displayClothing();
});