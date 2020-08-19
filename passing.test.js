const { hello } = require("./index");

test("Should say hello to me", () => {
  expect(hello("Luke")).toEqual("Hello, Luke");
});

test("Should say hello to someone else", () => {
  expect(hello("Someone Else")).toEqual("Hello, Someone Else");
});
