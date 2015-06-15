import Ember from 'ember';

const {
  Component,
  computed
} = Ember;

const { htmlSafe } = Ember.String;

export default Component.extend({
  classNames: ['aspect-ratio-image'],

  width: null,
  height: null,

  fillStyle: computed('width', 'height', function() {
    const width = parseInt(this.get('width'));
    const height = parseInt(this.get('height'));

    const percent = height / width * 100;
    return htmlSafe(`padding-bottom: ${percent}%;`);
  })
});
