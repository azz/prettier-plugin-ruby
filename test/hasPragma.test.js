#!/usr/bin/env node

const { hasPragma } = require("../src/ruby").parsers.ruby;

describe("hasPragma", () => {
  test("checks for @prettier comments", () => {
    expect(hasPragma("# @prettier")).toBe(true);
  });

  test("checks for @format comments", () => {
    expect(hasPragma("# @format")).toBe(true);
  });

  test("does not check for anything else", () => {
    expect(hasPragma("# @foobar")).toBe(false);
  });
});
