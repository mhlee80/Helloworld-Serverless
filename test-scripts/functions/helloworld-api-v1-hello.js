'use strict'

const assert = require('assert')
const { describe, it, before, after } = require('mocha')
const chakram = require('chakram')
const expect = chakram.expect

const stage = process.env.STAGE === 'prd' ? 'prd' : 'dev'
const infraConfig = require('../../config/infra-cfg.json')[stage]

const host = process.env.SLS_HOST

describe('helloworld-api/hello', function () {
  this.timeout(0)

  before('setup', async function () {
  })

  after('tear down', async function () {
  })

  it('get helloworld-api/helloworld/', function () {
    const url = host + '/'
    var response = chakram.get(url)

    expect(response).to.have.status(200)

    // response.then(function (res) {
    //   console.log(JSON.stringify(res.response.body))
    //   return res
    // })

    return chakram.wait()
  })
})
