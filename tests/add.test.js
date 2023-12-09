import assert from "assert";
import add from "../library/src/add.js"

describe("Adding numbers together", function () {
  describe("#add()", function () {
    it("Should add two integers together", function () {
      assert.equal(add(1,2), 3);
    });
    it("Should add numbers and decimals together", function () {
      assert.equal(add(1.1,2), 3.1);
    });
    it("Should decimals together", function () {
      assert.equal(add(1.1,2.2), 3.3);
    });
    it("Should accept null values", function () {
      assert.equal(add(null, 2), 2);
    });
    it("Should not accept undefined values", function () {
      assert.equal(add(undefined,2), 3);
    });
    it("Should not accept string values", function () {
      assert.equal(add(1,"test"), NaN);
    });
    it("Should not accept character values", function () {
      assert.equal(add("a",2), NaN);
    });
    it("Should not accept empty values", function () {
      assert.equal(add("",2), NaN);
    });
  });
});
