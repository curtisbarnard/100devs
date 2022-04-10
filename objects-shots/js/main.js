//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
// TODO finish this up and refactor
document.querySelector('button').addEventListener('click', getDrink)
document.querySelector('.navigateDrinkLeft').addEventListener('click', scrollLeft)
document.querySelector('.navigateDrinkRight').addEventListener('click', scrollRight)


function getDrink () {
    // clear page of previous search
    document.querySelector('.cocktails').innerHTML = ''
    let drinkSearch = document.querySelector('input').value.replace(/\s+/g, "_")
    // get new results from API
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkSearch}`).then(res => res.json()).then(data => {
        for (let i = 0; i < data.drinks.length; i++) {
            document.querySelector('.cocktails').innerHTML += `
                <section id="card${i}">
                    <h2>${data.drinks[i].strDrink}</h2>
                    <img src="${data.drinks[i].strDrinkThumb}" alt="Photo of a delicious ${data.drinks[i].strDrink}">
                    <h3>${data.drinks[i].strInstructions}</h3>
                </section>
            `;
        }
    // console.log(data)
    document.querySelector('.navigateDrinkLeft').classList.add('hidden')
    document.querySelector('.navigateDrinkRight').classList.remove('hidden')
})
}

function toggleHidden (domItem) {
    document.querySelector(domItem).classList.toggle('hidden')
}

let test = 0
function scrollRight () {
    if (document.querySelector('.navigateDrinkLeft').classList.contains('hidden')){
        toggleHidden('.navigateDrinkLeft')
    }
    if (test !== 0) {
        writeArrowLinks(getCurrentLinks().map(element => +element + 1))
    }
    test += 1
}
function scrollLeft () {
    if (document.querySelector('.navigateDrinkRight').classList.contains('hidden')){
        toggleHidden('.navigateDrinkRight')
    }
    writeArrowLinks(getCurrentLinks().map(element => +element - 1))
}
function getCurrentLinks () {
    return [document.querySelectorAll('.navigateDrinkLeft')[0].hash.split('').pop(), document.querySelectorAll('.navigateDrinkRight')[0].hash.split('').pop()]
}
function writeArrowLinks (arr) {
    document.querySelector('.navigateDrinkLeft').href = `#card${arr[0]}`
    document.querySelector('.navigateDrinkRight').href = `#card${arr[1]}`
}


// TODO right arrow is skipping cocktail #2
// TODO hide right arrow when on last card
