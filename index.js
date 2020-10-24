const Discord = require('discord.js');
const client = new Discord.Client();
const ip = require('public-ip');
const { exec } = require('child_process');
var stream = require('stream');

var serverProcess;
var isServerOpen = false;

client.once('ready', () => {
    console.log('Ready!');
});

function startServer(message) {
    serverProcess = exec('Path to your server start script', (err, stdout, stderr) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(stdout);
    });
    message.channel.send('Server started');
    isServerOpen = true;
    console.log('Server started' + new Date().toISOString());
}

function closeServer(message) {
    serverProcess.stdin.write('/stop\n');
    message.channel.send('Server closed');
    isServerOpen = false;
    console.log('Server started' + new Date().toISOString());
}

client.on('message', message => {
    switch (message.content) {
        case '!ip':
            (async () => {
                message.channel.send(await ip.v4());
            })();
            break;
        case '!openserver':
            if (!isServerOpen) {
                startServer(message);
            }
            else {
                message.channel.send('Server is already running');
            }
            break;
        case '!closeserver':
            if (isServerOpen) {
                closeServer(message);
            }
            else {
                message.channel.send('Server is already closed');
            }
            break;
        default:
            break;
    }
});

client.login('Your token');