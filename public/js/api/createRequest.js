const createRequest = (options = {}) => {
    const xhr = new XMLHttpRequest;
    xhr.responseType = 'json';

    let url = options.url;
    const formData = new FormData();

    if (options.method === 'GET') {
        for (let key in options.data) {
            url = options.data;
        }
    } else {
        for (let key in options.data) {
            formData =
        }
    }

    try {
        xhr.open(options.method, url);
        xhr.send(formData);
    }
    catch (e) {
        // перехват сетевой ошибки
        callback(e);
    }
}

xhr.onload = function () {
    options.callback(null, xhr.response);
}