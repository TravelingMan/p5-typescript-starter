const sketch = (p: p5) => {
  this.x = 100;
  this.y = 100;
  p.setup = () => {
    p.createCanvas(400, 400);
  };

  p.draw = () => {
    p.background(0);
    p.fill(255);
    p.rect(this.x, this.y, 50, 50);
  };
};

new p5(sketch);

const smurf = (p: p5) => {
  this.x = 100;
  this.y = 100;
  p.setup = () => {
    p.createCanvas(400, 400);
  };

  p.draw = () => {
    p.background(200);
    p.fill(255);
    p.rect(this.x, this.y, 150, 100);
  };
};

new p5(smurf);