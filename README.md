<div align="center">
  <h1>autobin</h1>
  <a href="https://npmjs.com/package/autobin">
    <img alt="npm" src="https://img.shields.io/npm/v/autobin.svg">
  </a>
  <a href="https://github.com/autosoftoss/autobin">
    <img alt="typescript" src="https://img.shields.io/github/languages/top/autosoftoss/autobin.svg">
  </a>
</div>

<br />

<blockquote align="center">Prepare bin scripts for publishing.</blockquote>

_If you find this repo useful, stars are appreciated ⭐️_
<a href="https://github.com/autosoftoss/autobin">
  <img align="right" alt="GitHub stars" src="https://img.shields.io/github/stars/autosoftoss/autobin?label=%E2%AD%90%EF%B8%8F&style=social">
</a>

_DM me on [Twitter](https://twitter.com/bconnorwhite) if you have questions or suggestions._
<a href="https://twitter.com/bconnorwhite">
  <img align="right" alt="Twitter Follow" src="https://img.shields.io/twitter/url?label=%40bconnorwhite&style=social&url=https%3A%2F%2Ftwitter.com%2Fbconnorwhite">
</a>

---

## About

### Hashbang

Bin scripts require a hashbang to run properly:
```js
#!/usr/bin/env node
```

However, if you're using TypeScript, you'll need to compile to JavaScript before publishing.

This package searches for each file in the `bin` field of your `package.json`, and prepends the Node shebang to the file if it doesn't already have one.

### Executable Bits

Additionally, autobin sets the executable bits on the file. Although this is not required as package managers set the executable bits when installing, it allows you to run the script directly before publishing.

## Installation

```sh
yarn add --dev autobin
```

```sh
npm install --save-dev autobin
```

```sh
pnpm add --save-dev autobin
```

## Usage

### Package Scripts

In your `package.json` file:

```json
{
  "scripts": {
    "postbuild": "autobin"
  }
}
```

> The "postbuild" script automatically runs after the "build" script is run.

### Command Line

Alternatively, you can run `autobin` directly from the command line:

```sh
yarn autobin
```

```sh
npm run autobin
```

```sh
pnpm run autobin
```

<br />

---

<br />

<div align="center">
  <b>Have fun! 🎉</b>
</div>

<br />

---

<br />


<h2 id="dependencies">Dependencies<a href="https://www.npmjs.com/package/autobin?activeTab=dependencies"><img align="right" alt="dependencies" src="https://img.shields.io/librariesio/release/npm/autobin.svg"></a></h2>

- [@bconnorwhite/package](https://www.npmjs.com/package/@bconnorwhite/package): A utility for reading package.json of a project, and forming paths relative to it.
- [clee](https://www.npmjs.com/package/clee): Create CLI applications with glee 🎉
- [make-executable](https://www.npmjs.com/package/make-executable): Set the executable bits on a file
- [read-file-safe](https://www.npmjs.com/package/read-file-safe): Read files without try catch
- [write-file-safe](https://www.npmjs.com/package/write-file-safe): Write files atomically and create parent directories if necessary

<h3 id="dev-dependencies">Dev Dependencies</h3>

- [@autossey/eslint-config](https://www.npmjs.com/package/@autossey/eslint-config): A base for projects that use ESLint.
- [@autossey/tsconfig](https://www.npmjs.com/package/@autossey/tsconfig): A collection of base TSConfigs for various types of projects.
- [npm-package-json-lint-config-auto](https://www.npmjs.com/package/npm-package-json-lint-config-auto): NPM Package.json Lint Config

<br />

<h2 id="license">License <a href="https://opensource.org/licenses/MIT"><img align="right" alt="license" src="https://img.shields.io/npm/l/autobin.svg"></a></h2>

[MIT](https://opensource.org/licenses/MIT) - _The MIT License_

<br />

<h2 id="see-also">See Also</h2>

- [autorepo](https://www.npmjs.com/package/autorepo): Autorepo abstracts away your dev dependencies, providing a single command to run all of your scripts.
