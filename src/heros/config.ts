import type { Field } from 'payload'


import { linkGroup } from '@/fields/linkGroup'

export const hero: Field = {
  name: 'hero',
  type: 'group',
  fields: [
    {
      name: 'title',
      type: "text",
      required: true,
    },
    {
      name: 'subtitle',
      type: 'textarea',
      required: true
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
    },
    linkGroup({
      appearances: ['default', 'outline'],
      overrides: {
        maxRows: 2,
      } 
    }),
  ],
  label: {
    plural: 'Hero Sections',
    singular: 'Hero Section',
  },
}
