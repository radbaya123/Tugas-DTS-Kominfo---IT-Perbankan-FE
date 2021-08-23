const Convert = require("./konversi-suhu");

test("test cel to rea", () => {
  const transform = new Convert();
  expect(transform.fromCelcius('rea',1)).toBe(0.8);
});