var Javabuzz = function(){};

Javabuzz.prototype._isDivisibleBy = function(number, divisor) {
  return (number % divisor === 0);
};

Javabuzz.prototype.isDivisibleByThree = function(number) {
  return this._isDivisibleBy(number, 3);
};

Javabuzz.prototype.isDivisibleByFive = function(number) {
  return this._isDivisibleBy(number, 5);
};

Javabuzz.prototype.isDivisibleByBothFiveAndThree = function(number) {
  return (this.isDivisibleByThree(number) && this.isDivisibleByFive(number));
};

Javabuzz.prototype.says = function(number) {
  if (this.isDivisibleByBothFiveAndThree(number)) return "JavaBuzz"
  if (this.isDivisibleByThree(number)) return "Java";
  if (this.isDivisibleByFive(number)) return "Buzz";
  return number;
};

Javabuzz.prototype.play = function(max) {
  var list = []
  for(count = 1; count <= max; count++){
    list.push(this.says(count));
  };
  return list;
};