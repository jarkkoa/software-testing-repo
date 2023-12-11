import assert from "assert";
import defaultTo from "../library/src/defaultTo.js"

describe("Return default value if null, undefined or NaN", function () {
  describe("#defaultTo()", function () {
    it("Should return first number", function () {
        assert.equal(defaultTo(1,2), 1);
    });
    it("Should return number when other value is null", function () {
      assert.equal(defaultTo(null,2), 2);
    });
    it("Should return number when other value is undefined", function () {
        assert.equal(defaultTo(undefined,2), 2);
    });
    it("Should return number when other value is NaN", function () {
        assert.equal(defaultTo(NaN,2), 2);
    });  
  });
});
