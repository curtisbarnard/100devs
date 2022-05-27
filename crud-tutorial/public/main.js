const update = document.querySelector('#update-button');

update.addEventListener('click', () => {
  fetch('/quotes', {
    method: 'put',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: 'Ron Swanson',
      quote:
        'Fishing relaxes me. It’s like yoga, except I still get to kill something.',
    }),
  })
    .then((res) => {
      if (res.ok) return res.json();
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error(error);
    });
});
