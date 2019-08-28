const db = require('../Data/dbConfig');




const add = (user) => {
    return db('users').insert(user)
  
}