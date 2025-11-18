import React from 'react'
import type { HeroSectionBlock } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'

export const HeroSectionBlock: React.FC<HeroSectionBlock> = ({
  title,
  subtitle,
  backgroundImage,
  links,
}) => {
  return (
    <div className="relative w-full py-40 px-16 flex flex-col items-center justify-center">
      {backgroundImage && typeof backgroundImage !== 'string' && (
        <>
          <div className="absolute inset-0 pointer-events-none">
            <Media resource={backgroundImage} className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-white/80" />
        </>
      )}
      <div className="relative z-10 max-w-4xl text-center flex flex-col gap-8 items-center">
        <div className="flex flex-col gap-2">
          <h1 className="text-7xl font-bold leading-tight tracking-tight">{title}</h1>
          <p className="text-3xl leading-tight">{subtitle}</p>
        </div>
        {links && links.length > 0 && (
          <div className="flex gap-4 items-center justify-center">
            {links.map(({ link }, i) => (
              <CMSLink key={i} {...link} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

