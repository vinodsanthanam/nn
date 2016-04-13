var express = require('express')
var app = express()

  var pg = require('pg');

  app.set('port', (process.env.PORT || 5000))
  app.use(express.static(__dirname + '/public'))

  app.get('/', function(request, response) {
    response.send('Hello World!')

  });

app.get('/db', function (request, response) {
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    client.query('SELECT * FROM test_table', function(err, result) {
      if (error) return res.send(500);

      if (result.rows.length == 0) return res.json(result.rows);
      result.rows.map(function(row){
        try {
          row.data = JSON.parse(row.data);
        } catch (e) {
          row.data = null;
        }

        return row;
      });

      res.json(result.rows);
    });
  });
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
