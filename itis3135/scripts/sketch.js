function setup() {
    createCanvas(650,500);
    background(100, 100, 100);
  
    strokeWeight(10);
  
    describe('A blank canvas where the user draws by dragging the mouse');
  }
  
  function mouseDragged() {
    let lineHue = mouseX - mouseY;
    stroke(lineHue, 90, 90);
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
