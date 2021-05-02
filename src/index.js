import {renderGifDetails, loadPage, renderSearch} from './render-pages.js';
import {manageLocaleStorage} from '../src/favorites.js';
import {history, lastVisited} from './back-button.js';
import {api} from '../src/request-giphy-api.js';
import {checkFormDataStatus} from './check-form-data.js';

document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('nav-link')) {
      loadPage(e.target.getAttribute('data-page'));
      history(e.target.getAttribute('data-page'));
    };
    const currentSearch = document.getElementById('searchTerm').value;
    if (e.target.id === 'searchBtn') {
      renderSearch(currentSearch);
      history(e.target.id);
    }
    if (e.target.classList.contains('details')) {
      renderGifDetails(e.target.getAttribute('id'));
    }
    if (e.target.classList.contains('favorite')) {
      manageLocaleStorage(e.target.getAttribute('data-gif-id'));
    }
    if (e.target.id === 'register-btn') {
      e.preventDefault();
      const form = document.getElementById('upload-form');
      const formData = new FormData(form);
      formData.append('api_key', api);
      checkFormDataStatus(formData);
    }

    if (e.target.classList.contains('go-back')) {
      const lastPage = lastVisited();
      const allNavs = [...document.querySelectorAll('.nav-link')]
          .map((el) => el.getAttribute('data-page'));
      if (allNavs.includes(lastPage)) {
        loadPage(lastPage);
      } else {
        renderSearch(currentSearch);
      };
    };
  });

  loadPage('home');
});
