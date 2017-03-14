# Flexbox Grid
> A Flexbox based grid system build with sass

This is a repository for a responsive flexbox based grid system inspired by [Bootstrap](http://getbootstrap.com/), [Flexbox Grid](http://flexboxgrid.com/) and [scss-flex-grid](https://github.com/matthewsimo/scss-flex-grid)

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

### Customize with variables
This grid system utilizes variables that can easily be modified to customize the grid itself. The following variables are available for customization:
* `$container-width`: Defaults to 960px. Sets the max width of the `.container` class.
* `$columns`: Defaults to 12. Sets the number of columns. Used as a number to loop though to generate columns.
* `$gutter`: Defaults to 30px. The column gutter (padding left and right).
* `$class-row`: Defaults to 'row'. Sets the name of flexbox parent.
* `$class-col`: Defaults to 'col'. Sets the prefixed name for column classes.
* `$class-offset`: Defaults to 'offset'. Name of the offset classes to offset columns.
* `$screen-xs`: Defaults to 480px. Breakpoint for extra small screen sizes.
* `$screen-sm`: Defaults to 768px. Breakpoint for  small screen sizes.
* `$screen-md`: Defaults to 992px. Breakpoint for medium screen sizes.
* `$screen-lg`: Defaults to 1200px. Breakpoint for large screen sizes.
* `$container-xs`: Defaults to 510px. Max-width for containers on extra small screens. Max-width is calculated based on `$gutter` value
* `$container-sm`: Defaults to 740px. Max-width for containers on small screens. Max-width is calculated based on `$gutter` value
* `$container-md`: Defaults to 940px. Max-width for containers on medium screens. Max-width is calculated based on `$gutter` value
* `$container-lg`: Defaults to 1140px. Max-width for containers on large screens. Max-width is calculated based on `$gutter` value



Columns are generated in the following manner based of the class names variables: `.$class-col-$prefix-$column-iteration` where $prefix comes from a list inside `$breakpoints` and `$column-iteration` represents the current loop value. Check out the mixins to see more info about how looping is used to create the columns.

The `$screen` variables are used in conjunction with the `$breakpoints` object that the grids column prefixes and breakpoints are generated from. Currently the breakpoints array contain the above `$screen` variables with namespaces: `xs`, `sm`, `md` and `lg`.

To add a new column prefix with it's own media breakpoint you can customize the `$breakpoints` array like this:
```scss
  // add new screen size variable
  $screen-xl: 1400px;

  // append breakpoints array with new prefix and the new screen size variable
  $breakpoints: (
    (xs, $screen-xs),
    (sm, $screen-sm),
    (md, $screen-md),
    (lg, $screen-lg),
    (xl, $screen-xl)
  ) !default;
```
The above example will generate column classes and offset classes prefixed with `xl` as well as the other column classes. The grid will also generate a media query based on the value of `$screen-xl`.

Even if `xs` prefix has a screen size variable no media query are generated for this prefix. The reason for this is that the column dimension for this prefix should not be affected or collapse for any screen size.

> **It is important that the `$breakpoints` array holds the list of breakpoints and prefixes in ascending order.**

### Columns
4 different column prefixes are available as default in this grid system. `xs`, `sm`, `md` and `lg` are the prefixes and by default the grid system is built around 12 columns. See above information on how the grid and its column can be customized.

The prefixes works the same way as the prefixes work in Bootstraps grid system.

#### Reordering
Columns can be reordered above certain media breakpoints. A column with the class of `col-md-last` will be displayed last in order for screen sizes larger than the medium breakpoint. `last` or `first` class values are available like this: `col-md-last` and `col-sm-first`

### Alignment
Flexbox is a very powerful tool to set alignment with css and this grid system comes with helpful classes to set alignments of elements. The alignment helpers are for the `row` class since the parent determines how it's children should align.

All alignment classes are prefixed with the screen size they involve. The following alignment helpers are available that targets `justify-content` property:
* `prefix-start` justifies the content at the start.
* `prefix-end` justifies the content at the end.
* `prefix-center` justifies the content at the center.
* `prefix-around` spaces the remaining room around the columns.
* `prefix-between` spaces the remaining room between the columns.

The following alignment classes target the `align-items` property:
* `prefix-top` align items at the top of the parent.
* `prefix-bottom` align items at the bottom of the parent.
* `prefix-middle` align items at the middle of parents top and bottom.

To center content both vertical and horizontal use the following classes in conjunction with the default row class:  `.prefix-center` and  `.prefix-middle`.
