const util = require("util");
const fs = require("fs");

const readAsyncFile = util.promisify(fs.readFile);

class Store {
  //methods
  //read()
  read() {
    return readAsyncFile("db/db.json", "utf8");
  }
  //getAllNotes()

  //write()
}

module.exports = Store;
