test("checks if the shopping cart has the correct total price", () => {
  const items = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 },
  ];

  expect(items).toHaveTotalPrice(60);
  expect(items).not.toHaveTotalPrice(50);
});
