import React from 'react'
import type { ProductGridBlock } from '@/payload-types'
import { Media } from '@/components/Media'

export const ProductGridBlock: React.FC<ProductGridBlock> = ({ products }) => {
  return (
    <div className="max-w-screen-xl mx-auto px-16 py-16">
      <div className="flex gap-6 overflow-x-auto">
        {products?.map((product, index) => {
          const { image, title, description } = product
          return (
            <div
              key={index}
              className="flex-1 min-w-[280px] bg-white border border-gray-200 rounded-lg p-4 flex flex-col gap-4"
            >
              {image && typeof image !== 'string' && (
                <div className="h-[247px] w-full relative">
                  <Media resource={image} className="w-full h-full object-cover" />
                </div>
              )}
              <div className="flex flex-col gap-2">
                <p className="text-base">{description || 'Text'}</p>
                <p className="text-base font-semibold">{title}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

