document.querySelectorAll('input[type="checkbox"]').forEach( item => {
    item.addEventListener('change', tellMeItWorked)
})

function tellMeItWorked () {
    let elementID = event.target.id
    let elementState = document.getElementById(`${elementID}`).checked
    if (elementState == true) {
        let currentWeight = parseFloat(document.querySelector('.totalWeight').innerHTML)
        let itemWeight = parseFloat(document.querySelector(`#${elementID} ~ .weight`).innerHTML)
        let newWeight = Math.round((currentWeight + itemWeight)*100)/100
        document.querySelector('.totalWeight').innerHTML = newWeight
        document.querySelector(`#${elementID} ~ label`).style.color = '#FF9839'
    }else {
        let currentWeight = parseFloat(document.querySelector('.totalWeight').innerHTML)
        let itemWeight = parseFloat(document.querySelector(`#${elementID} ~ .weight`).innerHTML)
        let newWeight = Math.round((currentWeight - itemWeight)*100)/100
        document.querySelector('.totalWeight').innerHTML = newWeight
        document.querySelector(`#${elementID} ~ label`).style.color = '#fff'
    }
}