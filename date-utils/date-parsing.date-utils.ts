import { DateAsStringOptions } from "./date-types.date-utils.js";

const TOKEN_RE = /(YYYY|yyyy|YY|yy|MM|DD|dd|HH|hh|mm|SS|ss|M|D|d|H|h|m|S|s)/g;

export function getDateAsString(date: string | Date, options: DateAsStringOptions): string {
  const d = date instanceof Date ? date : new Date(date);
  if (isNaN(d.getTime())) throw new Error("Invalid date");

  return options.format.replace(TOKEN_RE, (match) => {
    switch (match) {
      case "YYYY":
      case "yyyy":
        return String(d.getFullYear()).padStart(4, "0");
      case "YY":
      case "yy":
        return String(d.getFullYear()).slice(-2);
      case "MM":
        return String(d.getMonth() + 1).padStart(2, "0");
      case "M":
        return String(d.getMonth() + 1);
      case "DD":
      case "dd":
        return String(d.getDate()).padStart(2, "0");
      case "D":
      case "d":
        return String(d.getDate());
      case "HH":
      case "hh":
        return String(d.getHours()).padStart(2, "0");
      case "H":
      case "h":
        return String(d.getHours());
      case "mm":
        return String(d.getMinutes()).padStart(2, "0");
      case "m":
        return String(d.getMinutes());
      case "SS":
      case "ss":
        return String(d.getSeconds()).padStart(2, "0");
      case "S":
      case "s":
        return String(d.getSeconds());
      default:
        return match;
    }
  });
}

export function getDateFromString(date: string, options?: DateAsStringOptions): Date {
  if (!options) {
    const d = new Date(date);
    if (isNaN(d.getTime())) throw new Error("Invalid date");
    return d;
  }

  const tokens = options.format.match(TOKEN_RE);
  if (!tokens) throw new Error("Invalid date");

  const re = new RegExp("^" + options.format.replace(TOKEN_RE, () => "(\\d+)") + "$");
  const match = date.match(re);
  if (!match) throw new Error("Invalid date");

  const now = new Date();
  const parts = tokens.reduce(
    (acc, token, i) => {
      const value = parseInt(match[i + 1], 10);
      switch (token) {
        case "YYYY":
        case "yyyy":
          return { ...acc, year: value };
        case "YY":
        case "yy":
          return { ...acc, year: value + 2000 };
        case "MM":
        case "M":
          return { ...acc, month: value };
        case "DD":
        case "dd":
        case "D":
        case "d":
          return { ...acc, day: value };
        case "HH":
        case "hh":
        case "H":
        case "h":
          return { ...acc, hours: value };
        case "mm":
        case "m":
          return { ...acc, minutes: value };
        case "SS":
        case "ss":
        case "S":
        case "s":
          return { ...acc, seconds: value };
        default:
          return acc;
      }
    },
    { year: now.getFullYear(), month: 1, day: 1, hours: 0, minutes: 0, seconds: 0 },
  );

  return new Date(parts.year, parts.month - 1, parts.day, parts.hours, parts.minutes, parts.seconds);
}
