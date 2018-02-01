
exports.up = function(knex, Promise) {
  return knex.schema.createTable('moves',(table)=>{
    table.increments();
    table.string('player');
    table.integer('position').unsigned();
    table.integer('game_id').unsigned();
    table.foreign("game_id").references("games.id");
    table.timestamps(false,true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('moves');
};
