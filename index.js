const express = require("express");
const app = express();

app.get("*", function(request, response) {
  response.send("Tampil abangku");
});

app.listen(3000);