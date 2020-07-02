/** Item (string) in array. */
const items = require('../fakeDb');

class Item {
  /* getAll: return all strings from fakeDB array
   *   - made async to simulate async behavior of real db
   */
  static async getAll() {
    return items;
  }

  /* create: prepends a string to fakeDB array
   *   - made async to simulate async behavior of real db
   */
  static async create(string) {
    items.unshift(string);
    return string;
  }
}

module.exports = Item;