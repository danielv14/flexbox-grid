# Flexbox Grid
> A Flexbox based grid system build with sass

This is a repository for a responsive flexbox based grid system inspired by [Bootstrap](http://getbootstrap.com/) and [Flexbox Grid](http://flexboxgrid.com/).

## Development
```bash
# Starts a development server
# with livereload at localhost:8080
$ npm start
# Compile sass files
$ npm build
```

## Demo
The grid system and it's classes can be previewed and played with in the included `ìndex.html` file. Start development server with livereload with `nmp start`.

## What's included in the grid system?
Inspired by Bootstrap, this grid system has container classes, a row class that works as the flexbox parent and column classes as children. See example markup below for a quick example
```html
<section class="container">
  <div class="row">
    <div class="col-md-6 col-md-offset-2">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </div>
  </div>
</section>
```
The above example demonstrates a container with a fixed max-width, it's child row which is this grid systems flexbox parent and lastly the column with a responsive width and offset.

### Columns
4 different column prefixes are available in this grid system. `xs`, `sm`, `md` and `lg` are the prefixes and by default the grid system is built around 12 columns. This can easily be changed by setting the `$columns` variable found in `scss/_variables.scss` before the sass is comiled.

The prefixes works the same way as the prefixes work in Bootstraps grid system.

### Alignment
Flexbox is a very powerful tool to set alignment with css and this grid system comes with helpful classes to set alignments of elements. The alignment helpers are for the `.row` class since the parent determines how it's children should align.

All alignment classes are prefixed with the screen size they involve. The following alignment helpers are available:
* `prefix-start` justifies the content at the start.
* `prefix-end` justifies the content at the end.
* `prefix-center` justifies the content at the center.
* `prefix-around` spaces the remaining room around the columns.
* `prefix-between` spaces the remaining room between the columns.
* `prefix-top` align items at the top of the parent.
* `prefix-bottom` align items at the bottom of the parent.
* `prefix-middle` align items at the middle of parents top and bottom.

To center content both vertical and horizontal use `.row .prefix-center .prefix-middle`.
