const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"));
app.get("*", function(request, response) {
  response.send("Tampil abangku");
});


app.listen(3000);