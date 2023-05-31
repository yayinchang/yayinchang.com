import React from 'react'
import {getSwatch} from '../../lib/helpers'
import {ControlsIcon} from '@sanity/icons'

export default {
  title: 'Color',
  name: 'solidColor',
  type: 'document',
  icon: ControlsIcon,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'For internal purposes, to help identify your colors',
    },
    {
      title: 'Color',
      name: 'color',
      type: 'color',
      options: {
        disableAlpha: true,
      },
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      color: 'color',
    },
    prepare({title, color}) {
      return {
        title: title,
        subtitle: color?.hex ? color.hex.toUpperCase() : '',
        media: color?.hex ? getSwatch(color.hex.toUpperCase()) : null,
      }
    },
  },
}
