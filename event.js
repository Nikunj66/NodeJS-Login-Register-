var EventEmitter=require("events");
var events=new EventEmitter();

var add=function(){
    console.log("Addition Perform");
}

events.on('add',add)
events.emit('add');