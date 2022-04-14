import { setSearchFocus } from './searchBar';
import { getSearchTerm } from './dataFunctions';
import { retrieveSearchResults } from './dataFunctions';
import {
  deleteSearchResults,
  buildSearchResults,
  clearStatsLine,
  setStatsLine,
} from './searchResults';

document.addEventListener('readystatechange', (event) => {
  if (event.target.readyState === 'complete') {
    initApp();
  }
});

const initApp = () => {
  // set the focus on text input
  setSearchFocus();

  // TODO 3 listeners clear text
  // show button when typing

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
