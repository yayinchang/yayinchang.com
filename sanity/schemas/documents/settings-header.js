export default {
  title: 'Header Settings',
  name: 'headerSettings',
  type: 'document',
  // __experimental_actions: ['update', 'publish'], // disable for initial publish
  fieldsets: [
    {
      title: 'Desktop',
      name: 'desktop',
      description: 'Navigation settings for desktop view',
      options: {collapsed: false},
    },
    {
      title: 'Mobile',
      name: 'mobile',
      description: 'Navigation settings for mobile view',
      options: {collapsed: false},
    },
  ],
  fields: [
    {
      title: 'Desktop Menu',
      name: 'menuDesktop',
      type: 'reference',
      to: [{type: 'menu'}],
      fieldset: 'desktop',
    },
    {
      title: 'Mobile Menu (Primary)',
      name: 'menuMobilePrimary',
      type: 'reference',
      to: [{type: 'menu'}],
      fieldset: 'mobile',
    },
    {
      title: 'Mobile Menu (Secondary)',
      name: 'menuMobileSecondary',
      type: 'reference',
      to: [{type: 'menu'}],
      fieldset: 'mobile',
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Header Settings',
      }
    },
  },
}
