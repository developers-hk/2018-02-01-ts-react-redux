
import * as express from 'express'
import * as knexfile from './knexfile';
import * as Knex from 'knex';
import * as bodyParser from 'body-parser';
import {Games,Game,Player,Position,Move} from './models';
const knex = Knex(knexfile['development'])



const app = express()
app.use(bodyParser.json());

app.get('/games',(req,res)=>{
    knex.select("*").from("games")
        .innerJoin('moves','moves.game_id','games.id')
        .reduce((games,row:any)=>{
            let gameId = row.game_id;
            games[gameId] = games[gameId] || {};
            games[gameId].moves = games[gameId].moves || [] 
            games[gameId].moves.push({
                player:row.player,
                position:row.position
            });
            games[gameId].createdAt = row.created_at;
            return games;
        },{})
        .then((gamesObj:any)=>{
            let games: Games = Object.keys(gamesObj).map((key)=>gamesObj[key]);
            res.json(games);
        });
});

app.post('/moves',(req,res)=>{
    let game:Game = req.body;
    return knex('games').insert({}).returning("id").then((ids)=>{
        let id = ids[0];
        let moves:Move[] = game.moves.map((move)=>{
            return {
                game_id: id,
                player: move.player,
                position: move.position
            }
        });
        return knex.batchInsert('moves',moves).returning("id");
    }).then((ids)=>res.json(ids));
});


app.listen(8080,'0.0.0.0',()=>{
    console.log("Server is going to start");
});