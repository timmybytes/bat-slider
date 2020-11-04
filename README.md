# The Bat-Slider

![The Bat-Slider Screenshot](./src/img/bat-slider-screenshot.png)

This is a simple React app to display information on the various Bat-Suits seen in film over the years.

Bat-Slider uses [`rc-slider`](https://github.com/react-component/slider) and React Hooks to dynamically display content based on the many Batman suits seen in film since 1943.

## Why?

The goal of the project was to get more practice using state in React, JSON objects, CSS Flexbox, npm, and GitHub deployment, while having a little fun with my love for superheroes.

## Usage

### Getting Started

#### Fork/clone locally

```sh
git clone https://github.com/timmybytes/react-bat-slider-app.git
```

#### Install dependencies

```sh
cd react-bat-slider-app/
npm install
```

#### Start development server

```sh
npm run start
```

Add to the code, change things to your liking, and the development server will reflect the changes as they happen using `react-scripts`.

#### Compiling SCSS to CSS

Bat-Slider uses [SCSS](https://github.com/timmybytes/react-bat-slider-app.git), which needs to be compiled to CSS before it can be recognized by a browser. You can either compile manually, or compile on each change you make.

```sh
# To compile manually
npm run scss

#To compile on changes made
npm run scss:watch
```

By default, css is compiled as compressed, but you can tailor this to your liking in the `package.json` settings.

**Note:** The project uses the [`sass`](https://www.npmjs.com/package/sass) package in favor of the now deprecated `node-sass` for SCSS.

## Demo

Check out the demo to see how the Caped Crusader’s duds have evolved over the years.

[Demo](https://timmybytes.github.io/react-bat-slider-app/)

## License

Bat-Slider is under an [MIT license](./LICENSE.md).
