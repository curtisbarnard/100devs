import { setSearchFocus } from './searchBar';

document.addEventListener('readystatechange', (event) => {
  if (event.target.readyState === 'complete') {
    initApp();
  }
});

const initApp = () => {
  // set the focus on text input
  setSearchFocus();

  // 3 listeners clear text

  const form = document.getElementById('searchBar');
  form.addEventListener('submit', submitTheSearch);
};

// Procedural 'worklfow' function
const submitTheSearch = (event) => {
  event.preventDefault();
  // delete search results
  // process the search
  processTheSearch();
  // set the focus
  setSearchFocus();
};

// Procedural
const processTheSearch = async () => {
  // clear the stats line
  const searchTerm = getSearchTerm();
};
