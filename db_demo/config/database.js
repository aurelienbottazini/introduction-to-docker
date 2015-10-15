// Good to know: All driver methods use a default fetchSize of 5000 rows, retrieving only first page of results up to a maximum of 5000 rows to shield an application against accidentally large result sets
var cassandra = require('cassandra-driver');
exports. client = new cassandra.Client({ contactPoints: [process.env.DB_PORT_9042_TCP_ADDR]});
