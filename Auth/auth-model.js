const db = require('../Data/dbConfig');




function add(user) {
    return db('users').insert(user)
  
}

function find() {
    return db('users').select('id', 'username', 'password');
  }

function findBy(filter) {
    return db('users').where(filter);
  }


module.exports = {
    add,
    findBy,
    find
}