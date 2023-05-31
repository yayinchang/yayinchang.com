import {DoubleChevronDownIcon} from '@sanity/icons'
export default {
  title: 'Accordion List',
  name: 'accordions',
  type: 'object',
  icon: DoubleChevronDownIcon,
  fields: [
    {
      title: 'Accordions',
      name: 'items',
      type: 'array',
      of: [{type: 'accordion'}],
    },
  ],
  preview: {
    select: {
      items: 'items',
    },
    prepare({items}) {
      return {
        title: 'Accordion List',
        subtitle: `${items.length} item(s)`,
      }
    },
  },
}
