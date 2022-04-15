function fetchNewData(date) {
  fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=${key}`)
    .then((res) => res.json())
    .then((data) => {
      updateDOM(data, 'then');
      updateDOM(data, 'now');
    });
}
function updateDOM(data, thenOrNow) {
  document.querySelector(`.${thenOrNow} img`).src = data.url;
  document.querySelector(`.${thenOrNow} p`).innerText = data.explanation;
  document.querySelector(`.${thenOrNow} h2`).innerText = data.title;
  document.querySelector(`.${thenOrNow} span`).innerText = data.date;
}

document.querySelector('#newDate').value;

// get new date
// fetch data for that date
// write that data to dom
// fetch data for 10 years ago
// write that data to dom
