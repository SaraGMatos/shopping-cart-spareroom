const calculateProductTotal = require("../src/utils");

describe("calculateProductTotal", () => {
  test("returns a number", () => {
    const product = { code: "A", quantity: 1 };

    expect(typeof calculateProductTotal(product, 50, 3, 140)).toBe("number");
  });

  test("when given an empty Product object, returns zero", () => {
    const product = {};

    expect(calculateProductTotal(product, 50, 1, 50)).toBe(0);
  });

  test("when passed Product A and required arguments, returns the correct amount", () => {
    const product = { code: "A", quantity: 2 };

    expect(calculateProductTotal(product, 50, 3, 140)).toBe(100);

    const product2 = { code: "A", quantity: 3 };

    expect(calculateProductTotal(product2, 50, 3, 140)).toBe(140);

    const product3 = { code: "A", quantity: 40 };

    expect(calculateProductTotal(product3, 50, 3, 140)).toBe(1870);
  });

  test("when passed Product B and required arguments, returns the correct amount", () => {
    const product = { code: "B", quantity: 1 };

    expect(calculateProductTotal(product, 35, 2, 60)).toBe(35);

    const product2 = { code: "B", quantity: 2 };

    expect(calculateProductTotal(product2, 35, 2, 60)).toBe(60);

    const product3 = { code: "B", quantity: 41 };

    expect(calculateProductTotal(product3, 35, 2, 60)).toBe(1235);
  });

  test("when passed Product C and required arguments, returns the correct amount", () => {
    const product = { code: "C", quantity: 1 };

    expect(calculateProductTotal(product, 25)).toBe(25);

    const product2 = { code: "C", quantity: 2 };

    expect(calculateProductTotal(product2, 25)).toBe(50);

    const product3 = { code: "C", quantity: 33 };

    expect(calculateProductTotal(product3, 25)).toBe(825);
  });

  test("when passed Product D and required arguments, returns the correct amount", () => {
    const product = { code: "D", quantity: 1 };

    expect(calculateProductTotal(product, 12)).toBe(12);

    const product2 = { code: "D", quantity: 2 };

    expect(calculateProductTotal(product2, 12)).toBe(24);

    const product3 = { code: "D", quantity: 24 };

    expect(calculateProductTotal(product3, 12)).toBe(288);
  });
});
