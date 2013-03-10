[jQuery SlideCheck Plugin](https://github.com/sabarasaba/jquery-slidecheck)
================================

![Screenshot](http://cl.ly/image/2i2r0q2E2x00/Screen%20Shot%202013-03-10%20at%202.57.46%20PM.png)

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
Follow the [jQuery style guide](http://contribute.jquery.com/style-guides/js), even if existing code doesn't. Lint and test your code.

## License
Copyright (c) 2013 Ignacio A. Rivas

Licensed under the MIT license.