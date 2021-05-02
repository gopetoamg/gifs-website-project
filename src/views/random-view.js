import {toSingleGif} from './trending-views.js';

export const randomFinalLook = (gif) => `
<div id="random">
    <div id="pic-to-client">
        <img src="../pictures/nothing.jpg" width="350" heigh="340">
    </div>
    <div id="message-to-client">
    <h4 >Here is some random GIF for you => </h4>
    </div>
    <div id="random-gif">
        ${toSingleGif(gif)}
    </div>
</div>
`;
