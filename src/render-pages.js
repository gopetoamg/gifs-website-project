import {displayTrending} from '../src/views/trending-views.js';
import {toGifDetailed} from '../src/views/details-view.js';
import {displayFavorites} from '../src/views/favorites-views.js';
import {getFavorites} from './favorites.js';
import {toSearchView} from '../src/views/search-view.js';
import {randomFinalLook} from '../src/views/random-view.js';
import {uploadView} from '../src/views/upload-view.js';
import {loadSearchGifs, loadSingleGif, loadTrending,
  loadRandomGif, loadMultipleGifsByIds} from './request-giphy-api.js';
import {MAIN} from './constants.js';
import {displayUploadedGifs} from './views/upload-view.js';
import {homeView} from '../src/views/home-view.js';

export const loadPage = (page = '') => {
  switch (page) {
    case 'home':
      return renderHome();

    case 'trending':
      return renderTrending();

    case 'favorites':
      return favoritesFinalDisplay();

    case 'upload':
      return renderUpload();

    case 'my-gifs':
      return renderMyGifs();

    default: return null;
  }
};

/**
 * Displays GIFs based on your search
 * @author Georgi Mladenov <georgi.mladenov.a29@learn.telerikacademy.com>
 */
export const renderSearch = (term) => {
  loadSearchGifs(term).then((res) => MAIN.innerHTML = toSearchView(res.data));
};

/**
 * Displays home page
 * @author Georgi Mladenov <georgi.mladenov.a29@learn.telerikacademy.com>
 */
const renderHome = () => {
  MAIN.innerHTML = homeView();
};

/**
 * Displays trending gifs in trending section -> 18 gifs
 * @author Nikoleta Minkova <nikoleta.minkova.a29@learn.telerikacademy.com>
 */
const renderTrending = () => {
  loadTrending()
      .then((allTrending) =>MAIN.innerHTML = displayTrending(allTrending.data));
};

/**
 * Displays favorites if the user has such,
 * if not - displays a message and random gif
 * @author Nikoleta Minkova <nikoleta.minkova.a29@learn.telerikacademy.com>
 */
const favoritesFinalDisplay = () => {
  const favoriteGifIds = getFavorites();
  if (favoriteGifIds.length !== 0) {
    loadMultipleGifsByIds(favoriteGifIds).then((allGifs) =>
      MAIN.innerHTML = displayFavorites(allGifs.data));
  } else {
    loadRandomGif()
        .then((random) => MAIN.innerHTML = randomFinalLook(random.data));
  }
};

/**
 * Displays upload page
 * @author Georgi Mladenov <georgi.mladenov.a29@learn.telerikacademy.com>
 */
const renderUpload = () => {
  MAIN.innerHTML = uploadView();
};

/**
  * Send request to Giphy-api  for POST request
   * @author Toshko Batsanov <toshko.batsanov.a29@learn.telerikacademy.com>
   * @function renderGifDetails
   * @param id the id
  */
export const renderGifDetails = (id) => {
  loadSingleGif(id).then((res) => MAIN.innerHTML = toGifDetailed(res.data));
};

/**
  * Renders my-gifs page
   * @author Toshko Batsanov <toshko.batsanov.a29@learn.telerikacademy.com>
   * @function renderMyGifs
  */
export const renderMyGifs = () => {
  const myGifs = JSON.parse(localStorage.getItem('uploads')) || [];
  if (myGifs.length !== 0) {
    loadMultipleGifsByIds(myGifs).then((allGifs) =>
      MAIN.innerHTML = displayUploadedGifs(allGifs.data));
  } else {
    MAIN.innerHTML = `<p> No uploaded gifs </p> `;
  }
};
