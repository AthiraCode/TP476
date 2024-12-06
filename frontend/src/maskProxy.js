class MaskProxy extends IMask {
    constructor() {
      super();
      this.realMask = new RealMask(); // Holds reference to the RealMask
    }
  
    maskOn() {
      // Logic to decide whether to mask data (e.g., user permissions)
      console.log("Proxy: Masking data...");
      this.realMask.maskOn();
    }
  
    maskOff() {
      // Logic to decide whether to unmask data
      console.log("Proxy: Unmasking data...");
      this.realMask.maskOff();
    }
  }
  