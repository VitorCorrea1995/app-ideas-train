const peoples = [
  {name: 'Vitor', street: 'Street 6X', city: 'New York', state: 'NY', country: 'EUA', telephone: '689789789', birthday: 'May 90'},
  {name: 'Ana', street: 'Street 20U', city: 'San Andreas', state: 'NY', country: 'EUA', telephone: '12441245', birthday: 'Jun 82'},
  {name: 'Lucas', street: 'Street 174I', city: 'Paris', state: 'PARIS', country: 'FRENCH', telephone: '251235141', birthday: 'May 00'},
  {name: 'Rica', street: 'Street 671g', city: 'Cidade do Mexico', state: 'MX 2', country: 'MX', telephone: '34364433', birthday: 'May 03'},
];

const peoplesList = document.getElementById('person-list');

const nameInfo = document.getElementById('name');
const streetInfo = document.getElementById('street');
const cityInfo = document.getElementById('city');
const stateInfo = document.getElementById('state');
const countryInfo = document.getElementById('country');
const telephoneInfo = document.getElementById('telephone');
const birthdayInfo = document.getElementById('birthday');

const populatePeopleList = () => {
  peoples.forEach(people => {
    const peopleItem = document.createElement('li');
    peopleItem.classList.add('people-item');
    peopleItem.classList.add('list-group-item');
    peopleItem.classList.add('list-group-item-action');
    peopleItem.classList.add('my-1');
    peopleItem.textContent = people.name;
    peopleItem.addEventListener('click', () => {populateSelectedPersonInfo(people)});
    peoplesList.appendChild(peopleItem);
  });
}

const populateSelectedPersonInfo = (person) => {
  nameInfo.innerText = 'Name: ' + (person.name ? person.name : '');
  streetInfo.innerText = 'Street: ' + (person.street ? person.street : '');
  cityInfo.innerText = 'City: ' + (person.city ? person.city : '');
  stateInfo.innerText = 'State: ' + (person.state ? person.state : '');
  countryInfo.innerText = 'Country: ' + (person.country ? person.country : '');
  telephoneInfo.innerText = 'Telephone: ' + (person.telephone ? person.telephone : '');
  birthdayInfo.innerText = 'Birthday: ' + (person.birthday ? person.birthday : '');
};

populatePeopleList();