import {
  clearSearchText,
  setSearchFocus,
  showClearTextButton,
  clearPushListener,
} from './searchBar.js';
import { getSearchTerm, retrieveSearchResults } from './dataFunctions.js';
import {
  deleteSearchResults,
  buildSearchResults,
  clearStatsLine,
  setStatsLine,
} from './searchResults.js';

document.addEventListener('readystatechange', (event) => {
  if (event.target.readyState === 'complete') {
    initApp();
  }
});

const initApp = () => {
  // set the focus on text input
  setSearchFocus();

  // event listeners
  // show button when typing
  const search = document.getElementById('search');
  search.addEventListener('input', showClearTextButton);
  // clear text when button clicked
  const clear = document.getElementById('clear');
  clear.addEventListener('click', clearSearchText);
  // allow enter/space to clear text
  clear.addEventListener('keydown', clearPushListener);

  // submitting the search
  const form = document.getElementById('searchBar');
  form.addEventListener('submit', submitTheSearch);
};

// Procedural 'worklfow' function
const submitTheSearch = (event) => {
  event.preventDefault();
  // delete search results
  deleteSearchResults();
  // process the search
  processTheSearch();
  // set the focus
  setSearchFocus();
};

// Procedural
const processTheSearch = async () => {
  clearStatsLine();
  const searchTerm = getSearchTerm();
  if (searchTerm === '') return;
  const resultArray = await retrieveSearchResults(searchTerm);
  if (resultArray.length) buildSearchResults(resultArray);
  setStatsLine(resultArray.length);
};
