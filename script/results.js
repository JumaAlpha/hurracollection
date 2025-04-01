document.addEventListener("DOMContentLoaded", function() {
    let params = new URLSearchParams(window.location.search);
    let query = params.get("query").toLowerCase();

    let resultsDiv = document.getElementById("results");

    let matches = data.filter(item => item.name.toLowerCase().includes(query));

    if (matches.length > 0) {
        resultsDiv.innerHTML = matches.map(item => 
            `<p><strong>${item.type}:</strong> ${item.name}</p>`
        ).join("");
    } else {
        resultsDiv.innerHTML = "<p>Keine Ergebnisse gefunden.</p>";
    }
});

function goBack() {
    window.location.href = "index.html";
}
