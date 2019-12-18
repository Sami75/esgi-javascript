// Pilote

function driver(origin) {

    this.origin = origin;
    var state = "ready";
    var oldData = "";

    this.receiveData = function (data) {
        oldData = { origin: this.origin, state: state };
        this.origin = data.origin || this.origin;
        state = data.state || state;
    }

    this.needUpdate = function () {
        return oldData.origin !== this.origin || oldData.state !== state
    }

    this.getState = function () {
        return state;
    }

    this.speak = function () {
        switch (this.getState()) {
            case "ready":
                return "Here we go!";
                break;

            case "happy":
                return "Let's have some fun!";
                break;

            case "sad":
                return "Outch!!! Damn " + this.origin;
                break;

            case "normal":
                return "";
                break;

            default: return "no state";
        }
    }
}

let test = new driver("sami");

console.log("Turn 0");
if(test.needUpdate()) console.log(test.speak());

console.log("Turn 1");
test.receiveData({state: "normal"});
if(test.needUpdate()) console.log(test.speak());

console.log("Turn 2");
test.receiveData({state: "normal"});
if(test.needUpdate()) console.log(test.speak());

console.log("Turn 3");
test.receiveData({state: "happy"});
if(test.needUpdate()) console.log(test.speak());

console.log("Turn 4");
test.receiveData({state: "happy"});
if(test.needUpdate()) console.log(test.speak());

console.log("Turn 5");
test.receiveData({state: "normal"});
if(test.needUpdate()) console.log(test.speak());

console.log("Turn 6");
test.receiveData({state: "normal", origin: "Mario"});
if(test.needUpdate()) console.log(test.speak());

console.log("Turn 7");
test.receiveData({state: "sad"});
if(test.needUpdate()) console.log(test.speak());


// Véhicule

// function vehicle(conf) {
//     var driver = new Pilote(conf.name);
//     this.number = conf.number;
    

//     init(conf) {

//     }
// }