(function () {
  'use styles';

  var map = require('./map');
  var data = require('./data');
  var emitter = require('./mediator');

  var projects;

  data.init(emitter);

  emitter.on('load:projects', function (prjs) {
    projects = prjs;

    map.init({
      center: [36.372777, -83.688760],
      emitter: emitter
    });
  });

})();
