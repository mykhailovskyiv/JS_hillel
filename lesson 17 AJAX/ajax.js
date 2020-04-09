function request(method, url, succes, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.addEventListener('load', function () {
        if (succes) {
            succes(JSON.parse(this.responseText));
        }
    });
    xhr.addEventListener('error', error || function () { });
    xhr.send();
    return xhr;
}

function get(url, succes, error) {
    return request('GET', url, succes || function () { }, error || function () { });
}
