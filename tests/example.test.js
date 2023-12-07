import assert from "assert";
import add from "../library/src/add.js"

describe("Example test", function () {
  describe("#add()", function () {
    it("Should add two integers together", function () {
      assert.equal(add(1,2), 3);
    });
  });
});
