function request(method, url) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url, true);
        xhr.addEventListener('load', function () {
            resolve(JSON.parse(this.responseText))
        });
        xhr.addEventListener('error', function () {
            reject(console.log('error'))
        });
        xhr.send();
    })
}

function get(url) {
    return request('GET', url)
}