// variables for images
const moon = document.querySelector('.veryVeryCold')
const everest = document.querySelector('.veryCold')
const pWinter = document.querySelector('.cold')
const pSummer = document.querySelector('.warm')
const onsen = document.querySelector('.hot')
const tea = document.querySelector('.veryHot')
const sun = document.querySelector('.veryVeryHot')

document.querySelector('#convert').addEventListener('click', conversion)

function conversion() {
    // Get the celsius temp from input
    const celsius = document.querySelector('#tempInput').value
    // run celsius thru math function
    const outputTemp = Math.round(celsius * (9/5) + 32)
    // check validitiy
    if (isNaN(outputTemp)) {
        document.querySelector('#convertedTemp').innerText = 'Hey Bozo, put in a number!'
    }else {
        // output farenheit to webpage
        document.querySelector('#convertedTemp').innerText = outputTemp + 'F'
    }
    if (celsius == -127) {
        moon.classList.toggle('hidden')
        everest.classList.add('hidden')
        pWinter.classList.add('hidden')
        pSummer.classList.add('hidden')
        onsen.classList.add('hidden')
        tea.classList.add('hidden')
        sun.classList.add('hidden')
    }else if (celsius == -17) {
        moon.classList.add('hidden')
        everest.classList.toggle('hidden')
        pWinter.classList.add('hidden')
        pSummer.classList.add('hidden')
        onsen.classList.add('hidden')
        tea.classList.add('hidden')
        sun.classList.add('hidden')
    }else if (celsius > 8 && celsius < 13) {
        moon.classList.add('hidden')
        everest.classList.add('hidden')
        pWinter.classList.toggle('hidden')
        pSummer.classList.add('hidden')
        onsen.classList.add('hidden')
        tea.classList.add('hidden')
        sun.classList.add('hidden')
    }else if (celsius > 20 && celsius < 27) {
        moon.classList.add('hidden')
        everest.classList.add('hidden')
        pWinter.classList.add('hidden')
        pSummer.classList.toggle('hidden')
        onsen.classList.add('hidden')
        tea.classList.add('hidden')
        sun.classList.add('hidden')
    }else if (celsius > 39 && celsius < 42) {
        moon.classList.add('hidden')
        everest.classList.add('hidden')
        pWinter.classList.add('hidden')
        pSummer.classList.add('hidden')
        onsen.classList.toggle('hidden')
        tea.classList.add('hidden')
        sun.classList.add('hidden')
    }else if (celsius > 65 && celsius < 100) {
        moon.classList.add('hidden')
        everest.classList.add('hidden')
        pWinter.classList.add('hidden')
        pSummer.classList.add('hidden')
        onsen.classList.add('hidden')
        tea.classList.toggle('hidden')
        sun.classList.add('hidden')
    }else if (celsius == 5504) {
        moon.classList.add('hidden')
        everest.classList.add('hidden')
        pWinter.classList.add('hidden')
        pSummer.classList.add('hidden')
        onsen.classList.add('hidden')
        tea.classList.add('hidden')
        sun.classList.toggle('hidden')
    }else {
        moon.classList.add('hidden')
        everest.classList.add('hidden')
        pWinter.classList.add('hidden')
        pSummer.classList.add('hidden')
        onsen.classList.add('hidden')
        tea.classList.add('hidden')
        sun.classList.add('hidden')
    }
}


// -127 = dark side of the moon
// -17 = Everest base camp
// 8-13 = Portland winter
// 20-27 = Portland summer
// 39-42 = onsen
// 65-100 = tea
// 5504 = sun