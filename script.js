const curiosidades = [
  "Você sabia que mais de 70% dos alimentos nas cidades vêm de pequenas propriedades rurais?",
  "Feiras livres são uma ponte direta entre produtores e consumidores urbanos.",
  "O turismo rural tem crescido muito e ajuda a economia do campo.",
  "Aplicativos já conectam diretamente agricultores e moradores das cidades."
];

function mostrarCuriosidade() {
  const indice = Math.floor(Math.random() * curiosidades.length);
  const elemento = document.getElementById("curiosidade");
  elemento.textContent = curiosidades[indice];
}


function mostrarMais() {
  const texto = document.getElementById("textoExtra");
  texto.style.display = texto.style.display === "none" ? "block" : "none";
}


function adicionarImagem() {
  const input = document.getElementById("inputImagem");
  const galeria = document.getElementById("galeria");
  }