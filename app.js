var apps = require("./apps");
var http = require("http");

for(var app in apps) {
    setInterval(function() {
      http.get("http://" + app + ".herokuapp.com");
  }, 300000); 
}
