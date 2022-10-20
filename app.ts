var express = require("express");
var mock = require("./proxy").default;
var app = express();
for (const key in mock) {
  if (Object.hasOwnProperty.call(mock, key)) {
    const request = key.split(" ");
    const method = request[0];
    const url = request[1];
    switch (method) {
      case "POST":
        app.post(url, mock[key]);
        break;
      case "PUT":
        app.put(url, mock[key]);
        break;
      default:
        app.get(url, mock[key]);
        break;
    }
  }
}
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port);
});
