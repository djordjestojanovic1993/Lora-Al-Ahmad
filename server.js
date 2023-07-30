const fs = require('fs');
const key = fs.readFileSync('./cert/CA/localhost/localhost.decrypted.key');
const cert = fs.readFileSync('./cert/CA/localhost/localhost.crt');

const https = require('https');
const app = require('./app');

const server = https.createServer({key, cert},app);
server.listen(3000);

server.once('listening', function(){
    console.log('server je pokrenut na portu 3000');
});