import { format, parseISO, isValid } from 'date-fns'
import { ja } from 'date-fns/locale'

/**
 * Format a date to Japanese format
 * @param date - Date object or ISO string
 * @param formatStr - Format string (default: 'yyyy年MM月dd日')
 * @returns Formatted date string
 */
export function formatDate(date: Date | string, formatStr = 'yyyy年MM月dd日'): string {
  const dateObj = typeof date === 'string' ? parseISO(date) : date

  if (!isValid(dateObj)) {
    return ''
  }

  return format(dateObj, formatStr, { locale: ja })
}

/**
 * Format a date to display format with day of week
 * @param date - Date object or ISO string
 * @returns Formatted date string with day of week
 */
export function formatDateWithDay(date: Date | string): string {
  return formatDate(date, 'yyyy年MM月dd日 (E)')
}

/**
 * Format a date to short format (MM/dd)
 * @param date - Date object or ISO string
 * @returns Short formatted date string
 */
export function formatDateShort(date: Date | string): string {
  return formatDate(date, 'MM/dd')
}

/**
 * Format time to Japanese format (HH:mm)
 * @param time - Time string in HH:mm format
 * @returns Formatted time string
 */
export function formatTime(time: string): string {
  return time
}

/**
 * Get available time slots for appointments
 * @returns Array of time slot strings
 */
export function getTimeSlots(): string[] {
  const morningSlots = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30']
  const afternoonSlots = ['14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30']

  return [...morningSlots, ...afternoonSlots]
}

/**
 * Check if a date is a weekend
 * @param date - Date object or ISO string
 * @returns True if weekend, false otherwise
 */
export function isWeekend(date: Date | string): boolean {
  const dateObj = typeof date === 'string' ? parseISO(date) : date
  const day = dateObj.getDay()
  return day === 0 || day === 6 // Sunday or Saturday
}

/**
 * Check if a date is Saturday
 * @param date - Date object or ISO string
 * @returns True if Saturday, false otherwise
 */
export function isSaturday(date: Date | string): boolean {
  const dateObj = typeof date === 'string' ? parseISO(date) : date
  return dateObj.getDay() === 6
}
