// fetch "then" data
fetch('https://api.nasa.gov/planetary/apod?date=2012-04-10&api_key=DEMO_KEY').then(res => res.json()).then(data => {

    document.querySelector('.then img').src = data.url
    document.querySelector('.then p').innerText = data.explanation
    document.querySelector('.then h2').innerText = data.title
    console.log(data)
})
// fetch "now" data
fetch('https://api.nasa.gov/planetary/apod?date=2022-04-10&api_key=DEMO_KEY').then(res => res.json()).then(data => {

    document.querySelector('.now img').src = data.url
    document.querySelector('.now p').innerText = data.explanation
    document.querySelector('.now h2').innerText = data.title
    console.log(data)
})