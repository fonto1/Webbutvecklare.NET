export class User {
  constructor(name, password) {
    this.id = Math.floor(Math.random() * 500) + 1;
    this.name = name;
    this.password = password;
    this.dogs = [];
    this.loggedIn = false;
  }
}
