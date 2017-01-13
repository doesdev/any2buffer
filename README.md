# any2buffer [![NPM version](https://badge.fury.io/js/any2buffer.svg)](https://npmjs.org/package/any2buffer)   [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

> Pass anything, get Node buffer back

* Note - If no type is passed and we can't guess the type we'll use fs to
see if it's a file path. Obviously this will affect performance, so if you know
what type it will be or it is something we can assert (base64 or hex) then
you can avoid touching the file system.

## install

```sh
$ npm install --save any2buffer
```

## api
- **dataToConvertToBuffer** *(anything - required)*
- **dataType** *(string - optional) [ex. 'binary', 'base64', 'path', etc...]*

## usage

```js
const any2buffer = require('any2buffer')
const doSomethingWithBuffer = (buf) => console.log(buf.toString('utf8'))

any2buffer('hello').then(doSomethingWithBuffer).catch(console.error)
```

## License

MIT © [Andrew Carpenter](https://github.com/doesdev)
