import { defineField } from "sanity";

const article = {
  title: 'Article',
  name: 'article',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'author' }]
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'tag' } }]
    }),
    defineField({
      name: 'datePublished',
      title: 'Date Published',
      type: 'date',
      description: 'Date when the article was published',
      validation: Rule => Rule.required(),
      options: {
        dateFormat: 'DD MMMM YYYY'
      }
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        {
          type: 'block'
        },
        {
          type: 'image',
          fields: [
            {
              type: 'text',
              name: 'alt',
              title: 'Alternative text',
              description: `Describe the image for screen readers and SEO.`
            },
            {
              name: 'width',
              type: 'string',
              title: 'Width',
              options: {
                list: [
                  { title: 'Full width', value: 'full' },
                  { title: 'Medium width', value: 'medium' },
                  { title: 'Small width', value: 'small' }
                ]
              }
            }
          ]
        },
        {
          type: 'youtube'
        }
      ]
    }),
  ],
}

export default article;
