import {toSingleGif} from './trending-views.js';

export const displayFavorites = (allFavorites) => `
<div id="favorites">
    ${allFavorites.map(toSingleGif).join('\n')}
</div>
`;
