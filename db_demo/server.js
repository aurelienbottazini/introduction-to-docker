var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Postgres database answer is ' + postgres_answer +
           '<br>The other postgres database has ' + my_other_postgres_features_number + ' features' + 
          '<br>Redis database has ' + redis_key_number + ' keys');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

var pg = require('pg');
var conString = "postgres://postgres:@" + process.env.DBDEMO_DB_POSTGRES_1_PORT_5432_TCP_ADDR + ":" + process.env.DBDEMO_DB_POSTGRES_1_PORT_5432_TCP_PORT +"/" + "postgres";
pg.connect(conString, function(err, client, done) {

  client.query('SELECT $1::int AS number', ['42'], function(err, result) {
    done();
    // leaking in the global namespace, javascript feature!
    postgres_answer = result.rows[0].number;
  });

});

conString = "postgres://postgres:@" + process.env.DBDEMO_DB_MY_OTHER_POSTGRES_1_PORT_5432_TCP_ADDR + ":" + process.env.DBDEMO_DB_MY_OTHER_POSTGRES_1_PORT_5432_TCP_PORT +"/" + "postgres";
pg.connect(conString, function(err, client, done) {

  client.query('select count(feature_id) from information_schema.sql_features', function(err, result) {
    done();
    // I like this feature so much, let's do it again
    my_other_postgres_features_number = result.rows[0].count;
  });

});

var redis = require('redis');
var redis_client = require('redis').createClient(process.env.DBDEMO_DB_REDIS_1_PORT_6379_TCP_PORT, process.env.DBDEMO_DB_REDIS_1_PORT_6379_TCP_ADDR);

redis_client.set('string key', 'string val', redis.print);
redis_client.hset('hash key', 'hashtest 1', 'some value', redis.print);
redis_client.hset(['hash key', 'hashtest 2', 'some other value'], redis.print);

redis_client.hkeys('hash key', function (err, replies) {

  // I should do this all the time
  redis_key_number = replies.length;

  redis_client.quit();
});
