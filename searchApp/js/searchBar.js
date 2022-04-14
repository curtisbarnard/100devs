export const setSearchFocus = () => {
  document.getElementById('search').focus();
};

export const showClearTextButton = () => {
  const search = document.getElementById('search');
  const clear = document.getElementById('clear');
  if (search.value.length) {
    clear.classList.remove('none');
    clear.classList.add('xDisplay');
  } else {
    clear.classList.add('none');
    clear.classList.remove('xDisplay');
  }
};

export const clearSearchText = (event) => {
  event.preventDefault();
  document.getElementById('search').value = '';
  const clear = document.getElementById('clear');
  clear.classList.add('none');
  clear.classList.remove('xDisplay');
  setSearchFocus();
};

export const clearPushListener = (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    document.getElementById('clear').click();
  }
};
