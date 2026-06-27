import { describe, it, expect } from "vitest";
import { isValidDate, isDateBefore, isDateAfter } from "./date-validation.date-utils.js";

describe("isValidDate", () => {
  it("should return true for a valid date string", () => {
    expect(isValidDate("2026-06-27")).toBe(true);
  });

  it("should return true for a valid Date object", () => {
    expect(isValidDate(new Date(2026, 5, 27))).toBe(true);
  });

  it("should return false for an invalid date string", () => {
    expect(isValidDate("not-a-date")).toBe(false);
  });

  it("should return false for an invalid Date object", () => {
    expect(isValidDate(new Date("invalid"))).toBe(false);
  });
});

describe("isDateBefore", () => {
  it("should return true when date1 is before date2", () => {
    expect(isDateBefore("2026-06-26", "2026-06-27")).toBe(true);
  });

  it("should return false when date1 is after date2", () => {
    expect(isDateBefore("2026-06-28", "2026-06-27")).toBe(false);
  });

  it("should return false when date1 equals date2", () => {
    expect(isDateBefore("2026-06-27", "2026-06-27")).toBe(false);
  });
});

describe("isDateAfter", () => {
  it("should return true when date1 is after date2", () => {
    expect(isDateAfter("2026-06-28", "2026-06-27")).toBe(true);
  });

  it("should return false when date1 is before date2", () => {
    expect(isDateAfter("2026-06-26", "2026-06-27")).toBe(false);
  });

  it("should return false when date1 equals date2", () => {
    expect(isDateAfter("2026-06-27", "2026-06-27")).toBe(false);
  });
});
