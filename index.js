var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var pg = require('pg');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('port', (process.env.PORT || 5000))

app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname+'/index.html'));
});

app.post('/alerts/:id',function(req,res){
  var id = req.params.id;
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    var query = "UPDATE alerts SET state= not state WHERE id=($1)";
    client.query(query, [req.params.id], function(err, result) {
      done();
      console.log(err);
      if (err) return res.send(500);
      if (result.rows.length == 0) return res.json(result.rows);
      result.rows.map(function(row){
        try {
          row.data = JSON.parse(row.data);
        } catch (e) {
          row.data = null;
        }
        return row;
      });
      return response.json(result.rows);
    });
  });
});

app.get('/alerts', function (request, response) {
  console.log(process.env.DATABASE_URL);
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    client.query('SELECT * FROM alerts', function(err, result) {
      done();
      if (err) return response.send(500);
      if (result.rows.length == 0) return response.json(result.rows);
      result.rows.map(function(row){
        try {
          row.data = JSON.parse(row.data);
        } catch (e) {
          row.data = null;
        }
        return row;
      });

      response.json(result.rows);
    });
  });
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
