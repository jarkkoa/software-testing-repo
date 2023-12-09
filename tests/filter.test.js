import assert from "assert";
import filter from "../library/src/filter.js"

describe("Filter lists", function () {
  describe("#filter()", function () {
    it("Should remove values under or equal 3", function () {
      assert.deepEqual(filter([1,2,3,4,5], x => x >= 3), [3,4,5]);
    });
    it("Should filter values that are divisible by 2", function () {
        assert.deepEqual(filter([1,2,3,4,5], x => x % 2 == 0), [2,4]);
      });
  });
});
