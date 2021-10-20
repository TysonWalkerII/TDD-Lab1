const { translate } = require("../src/piglatin");

describe("translate", () => {
  test("translates to piglatin", () => {
    const result = translate("gg");
    expect(result).toBe("");
  });
});
