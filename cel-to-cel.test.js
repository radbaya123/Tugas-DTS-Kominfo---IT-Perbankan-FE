const Convert = require("./konversi-suhu");

test("test cel to cel", () => {
  const transform = new Convert();
  expect(transform.fromCelcius('cel',1)).toBe(1);
});