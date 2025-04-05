const data = [
    { type: "product", name: "Dress" },
    { type: "product", name: "Casual Shirt" },
    { type: "product", name: "Jacket" },
    { type: "product", name: "Jeans" },
    { type: "product", name: "Hoodie" },
    { type: "section", name: "About Us" },
    { type: "section", name: "Contact" },
    { type: "category", name: "Men" },
    { type: "category", name: "Women" }
];

function handleEnter(event) {
    if (event.key === "Enter") {
        performSearch();
    }
}

function showSuggestions() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let suggestionsDiv = document.getElementById("suggestions");

    if (input === "") {
        suggestionsDiv.innerHTML = "";
        return;
    }

    let matches = data.filter(item => item.name.toLowerCase().includes(input));

    let suggestionsHTML = matches.map(item => 
        `<div onclick="selectSuggestion('${item.name}')">${item.name}</div>`
    ).join("");

    suggestionsDiv.innerHTML = suggestionsHTML;
}

function selectSuggestion(value) {
    document.getElementById("searchInput").value = value;
    document.getElementById("suggestions").innerHTML = "";
    performSearch();
}

function performSearch() {
    let query = document.getElementById("searchInput").value;
    if (query.trim() !== "") {
        window.location.href = `../search-results.html?query=${encodeURIComponent(query)}`;
    }
}