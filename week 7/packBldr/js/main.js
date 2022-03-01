const daypack = document.getElementById('daypack')
daypack.addEventListener('change', tellMeItWorked)

function tellMeItWorked () {
    if (daypack.checked == true) {
        console.log("checked!")
    }else {
        console.log("unchecked!")
    }
}