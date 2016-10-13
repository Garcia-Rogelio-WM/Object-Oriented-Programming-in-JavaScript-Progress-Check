//Vehicle constructor, this will become the prototype for th parent class of all //Vehicles
var Vehicle = function(type, calories, health, price) {
    this.type = type;
    this.calories = calories;
    this.health = health;
    this.price = price;
};

// encapsulates a method to display any Vehicle

// define a constructor for a subclass of Vehicle
function Broccoli(type, calories, health, price, heal) {
    // call the parent constructor
    // this will set the inherited properties for the subclass
    Vehicle.call(this, type, calories, health, price);
    // set the subclass specific properties
    this.heal = heal;
}

// create the subclass prototype that inherits from
// the parent prototype by cloning it
Broccoli.prototype = Object.create(Vehicle.prototype);

// set the constructor property of the new prototype to point to
// the subclass constructor
Broccoli.prototype.constructor = Broccoli;

// override the parent displayVehicle method for a Car
Broccoli.prototype.displayVehicle = function() {
    document.write("<input type='text' size='100' value=\'" + this.type +
        "is a vegetable and has " + this.calories + " " + this.health +
            ", costs $" + this.price.toFixed(2)  +
        this.heal + " for you"  + "\'><br><br>");
    this.launchVehicle();
};

// override the parent launchVehicle method for a Car
Broccoli.prototype.launchVehicle = function() {
    document.write("<textarea rows = '6' cols='50' id=\'" + this.type + "\'>" +
        "Text area" + "</textarea><br><br>");
    var output = "";

    document.getElementById(this.type).innerHTML = output;
};

//define a constructor for a subclass of Vehicle
function big_mac(type, calories, health, price, nbrMasts) {
    // call the parent constructor
    // this will set the inherited properties for the subclass
    Vehicle.call(this, type, calories, health, price);
    // set the subclass specific properties
    this.nbrMasts = nbrMasts;
}

// create the subclass prototype that inherits from
// the parent prototype by cloning it
big_mac.prototype = Object.create(Vehicle.prototype);

// set the constructor property of the new prototype to point to
// the subclass constructor
big_mac.prototype.constructor = big_mac;

// override the parent displayVehicle method for a Car
big_mac.prototype.displayVehicle = function() {
    document.write("<input type='text' size='100' value=\'" + this.type +
        " are sandwichs and has " + this.calories + " " + this.health +
        ", costs $" + this.price.toFixed(2)  +
        " and bad for you"  + "\'><br><br>");
    this.launchVehicle();
};
// override the parent launchVehicle method for a Car
big_mac.prototype.launchVehicle = function() {
    document.write("<textarea rows = '6' cols='50' id=\'" + this.type + "\'>" +
        "" + "</textarea><br><br>");

    document.getElementById(this.type).innerHTML = output;
};




function main() {
    //insantiate an array to hold veicles
    var vehicleArray = [];
    //populating the array with objects and subclass objects

    vehicleArray[0] = new Broccoli("Broccol", 50, "Calories", 1.80, " good");
    vehicleArray[1] = new big_mac("Big macs", 563, "Calories", 3.99, "bad");

//polymorphically exercised the method
    for(var i = 0; i < vehicleArray.length; i++) {
        vehicleArray[i].displayVehicle();
    }
};


// instantiate a generic Vehicle
////var vehicle1 = new Vehicle("Generic Vehicle", 0, "kps", 0.00);
//vehicle1.displayVehicle();

//// instantiate a Car
//var car1 = new Car("Porsche Carrera", 195, "mph", 84000.00, 4);
//car1.displayVehicle();

//// instantiate a big_mac
//var big_mac1 = new big_mac("Hinckley SW52", 35, "knots", 498000.00, 1);
//big_mac1.displayVehicle();

//// instantiate a Rocket
//var rocket1 = new Rocket("Saturn V", 25053, "mph", 185000000.00, 3);
//rocket1.displayVehicle();

//var Deathstar1 = new Deathstar("DeathStar", 1, "mph", 185000000000000.00, 0);
//Deathstar1.displayVehicle();
