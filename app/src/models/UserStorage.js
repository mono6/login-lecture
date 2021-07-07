"use strict";

class UserStorage {
  static #users = {
    id     : ["kim", "kyoung", "cheon"],
    psword : ["1234", "1234", "12345"],
    name   : ["aa", "bb", "cc"],
  };

  static getUsers(...fields) {
    const users    = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    // console.log(newUsers)
    return newUsers;
  }
}

module.exports = UserStorage;
