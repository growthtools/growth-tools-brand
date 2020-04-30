# @growth-tools/brand npm package

This npm package contains styles and branding shared across Growth Tools web domains.

## How to use

### Install @growth-tools/brand

`$ npm install --save @growth-tools/brand`

## File naming and file structure for scss files and styles
The scss files in this project are set up to house different functionalities. In order to keep consistent, the following guide oulines which files contain which types of styles:
assets
  fonts: this folder contains the actual font files (for now)
  js
  scss
    abstracts
      fonts: this is where font styles/font families are houses
      mixins: this is where mixins are housed
      variables: this is where your variables are houses ex: $green: #2cd886;
    base
      base: this is where your base styles are housed ex: basic structure that is true across all pages
    pages
      example: this is where page specific styles are located, ex: _home.scss
    main.scss: this is where all your import statements are located

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

