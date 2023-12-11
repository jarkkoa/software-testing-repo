import assert from "assert";
import toNumber from "../library/src/toNumber.js";

describe("Converts given value to number", function () {
    describe("#toNumber()", function () {
      it("Should return input", function () {
        assert.equal(toNumber(2), 2);
      });
      it("Should convert string number to number", function () {
        assert.equal(toNumber("2"), 2);
      });
      it("Should convert string decimal to decimal", function () {
        assert.equal(toNumber("2.2"), 2.2);
      });
      it("Should convert infinite value to infinite", function () {
        assert.equal(toNumber(Infinity), Infinity);
      });
      it("Should convert minimum number", function () {
        assert.equal(toNumber(Number.MIN_VALUE), "5e-324");
      });
      it('Should convert a binary string to number', function () {
        assert.strictEqual(toNumber('0b1010'), 10);
      });
      it('Should convert a hex string to number', function () {
        assert.strictEqual(toNumber('0x1a'), 26);
      });
      it("Should not convert string character to number", function () {
        assert.equal(toNumber("a"), NaN);
      });
      it("Should convert null to 0", function () {
        assert.equal(toNumber(null), 0);
      });
      it("Should not convert undefined values", function () {
        assert.equal(toNumber(undefined), NaN);
      });
    });
});