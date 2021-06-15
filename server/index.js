const express = require("express");
const app = express();
const path = require("path");
app.use(express.json());
const PORT = process.env.PORT || 3001;
const pg = require("pg");
const CONNECTION_STRING = require("./DBcode");

const client = new pg.Client(CONNECTION_STRING);
client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  client.query('SELECT NOW() AS "theTime"', function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    console.log(result.rows[0].theTime);
  });
  client.query('SELECT * FROM "Users"', function(err,result) {
	if(err) {
		return console.error('error running query', err);
	  }
	  console.log(result);
	  client.end();
  })
});

app.get("/api", (req, res) => {
	res.json({ message: "AMAZINGGGGGG!!!" });
});

app.listen(PORT, () => {
	console.log(`Server is listening on localhost:${PORT}`);
});
