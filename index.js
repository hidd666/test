const express = require("express");
const app = express();

app.get("*", function(request, response) {
  response.send("Tampil abangku");
});

app.use(express.static(__dirname + "/public"));

app.listen(3000);