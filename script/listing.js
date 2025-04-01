document.addEventListener("DOMContentLoaded", function () {
    const collectionContainer = document.querySelector(".collection-container");
    const filterButtons = document.querySelectorAll(".filter-btn");

    const clothes = [
        { id: 1, category: "women", name: "Blumenkleid", price: "$45", rating: 4, img: "../assets/collection/ladies/floral-dress.png" },
        { id: 2, category: "men", name: "Freizeitshirt", price: "$30", rating: 5, img: "../assets/collection/men/casual-shirt.png" },
        { id: 3, category: "kids", name: "Kinder-Hoodie", price: "$25", rating: 4.5, img: "../assets/collection/kids/kids-hoodie.png" },
        { id: 4, category: "women", name: "Eleganter Rock", price: "$40", rating: 4.2, img: "../assets/collection/ladies/elegant-skirt.png" },
        { id: 5, category: "men", name: "Denimjacke", price: "$50", rating: 4.8, img: "../assets/collection/men/denim-jacket.png" },
        { id: 6, category: "kids", name: "Niedliches T-Shirt", price: "$15", rating: 4.3, img: "../assets/collection/kids/kids-tshirt.png" }
    ];

    function displayClothes(category) {
        collectionContainer.innerHTML = ""; // Vorherige Artikel löschen

        const filteredClothes = category === "all" ? clothes : clothes.filter(c => c.category === category);

        filteredClothes.forEach(item => {
            const card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = `
                <img src="${item.img}" alt="${item.name}" width="50%" height="50%">
                <h3>${item.name}</h3>
                <p class="price">${item.price}</p>
                <p class="rating">${"★".repeat(Math.round(item.rating))}</p>
                <div class="actions">
                    <button class="like-btn">❤️</button>
                    <button class="cart-btn">🛒</button>
                </div>
            `;
            collectionContainer.appendChild(card);
        });
    }

    // Event-Listener für Filter
    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            document.querySelector(".filter-btn.active").classList.remove("active");
            this.classList.add("active");
            displayClothes(this.dataset.category);
        });
    });

    // Standardmäßig alle Kleidungsstücke laden
    displayClothes("all");
});
