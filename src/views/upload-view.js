import {toSingleGif} from './trending-views.js';

export const uploadView = () => `
<form id="upload-form">
    <div class="upload">
        <label for="profileimage" class="form-label">Choose your gif</label>
        <input type="file" class="form-control" name="file" id="profileimage" aria-describedby="profileimage-file-help">
    <div id="profileimage-file-help" class="form-text">Acceptable formats: gif</div>
    </div>
    <button type="submit" class="btn btn-primary" id="register-btn">Upload</button>
</form>
`;

export const successView = () => `
 <div class="statusResponse">
   <p> "Success!" </p> 
  
 </div>
`;
export const unsuccesfulView = () => `
<div class="statusResponse">
   <p> "You have not uploaded a file!" </p> 
 </div>
`;

export const requestProblemView = (response) => `
  <div>Error: ${response.meta.msg}</div
  `;

export const displayUploadedGifs = (allGifs) => `
<div id="my-gifs">
    ${allGifs.map(toSingleGif).join('\n')}
</div>
`;
