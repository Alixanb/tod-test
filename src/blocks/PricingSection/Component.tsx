import type { PricingSectionBlock } from '@/payload-types'
import React from 'react'
import { PricingSectionBlockClient } from './Component.client'

export const PricingSectionBlock: React.FC<PricingSectionBlock> = ({ pricingTiers }) => {
  return (
    <PricingSectionBlockClient pricingTiers={pricingTiers} />
  )
}

