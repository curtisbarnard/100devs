function fetchNewData(date) {
  fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=${key}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.media_type === 'image') {
        document.querySelector(
          '.nasaImage'
        ).style.backgroundImage = `url(${data.hdurl})`;
      } else {
        const movieContainer = document.createElement('iframe');
        movieContainer.src = data.url;
        movieContainer.width = '1280px';
        movieContainer.height = '720px';
        const mainContainer = document.querySelector('main');
        mainContainer.append(movieContainer);
      }
    })
    .catch((err) => {
      console.error(err);
    });
}

const todaysDate = new Date();
fetchNewData(todaysDate.toISOString().slice(0, 10));
