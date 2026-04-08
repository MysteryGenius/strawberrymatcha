import { defineType, defineField } from 'sanity'
import { PlayIcon } from '@sanity/icons'
import { YouTubePreview } from '@/components/sanity/YoutubePreview'

export const youTubeType = defineType({
  name: 'youtube',
  type: 'object',
  title: 'YouTube',
  icon: PlayIcon,
  fields: [
    defineField({
      name: 'url',
      type: 'url',
      title: 'YouTube video URL',
    }),
  ],
  preview: {
    select: { title: 'url' },
  },
  components: {
    preview: YouTubePreview,
  },

})
