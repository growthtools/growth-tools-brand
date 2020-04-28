# @growth-tools/brand npm package

This npm package contains styles and branding shared across Growth Tools web domains.

## How to use

### Install @growth-tools/brand

`$ npm install --save @growth-tools/brand`

### Import dependencies

## Using Font Assets

**@growth-tools/brand** provides files for the Brandon Text fonts used by the React components.

In the (unlikely) event these font files are not already included in the consuming project, either copy them from this package into the proper directory or refer to the example stylesheet at `/src/scss/EXAMPLE_FONTS_FILE.scss`.


## How to test locally

1. Clone this repository to your local machine.
2. Navigate to the `brand` directory and install dependencies:
```
$ cd /path/to/@growth-tools/brand
$ npm install
```
3. Link the package to your local test project:
```
$ npm link; # while still in @growth-tools/brand directory
$ cd /path/to/local/test/project
$ npm link @growth-tools/brand
```
(Documentation for [`npm link`](https://docs.npmjs.com/cli/link.html)).

4. The package should now be accessible to your local project for testing. Use as described above.

## Fonts and Example file
### fonts and example file located in growth-tools-core will eventually be moved to this repository growth-tools-brand
