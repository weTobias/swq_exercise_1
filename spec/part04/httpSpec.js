describe('remote HTTP request spec', () => {
  const https = require('https');
  it('should respond with a string that contains the word "Bibliothek"', (done) => {
    const responseData = new Promise((resolve) => {
      https.get('https://www.fh-joanneum.at/', res => {
        let data = '';
        res.on('data', chunk => { data += chunk }) 
        res.on('end', () => {
            resolve(data);
        });
      });
    });
    responseData.then(data => {
      expect(data).toMatch(/(Bibliothek)/i)
      done();
    });
  });
});