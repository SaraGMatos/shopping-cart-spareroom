const calculateCartSubtotal = require("../main");

describe("calculateCartSubtotal", () => {
  test("function returns a number", () => {
    const dataset = [{ code: "A", quantity: 1 }];

    expect(typeof calculateCartSubtotal(dataset)).toBe("number");
  });

  test("when given an empty array, function returns zero", () => {
    const dataset = [];

    expect(calculateCartSubtotal(dataset)).toBe(0);
  });

  test("function does not mutate dataset", () => {
    const dataset = [
      { code: "A", quantity: 3 },
      { code: "B", quantity: 2 },
      { code: "C", quantity: 0 },
      { code: "D", quantity: 0 },
    ];

    const datasetCopy = [
      { code: "A", quantity: 3 },
      { code: "B", quantity: 2 },
      { code: "C", quantity: 0 },
      { code: "D", quantity: 0 },
    ];

    calculateCartSubtotal(dataset);

    expect(dataset).toEqual(datasetCopy);
  });

  describe("Product A", () => {
    test("when given an array of one Product A Object, function returns the correct total", () => {
      const dataset = [{ code: "A", quantity: 1 }];

      expect(calculateCartSubtotal(dataset)).toBe(50);
    });

    test("when given an array of two Product A Objects, function returns the correct total", () => {
      const dataset = [{ code: "A", quantity: 2 }];

      expect(calculateCartSubtotal(dataset)).toBe(100);
    });

    test("when given an array of three Product A Objects, function returns the correct total taking discount into account", () => {
      const dataset = [{ code: "A", quantity: 3 }];

      expect(calculateCartSubtotal(dataset)).toBe(140);
    });

    test("when given an array of multiple Product A Objects, function returns the correct total taking discounts into account", () => {
      const dataset1 = [{ code: "A", quantity: 5 }];

      expect(calculateCartSubtotal(dataset1)).toBe(240);

      const dataset2 = [{ code: "A", quantity: 6 }];

      expect(calculateCartSubtotal(dataset2)).toBe(280);

      const dataset3 = [{ code: "A", quantity: 14 }];

      expect(calculateCartSubtotal(dataset3)).toBe(660);
    });
  });

  describe("Product B", () => {
    test("when given an array of one Product B Object, function returns the correct total", () => {
      const dataset = [{ code: "B", quantity: 1 }];

      expect(calculateCartSubtotal(dataset)).toBe(35);
    });

    test("when given an array of two Product B Objects, function returns the correct total taken discount into account", () => {
      const dataset = [{ code: "B", quantity: 2 }];

      expect(calculateCartSubtotal(dataset)).toBe(60);
    });

    test("when given an array of multiple Product B Objects, function returns the correct total taking discounts into account", () => {
      const dataset1 = [{ code: "B", quantity: 5 }];

      expect(calculateCartSubtotal(dataset1)).toBe(155);

      const dataset2 = [{ code: "B", quantity: 6 }];

      expect(calculateCartSubtotal(dataset2)).toBe(180);

      const dataset3 = [{ code: "B", quantity: 15 }];

      expect(calculateCartSubtotal(dataset3)).toBe(455);
    });
  });

  describe("Product C", () => {
    test("when given an array of one Product C Object, function returns the correct total", () => {
      const dataset = [{ code: "C", quantity: 1 }];

      expect(calculateCartSubtotal(dataset)).toBe(25);
    });

    test("when given an array of two Product C Objects, function returns the correct total taken discount into account", () => {
      const dataset = [{ code: "C", quantity: 2 }];

      expect(calculateCartSubtotal(dataset)).toBe(50);
    });

    test("when given an array of multiple Product C Objects, function returns the correct total", () => {
      const dataset = [{ code: "C", quantity: 13 }];

      expect(calculateCartSubtotal(dataset)).toBe(325);
    });
  });

  describe("Product D", () => {
    test("when given an array of one Product D Object, function returns the correct total", () => {
      const dataset = [{ code: "D", quantity: 1 }];

      expect(calculateCartSubtotal(dataset)).toBe(12);
    });

    test("when given an array of two Product D Objects, function returns the correct total taken discount into account", () => {
      const dataset = [{ code: "D", quantity: 2 }];

      expect(calculateCartSubtotal(dataset)).toBe(24);
    });

    test("when given an array of multiple Product D Objects, function returns the correct total", () => {
      const dataset = [{ code: "D", quantity: 16 }];

      expect(calculateCartSubtotal(dataset)).toBe(192);
    });
  });

  describe("Mixed product data set", () => {
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

    test("when given an array of Product Objects where a Product offer applies, function returns the correct total", () => {
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

    test("when given an array of Product Objects where multiple Product offers apply, function returns the correct total", () => {
      const dataset = [
        { code: "A", quantity: 3 },
        { code: "B", quantity: 2 },
        { code: "C", quantity: 0 },
        { code: "D", quantity: 0 },
      ];

      expect(calculateCartSubtotal(dataset)).toBe(200);
    });

    test("when given an array of Product Objects where offers and normal prices apply, function returns the correct total", () => {
      const dataset1 = [
        { code: "A", quantity: 6 },
        { code: "B", quantity: 4 },
        { code: "C", quantity: 1 },
        { code: "D", quantity: 2 },
      ];

      expect(calculateCartSubtotal(dataset1)).toBe(449);

      const dataset2 = [
        { code: "A", quantity: 8 },
        { code: "B", quantity: 7 },
        { code: "C", quantity: 5 },
        { code: "D", quantity: 3 },
      ];

      expect(calculateCartSubtotal(dataset2)).toBe(756);
    });
  });
});
