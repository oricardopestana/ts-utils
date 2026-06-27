export function isValidDate(date: string | Date): boolean {
  return !isNaN(new Date(date).getTime());
}

export function isDateBefore(date1: string | Date, date2: string | Date): boolean {
  return new Date(date1).getTime() < new Date(date2).getTime();
}

export function isDateAfter(date1: string | Date, date2: string | Date): boolean {
  return new Date(date1).getTime() > new Date(date2).getTime();
}
