/**
 * Checks if a given date is today.
 * @param date The date to check.
 * @returns True if the date is today, false otherwise.
 */
export const isToday = (date: Date): boolean => {
  const today = new Date();
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
};

/**
 * Checks if a given date is within the current week (from Monday to Sunday).
 * @param date The date to check.
 * @returns True if the date is within the current week, false otherwise.
 */
export const isThisWeek = (date: Date): boolean => {
  const today = new Date();
  const firstDayOfWeek = new Date(
    today.setDate(today.getDate() - today.getDay() + (today.getDay() === 0 ? -6 : 1)),
  ); // Monday
  firstDayOfWeek.setHours(0, 0, 0, 0);

  const lastDayOfWeek = new Date(firstDayOfWeek);
  lastDayOfWeek.setDate(lastDayOfWeek.getDate() + 6); // Sunday
  lastDayOfWeek.setHours(23, 59, 59, 999);

  return date >= firstDayOfWeek && date <= lastDayOfWeek;
};

/**
 * Checks if a given date is within a custom date range.
 * @param date The date to check.
 * @param startDate The start of the range.
 * @param endDate The end of the range.
 * @returns True if the date is within the range, false otherwise.
 */
export const isInDateRange = (date: Date, startDate: Date, endDate: Date): boolean => {
  const checkDate = new Date(date);
  checkDate.setHours(0, 0, 0, 0);

  const start = new Date(startDate);
  start.setHours(0, 0, 0, 0);

  const end = new Date(endDate);
  end.setHours(23, 59, 59, 999);

  return checkDate >= start && checkDate <= end;
};
