class Vehicle{
    // Constructor to initialise data in class
    // Takes three arguements
    constructor(make, model, year){

        // Create local variables
        this.make = make;
        this.model = model;
        this.year = year;
    }

    // Method that logs information
    Information(){
        console.log(`Make: ${this.make}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
    }
}

// Child class extends Parent
class Car extends Vehicle{
    // Constructor to initialise data in class
    // Use super to invoke Parent constructor 
    constructor(make, model, year, doors){
        super(make, model, year);

        // Create local variable for doors
        this.doors = doors;

    }

    // Use super to invoke Parent method
    Information(){
        super.Information();
        console.log(`Doors: ${this.doors}`);
    }
}


// Create Object which is an instance of the class
let myVehicle = new Vehicle('Toyota', 'Corolla', '1999');

let myCar = new Car('Toyota', 'Corolla', '1999', 5);

// Invoke method
myVehicle.Information();

myCar.Information();
