import { expect } from 'chai'
import rewire from 'rewire'
import request from 'supertest'

const app = rewire('../src/server')

describe('Server', () => {
  it('Should return true', (done) => {
    done();
  })
})
