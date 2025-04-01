document.addEventListener("DOMContentLoaded", function () {
    const containerColecao = document.querySelector(".collection-container");
    const filtroPreco = document.getElementById("priceRange");
    const filtroAvaliacao = document.getElementById("ratingFilter");

    const roupas = [
        { id: 1, categoria: "feminino", nome: "Vestido Floral", preco: 45, avaliacao: 4, img: "clothing1.jpg" },
        { id: 2, categoria: "masculino", nome: "Camisa Casual", preco: 30, avaliacao: 5, img: "clothing2.jpg" },
        { id: 3, categoria: "infantil", nome: "Moletom Infantil", preco: 25, avaliacao: 4.5, img: "clothing3.jpg" },
        { id: 4, categoria: "feminino", nome: "Saia Elegante", preco: 40, avaliacao: 4.2, img: "clothing4.jpg" },
        { id: 5, categoria: "masculino", nome: "Jaqueta Jeans", preco: 50, avaliacao: 4.8, img: "clothing5.jpg" },
        { id: 6, categoria: "infantil", nome: "Camiseta Fofa", preco: 15, avaliacao: 4.3, img: "clothing6.jpg" },
        { id: 7, categoria: "feminino", nome: "Vestido Vermelho", preco: 55, avaliacao: 5, img: "clothing7.jpg" },
        { id: 8, categoria: "masculino", nome: "Casaco de Inverno", preco: 70, avaliacao: 4.6, img: "clothing8.jpg" },
    ];

    function exibirRoupas() {
        containerColecao.innerHTML = "";

        let roupasFiltradas = roupas.filter(item => {
            // Filtro de Preço
            if (filtroPreco.value === "baixo" && item.preco >= 30) return false;
            if (filtroPreco.value === "medio" && (item.preco < 30 || item.preco > 50)) return false;
            if (filtroPreco.value === "alto" && item.preco <= 50) return false;

            // Filtro de Avaliação
            if (filtroAvaliacao.value !== "todos" && item.avaliacao < parseFloat(filtroAvaliacao.value)) return false;

            return true;
        });

        roupasFiltradas.forEach(item => {
            const card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = `
                <img src="${item.img}" alt="${item.nome}">
                <h3>${item.nome}</h3>
                <p class="price">R$${item.preco}</p>
                <p class="rating">${"★".repeat(Math.round(item.avaliacao))}</p>
                <div class="actions">
                    <button class="like-btn">❤️</button>
                    <button class="cart-btn">🛒</button>
                </div>
            `;
            containerColecao.appendChild(card);
        });
    }

    // Aplicar filtros quando a seleção mudar
    filtroPreco.addEventListener("change", exibirRoupas);
    filtroAvaliacao.addEventListener("change", exibirRoupas);

    // Carregar todas as roupas ao carregar a página
    exibirRoupas();
});
