import { defineField } from "sanity";

const tag = {
  title: 'Tag',
  name: 'tag',
  type: 'document',
  fields: [
    defineField({
      title: 'Name',
      name: 'name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name'
      },
      validation: Rule => Rule.required()
    }),
  ]
}

export default tag;
