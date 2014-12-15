import Ember from 'ember';
var Component = Ember.Component;
var computed = Ember.computed;

export default Component.extend({
  classNames: ['aspect-ratio-image'],

  width: null,
  height: null,

  fillStyle: computed('width', 'height', function() {
    var width = parseInt(this.get('width'));
    var height = parseInt(this.get('height'));

    var percent = height / width * 100;
    return 'padding-bottom: '+percent+'%;';
  })
});
