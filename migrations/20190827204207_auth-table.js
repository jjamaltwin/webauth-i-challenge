
exports.up = function(knex, promise) {
    return knex.schema.createTable("users", tbl => {
        tbl.increments()
        tbl.string('username').notNullable()
        tbl.string("password").notNullable()
   
      })
  
};

exports.down = function(knex, promise) {
    return knex.schema
   .dropTableIfExists("users")
};
