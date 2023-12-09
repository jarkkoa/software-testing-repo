import assert from "assert";
import divide from "../library/src/divide.js"

describe("Dividing numbers", function () {
  describe("#divide()", function () {
    it("Should divide integers", function () {
      assert.equal(divide(4,2), 2);
    });
    it("Should divide numbers by decimals", function () {
      assert.equal(divide(2,0.5), 4);
    });
    it("Should divide decimals", function () {
      assert.equal(divide(2.2,1.1), 2);
    });
    it("Should not be able to divide using null", function () {
      assert.equal(divide(4, 0), NaN);
    });
    it("Should not accept undefined values", function () {
      assert.equal(divide(4,undefined), NaN);
    });
    it("Should not accept string values", function () {
      assert.equal(divide(1,"test"), NaN);
    });
    it("Should not accept character values", function () {
      assert.equal(divide(2, "a"), NaN);
    });
    it("Should not accept empty values", function () {
      assert.equal(divide(2, ""), NaN);
    });
  });
});
