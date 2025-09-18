import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('es-UY', {
    style: 'currency',
    currency: 'UYU',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

export function formatPoints(points: number): string {
  return new Intl.NumberFormat('es-UY').format(points)
}

export function calculateRentReduction(
  points: number,
  pointsPerPeso: number,
  baseRent: number,
  maxReductionPercentage: number
): { reduction: number; finalRent: number } {
  const reduction = points / pointsPerPeso
  const maxReduction = baseRent * (maxReductionPercentage / 100)
  const actualReduction = Math.min(reduction, maxReduction)

  return {
    reduction: actualReduction,
    finalRent: baseRent - actualReduction
  }
}