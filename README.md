## Align jQuery Plugin

The Align plugin builds off of the [jQuery animate](http://api.jquery.com/animate/) function to align one or more elements on their offset parent.

## Usage

	.align( options )
**options**: A map of additional options to pass to the method. Supported keys:

* alignY: A bool indicating whether or not to align the Y axis. default = true
* alignX: A bool indicating whether or not to align the X axis. default = true
* duration: See [jQuery animate](http://api.jquery.com/animate/).
* easing: See [jQuery animate](http://api.jquery.com/animate/).
* step: See [jQuery animate](http://api.jquery.com/animate/).
* queue: See [jQuery animate](http://api.jquery.com/animate/).
* specialEasing: See [jQuery animate](http://api.jquery.com/animate/).

## Examples

**Default Settings:**

```
$('#MyElement').align();
```

**Horizontal align using the built in jQuery animate 'fast' speed:**
<pre>
$('#MyElement').align({
	alignY: false,
	duration:'fast'
});
</pre>

**Align duration 2000ms:**

```
$('#MyElement').align({duration:2000});
```