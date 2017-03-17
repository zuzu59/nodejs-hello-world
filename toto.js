//nodejs-hello-world
//Petit Helloworld en nodejs pour tester le remote debugger
//zf170317.1647
//MIT License
//Copyright (c) 2017 christian@zufferey.com


var express = require('express')
var titi = require("./titi.js")
var app = express()

app.get('/', function (req, res) {

  text = ""
  result = titi.tata(33, 3)
  text = "<p>Hello World! <br> ça marche en remote 1648.<p>"

  if (result < 18) {
    text += ('<p>Le résultat est: ' + result + "</p>")
  }

  //  debugger;

  res.send(text)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})


//ssh -D 3333 ubuntu@zuzu123.node.consul
