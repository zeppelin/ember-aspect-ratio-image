# ember-aspect-ratio-image

An Ember component that maintains the correct aspect ratio for an image, useful in responsive layouts. The addon also provides the bare minimum of [CSS styles](vendor/aspect-ratio-image.css) to get the responsive image working.

Similar to how responsive images are handled on [Medium](https://medium.com/@jonerichall/spectacular-rubens-not-so-spectacular-empire-b577f4f3f0bf#76fb)

## Installation

```
$ npm install ember-aspect-ratio-image --save-dev
```

*Note that `0.1.0` requires Ember 1.13.0+. If you're on an older version of Ember, use 0.0.x*

## Usage

```hbs
{{aspect-ratio-image width=2000 height=1125 src="http://placekitten.com/2000/1125"}}
```

You can use your own image element (eg. when you want to add class names, etc.), just don't forget the `width`/`height` properties...

```hbs
{{#aspect-ratio-image width=2000 height=1125}}
  <img class="aspect-ratio-image-img" src="http://placekitten.com/2000/1125">
{{/aspect-ratio-image}}
```

You must provide:
  * `width`
  * `height`
  * `src`

## License

Copyright (c) 2015 Gabor Babicz ([MIT](LICENSE) License)
