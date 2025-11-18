import type { Block } from 'payload'

export const FeaturesGrid: Block = {
  slug: 'featuresGrid',
  interfaceName: 'FeaturesGridBlock',
  fields: [
    {
      name: 'heading',
      type: 'text',
      defaultValue: 'Heading',
    },
    {
      name: 'subheading',
      type: 'textarea',
      defaultValue: 'Subheading',
    },
    {
      name: 'features',
      type: 'array',
      minRows: 1,
      maxRows: 6,
      fields: [
        {
          name: 'icon',
          type: 'select',
          options: [
            { label: 'Maximize', value: 'maximize' },
            { label: 'Lock', value: 'lock' },
            { label: 'Log In', value: 'login' },
            { label: 'Zap', value: 'zap' },
            { label: 'Video', value: 'video' },
            { label: 'Thermometer', value: 'thermometer' },
          ],
          defaultValue: 'maximize',
        },
        {
          name: 'title',
          type: 'text',
          required: true,
          defaultValue: 'Title',
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
          defaultValue: 'Body text for whatever you\'d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.',
        },
        {
          name: 'buttonText',
          type: 'text',
        },
      ],
    },
  ],
  labels: {
    plural: 'Features Grids',
    singular: 'Features Grid',
  },
}

