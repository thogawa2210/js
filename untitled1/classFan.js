var Fan = /** @class */ (function () {
    function Fan(speed, on, radius, color) {
        if (speed === void 0) { speed = 1; }
        if (on === void 0) { on = false; }
        if (radius === void 0) { radius = 5; }
        if (color === void 0) { color = 'white'; }
        this.speed = speed;
        this.on = on;
        this.radius = radius;
        this.color = color;
        this.SLOW = 1;
        this.MEDIUM = 2;
        this.HIGH = 3;
        this.speed = speed;
        this.on = on;
        this.radius = radius;
        this.color = color;
    }
    Fan.prototype.getSpeed = function () {
        return this.speed;
    };
    Fan.prototype.getOn = function () {
        return this.on;
    };
    Fan.prototype.getRadius = function () {
        return this.radius;
    };
    Fan.prototype.getColor = function () {
        return this.color;
    };
    Fan.prototype.setSpeed = function (speed) {
        this.speed = speed;
    };
    Fan.prototype.setOn = function (on) {
        this.on = on;
    };
    Fan.prototype.setRadius = function (radius) {
        this.radius = radius;
    };
    Fan.prototype.setColor = function (color) {
        this.color = color;
    };
    Fan.prototype.toSring = function () {
        if (this.getOn()) {
            console.log(this.getSpeed(), this.getRadius(), this.getColor(), 'fan is on');
        }
        else {
            console.log(this.getSpeed(), this.getRadius(), this.getColor(), 'fan is off');
        }
    };
    return Fan;
}());
var fan1 = new Fan();
fan1.toSring();
