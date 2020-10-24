# ServerBot

  This simple NodeJS application makes use of the Discord API for a simple interaction with a private Minecraft server.

# Dependencies (Node modules):

- discord.js
- public-ip

# What it can do:

- Ask for the server's public ip address (This is useful if you don't have a static ip).
- Open the server.
- Close the server.

# Set up:

1. Create a Discord application: https://discord.com/developers/applications.
2. Create a bot in the same page (it's pretty straightforward).
3. Save your token (don't share it with anyone).
4. Invite the bot to your server with the link https://discord.com/api/oauth2/authorize?client_id=your application's client id (not the token) goes here&permissions=0&scope=bot.
5. Install NodeJS https://nodejs.org/en/.
6. Go to the folder of the bot and run `npm install`.
7. Edit the index.js file and change the lines 'Path to your server start script' and 'Your token' with the corresponding information.

# How to use: 

- Go to the folder of the bot and run `npm start`.
- Once it says "Ready!" you can use the following commands in your server or dm the bot directly:
  - `!ip` Ask for the server's public ip address.
  - `!openserver` Starts the server.
  - `!closeserver` Stops the server (Uses the built in /stop of the Minecraft server, so there will be no corruption of the files).
 
 # Warning:
 
 - In order to not open various instances of the server at the same time, the server will check if it's already running by the last command issued to the bot. If you don't want any bugs like the bot telling you the server is running when it's not, just open and close the server always using the bot.
