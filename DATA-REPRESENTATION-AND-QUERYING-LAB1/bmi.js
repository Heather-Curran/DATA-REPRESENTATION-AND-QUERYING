class BMI{
    // Constructor to initialise data in class
    // Takes two arguements
    constructor(height, weight){
        
        // Create local variables
        this.height = height;
        this.weight = weight;
    }

    // Method to calculate BMI
    calculateBMI(){
        let bmi = this.weight/(this.height**2);
        return bmi;
    }
}

// Create Object which is an instance of the class
let myBMI = new BMI(2, 100);

// Invoke method and print to console
console.log(myBMI.calculateBMI());