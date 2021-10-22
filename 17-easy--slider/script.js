const IMAGES_URL = 'https://api.unsplash.com/photos/';
const CLIENT_ID = 'YOUR_API_GO_HERE';

const imageEl = document.getElementById('image');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const viewedImagesIds = [];
let position;

const prev = () => {
  position--;
  if (position < 0) {
    position = 0;
    getNewImage(false);
    return;
  }

  getImageById(viewedImagesIds[position]);
}

const next = () => {
  position++;
  if (position > viewedImagesIds.length - 1) {
    getNewImage(true);
    return;
  }
  
  getImageById(viewedImagesIds[position]);
}

const getNewImage = (push = false) => {
  fetch(`${IMAGES_URL}/random?client_id=${CLIENT_ID}`)
  .then(response => response.json())
  .then(image => {
    setImage(image.urls.raw);
    push ? viewedImagesIds.push(image.id) : viewedImagesIds.unshift(image.id);
  })
  .catch(error => console.error(error))
}

const setImage = (image) => {
  imageEl.src = image;
}

const getImageById = (id) => {
  fetch(`${IMAGES_URL}/${id}?client_id=${CLIENT_ID}`)
  .then(response => response.json())
  .then(image => {
    setImage(image.urls.raw);
  })
  .catch(error => console.error(error));
}

const load = () => {
  getNewImage(true);
  position = 0;
}

prevBtn.addEventListener('click', prev);
nextBtn.addEventListener('click', next);

load();