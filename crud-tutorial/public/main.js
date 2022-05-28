const update = document.querySelector('#update-button');
const deleteButton = document.querySelector('#delete-button');

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
      window.location.reload();
      console.log(response);
    })
    .catch((error) => {
      console.error(error);
    });
});

deleteButton.addEventListener('click', () => {
  fetch('/quotes', {
    method: 'delete',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: 'Ron Swanson',
    }),
  })
    .then((res) => {
      if (res.ok) return res.json();
    })
    .then((data) => {
      if (data === 'No quotes to delete') {
        document.getElementById('message').innerText = data;
      } else {
        window.location.reload();
      }
    });
});
