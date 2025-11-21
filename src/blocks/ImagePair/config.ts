import type { Block } from 'payload'

export const ImagePair: Block = {
  slug: 'imagePair',
  interfaceName: 'ImagePairBlock',
  fields: [
    {
      name: 'imageLeft',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'imageRight',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    
  ],
  labels: {
    plural: 'Image Pairs',
    singular: 'Image Pair',
  },
}

