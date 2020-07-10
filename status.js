const Discord = require('discord.js');
const client = new Discord.Client({autoReconnect: true});
const mysql = require("mysql");
const sqlstring = require("sqlstring");
var colors = require('colors/safe');
const config = require('./config.json');
const fetch = require("node-fetch");

var connection = mysql.createConnection({
    host: config.db_host,
    user: config.db_user,
    password: config.db_password,
    database: config.db_database,
    debug: false,
});

async function getOnlinePlayers() {
    let response = await fetch(config.api + 'onlineUsers');
    let data = await response.json();
    return data;
};
getOnlinePlayers().then(data => onlinePlayers = data.result);

console.log("Connected to MySQL Successfully");
connection.connect();

var sql = "SELECT COUNT(id) as total FROM users WHERE id != 4";

var query = connection.query(sql, function(err, players) {
    allPlayers = players[0].total
    console.log(`Total players ${allPlayers}`)
      client.on('ready', () => {
      console.log("Status bot connected!")
      client.user.setActivity(`over ${allPlayers} / ${onlinePlayers} users!`, {type: 'WATCHING'}).catch(console.error)
   });
connection.destroy();
console.log("Connection with MySQL finished!")
});
client.login(config.token);
