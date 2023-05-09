let buscaBtn = document.getElementById("busca-btn");
let paisesInp = document.getElementById("paises-inp");
let resultado = document.getElementById("resultado");

buscaBtn.addEventListener("click", () => {
  let paisNome = paisesInp.value;
  let finalURL = `https://restcountries.com/v3.1/name/${paisNome}?fullText=true`;
  console.log(finalURL);
  fetch(finalURL)
    .then((response) => response.json())
    .then((data) => {
      console.log(data[0]);
      console.log(data[0].capital[0]);
      console.log(data[0].flags.svg);
      console.log(data[0].name.common);
      console.log(data[0].continents[0]);
      console.log(Object.keys(data[0].currencies)[0]);
      console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
      console.log(
        Object.values(data[0].languages).toString().split(",").join(", ")
      );
      resultado.innerHTML = `<img src="${data[0].flags.svg}" class="bandeira-img"> 
        <h2>${data[0].name.common}</h2> 
        <section> 
        <div> 
        <h4>Capital:</h4> 
        <span>${data[0].capital[0]}</span>
        </div>
        </section>

        <section> 
        <div> 
        <h4>Continente:</h4> 
        <span>${data[0].continents[0]}</span>
        </div>
        </section>

        <section> 
        <div> 
        <h4>População:</h4> 
        <span>${data[0].population}</span>
        </div>
        </section>

        <section> 
        <div> 
        <h4>Moeda:</h4> 
        <span>${data[0].currencies[Object.keys(data[0].currencies)].name} - ${Object.keys(data[0].currencies)[0]}</span>
        </div>
        </section>

        <section> 
        <div> 
        <h4>Idioma:</h4> 
        <span>${Object.values(data[0].languages).toString().split(",").join(", ")}</span>
        </div>
        </section>
        `;
    }).catch(() => {
        if(paisNome.length == 0){
            resultado.innerHTML = `<h3>O campo de pesquina não pode estar vazio</h3>`
        } else{
            resultado.innerHTML = `<h3>Por favor, entre com um nome de país válido.</h3>`
        }
    })
});
