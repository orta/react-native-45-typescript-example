Things required to make this project:

* `npm install -g react-native-cli`
* `react-native init MyProject`
* `cd MyProject`
* `yarn add typescript --dev`
* `yarn tsc -- --init`
* change tsconfig.json:
```json
{
  "compilerOptions": {
    "target": "es5",  
    "module": "commonjs",
    "jsx": "react", 
    "strict": true  
  }
}
```

* create - rn-cli.config.js

```js
module.exports = {
  getSourceExts() {
    return ["js", "ts", "tsx"]
  },

  getTransformModulePath() {
    return require.resolve("./transformer")
  },
}
```

* create transformer folder, and copy emission files in there (https://github.com/artsy/emission/tree/master/transformer)
* You _have_ to keep `index.ios.js` `index.android.js` to use those to load a TSX component, in this case `home.tsx`
* `react-native run-ios` to start it up
