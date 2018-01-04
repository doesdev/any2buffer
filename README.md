# any2buffer [![NPM version](https://badge.fury.io/js/any2buffer.svg)](https://npmjs.org/package/any2buffer)   [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)   [![Dependency Status](https://dependencyci.com/github/doesdev/any2buffer/badge)](https://dependencyci.com/github/doesdev/any2buffer)

> Pass anything, get Node buffer back

## IF [#3](https://github.com/doesdev/any2buffer/issues/3) or [#4](https://github.com/doesdev/any2buffer/issues/4) are still open when you get here, turn away. This module isn't reliable until those two items are closed. Sorry.

* Note - If no encoding is passed and we can't guess the encoding we'll use fs to
see if it's a file path. Obviously this will affect performance, so if you know
what encoding it is or it is something we can assert (base64 or hex) then
you can avoid touching the file system.

* Other note - If no encoding is given, we can't assert the encoding, and it's not a
valid file path then we will default the buffer to UTF-8. Pull requests for other
encoding assertions are welcome, currently we only assert base64 and hex.

## install

```sh
$ npm install --save any2buffer
```

## api
- **dataToConvertToBuffer** *(anything - required)*
- **encoding** *(string - optional) [ex. 'binary', 'base64', 'path', etc...]*

## usage

```js
const any2buffer = require('any2buffer')
const doSomethingWithBuffer = (buf) => console.log(buf.toString('utf8'))

any2buffer('hello').then(doSomethingWithBuffer).catch(console.error)
```

## License

MIT © [Andrew Carpenter](https://github.com/doesdev)
