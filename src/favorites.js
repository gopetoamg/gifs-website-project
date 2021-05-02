import {FULL_HEART, EMPTY_HEART} from './constants.js';

let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

const addFavorite = (gifId) => {
  if (!favorites.includes(gifId)) {
    favorites.push(gifId);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  };
};
const removeFavorite = (gifId) => {
  if (favorites.includes(gifId)) {
    favorites = favorites.filter((id) => id !== gifId);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  };
};

export const renderHeart = (gifId) => {
  return favorites.includes(gifId)?
    `<span class="favorite active" data-gif-id="${gifId}">${FULL_HEART}</span>`:
    `<span class="favorite" data-gif-id="${gifId}">${EMPTY_HEART}</span>`;
};


export const getFavorites = () => [...favorites];

export const manageLocaleStorage = (gifId) => {
  const allFavorites = getFavorites();
  if (allFavorites.includes(gifId)) {
    removeFavorite(gifId);
  } else {
    addFavorite(gifId);
  };
  document.querySelector(`span[data-gif-id="${gifId}"]`).innerHTML =
   renderHeart(gifId);
};
