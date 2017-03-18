# demos

> Some beautiful and simple demos.
> Online Demo: [http://yakima-teng.github.io/demos/](http://yakima-teng.github.io/demos/)

## Note

ReactJS is used, but this javascript framework is not the point in this project.


## Install

``` bash
# install dependencies
npm install

# develop
npm run dev

# build
npm run build

#deploy to github pages
npm run deploy
```

## Folder Structure

<pre>
.
├── build/                      # webpack config files
├── config/
│   ├── index.js                # main project config files
├── src/
│   ├── main.js                 # app entry file
│   ├── App.vue                 # main app component (direct children of Root)
│   ├── views/                  # view component
│   ├── components/             # ui component
│   ├── styles/                 # style files
│   ├── scripts/                # script files
│   ├── mock/                   # mock data
│   └── assets/                 # module assets (processed by webpack)
├── static/                     # pure static assets (directly copied)
├── test/                       # test code
├── .babelrc                    # babel config
├── .editorconfig.js            # editor config
├── .eslintrc.js                # eslint config
├── index.html                  # index.html模版
└── package.json                # build scripts and dependencies
.
</pre>

## Links

* [react](https://facebook.github.io/react/)

* [webpack](http://webpack.github.io/docs/)

* [Demo](http://yakima-teng.github.io/demos/)
