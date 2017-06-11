This is the minimal possible setup to get a _in memory_ version of React Native working with TypeScript support. The current techniques use a multi-step process, you save -> TypeScript creates JS file -> Babel sees JS file and compiles to ES5. This replaces that with a custom transformer that will either pass the file to Babel or the TypeScript compiler.

If you want to see a non-trivial production version: https://github.com/artsy/emission

This repo is the techniques inside that app replicated against a new project.

---

Steps required to make this project:

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


---

Making it feel good:

* `yarn add @types/react-native --dev`
