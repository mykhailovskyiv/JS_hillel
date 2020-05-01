
const fetchButton = document.querySelectorAll('button')[0];
const postButton = document.querySelectorAll('button')[1];

fetchButton.addEventListener('click', () => {
    axios.get('http://localhost:3000/')
        .then(response => response.data)
        .then(data => console.log(data))
        .catch(err => console.log(err))
})

postButton.addEventListener('click', () => {
    console.log('post')
})