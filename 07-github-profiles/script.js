const API_URL = 'https://api.github.com/users/';
const TOTAL_REPOSITORIES_TO_DISPLAY = 4;
const REPOSITORIES_PATH = '/repos'

const searchProfileEl = document.getElementById('searchProfile');

const followersEl = document.getElementById('followers');
const followingEl = document.getElementById('following');
const usernameEl = document.getElementById('username');
const repositoryCountEl = document.getElementById('repositoryCount');
const topRepositoriesEl = document.getElementById('topRepositories');
const userAvatarEl = document.getElementById('userAvatar');

const alertMsgEl = document.getElementById('alertMsg');

let fetchedFollowers, fetchedFollowing, fetchedUsername, fetchedAvatar;

const displayError = (error) => {
  userAvatarEl.classList.add('d-none');
  clearResults();
  alertMsgEl.classList.remove('d-none');
  console.error(error);
}

const clearResults = () => {
  followersEl.innerText = '';
  followingEl.innerText = '';
  usernameEl.innerText = '';
  repositoryCountEl.innerText = '';
  topRepositoriesEl.innerHTML = '';

  userAvatarEl.setAttribute('src', '');
};

const hideError = () => alertMsgEl.classList.add('d-none');

const parseResponse = (response) => response.json();

const displayData = (repositories) => {

  followersEl.innerText = fetchedFollowers;
  followingEl.innerText = fetchedFollowing;
  usernameEl.innerText = fetchedUsername;

  userAvatarEl.classList.remove('d-none');
  userAvatarEl.setAttribute('src', fetchedAvatar);

  repositoryCountEl.innerText = repositories.length;

  topRepositoriesEl.innerHTML = '';
  for (let count = 0; count < TOTAL_REPOSITORIES_TO_DISPLAY; count++) {
    const repository = document.createElement('li');
    repository.classList.add('list-group-item');
    repository.innerText = repositories[count].name;
    topRepositoriesEl.appendChild(repository);
  }


}

const fetchRepositories = (username) => fetch(API_URL + username + REPOSITORIES_PATH);

const getAndStoreUserPersonalData = (data) => {
  fetchedUsername = data.login;
  fetchedFollowers = data.followers;
  fetchedFollowing = data.following;
  fetchedAvatar = data.avatar_url;

  return data.login;
}


const fetchUser = () => {

  hideError();

  fetch(API_URL + searchProfileEl.value)
    .then(parseResponse)
    .then((data) => getAndStoreUserPersonalData(data))
    .then((login) => fetchRepositories(login))
    .then(parseResponse)
    .then((data) => displayData(data))
    .catch((error) => displayError(error))
}

const handleKeyPress = (event) => {
  if (event.code === "Enter") 
    return fetchUser()
}

searchProfileEl.addEventListener('keypress', handleKeyPress);