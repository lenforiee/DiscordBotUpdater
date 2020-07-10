var pm2 = require('pm2');

pm2.connect(function(err) {
  if (err) throw err;

  setTimeout(function worker() {
    console.log("Cron executing a task...");
    pm2.restart('status', function() {});
    setTimeout(worker, 180000);
  }, 180000);
});
