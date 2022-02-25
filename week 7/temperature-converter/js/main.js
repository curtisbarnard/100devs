document.querySelector('#convert').addEventListener('click', conversion)

function conversion() {
    // Get the celsius temp from input
    const celsius = document.querySelector('#tempInput').value
    // run celsius thru math function
    const outputTemp = celsius * (9/5) + 32
    // check validitiy
    if (isNaN(outputTemp)) {
        document.querySelector('#convertedTemp').innerText = 'Hey Bozo, put in a number!'
    }else {
        // output farenheit to webpage
        document.querySelector('#convertedTemp').innerText = outputTemp + 'F'
    }
    if (celsius == -127) {
        document.querySelector('.veryVeryCold').classList.toggle('hidden')
    }else if (celsius == -17) {
        document.querySelector('.veryVeryCold').classList.add('hidden')
        document.querySelector('.veryCold').classList.toggle('hidden')
    }else if (celsius > 8 && celsius < 13) {
        document.querySelector('.cold').classList.toggle('hidden')
    }else if (celsius > 20 && celsius < 27) {
        document.querySelector('.warm').classList.toggle('hidden')
    }else if (celsius > 39 && celsius < 42) {
        document.querySelector('.hot').classList.toggle('hidden')
    }else if (celsius > 65 && celsius < 100) {
        document.querySelector('.veryHot').classList.toggle('hidden')
    }else if (celsius == 5504) {
        document.querySelector('.veryVeryHot').classList.toggle('hidden')
    }
}


// -127 = dark side of the moon
// -17 = Everest base camp
// 8-13 = Portland winter
// 20-27 = Portland summer
// 39-42 = onsen
// 65-100 = tea
// 5504 = sun