'use strict';

const users = [];

class User {
  constructor(name, profile) {
    this.name = name;
    this.profile = profile;
  }

  save() {
    users.push(this);
  }

  static get(name) {
    if(name) {
      return users.filter(
        (user) => user.name.toLowerCase().startsWith(name.toLowerCase())
      );
    }
    return users;
  }
}

users.push(new User('Marcel', 'admin'));

module.exports = User;
