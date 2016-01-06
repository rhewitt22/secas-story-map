(function () {
  'use strict';

  var xhr = require('xhr')
  var _ = {
    defaults: require('lodash.defaults'),
    find: require('lodash.find')
  };

  var projects, emitter;

  function init(events) {
    emitter = events;
    xhr.get('../data/projects.json', function(err, resp) {
      if (err) {
        throw 'Couldn\'t download the projects data file';
      } else {
        console.log(resp);
        projects = JSON.stringify(resp.body);
        emitter.emit('load:projects', projects);
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
