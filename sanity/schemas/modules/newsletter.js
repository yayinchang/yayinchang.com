import {EnvelopeIcon} from '@sanity/icons'
export default {
  title: 'Newsletter Form',
  name: 'newsletter',
  type: 'object',
  icon: EnvelopeIcon,
  fields: [
    // {
    //   name: 'klaviyoNote',
    //   type: 'note',
    //   options: {
    //     headline: 'Gotcha',
    //     message:
    //       'You must have a Klaviyo Private API Key added to your Vercel Environment Variables for this form to work properly.',
    //     tone: 'caution',
    //   },
    // },
    {
      title: 'Klaviyo List ID',
      name: 'klaviyoListID',
      type: 'string',
      description: 'Your Klaviyo List to subscribe emails to',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Submit Text',
      name: 'submit',
      type: 'string',
    },
    {
      title: 'Success Message',
      name: 'successMsg',
      type: 'string',
    },
    {
      title: 'Error Message',
      name: 'errorMsg',
      type: 'string',
    },
    {
      title: 'Agreement Statement',
      name: 'terms',
      type: 'string',
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Newsletter Form',
      }
    },
  },
}
