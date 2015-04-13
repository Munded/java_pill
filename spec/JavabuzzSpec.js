describe('Javabuzz', function() {

  // stuff should go here
  var javabuzz;

  beforeEach(function() {
    javabuzz = new Javabuzz();
  });

  describe('knows when a number is', function() {

    it('divisible by 3', function() {
      expect(javabuzz.isDivisibleByThree(3)).toBe(true);
    });

    it('divisible by 5', function() {
      expect(javabuzz.isDivisibleByFive(5)).toBe(true);
    });

    it('divisble by 3 and 5', function() {
      expect(javabuzz.isDivisibleByBothFiveAndThree(15)).toBe(true);
    });


  });

  describe('knows when a number is NOT', function() {

    it('divisible by 3', function() {
      expect(javabuzz.isDivisibleByThree(1)).toBe(false);
    });

    it('divisible by 5', function() {
      expect(javabuzz.isDivisibleByFive(3)).toBe(false);
    });

    it('divisible by 3 and 5', function() {
      expect(javabuzz.isDivisibleByBothFiveAndThree(2)).toBe(false);
    });

  });

  describe('when plays, says', function() {

    it('"Java" when a number is divisible by 3', function() {
      expect(javabuzz.says(3)).toEqual("Java");
    });

    it('"Buzz" when a number is divisible by 5', function() {
      expect(javabuzz.says(5)).toEqual("Buzz");
    });

    it('"JavaBuzz" when a number is divisible by 3 and 5', function(){
      expect(javabuzz.says(15)).toEqual("JavaBuzz");
    });

    it('returns the original number, when the above do not apply', function(){
      expect(javabuzz.says(7)).toEqual(7);
    });

  });

  describe('it can count upwards', function(){

    it('can count to 5', function(){
      expect(javabuzz.play(5)).toEqual([1, 2, "Java", 4, "Buzz"]);
    });

  });

});