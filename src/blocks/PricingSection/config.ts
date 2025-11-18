import type { Block } from 'payload'

export const PricingSection: Block = {
  slug: 'pricingSection',
  interfaceName: 'PricingSectionBlock',
  fields: [
    {
      name: 'pricingTiers',
      type: 'array',
      minRows: 1,
      maxRows: 3,
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
          defaultValue: 'Offre 1',
        },
        {
          name: 'price',
          type: 'number',
          required: true,
          defaultValue: 50,
        },
        {
          name: 'currency',
          type: 'text',
          defaultValue: '$',
        },
        {
          name: 'period',
          type: 'text',
          defaultValue: '/ mo',
        },
        {
          name: 'features',
          type: 'array',
          minRows: 1,
          maxRows: 5,
          fields: [
            {
              name: 'text',
              type: 'text',
              required: true,
              defaultValue: 'Item 1',
            },
          ],
        },
        {
          name: 'buttonText',
          type: 'text',
          defaultValue: 'Button',
        },
        {
          name: 'highlighted',
          type: 'checkbox',
          defaultValue: false,
        },
      ],
    },
  ],
  labels: {
    plural: 'Pricing Sections',
    singular: 'Pricing Section',
  },
}

