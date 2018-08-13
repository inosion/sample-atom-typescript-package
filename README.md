# Sample Atom Package Written in Typescript

Initially created with [github.com/hszhsh/package-ts-generator](http://github.com/hszhsh/package-ts-generator)

This worked but the react "types" freaked out so I removed React

**Notes:**
- typings is deprecatedf in favour of "npm install @types/foo"
- you get "atom" by adding the dependency 

  ```
  "dependencies": {
    "@types/atom":"*"
  }
  ```
  In your `package.json`

- Compiling 
  - Manual - `tsc --project .`
  - Installing the node_modules (from package.json) `apm install`

## Alternative Auto Download Compilation 

https://www.npmjs.com/package/atom-ts-transpiler

```
  ...
  "atomTranspilers": [
    {
      "transpiler": "atom-ts-transpiler",
      "glob": "{!(node_modules)/**/,}*.ts?(x)",
      "options": {
        "compilerOptions": { },
        "cacheKeyFiles": [],
        "verbose": false
      }
    }
  ],

  ...
  "dependencies": {
    "atom-ts-transpiler": "^1.5.2",
    "typescript": "^3.0.1"
  }

```
