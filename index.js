var eventEmitter = require('events'),
    armWrestling = require('./armWrestling'),
    http         = require('http');

//Creat web server, function is passes on evry request to the server.    
http.createServer(function(req , res){
    res.writeHeader(200); 
    res.end(JSON.stringify(messages)); //The array 'messages' sent to the client.
}).listen(8080);


var gameArmWrestling = new armWrestling();

var messages = []; //Holding all the actions.

function displayPlayerAdd(){
    console.log(`Name player: ${this.name}\nSport branch: Arm wrestling\nPoints: ${this.points}\n`);
    messages.push('Add point');
}

function displayPlayerRemove(){
    console.log(`Name player: ${this.name}\nSport branch: Arm wrestling\nPoints: ${this.points}\n`);
    messages.push('remove point');
}

//Checking that the score is not less than 0.
function check(){
    if (this.points < 0) {
        console.log(`${this.name} is out of the game!!!\n`);
    }
}

gameArmWrestling.on("add",displayPlayerAdd);
gameArmWrestling.on("remove",displayPlayerRemove);
gameArmWrestling.on("remove",check);

gameArmWrestling.addPoint();
gameArmWrestling.addPoint();
gameArmWrestling.removePoint();
gameArmWrestling.removePoint();
gameArmWrestling.removePoint();

console.log(messages);

