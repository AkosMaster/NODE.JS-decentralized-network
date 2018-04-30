var crypto = require('crypto');
var fs = require('fs');
function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 100; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

var hashes = [];

var isReq = 0;

var activeDown = [];


var actRes = "None";


var app = require('express')();
var http = require('http').Server(app);
var http2 = require('express');
var io = require('socket.io')(http);


var port = process.argv[5];

var connections = [process.argv[2], process.argv[3], process.argv[4]];

var myid = process.argv[6];

var log = [];



io.on('connection', function(socket){
  


  socket.on('disconnect', function(){
    


  });
});







http.listen(port, function(){
  console.log('listening on *:' + port);
});



//client1

var io1 = require('socket.io-client');
var socket1 = io1.connect(process.argv[2], {reconnect: true});

// Add a connect listener



//client2
var io2 = require('socket.io-client');
var socket2 = io1.connect(process.argv[3], {reconnect: true});

// Add a connect listener




//client3
var io3 = require('socket.io-client');
var socket3 = io3.connect(process.argv[4], {reconnect: true});

// Add a connect listener



//send data


//user

var stdin = process.openStdin();

stdin.addListener("data", function(d) {
    
    //console.log("you entered: [" + 
    //    d.toString().trim() + "]");
    
    var cmd = d.toString().trim().split(" ");
    var tosendSTR = cmd;
   
    var actid = makeid();

   

    socket1.emit("send", tosendSTR, actid, myid);
    socket2.emit("send", tosendSTR, actid, myid);
    socket3.emit("send", tosendSTR, actid, myid);
    io.emit("send", tosendSTR, actid, myid);
 
  });



function resetReq() {};


socket1.on('connect', function (socketA) {
    console.log('1 Connected');

});

socket2.on('connect', function (socketB) {
    console.log('2 Connected');
 
});

socket3.on('connect', function (socketC) {
    console.log('3 Connected');

});
















io.on('connection', function(socket){

socket.on('send', function(data, list, sender){
  
if (log.indexOf(list) <= -1) {


log.push(list);
socket1.emit('send', data, list, sender);
    socket2.emit('send', data, list, sender);
    socket3.emit('send', data, list, sender);
    io.emit('send', data, list, sender)
exec(data, sender);
  }

  });



});

socket1.on('send', function(data, list, sender){
  
if (log.indexOf(list) <= -1) {


log.push(list);
socket1.emit('send', data, list, sender);
    socket2.emit('send', data, list, sender);
    socket3.emit('send', data, list, sender);
    io.emit('send', data, list, sender)
exec(data, sender);
  }

  });

  socket2.on('send', function(data, list, sender){
  
if (log.indexOf(list) <= -1) {
  console.log("");
console.log("##: " + data);

log.push(list);
socket1.emit('send', data, list, sender);
    socket2.emit('send', data, list, sender);
    socket3.emit('send', data, list, sender);
    io.emit('send', data, list, sender)
exec(data, sender);
  }

  });

  socket3.on('send', function(data, list, sender){
  
if (log.indexOf(list) <= -1) {


log.push(list);
socket1.emit('send', data, list, sender);
    socket2.emit('send', data, list, sender);
    socket3.emit('send', data, list, sender);
    io.emit('send', data, list, sender)
exec(data, sender);
  }

  });

process.on('uncaughtException', function (err) {
  console.log('Caught exception: ', err);
});



function sendToAll(tosendSTR) {

var actid = makeid();

   

    socket1.emit("send", tosendSTR, actid, myid);
    socket2.emit("send", tosendSTR, actid, myid);
    socket3.emit("send", tosendSTR, actid, myid);
    io.emit("send", tosendSTR, actid, myid);


}



function exec(data,sender) {



console.log("");
console.log(sender + "~##: " + data);



//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
										!
//USEFUL SCRIPTING FUNCTIONS:							!
										!
//sendToAll(string) --- sends message to everyone on the network		!
//console.log(string) --- logs string to console				!
										!
										!
										!
//EXAMPLE RESPONSE SCRIPT							!
										!
//if (data == "pingme") {							!
//sendToAll(sender + " " + "response successfull!");				!
//}										!
										!
										!
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


}




