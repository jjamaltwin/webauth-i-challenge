
exports.up = function(knex, promise) {
    return knex.schema.createTable("register", tbl => {
        tbl.increments()
        tbl.string("username").notNullable() .unique()
        tbl.string("password").notNullable();
        
      })
  
};

exports.down = function(knex, promise) {
    return knex.schema
    .dropTableIfExists("register");
};
