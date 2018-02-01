
exports.up = function(knex, Promise) {
  return knex.schema.createTable('games',(table)=>{
    table.increments();
    table.timestamps(false,true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('games');
};
