(function() {
  'use strict';

  var EventEmitter = require('events').EventEmitter,
      pubsub = new EventEmitter();

    function on(eventName, cb) {
      pubsub.on(eventName, cb);
    }

    function emit(eventName) {
      pubsub.emit(eventName);
    }

    exports.on = on;
    exports.emit = emit;

})();
