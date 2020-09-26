const crontab = require('crontab')

function getJobs () {
  return new Promise((res, rej) => {
    crontab.load((err, crontab) => {
      const jobs = crontab.jobs();
      res(jobs)
    });
  }).then((promJobs) => promJobs);
}

function addJob (jobObj) {
  console.log('from Model', jobObj.customMinutes.opt[0].value)
  // crontab.load(function(err, crontab) {
  //   const job = crontab.create(command, time, comment);
  //   crontab.save(function(err, crontab) {
  //   });
  // })
}

module.exports = {
  getJobs,
  addJob
}