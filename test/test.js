'use strict'

// Setup
import test from 'ava'
import any2buffer from './../index'
import fs from 'fs'
import path from 'path'
const assets = path.resolve(__dirname, 'assets')
const hello = path.join(assets, 'hello.json')
const helloOut = path.join(assets, 'helloOut.json')

test('file path returns buffer', async (assert) => {
  let buf = await any2buffer(hello)
  assert.true(!!buf)
  assert.true(buf instanceof Buffer)
  fs.writeFileSync(helloOut, buf)
  let helloOutJson = require(helloOut).hello
  assert.is(helloOutJson, 'world')
  fs.unlinkSync(helloOut)
})

test('utf8 string returns buffer', async (assert) => {
  let buf = await any2buffer('hello')
  assert.true(!!buf)
  assert.true(buf instanceof Buffer)
  assert.is(buf.toString('utf8'), 'hello')
})

test('base64 string returns buffer', async (assert) => {
  let buf = await any2buffer('aGVsbG8=')
  assert.true(!!buf)
  assert.true(buf instanceof Buffer)
  assert.is(buf.toString('utf8'), 'hello')
})

test('hex string returns buffer', async (assert) => {
  let buf = await any2buffer('68656c6c6f')
  assert.true(!!buf)
  assert.true(buf instanceof Buffer)
  assert.is(buf.toString('utf8'), 'hello')
})

test('buffer returns buffer', async (assert) => {
  let buf = await any2buffer(Buffer.from('hello', 'utf8'))
  assert.true(!!buf)
  assert.true(buf instanceof Buffer)
  assert.is(buf.toString('utf8'), 'hello')
})
