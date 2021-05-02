const uploads = JSON.parse(localStorage.getItem('uploads')) || [];

export const manageUploads = (id) => {
  uploads.push(id);
  localStorage.setItem('uploads', JSON.stringify(uploads));
};

