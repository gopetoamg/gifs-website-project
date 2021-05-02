import {uploadGif} from './request-giphy-api.js';
import {unsuccesfulView, successView, requestProblemView}
  from './views/upload-view.js';
import {manageUploads} from './uploads.js';
import {MAIN} from './constants.js';

export const checkFormDataStatus = (form) => {
  const params = [...form.entries()];
  const size = params[0][1].size;

  if (size === 0) {
    MAIN.innerHTML = unsuccesfulView();
  } else {
    uploadGif(form).then((response) => {
      if (response.meta.msg === 'OK') {
        MAIN.innerHTML = successView();
        manageUploads(response.data.id);
      } else {
        MAIN.innerHTML = requestProblemView();
      }
    });
  }
};
