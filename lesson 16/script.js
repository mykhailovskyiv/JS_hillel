var x = document.createElement('div'),
    y = document.createElement('div');

x.classList.add('cross', 'x');
y.classList.add('croos', 'y');

wrapper.append(x, y);

window.onmouse = function (e) {
    x.style.transform = ''
}

