const Convert = require("./konversi-suhu");

test("test cel to fah", () => {
  const transform = new Convert();
  expect(transform.fromCelcius('fah',1)).toBe(33.8);
});
