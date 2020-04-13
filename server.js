const express = require('express');
const app = express();
const path = require('path');
const mysql = require('mysql');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const Router = require('./Router');
const WebSocket = require('ws');
const WebSocketServer = require('ws').Server;

const wss = new WebSocketServer({port:8080});

wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(data) {
        wss.clients.forEach(function each(client) {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(data);
            }
        });
    });
});

app.use(express.static(path.join(__dirname, 'build'))); //(express.static(path.join(__dirname, 'build'))))
app.use(express.json());

console.log('Testing server');

//DATABASE

const db = mysql.createConnection({
   host: 'mysql-projet-web-l3.alwaysdata.net', //localhost
   user: '202443', //root
   password: 'Sfb5b3fun!',
   database: 'projet-web-l3_bd' //myapp
});

db.connect(function (err) {
    if (err){
        console.log('DB error');
        throw err;
    }
});

const sessionStore = new MySQLStore({
    expiration: (1825 * 86400 * 1000),
    endConnectionOnClose: false
}, db);

app.use(session({
    key: '11454657564564',
    secret: '55668786465',
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge:  (1825 * 86400 * 1000),
        httpOnly: false
    }
}));

new Router(app, db);

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 3000, () => console.log('All OK'));