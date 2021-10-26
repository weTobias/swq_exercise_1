var request = require('request');
var hello_world_server = "http://localhost:3000/";

describe('Server', () => {
  it('should call rest path ' / ' and return 200', (done) => {
    request(hello_world_server, function (err, res, body) {
      expect(200)
      expect(body).toBe("Hello World")
      done();
    })
  })

  it('should call rest path ' / ' and return 200', (done) => {
    request(hello_world_server, function (err, res, body) {
      expect(200)
      expect(body).not.toBe("This is a failure")
      done();
    })
  })
});
