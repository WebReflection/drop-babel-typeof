# drop-babel-typeof

If included as dev dependency, it can replace in place the annoying `_typeof(...)` indirection babel places to allow the usage of `Symbol` in the wild, even if symbols are not used.

`drop-babel-typeof /some/file/path.js`

Alternatively, if you are using `@babel/preset-env`, you can configure it like this so that it doesn't transform `typeof`:

```js
["@babel/preset-env", {
  "exclude": "transform-typeof-symbol"
}]
```
