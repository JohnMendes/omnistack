const express = require('express');
const mongoose = require('mongoose');
const routes = require('./router');
const cors = require('cors');
const http = require('http');
const {setupWebsocket} = require('./Websocket');

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb+srv://johnwjm2:jo63hn99@cluster0-lpbrt.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);


server.listen(3333); 