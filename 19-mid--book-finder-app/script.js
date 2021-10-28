const API_KEY = `&key=yourKey`;
const MAX_RESULT = 20;
const API = `https://www.googleapis.com/books/v1/volumes?maxResults=${MAX_RESULT}&q=`;
const AUTHOR = 'Author:';
const PUBLISHER = 'Published:';
const PUBLISHED_DATE = 'Data:';

const outputEl = document.getElementById('output');
const inputEl = document.getElementById('input');
const inputBtn = document.getElementById('input-btn');
const loadingIcon = document.getElementById('loading');

const addBooks = async (books) => {
  for (const book of books) {
    const {title, authors, publisher, publishedDate, imageLinks} = book;
    const imgSrc = imageLinks ? (imageLinks.thumbnail || imageLinks.smallThumbnail || imageLinks.small || imageLinks.medium || imageLinks.large) : '';

    // CREATING CARD
    const bookCard = document.createElement('div');
    bookCard.classList.add('output-card');

    const bookTitle = document.createElement('span');
    bookTitle.classList.add('card-title');
    bookTitle.textContent = title;

    const bookContent = document.createElement('div');
    bookContent.classList.add('card-content');

    const bookImg = document.createElement('img');
    bookImg.classList.add('card-image');
    bookImg.src = imgSrc;

    const bookInfo = document.createElement('div');
    bookInfo.classList.add('card-info');

    ///// AUTHOR
    const bookCardRowAuthor = document.createElement('div');
    bookCardRowAuthor.classList.add('card-info-row');

    const bookAuthorInfo = document.createElement('span');
    bookAuthorInfo.classList.add('info-title');
    bookAuthorInfo.textContent = AUTHOR;

    const bookAuthorInfoData = document.createElement('span');
    bookAuthorInfoData.classList.add('info-data');
    bookAuthorInfoData.textContent = authors.join(',');

    bookCardRowAuthor.appendChild(bookAuthorInfo);
    bookCardRowAuthor.appendChild(bookAuthorInfoData);

    ///// PUBLISHER
    const bookCardRowPublisher = document.createElement('div');
    bookCardRowPublisher.classList.add('card-info-row');

    const bookPublisherInfo = document.createElement('span');
    bookPublisherInfo.classList.add('info-title');
    bookPublisherInfo.textContent = PUBLISHER;

    const bookPublisherInfoData = document.createElement('span');
    bookPublisherInfoData.classList.add('info-data');
    bookPublisherInfoData.textContent = publisher;

    bookCardRowPublisher.appendChild(bookPublisherInfo);
    bookCardRowPublisher.appendChild(bookPublisherInfoData);

    //PUBLISHED DATE
    const bookCardRowPublishedDate = document.createElement('div');
    bookCardRowPublishedDate.classList.add('card-info-row');

    const bookPublishedDateInfo = document.createElement('span');
    bookPublishedDateInfo.classList.add('info-title');
    bookPublishedDateInfo.textContent = PUBLISHED_DATE;

    const bookPublishedDateInfoData = document.createElement('span');
    bookPublishedDateInfoData.classList.add('info-data');
    bookPublishedDateInfoData.textContent = publishedDate;

    bookCardRowPublishedDate.appendChild(bookPublishedDateInfo);
    bookCardRowPublishedDate.appendChild(bookPublishedDateInfoData);

    //APPENDING
    bookInfo.appendChild(bookCardRowAuthor);
    bookInfo.appendChild(bookCardRowPublisher);
    bookInfo.appendChild(bookCardRowPublishedDate);

    bookContent.appendChild(bookImg);
    bookContent.appendChild(bookInfo);

    bookCard.appendChild(bookTitle);
    bookCard.appendChild(bookContent);

    outputEl.appendChild(bookCard);
  }
  loadingIcon.classList.add('d-none');
}

const search = async () => {
  loadingIcon.classList.remove('d-none');
  outputEl.innerHTML = '';
  try {
    const response = await fetch(API + inputEl.value + API_KEY);
    const result = await response.json();
    await addBooks(result.items.map(item => item.volumeInfo));
  } catch (error) {
    console.error(`Error: ${error}`);
    loadingIcon.classList.add('d-none');
  }
};


inputBtn.onclick = search;