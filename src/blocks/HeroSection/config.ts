import type { Block } from 'payload'
import { linkGroup } from '../../fields/linkGroup'

export const HeroSection: Block = {
  slug: 'heroSection',
  interfaceName: 'HeroSectionBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Des humains au service de vos projets créatifs et digitaux.',
    },
    {
      name: 'subtitle',
      type: 'textarea',
      required: true,
      defaultValue: 'Agence digitale à Strasbourg, Orléans et Paris, centrée sur la stratégie, le design et le développement de marques ambitieuses sur le web.',
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
      },
    }),
  ],
  labels: {
    plural: 'Hero Sections',
    singular: 'Hero Section',
  },
}

