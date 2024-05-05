let cardContainer = document.querySelector(".card-container");
let loadBtn = document.querySelector(".btn__load-more");
let showCountryMax = 10;
let showCountryMin = 0;

fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((data) => {
    getData(data);
    loadBtn.addEventListener("click", (e) => {
      showCountryMax += 10;
      showCountryMin += 10;
      getData(data);
    });
  });

function getData(data) {
  data.forEach((card, index) => {
    if (index < showCountryMax && index >= showCountryMin) {
      cardContainer.innerHTML += `
        <a class="card border-radius box-shadow">
            <div class="card-img">
              <img  src="${card.flags.png}" alt="" />
            </div>
            <div class="card-body">
              <h3>${card.name.common}</h3>
              <p><span>Population:&nbsp;</span>${card.population.toLocaleString(
                "en-UK"
              )}</p>
              <p><span>Region:&nbsp;</span>${card.region}</p>
              <p><span>Capital:&nbsp;</span>${card.capital}</p>
            </div>
          </a>
    `;
    }
  });
}
