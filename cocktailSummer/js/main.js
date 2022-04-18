//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
// TODO finish this up and refactor
document.querySelector('button').addEventListener('click', getDrink);

function getDrink() {
  // clear page of previous search
  document.querySelector('.results').innerHTML = '';
  let drinkSearch = document.querySelector('input').value.replace(/\s+/g, '_');
  // get new results from API
  fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkSearch}`
  )
    .then((res) => res.json())
    .then((data) => {
      for (let i = 0; i < data.drinks.length; i++) {
        document.querySelector('.results').innerHTML += `
                <section class="carousel-cell" id="card${i}">
                    <h2>${data.drinks[i].strDrink}</h2>
                    <img src="${data.drinks[i].strDrinkThumb}" alt="Photo of a delicious ${data.drinks[i].strDrink}">
                    <h3>${data.drinks[i].strInstructions}</h3>
                </section>
            `;
      }
      // console.log(data)
    });
  initFlickity();
}
// initialize flickity
const initFlickity = async () => {
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));
  await delay(1000);
  const elem = document.querySelector('.main-carousel');
  const flkty = new Flickity(elem, {
    // options
    cellAlign: 'center',
    wrapAround: true,
    autoplay: 5000,
  });
};
