## Usage
1. setup library name in webpack.config.js
2. in package.json setup `main` property to match library name
3. Run `npm install`
4. Run `npm run build` for development `npm run dev`
5. Runing tests `npm run test`

## Create module
```
~/next.to.app $ cd ./module-bojler
~/module-bojler$ npm link

~/module-bojler$ cd ../app
~/app $ npm link module-bojler
```

## lib in git
- One option is to have build files also in git
- Other option is to have lib in gitignore and commit lib it to separate branch.
- [example](https://github.com/grommet/grommet/blob/master/gulpfile-grommet-release.js#L131)

# references
- <http://slides.com/linclark/webpack#/31>
- [Start your own JavaScript library using webpack and ES6](http://krasimirtsonev.com/blog/article/javascript-library-starter-using-webpack-es6) 
- [distributing react components](http://krasimirtsonev.com/blog/article/distributing-react-components-babel-browserify-webpack-uglifyjs)
