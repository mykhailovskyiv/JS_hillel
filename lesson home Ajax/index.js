var p = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('prepearing data...')
        var backendData = {
            server: 'aws',
            port: 2000,
            status: 'working'
        }
        resolve()
    }, 2000);
})

p.then(function () {
    console.log('promise resolve')
})