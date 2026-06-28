/**
 * Checks whether a value is a valid date.
 *
 * @param date - A date object or date string.
 * @returns True if the date is valid.
 *
 * @example
 * isValidDate("2024-01-01")
 * // true
 */
export function isValidDate(date: string | Date): boolean {
  return !isNaN(new Date(date).getTime());
}

/**
 * Checks whether the first date is before the second.
 *
 * @param date1 - The first date.
 * @param date2 - The second date.
 * @returns True if date1 is before date2.
 *
 * @example
 * isDateBefore("2024-01-01", "2024-01-02")
 * // true
 */
export function isDateBefore(date1: string | Date, date2: string | Date): boolean {
  return new Date(date1).getTime() < new Date(date2).getTime();
}

/**
 * Checks whether the first date is after the second.
 *
 * @param date1 - The first date.
 * @param date2 - The second date.
 * @returns True if date1 is after date2.
 *
 * @example
 * isDateAfter("2024-01-02", "2024-01-01")
 * // true
 */
export function isDateAfter(date1: string | Date, date2: string | Date): boolean {
  return new Date(date1).getTime() > new Date(date2).getTime();
}
