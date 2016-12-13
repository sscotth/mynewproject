/* jshint mocha: true, expr: true */

;(function () {
  'use strict';

  describe('test suite', function () {
    describe('mocha and chai', function () {
      it('should assert true', function () {
        true.should.be.false;
        false.should.be.false; // false.should.be.true should fail by default
      });
    });
  });

  describe('hello', function () {
    it('should return "world"', function () {
      /* global hello */
      hello().should.equal('world');
    });
  });

}());
