import Ember from 'ember';
import {
  moduleForComponent,
  test
} from 'ember-qunit';
var run = Ember.run;

moduleForComponent('aspect-ratio-image', 'AspectRatioImageComponent', {
  // specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
});

test('it calculates the correct aspect ratio for a given width/height', function() {
  var getPaddingBottom = function() {
    var element = this.$().find('.aspect-ratio-image-placeholder')[0];
    return element.style.paddingBottom;
  }.bind(this);

  var component = this.subject({
    width: 100,
    height: 50
  });

  equal(getPaddingBottom(), '50%');

  run(function() {
    component.setProperties({
      width: 50,
      height: 100
    });
  });

  equal(getPaddingBottom(), '200%');
});
