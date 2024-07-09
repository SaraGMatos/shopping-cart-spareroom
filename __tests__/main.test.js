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

  test("when given an array of Product Objects where an offer applies, function returns the correct total", () => {
    const dataset1 = [
      { code: "A", quantity: 3 },
      { code: "B", quantity: 1 },
      { code: "C", quantity: 1 },
      { code: "D", quantity: 1 },
    ];

    expect(calculateCartSubtotal(dataset1)).toBe(212);

    const dataset2 = [
      { code: "A", quantity: 6 },
      { code: "B", quantity: 1 },
      { code: "C", quantity: 2 },
      { code: "D", quantity: 1 },
    ];

    expect(calculateCartSubtotal(dataset2)).toBe(377);
  });

  test("when given an array of Product Objects where multiple offers apply, function returns the correct total", () => {
    const dataset1 = [
      { code: "A", quantity: 3 },
      { code: "B", quantity: 2 },
      { code: "C", quantity: 0 },
      { code: "D", quantity: 0 },
    ];

    expect(calculateCartSubtotal(dataset1)).toBe(200);

    const dataset2 = [
      { code: "A", quantity: 6 },
      { code: "B", quantity: 4 },
      { code: "C", quantity: 1 },
      { code: "D", quantity: 2 },
    ];

    expect(calculateCartSubtotal(dataset2)).toBe(449);
  });
});
