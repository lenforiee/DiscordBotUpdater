# Status-updater-script
Script is used to show amount of players and online players on bot (osu private server only)

Status script used for Nahoko server bot to refresh status every 3 minutes (it's made for learning purposes, it's not recommended to use it on own hand)

How to install? It's simple

To clone files do:
`git clone https://github.com/lenforiee/status-updater.git`

Now setup config and delete `.example` from name

Next do `npm install` to install all needed modules to run a script

You might have to install also pm2 as cron is based on this module, to install it just type:
`npm install pm2 -g`

Now just run both JavaScript files using:

`pm2 start status.js` and `pm2 start cron.js`

If you want to monitor is everything is alright with scripts just do `pm2 monit` and check if cron executing a task after 3 minutes
