/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-aspect-ratio-image',

  included: function(app) {
    app.import('./vendor/aspect-ratio-image.css');
  }
};
