class Entity {
  static url = '';

  static list(data, callback) {
    createRequest({
      url: this.url,
      method: 'GET',
      data: data,
      callback: callback
    });
  }

  static create(data, callback) {
    createRequest({
      url: this.url,
      method: 'PUT',
      data: data,
      callback: callback
    });
  }

  static remove(data, callback) {
    createRequest({
      url: this.url,
      method: 'DELETE',
      data: data,
      callback: callback
    });
  }
}
