const cardStores = document.querySelector(".main");

function createCard([hashtag1, hashtag2, hashtag3, img, title, desciption, verinfo, verofertas]) {
    let code = `
    <figure class="card-content">
              <div class="figure-header">
                  <ul class="hashtag-list">
                      <li class="hashtag-list-item"><a href="#" class="general">${hashtag1}</a></li>
                      <li class="hashtag-list-item"><a href="#" class="general">${hashtag2}</a></li>
                      <li class="hashtag-list-item"><a href="#" class="general">${hashtag3}</a></li>
                  </ul>
                  <img class="card-img" src="${img}" alt="">
              </div>
              <figcaption>
                  <h1 class="figcaption-title">${title}</h1>
                  <p class="figcaption-description">${desciption}</p>
                  <ul class="figcaption-list">
                      <li><a class="figcaption-verMas verinfo" href="#">${verinfo}<img class="figcaption-verMas-icon" src="general-imgs/Arrow.svg"></a></li>
                      <li><a class="figcaption-verMas verofertas" href="#">${verofertas}<img class="figcaption-verMas-icon" src="general-imgs/Arrow.svg"></a></li>
                  </ul>
              </figcaption>
        </figure>
        `;
    cardStores.innerHTML += code;
}
// creacion de 'argumento' lista para pasarla a la funcion
let item1 = [
    "Telefonos",
    "Tecnologia",
    "Computadoras",
    "general-imgs/apple-card-img.svg",
    "Wallmart",
    "Lorem ipsum dolor sit amet.",
    "Ver info",
    "Ver ofertas"
];
let item2 = [
    "Deporte",
    "Atletico",
    "Zapatillas",
    "general-imgs/nike-card-img.svg",
    "Nike",
    "Lorem ipsum dolor sit amet.",
    "Ver info",
    "Ver ofertas"
];
let item3 = [
    "General",
    "Estilo de vida",
    "Todo",
    "general-imgs/amazon-card-img.svg",
    "Amazon",
    "Lorem ipsum dolor sit amet.",
    "Ver info",
    "Ver ofertas"
];
let item4 = [
    "Zapatillas",
    "Deporte",
    "Atletico",
    "general-imgs/adidas-card-img.svg",
    "Adidas",
    "Lorem ipsum dolor sit amet.",
    "Ver info",
    "Ver ofertas"
];


function mostrarMas() {
    for (var i = 0; i < 3; i++) {
        createCard(item1)
        createCard(item2)
        createCard(item3)
        createCard(item4)
    }
}

// funcion para limpiar la barra de busqueda
function limpearSearchBar() {
    document.getElementById("input-search-bar").value = "";
}

//quitar el default del boton para que cuando se haga click no se redirija al inicio de la pagina
document.getElementById("cancelBtn").addEventListener("click", function(event) {
    event.preventDefault()
});