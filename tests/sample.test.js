const request = require('supertest')
const app = require('../app.js')
describe('Post Endpoint', () => {
  it('shoud create new post', async ( done ) => {
    const res = await request(app)
      .post('/')
      .send()
    expect(res.statusCode).toEqual(200)
    expect(res.body.msg).toEqual('hello world from post method')
    done()
  })
})

afterAll(async (done) => {
  done();
});
