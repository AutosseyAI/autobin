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

_If I should maintain this repo, please ⭐️_
<a href="https://github.com/autosoftoss/autobin">
  <img align="right" alt="GitHub stars" src="https://img.shields.io/github/stars/autosoftoss/autobin?label=%E2%AD%90%EF%B8%8F&style=social">
</a>

_DM me on [Twitter](https://twitter.com/bconnorwhite) if you have questions or suggestions._
<a href="https://twitter.com/bconnorwhite">
  <img align="right" alt="Twitter Follow" src="https://img.shields.io/twitter/url?label=%40bconnorwhite&style=social&url=https%3A%2F%2Ftwitter.com%2Fbconnorwhite">
</a>

---

This package searches for each file in the `bin` field of your `package.json`, prepends the Node shebang to the file if it doesn't already have one, and makes each file executable.

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

In your `package.json` file:

```json
{
  "scripts": {
    "postbuild": "autobin"
  }
}
```

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

<h2 id="dependencies">Dependencies<a href="https://www.npmjs.com/package/autobin?activeTab=dependencies"><img align="right" alt="dependencies" src="https://img.shields.io/librariesio/release/npm/autobin.svg"></a></h2>

- [@bconnorwhite/package](https://www.npmjs.com/package/@bconnorwhite/package): A utility for reading package.json of a project, and forming paths relative to it.
- [clee](https://www.npmjs.com/package/clee): Create CLI applications with glee 🎉
- [make-executable](https://www.npmjs.com/package/make-executable): Set the executable bits on a file
- [read-file-safe](https://www.npmjs.com/package/read-file-safe): Read files without try catch
- [write-file-safe](https://www.npmjs.com/package/write-file-safe): Write files atomically and create parent directories if necessary

<h3 id="dev-dependencies">Dev Dependencies</h3>

- [@autosoft/eslint-config](https://www.npmjs.com/package/@autosoft/eslint-config): A base for projects that use ESLint.
- [@autosoft/tsconfig](https://www.npmjs.com/package/@autosoft/tsconfig): A base for TypeScript projects.
- [npm-package-json-lint-config-auto](https://www.npmjs.com/package/npm-package-json-lint-config-auto): NPM Package.json Lint Config

<br />


<h2 id="license">License <a href="https://opensource.org/licenses/MIT"><img align="right" alt="license" src="https://img.shields.io/npm/l/autobin.svg"></a></h2>

[MIT](https://opensource.org/licenses/MIT)
