const callToAction = {
  name: 'callToAction',
  type: 'object',
  title: 'Call to Action',
  fields: [
    {
      name: 'ctaLabel',
      title: 'CTA Label',
      type: 'string',
    },
    {
      name: 'ctaLink',
      title: 'CTA Link',
      type: 'link',
    },
  ],
}

export default callToAction
