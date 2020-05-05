import axios from 'axios';

function fetchData() {
  return axios
    .get('https://rickandmortyapi.com/api/character/')
    .then((response) => response.data)
    .catch((err) => console.error(err));
}

fetchData()
  .then((data) => data.results)
  .then((characters) => characters.filter((i) => i.id !== 1))
  .then(console.log);
