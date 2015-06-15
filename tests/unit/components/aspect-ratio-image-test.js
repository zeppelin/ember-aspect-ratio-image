import Ember from 'ember';
import {
  moduleForComponent,
  test
} from 'ember-qunit';
var run = Ember.run;

moduleForComponent('aspect-ratio-image', 'AspectRatioImageComponent', {
  unit: true
});

test('it calculates the correct aspect ratio for a given width/height', function(assert) {
  const getPaddingBottom = ()=> {
    var element = this.$().find('.aspect-ratio-image-placeholder')[0];
    return element.style.paddingBottom;
  };

  const component = this.subject({
    width: 100,
    height: 50
  });

  assert.equal(getPaddingBottom(), '50%');

  run(function() {
    component.setProperties({
      width: 50,
      height: 100
    });
  });

  assert.equal(getPaddingBottom(), '200%');
});
