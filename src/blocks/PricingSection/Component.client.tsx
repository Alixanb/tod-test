"use client"

import { Button } from '@/components/ui/button';
import type { PricingSectionBlock } from '@/payload-types';
import React from 'react';

interface IPricingSectionBlockClient {
  pricingTiers: PricingSectionBlock['pricingTiers'];

}

type TPeriod = "month" | "year";

const Period: Record<TPeriod, string> = {
  month: "Monthly",
  year: "Yearly"
} as const;

export const PricingSectionBlockClient: React.FC<IPricingSectionBlockClient> = ({ pricingTiers }) => {
  const [period, setPeriod] = React.useState<TPeriod>("month");

  return (
    <div className="max-w-screen-xl mx-auto px-16 py-16">
      <div className="flex flex-col gap-12 items-center">
        <div className="flex gap-2">
          {Object.entries(Period).map(([key, label]) => (
              <Button
                key={key}
                variant={period === key ? 'default' : 'secondary'}
                onClick={() => setPeriod(key as TPeriod)}
              >
                {label}
              </Button>
            ))}
        </div>
        <div className="flex flex-wrap gap-16 w-full">
          {pricingTiers?.map((tier, index) => {
            const { name, priceMonth, priceYear, currency, features, buttonText, highlighted } = tier
            const price = period === 'month' ? priceMonth : priceYear
            const bgColor = highlighted ? 'bg-primary' : 'bg-white'
            const textColor = highlighted ? 'text-white' : 'text-black'
            const itemColor = highlighted ? 'text-white' : 'text-gray-600'
            const buttonBg = highlighted ? 'bg-gray-200' : 'bg-primary'
            const buttonTextColor = highlighted ? 'text-black' : 'text-white'

            return (
              <div
                key={index}
                className={`flex-1 min-w-[300px] ${bgColor} border border-gray-200 rounded-lg p-8 flex flex-col gap-6`}
              >
                <div className="flex flex-col gap-4 items-center">
                  <h3 className={`text-2xl font-semibold text-center ${textColor}`}>{name}</h3>
                  <div className={`flex items-start justify-center ${textColor}`}>
                    <span className="text-2xl tracking-tight">{currency}</span>
                    <span className="text-5xl font-bold tracking-tight">{price}</span>
                    <p className={`text-sm mb-1 tracking-wide self-end ${itemColor}`}>{period === "month" ? "/ mo" : "/ yr"}</p>
                  </div>
                  <div className="flex flex-col gap-3 w-full">
                    {features?.map((feature, featureIndex) => (
                      <div key={featureIndex} className={`text-base ${itemColor}`}>
                        <ul>
                          <li className="list-disc ms-6">{feature.text}</li>
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
                <button className={`${buttonBg} ${buttonTextColor} px-3 py-2 rounded-lg text-base w-full`}>
                  {buttonText || 'Button'}
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

