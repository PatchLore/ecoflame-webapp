import { URGENCY_MULTIPLIERS, TRAVEL_FEE_THRESHOLD, TRAVEL_FEE_AMOUNT } from './supabase-client'

export interface PricingInput {
  jobType: string
  postcode: string
  urgency: 'standard' | 'same_day' | 'emergency'
  jobDetails?: string
}

export interface PricingResult {
  basePrice: number
  urgencyMultiplier: number
  urgencySurcharge: number
  travelFee: number
  totalPrice: number
  breakdown: {
    basePrice: number
    urgencySurcharge: number
    travelFee: number
    total: number
  }
}

// Mock postcode distance calculation - in real app, you'd use a geocoding service
function calculateDistance(postcode: string): number {
  // Simple mock: return random distance between 5-25 miles
  // In production, use Google Maps API or similar
  const hash = postcode.split('').reduce((a, b) => {
    a = ((a << 5) - a) + b.charCodeAt(0)
    return a & a
  }, 0)
  return Math.abs(hash) % 20 + 5
}

export function calculateQuote(input: PricingInput, basePrice: number): PricingResult {
  const urgencyMultiplier = URGENCY_MULTIPLIERS[input.urgency]
  const urgencySurcharge = basePrice * (urgencyMultiplier - 1)
  
  const distance = calculateDistance(input.postcode)
  const travelFee = distance > TRAVEL_FEE_THRESHOLD ? TRAVEL_FEE_AMOUNT : 0
  
  const totalPrice = basePrice + urgencySurcharge + travelFee

  return {
    basePrice,
    urgencyMultiplier,
    urgencySurcharge,
    travelFee,
    totalPrice,
    breakdown: {
      basePrice,
      urgencySurcharge,
      travelFee,
      total: totalPrice
    }
  }
}
