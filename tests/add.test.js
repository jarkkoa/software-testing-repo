import assert from "assert";
import add from "../library/src/add.js"

describe("Adding numbers together", function () {
  describe("#add()", function () {
    it("Should add two numbers together", function () {
      assert.equal(add(1,2), 3);
    });
    it("Should add number and decimal together", function () {
      assert.equal(add(1.1,2), 3.1);
    });
    it("Should add two decimals together", function () {
      assert.equal(add(1.3,2.2), 3.5);
    });
    it('Should handle adding zero to number', function () {
      assert.strictEqual(add(5, 0), 5);
    });
    it("Should accept null values", function () {
      assert.equal(add(null, 2), 2);
    });
    it("Should accept undefined values", function () {
      assert.equal(add(undefined,2), 2);
    });
    it("Should not accept string values", function () {
      assert.equal(add(1,"test"), NaN);
    });
    it("Should not accept character values", function () {
      assert.equal(add("a",2), NaN);
    });
    it("Should not accept empty string", function () {
      assert.equal(add("",5), NaN);
    });
  });
});
