document.addEventListener("DOMContentLoaded", function () {
    const collectionContainer = document.querySelector(".collection-container");
    const filterButtons = document.querySelectorAll(".filter-btn");

    const clothingItems = [
        { id: 1, category: "women", name: "Floral Summer Dress", price: "$45.99", rating: 4, ratingCount: 128, img: "../assets/collection/ladies/floral-dress.png" },
        { id: 2, category: "men", name: "Classic Casual Shirt", price: "$30.50", rating: 5, ratingCount: 89, img: "../assets/collection/men/casual-shirt.png" },
        { id: 3, category: "kids", name: "Comfy Kids Hoodie", price: "$25.00", rating: 4.5, ratingCount: 42, img: "../assets/collection/kids/kids-hoodie.png" },
        { id: 4, category: "women", name: "Elegant Midi Skirt", price: "$39.99", rating: 4.2, ratingCount: 76, img: "../assets/collection/ladies/elegant-skirt.png" },
        { id: 5, category: "men", name: "Vintage Denim Jacket", price: "$49.95", rating: 4.8, ratingCount: 112, img: "../assets/collection/men/denim-jacket.png" },
        { id: 6, category: "kids", name: "Colorful T-Shirt", price: "$15.99", rating: 4.3, ratingCount: 37, img: "../assets/collection/kids/kids-tshirt.png" },
        { id: 7, category: "women", name: "Office Blazer", price: "$59.99", rating: 4.7, ratingCount: 94, img: "../assets/collection/ladies/blazer.png" },
        { id: 8, category: "men", name: "Slim Fit Jeans", price: "$42.00", rating: 4.1, ratingCount: 67, img: "../assets/collection/men/jeans.png" }
    ];

    function renderClothingItems(category = "all") {
        collectionContainer.innerHTML = "";

        const filteredItems = category === "all" 
            ? clothingItems 
            : clothingItems.filter(item => item.category === category);

        filteredItems.forEach(item => {
            const card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = `
                <img src="${item.img}" alt="${item.name}" loading="lazy">
                <div class="card-content">
                    <h3>${item.name}</h3>
                    <p class="price">${item.price}</p>
                    <div class="rating">
                        ${"★".repeat(Math.round(item.rating))}${"☆".repeat(5 - Math.round(item.rating))}
                        <span class="rating-count">(${item.ratingCount})</span>
                    </div>
                    <div class="actions">
                        <button class="like-btn" aria-label="Add to favorites">♥</button>
                        <button class="cart-btn" aria-label="Add to cart">+</button>
                    </div>
                </div>
            `;
            collectionContainer.appendChild(card);
        });

        // Add event listeners for the new buttons
        document.querySelectorAll('.like-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                this.classList.toggle('active');
            });
        });
    }

    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            document.querySelector(".filter-btn.active").classList.remove("active");
            this.classList.add("active");
            renderClothingItems(this.dataset.category);
        });
    });

    renderClothingItems();
});