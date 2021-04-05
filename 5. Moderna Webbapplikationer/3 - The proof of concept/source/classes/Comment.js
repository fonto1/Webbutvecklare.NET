export class Comment {
  constructor(user, text, time) {
    this.id = Math.floor(Math.random() * 500) + 1;
    this.user = user;
    this.text = text;
    this.time = time;
  }
}
