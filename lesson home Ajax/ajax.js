var requestURL = 'https://jsonplaceholder.typicode.com/users'
function sendRequest(method, url) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest()

        xhr.open(method, url)

        xhr.responseType = 'json'

        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response)
            } else {
                resolve(xhr.response)
            }
        }
        xhr.onerror = () => {
            reject(xhr.response)
        }
        xhr.send()
    })
}

sendRequest('GET', requestURL)
    .then(data => console.log(data))
    .catch(err => console.log(err))
