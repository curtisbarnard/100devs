import { setSearchFocus } from './searchBar';
import { getSearchTerm } from './dataFunctions';
import { retrieveSearchResults } from './dataFunctions';

document.addEventListener('readystatechange', (event) => {
  if (event.target.readyState === 'complete') {
    initApp();
  }
});

const initApp = () => {
  // set the focus on text input
  setSearchFocus();

  // TODO 3 listeners clear text

  const form = document.getElementById('searchBar');
  form.addEventListener('submit', submitTheSearch);
};

// Procedural 'worklfow' function
const submitTheSearch = (event) => {
  event.preventDefault();
  // TODO delete search results
  // process the search
  processTheSearch();
  // set the focus
  setSearchFocus();
};

// Procedural
const processTheSearch = async () => {
  // TODO clear the stats line
  const searchTerm = getSearchTerm();
  if (searchTerm === '') return;
  const resultArray = await retrieveSearchResults(searchTerm);
  if (resultArray.length) // TODO build search results
  // TODO set stats line
};
