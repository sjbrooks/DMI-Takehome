const strings = require('../fakeDb');

/** String model. */
class StringModel {
  /* getAll: return all strings from fakeDB array
   *   - made async to simulate async behavior of real db
   */
  static async getAll() {
    return strings;
  }

  /* create: prepends a string to fakeDB array
   *   - made async to simulate async behavior of real db
   */
  static async create(string) {
    strings.unshift(string);
    return string;
  }
}

module.exports = StringModel;
