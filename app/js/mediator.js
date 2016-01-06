(function() {
  'use strict';

  var EventEmitter = require('events').EventEmitter,
      pubsub = new EventEmitter();

    function on(eventName, cb) {
      pubsub.on(eventName, cb);
    }

    function emit(eventName, data) {
      pubsub.emit(eventName, data);
    }

    exports.on = on;
    exports.emit = emit;

})();
