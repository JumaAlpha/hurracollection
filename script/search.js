const dados = [
    { tipo: "produto", nome: "Vestido" },
    { tipo: "produto", nome: "Camisa Casual" },
    { tipo: "produto", nome: "Jaqueta" },
    { tipo: "produto", nome: "Jeans" },
    { tipo: "produto", nome: "Moletom" },
    { tipo: "seção", nome: "Sobre Nós" },
    { tipo: "seção", nome: "Contato" },
    { tipo: "categoria", nome: "Masculino" },
    { tipo: "categoria", nome: "Feminino" }
];

function handleEnter(evento) {
    if (evento.key === "Enter") {
        realizarPesquisa();
    }
}

function mostrarSugestoes() {
    let entrada = document.getElementById("searchInput").value.toLowerCase();
    let sugestoesDiv = document.getElementById("suggestions");

    if (entrada === "") {
        sugestoesDiv.innerHTML = "";
        return;
    }

    let correspondencias = dados.filter(item => item.nome.toLowerCase().includes(entrada));

    let sugestoesHTML = correspondencias.map(item => 
        `<div onclick="selecionarSugestao('${item.nome}')">${item.nome}</div>`
    ).join("");

    sugestoesDiv.innerHTML = sugestoesHTML;
}

function selecionarSugestao(valor) {
    document.getElementById("searchInput").value = valor;
    document.getElementById("suggestions").innerHTML = "";
    realizarPesquisa();
}

function realizarPesquisa() {
    let consulta = document.getElementById("searchInput").value;
    if (consulta.trim() !== "") {
        window.location.href = `../search-results.html?query=${encodeURIComponent(consulta)}`;
    }
}
