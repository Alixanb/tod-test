import { Button } from '@/components/ui/button'
import type { FeaturesGridBlock as FeaturesGridBlockProps } from '@/payload-types'
import React from 'react'

const icons = {
  maximize: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="4" y="4" width="24" height="24" rx="2" />
    </svg>
  ),
  lock: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="7" y="15" width="18" height="11" rx="2" />
      <path d="M11 15V11a5 5 0 0 1 10 0v4" />
    </svg>
  ),
  login: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 4h4a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2h-4M16 22l6-6-6-6M22 16H6" />
    </svg>
  ),
  zap: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17 3l-10 15h10l-1 11 10-15h-10l1-11z" />
    </svg>
  ),
  video: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M26 10l-6 4v-4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4l6 4v-12z" />
    </svg>
  ),
  thermometer: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M14 6v12a4 4 0 1 0 4 0V6a2 2 0 1 0-4 0z" />
    </svg>
  ),
}

export const FeaturesGridBlock: React.FC<FeaturesGridBlockProps> = ({ heading, subheading, features }) => {
  return (
    <div className="max-w-screen-xl mx-auto px-16 py-16">
      <div className="flex flex-col gap-12">
        {(heading || subheading) && (
          <div className="flex flex-col gap-2">
            {heading && <h2 className="text-2xl font-semibold leading-tight tracking-tight">{heading}</h2>}
            {subheading && <p className="text-xl text-gray-600 leading-tight">{subheading}</p>}
          </div>
        )}
        <div className="flex flex-wrap gap-16">
          {features?.map((feature, index) => {
            const { icon, title, description, buttonText } = feature
            return (
              <div key={index} className="flex-1 min-w-[240px] flex flex-wrap gap-6">
                <div className="text-primary w-8 h-8">{icons[icon as keyof typeof icons]}</div>
                <div className="flex-1 min-w-[160px] flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-2xl font-semibold leading-tight tracking-tight">{title}</h3>
                    <p className="text-base text-gray-600 leading-relaxed">{description}</p>
                  </div>
                  {buttonText && (
                    <Button variant={"outline"} className='w-fit'>
                      {buttonText}
                    </Button>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

