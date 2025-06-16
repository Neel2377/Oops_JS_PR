class Computer {
  constructor(brand, processor) {
    this.brand = brand;
    this.processor = processor;
  }

  powerOn() {
    this.processor.initialize();
    console.log("Computer powered on");
  }

  shutdown() {
    this.processor.terminate();
    console.log("Computer shut down");
  }
}

class Processor {
  constructor(model) {
    this.model = model;
  }

  initialize() {
    console.log("Processor initialized!");
  }

  terminate() {
    console.log("Processor terminated!");
  }
}

const myPC = new Computer("Dell", new Processor("Intel i7"));
myPC.powerOn();
myPC.shutdown();
