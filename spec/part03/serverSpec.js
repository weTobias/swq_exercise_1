var request = require('supertest');
var hello_world_server = require("../../app/hello_world")

// create TEST code here ->
describe('Server', () => {
  it('should behave...', (done) => {
    request(hello_world_server)
    .get("/")
    .expect(200)
    .end((error) => (error) ? done.fail(error) : done());
  });
});
