(function () {
  'use styles';

  var map = require('./map');
  var data = require('./data');
  var emitter = require('./mediator');

  var projects;

  data.init();

  emitter.on('load:projects', function (prjs) {
    console.log('Yargs');
    projects = prjs;

    map.init({
      center: [36.372777, -83.688760]
    });
  });

})();
