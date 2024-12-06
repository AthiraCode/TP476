class RealMask extends IMask {
    constructor() {
      super();
      this.maskStatus = false; // Default state (not masked)
    }
  
    maskOn() {
      this.maskStatus = true;
      console.log("Data is now masked.");
    }
  
    maskOff() {
      this.maskStatus = false;
      console.log("Data is now unmasked.");
    }
  }
  