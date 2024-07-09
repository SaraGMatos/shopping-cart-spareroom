const calculateCartSubtotal = require("../main");

describe("calculateCartSubtotal", () => {
  test("returns a number", () => {
    const actual = calculateCartSubtotal();
    expect(typeof actual).toBe("number");
  });
});
