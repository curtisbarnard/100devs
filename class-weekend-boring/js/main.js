document.querySelector('#check').addEventListener('click', check);

function check() {

  const day = document.querySelector('#day').value.toLowerCase();

  //Conditionals go here
  if (day == "tuesday" || day == "thursday") {
    document.querySelector('#placeToSee').innerHTML = "Class!";
  }else if (day == "saturday" || day == "sunday") {
    document.querySelector('#placeToSee').innerHTML = "Weekend";
  }else if (day == "monday" || day == "wednesday" || day == "friday") {
    document.querySelector('#placeToSee').innerHTML = "Boring...";
  }else {
    document.querySelector('#placeToSee').innerHTML = "Enter an actual day of the week!";
  }
}
