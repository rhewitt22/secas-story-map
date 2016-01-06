(function() {
  'use strict';

  var L = require('leaflet');
  var _ = require('./util')._

  var options, map;

  L.Icon.Default.imagePath = '../images';

  var defaults = {
    zoom: 5,
    el: 'map'
  };

  function init(opts) {
    options = _.defaults({}, opts, defaults);
    createMap();
    addBasemap();
    addMarkers();
  }

  function createMap() {
    map = L.map(options.el, {
      zoom: options.zoom,
      center: options.center
    })
  }

  function addBasemap() {
    L.tileLayer('http://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png', {
    	attribution: 'Tiles courtesy of <a href="http://openstreetmap.se/" target="_blank">OpenStreetMap Sweden</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
  }

  function addMarkers() {
    var markers = L.geoJson(options.data).addTo(map);
    map.fitBounds(markers.getBounds());
  }

  function handleEvents() {

  }

  module.exports.init = init;
})();
