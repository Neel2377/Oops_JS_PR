class Vehicle {
    move() {
        console.log("The vehicle is moving.");
    }
}

class Car extends Vehicle {
    move() {
        console.log("The car drives on the road.");
    }
}

class Bike extends Vehicle {
    move() {
        console.log("The bike stuck in traffic.");
    }
}

const vehicle = new Vehicle();
const car = new Car();
const bike = new Bike();

vehicle.move();
car.move();
bike.move();  