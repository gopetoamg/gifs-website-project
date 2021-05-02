export const api = 'YBgyIqcFAR7cvqNru0oYLgUPD1F7vknu';
const api2 = 'Lgx7c5TEPZQxJpc5vDTjOuZpQcsBMnsc';
const api3 = '4KsCY2XSqEknOtvk2NtzGhZindPqJnpg';
const mainUrl = 'https://api.giphy.com/v1/gifs';


/**
 * Send request to Giphy-api to trending endpoint
 * @author Nikoleta Minkova <nikoleta.minkova.a29@learn.telerikacademy.com>
 * @return {JSON} return trending gifs in JSON format
 */
export const loadTrending = () => {
  return fetch(`${mainUrl}/trending?api_key=${api}&limit=18`)
      .then((res) => res.json());
};


/**
  * Send request to Giphy-api  for POST request
   * @author Toshko Batsanov <toshko.batsanov.a29@learn.telerikacademy.com>
   * @function loadSingleGif
   * @param  id The id
   * @return {JSON} json file.
  */
export const loadSingleGif = (id) => {
  return fetch(`${mainUrl}/${id}?api_key=${api2}`)
      .then((response) => response.json());
};

/**
 * Sends request to Giphy-api when you use the search
 * @param {string} string the GIF title you search for
 * @author Georgi Mladenov <georgi.mladenov.a29@learn.telerikacademy.com>
 * @return {JSON} return search result in JSON format
 */
export const loadSearchGifs = (searchTerm = '') => {
  return fetch(`${mainUrl}/search?api_key=${api3}&q=${searchTerm}&limit=18`)
      .then((response) => response.json());
};

/**
 * Send request to Giphy-api to multiple-gifs-by-ids endpoint
 * @author Nikoleta Minkova <nikoleta.minkova.a29@learn.telerikacademy.com>
 * @return {JSON} return trending gifs in JSON format
 */
export const loadMultipleGifsByIds = (array) => {
  const idsInString = array.join(',');
  return fetch(`${mainUrl}?api_key=${api}&ids=${idsInString}`)
      .then((response) => response.json());
};

/**
 * Send request to Giphy-api to the random endpoint
 * @author Georgi Mladenov <georgi.mladenov.a29@learn.telerikacademy.com>
 * @return {JSON} return random GIFs in JSON format
 */
export const loadRandomGif = () => {
  return fetch(`${mainUrl}/random?api_key=${api}`)
      .then((res) => res.json());
};

/**
  * Send request to Giphy-api  for POST request
   * @author Toshko Batsanov <toshko.batsanov.a29@learn.telerikacademy.com>
   * @function uploadGif
   * @param {Object} formData The formated data
   * @return {JSON} json file
  */
export const uploadGif = (formData) => {
  return fetch('http://upload.giphy.com/v1/gifs', {
    method: 'POST',
    body: formData,
  })
      .then((res) => res.json());
};
