import type { Page } from '@/payload-types'

export const desktopHome = ({
  heroImage,
  projectImage1,
  projectImage2,
  productImages,
}: {
  heroImage: string
  projectImage1: string
  projectImage2: string
  productImages: string[]
}): Omit<Page, 'id' | 'createdAt' | 'updatedAt'> => {
  return {
    title: 'Home',
    slug: 'home',
    _status: 'published',
    hero: {
      title: "test",
      subtitle: "test",
      backgroundImage: heroImage,
      links: [
        {
          link: {
            type: 'custom',
            url: '#projects',
            label: 'Voir nos projets',
            appearance: 'outline',
          },
        },
        {
          link: {
            type: 'custom',
            url: '#contact',
            label: 'Prendre contact',
            appearance: 'default',
          },
        },
      ],
    },
    layout: [
      {
        blockName: 'Image Pair',
        blockType: 'imagePair',
        imageLeft: projectImage1,
        imageRight: projectImage2,
      },
      {
        blockName: 'Product Grid',
        blockType: 'productGrid',
        products: [
          {
            image: productImages[0],
            title: 'String value',
            description: 'Text',
          },
          {
            image: productImages[1],
            title: 'String value',
            description: 'Text',
          },
          {
            image: productImages[2],
            title: 'String value',
            description: 'Text',
          },
          {
            image: productImages[3],
            title: 'String value',
            description: 'Text',
          },
        ],
      },
      {
        blockName: 'Features Grid',
        blockType: 'featuresGrid',
        heading: 'Heading',
        subheading: 'Subheading',
        features: [
          {
            icon: 'maximize',
            title: 'Title',
            description:
              "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.",
          },
          {
            icon: 'lock',
            title: 'Title',
            description:
              "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.",
          },
          {
            icon: 'login',
            title: 'Title',
            description:
              "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.",
          },
          {
            icon: 'zap',
            title: 'Title',
            description:
              "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.",
            buttonText: 'Button',
          },
          {
            icon: 'video',
            title: 'Title',
            description:
              "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.",
            buttonText: 'Button',
          },
          {
            icon: 'thermometer',
            title: 'Title',
            description:
              "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.",
            buttonText: 'Button',
          },
        ],
      },
      {
        blockName: 'Pricing Section',
        blockType: 'pricingSection',
        pricingTiers: [
          {
            name: 'Offre 1',
            price: 50,
            currency: '$',
            period: '/ mo',
            features: [
              { text: 'Item 1' },
              { text: 'Item 2' },
              { text: 'Item 3' },
              { text: 'Item 4' },
              { text: 'Item 5' },
            ],
            buttonText: 'Button',
            highlighted: false,
          },
          {
            name: 'Offre 2',
            price: 75,
            currency: '$',
            period: '/ mo',
            features: [
              { text: 'Item 1' },
              { text: 'Item 2' },
              { text: 'Item 3' },
              { text: 'Item 4' },
              { text: 'Item 5' },
            ],
            buttonText: 'Button',
            highlighted: true,
          },
          {
            name: 'Offre 3',
            price: 100,
            currency: '$',
            period: '/ mo',
            features: [
              { text: 'Item 1' },
              { text: 'Item 2' },
              { text: 'Item 3' },
              { text: 'Item 4' },
              { text: 'Item 5' },
            ],
            buttonText: 'Button',
            highlighted: false,
          },
        ],
      },
    ],
    meta: {
      title: 'Agence digitale - Strasbourg, Orléans, Paris',
      description:
        'Agence digitale à Strasbourg, Orléans et Paris, centrée sur la stratégie, le design et le développement de marques ambitieuses sur le web.',
    },
  }
}

