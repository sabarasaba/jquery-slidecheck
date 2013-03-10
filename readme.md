[jQuery SlideCheck Plugin](http://bassistance.de/jquery-plugins/jquery-plugin-validation/) - Form validation made easy
================================

The jQuery SlideCheck Plugin provides an improved control that allows drag n drop and its mobile ready and super easy to implement.


## Getting Started

Include jQuery and the plugin on a page. Then select a checkbox to transform and call the `slidecheck` method.

```html
<form>
  <input type='checkbox' class="slideCheckbox" /><br>
</form>
<script src="jquery.js"></script>
<script src="jquery.slidecheck.min.js"></script>
<script>
  $(document).ready(function(){
    $('.slideCheckbox').slidecheck();
  });
</script>
```

## Contributing
Follow the [jQuery style guide](http://contribute.jquery.com/style-guides/js), even if existing code doesn't. Add unit tests for any new or changed functionality. Lint and test your code.

## License
Copyright (c) 2013 Ignacio A. Rivas
Licensed under the MIT license.