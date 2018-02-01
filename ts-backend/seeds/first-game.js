

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  
  return knex('games').insert({}).returning("id").then((ids)=>{
    let id = ids[0]
    return knex.batchInsert('moves',[
      {game_id:id,player:'O',position:0},
      {game_id:id,player:'X',position:1},
      {game_id:id,player:'O',position:2},
      {game_id:id,player:'X',position:3},
      {game_id:id,player:'O',position:4},
      {game_id:id,player:'X',position:5},
      {game_id:id,player:'O',position:6},
      {game_id:id,player:'X',position:7},
      {game_id:id,player:'O',position:8},
    ]).returning("id");
  })
};
