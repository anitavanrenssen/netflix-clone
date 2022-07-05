export class User {
  constructor(username) {
    this._username = username;
  }
  get username() {
    return this._username;
  }
}
