//Write your pseduo code first! 


document.querySelector('#convert').addEventListener('click', run)

function run() {
    // Get the celsius temp from input
    const celsius = document.querySelector('#tempInput').value
    // run celsius thru math function
    const outputTemp = celsius * (9/5) + 32
    // output farenheit to webpage
    document.querySelector('#convertedTemp').innerText = outputTemp + 'F'
}


