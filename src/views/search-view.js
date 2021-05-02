import {toSingleGif} from './trending-views.js';

export const toSearchView = (array) => `
<div id="searchView">
${array.map(toSingleGif).join('\n')}
</div>
`;
