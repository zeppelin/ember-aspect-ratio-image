# ember-aspect-ratio-image

An Ember component that maintains the correct aspect ratio for an image, useful in responsive layouts.

Similar to how responsive images are handled on [Medium](https://medium.com/@jonerichall/spectacular-rubens-not-so-spectacular-empire-b577f4f3f0bf#76fb)

## Installation

```
$ npm install ember-aspect-ratio-image --save-dev
```

## Usage

```hbs
{{aspect-ratio-image width=2000 height=1125 src="http://placekitten.com/2000/1125"}}
```

You can use your own image element (eg. when you want to add class names, etc.), just don't forget the `width`/`height` properties...

```hbs
{{#aspect-ratio-image width=2000 height=1125}}
  <img class="my-sweet-image" src="http://placekitten.com/2000/1125">
{{/aspect-ratio-image}}
```

You must provide:
  * `width`
  * `height`
  * `src`

## License

Copyright (c) 2014 Gabor Babicz ([MIT](LICENSE) License)
