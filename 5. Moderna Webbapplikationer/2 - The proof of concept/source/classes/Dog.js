export class Dog {
  constructor(name, age) {
    this.id = Math.floor(Math.random() * 500) + 1;
    this.name = name;
    this.age = age;
    this.likes = [];
    this.image = "";
  }
}
