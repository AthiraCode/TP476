class Mediator {
    constructor() {
      this.components = [];
    }
  
    registerComponent(component) {
      this.components.push(component);
    }
  
    notify(sender, event) {
      this.components.forEach(component => {
        if (component !== sender) {
          component.handleEvent(event);
        }
      });
    }
  }
  
  export default Mediator;
  