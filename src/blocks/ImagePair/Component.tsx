import React from 'react'
import type { ImagePairBlock } from '@/payload-types'
import { Media } from '@/components/Media'

export const ImagePairBlock: React.FC<ImagePairBlock> = ({ imageLeft, imageRight }) => {
  return (
    <div className="max-w-screen-xl mx-auto px-16 py-16">
      <div className="flex flex-wrap gap-8 items-center justify-center">
        {imageLeft && typeof imageLeft !== 'string' && (
          <div className="flex-1 min-w-[350px] aspect-[512/350] relative">
            <Media resource={imageLeft} className="w-full h-full object-cover" />
          </div>
        )}
        {imageRight && typeof imageRight !== 'string' && (
          <div className="flex-1 min-w-[350px] aspect-[512/350] relative">
            <Media resource={imageRight} className="w-full h-full object-cover" />
          </div>
        )}
      </div>
    </div>
  )
}

