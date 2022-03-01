document.querySelectorAll('input[type="checkbox"]').forEach( item => {
    item.addEventListener('change', tellMeItWorked)
})

function tellMeItWorked () {
    let elementID = event.target.id
    let elementState = document.getElementById(`${elementID}`).checked
    if (elementState == true) {
        let currentWeight = document.querySelector('.totalWeight').innerHTML
        let itemWeight = document.querySelector(`#${elementID} ~ .weight`).innerHTML
        let newWeight = Math.round((parseFloat(currentWeight) + parseFloat(itemWeight))*100)/100
        document.querySelector('.totalWeight').innerHTML = newWeight
    }else {
        let currentWeight = document.querySelector('.totalWeight').innerHTML
        let itemWeight = document.querySelector(`#${elementID} ~ .weight`).innerHTML
        let newWeight = Math.round((parseFloat(currentWeight) - parseFloat(itemWeight))*100)/100
        document.querySelector('.totalWeight').innerHTML = newWeight
    }
}