import HR from '../../components/hr'
export default {
  title: 'Horizontal Rule',
  name: 'horizontalRule',
  type: 'object',
  fields: [
    {
      type: 'string',
      name: 'horizontalRule',
      components: {
        input: HR,
      },
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Horizontal Rule',
      }
    },
  },
}
