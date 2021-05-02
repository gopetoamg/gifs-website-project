import {renderHeart} from '../favorites.js';

export const displayTrending = (allTrending) => `
<div id="trending">
    ${allTrending.map(toSingleGif).join('\n')}
</div>
`;

export const toSingleGif = (gif) => `
<div class="gif">
  <p class="title">${gif.title}</p>
  <div class="gif-img">
    <img src="${gif.images.downsized.url}" width="300" height="300">
  </div>
  <div class="buttons">
    <button class="details" id="${gif.id}">Details</button>
    ${renderHeart(gif.id)}
  </div>
</div>
`;
