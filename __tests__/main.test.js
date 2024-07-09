const calculateCartSubtotal = require("../main");

describe("calculateCartSubtotal", () => {
  test("returns a number", () => {
    const dataset = [{ code: "A", quantity: 1 }];

    expect(typeof calculateCartSubtotal(dataset)).toBe("number");
  });

  test("when given an array of one Product Object, function returns the correct total", () => {
    const dataset = [{ code: "A", quantity: 1 }];

    expect(calculateCartSubtotal(dataset)).toBe(50);
  });

  test("when given an array of two Product Objects, function returns the correct total", () => {
    const dataset1 = [
      { code: "A", quantity: 1 },
      { code: "B", quantity: 1 },
    ];

    expect(calculateCartSubtotal(dataset1)).toBe(85);

    const dataset2 = [
      { code: "C", quantity: 1 },
      { code: "D", quantity: 1 },
    ];

    expect(calculateCartSubtotal(dataset2)).toBe(37);
  });

  test("when given an array of multiple Product Objects, function returns the correct total", () => {
    const dataset = [
      { code: "A", quantity: 1 },
      { code: "B", quantity: 1 },
      { code: "C", quantity: 1 },
      { code: "D", quantity: 1 },
    ];

    expect(calculateCartSubtotal(dataset)).toBe(122);
  });
});
