'use strict'

// setup
const fs = require('fs')
const b64Rgx = /^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$/
const isHex = (v) => parseInt(v, 16).toString(16) === v.toLowerCase()
const direct = {
  utf8: true,
  base64: true,
  hex: true,
  ascii: true,
  utf16le: true,
  latin1: true,
  binary: true,
  usc2: true
}
let fromWorks
try { fromWorks = !!Buffer.from('x', 'utf8') } catch (ex) {}
let getBuf = (d, e) => fromWorks ? Buffer.from(d, e) : new Buffer(d, e)

// export
module.exports = any2buffer

// main
function any2buffer (input, type) {
  if (input instanceof Buffer) return Promise.resolve(input)
  if (typeof type === 'string') type = type.toLowerCase()
  return new Promise((resolve, reject) => {
    let strIn = (input || '').toString()
    if (type && direct[type]) return resolve(getBuf(input, type))
    if (b64Rgx.test(strIn)) return resolve(getBuf(strIn, 'base64'))
    if (isHex(input || '')) return resolve(getBuf(input, 'hex'))
    fs.readFile(strIn, (err, data) => {
      if (err) return resolve(getBuf(strIn, 'utf8'))
      return resolve(data)
    })
  })
}
