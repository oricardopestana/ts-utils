import { describe, it, expect } from "vitest";
import { getDateAsString, getDateFromString } from "./date-parsing.date-utils.js";

describe("getDateAsString", () => {
  const date = new Date(2026, 5, 27, 3, 5, 9);

  it('should format "YYYY-MM-DD"', () => {
    expect(getDateAsString(date, { format: "YYYY-MM-DD" })).toBe("2026-06-27");
  });

  it('should format "yy/MM/dd"', () => {
    expect(getDateAsString(date, { format: "yy/MM/dd" })).toBe("26/06/27");
  });

  it('should format "HH:mm:ss"', () => {
    expect(getDateAsString(date, { format: "HH:mm:ss" })).toBe("03:05:09");
  });

  it('should format "YYYY-MM-DD HH:mm:ss"', () => {
    expect(getDateAsString(date, { format: "YYYY-MM-DD HH:mm:ss" })).toBe("2026-06-27 03:05:09");
  });

  it('should format "M/D/YY" with unpadded single tokens', () => {
    const d = new Date(2026, 0, 5, 3, 5, 9);
    expect(getDateAsString(d, { format: "M/D/YY" })).toBe("1/5/26");
  });

  it('should format "MM/DD/YYYY" with padded single-digit month and day', () => {
    const d = new Date(2026, 0, 5, 3, 5, 9);
    expect(getDateAsString(d, { format: "MM/DD/YYYY" })).toBe("01/05/2026");
  });

  it("should throw for invalid date string", () => {
    expect(() => getDateAsString("not-a-date", { format: "YYYY-MM-DD" })).toThrow("Invalid date");
  });

  it("should throw for invalid Date object", () => {
    expect(() => getDateAsString(new Date("invalid"), { format: "YYYY-MM-DD" })).toThrow("Invalid date");
  });

  it("should handle a Date object input", () => {
    expect(getDateAsString(new Date(2026, 5, 27), { format: "YYYY-MM-DD" })).toBe("2026-06-27");
  });

  it('should format "h:m:s" with unpadded hours, minutes, seconds', () => {
    const d = new Date(2026, 5, 27, 3, 5, 9);
    expect(getDateAsString(d, { format: "h:m:s" })).toBe("3:5:9");
  });
});

describe("getDateFromString", () => {
  it('should parse "YYYY-MM-DD"', () => {
    const d = getDateFromString("2026-06-27", { format: "YYYY-MM-DD" });
    expect(d.getFullYear()).toBe(2026);
    expect(d.getMonth()).toBe(5);
    expect(d.getDate()).toBe(27);
  });

  it('should parse "DD/MM/YYYY"', () => {
    const d = getDateFromString("27/06/2026", { format: "DD/MM/YYYY" });
    expect(d.getFullYear()).toBe(2026);
    expect(d.getMonth()).toBe(5);
    expect(d.getDate()).toBe(27);
  });

  it('should parse "YYYY-MM-DD HH:mm:ss"', () => {
    const d = getDateFromString("2026-06-27 03:05:09", { format: "YYYY-MM-DD HH:mm:ss" });
    expect(d.getFullYear()).toBe(2026);
    expect(d.getMonth()).toBe(5);
    expect(d.getDate()).toBe(27);
    expect(d.getHours()).toBe(3);
    expect(d.getMinutes()).toBe(5);
    expect(d.getSeconds()).toBe(9);
  });

  it('should parse "M/D/YY" with unpadded single tokens', () => {
    const d = getDateFromString("1/5/26", { format: "M/D/YY" });
    expect(d.getFullYear()).toBe(2026);
    expect(d.getMonth()).toBe(0);
    expect(d.getDate()).toBe(5);
  });

  it('should parse "yy/MM/dd"', () => {
    const d = getDateFromString("26/06/27", { format: "yy/MM/dd" });
    expect(d.getFullYear()).toBe(2026);
    expect(d.getMonth()).toBe(5);
    expect(d.getDate()).toBe(27);
  });

  it("should throw for invalid date string with format", () => {
    expect(() => getDateFromString("not-a-date", { format: "YYYY-MM-DD" })).toThrow("Invalid date");
  });

  it("should throw when string doesn't match format", () => {
    expect(() => getDateFromString("2026/06/27", { format: "YYYY-MM-DD" })).toThrow("Invalid date");
  });

  it("should parse ISO string without options (backward compatible)", () => {
    const d = getDateFromString("2026-06-27T03:05:09.000Z");
    expect(d.getFullYear()).toBe(2026);
    expect(d.getMonth()).toBe(5);
    expect(d.getDate()).toBe(27);
  });

  it("should throw for invalid ISO string without options", () => {
    expect(() => getDateFromString("not-a-date")).toThrow("Invalid date");
  });

  it('should parse "h:m:s" with unpadded hours, minutes, seconds', () => {
    const d = getDateFromString("3:5:9", { format: "h:m:s" });
    expect(d.getHours()).toBe(3);
    expect(d.getMinutes()).toBe(5);
    expect(d.getSeconds()).toBe(9);
  });
});
