import type { ProductGridBlock } from '@/payload-types'
import React from 'react'
import { ProductGridBlockClient } from './Component.client'

export const ProductGridBlock: React.FC<ProductGridBlock> = ({ products }) => {
  return (
    <div className="max-w-screen-xl mx-auto px-16 py-16">
        <ProductGridBlockClient products={products} />
    </div>
  )
}

