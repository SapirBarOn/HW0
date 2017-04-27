var eventEmitter = require('events');

module.exports = class ArmWrestling extends eventEmitter {

    constructor(){
        super();
        this.name = "sapir";
        this.points = 0;
    }

    addPoint(){
        this.points++;
        this.emit('add'); //fire event
    }

    removePoint(){
        this.points--;
        this.emit('remove'); //fire event
    }
}