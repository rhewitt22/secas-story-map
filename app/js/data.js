(function () {
  'use strict';

  var emitter = require('./mediator');
  var xhr = require('xhr')
  var _ = require('./util')._;

  var projects;

  function init() {
    xhr.get('../data/projects.json', function(err, resp) {
      if (err) {
        emitter.emit('load:error', 'Could not load projects data');
      } else {
        console.log(resp);
        projects = JSON.stringify(resp.body);
        emitter.emit('load:projects');
      }
    });
  }

  function getProjects() {
    return projects
  }

  function getProject(name) {
    var project;
    return project;
  }

  module.exports.init = init;
  module.exports.getProjects = getProjects;
  module.exports.getProject = getProject;
})();
