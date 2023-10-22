import { describe, expect, test } from "bun:test";
import { add } from "./calc";

describe("calc", () => {
  test.each([
    {
      description: "1 + 1 = 2",
      param: {
        a: 1,
        b: 1,
      },
      expected: 2,
    },
  ])(`$description`, ({ param, expected }) => {
    const actual = add(param.a, param.b);
    expect(actual).toBe(expected);
  });
});
