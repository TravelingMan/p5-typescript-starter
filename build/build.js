var _this = this;
var sketch = function (p) {
    _this.x = 100;
    _this.y = 100;
    p.setup = function () {
        p.createCanvas(400, 400);
    };
    p.draw = function () {
        p.background(0);
        p.fill(255);
        p.rect(_this.x, _this.y, 50, 50);
    };
};
new p5(sketch);
var smurf = function (p) {
    _this.x = 100;
    _this.y = 100;
    p.setup = function () {
        p.createCanvas(400, 400);
    };
    p.draw = function () {
        p.background(200);
        p.fill(255);
        p.rect(_this.x, _this.y, 150, 100);
    };
};
new p5(smurf);
//# sourceMappingURL=build.js.map