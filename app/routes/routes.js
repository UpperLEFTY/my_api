//routes.js

module.exports = function (app, db) {
  app.post('/routes', (req, res) => {
    console.log(req.body)
    res.send('Hello')
  });
};