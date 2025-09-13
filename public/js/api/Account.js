class Account extends Entity {
  static url = '/account';

  static get(id = '', callback) {
    createRequest({
      url: this.url,
      method: 'GET',
      callback: callback
    });
  }
}
