(function() {
  'use strict';
  describe('service wishFactory', function(){
    var wish;

    beforeEach(module('motivationAngular'));

    beforeEach(inject(function(wishFactory){
      wish = new wishFactory("Hello","Hi");
    }));

    it("has wish text",function(){
      expect(wish.wish_text).toEqual('Hello');
    });

    it("has outcome text", function(){
      expect(wish.outcome_text).toEqual('Hi');
    })
  });
})();