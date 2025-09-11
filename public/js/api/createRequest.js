const createRequest = (options = {}) => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    let url = options.url;
    let formData = null;

    if (options.method === 'GET') {
        const params = new URLSearchParams();
        for (let key in options.data) {
            params.append(key, options.data[key]);
        }
        url += '?' + params.toString();
    } else {
        formData = new FormData();
        for (let key in options.data) {
            formData.append(key, options.data[key]);
        }
    }

    try {
        xhr.open(options.method, url);
        xhr.send(formData);
    }
    catch (e) {
        callback(e);
    }

    xhr.onload = function () {
        options.callback(null, xhr.response);
    }
}

