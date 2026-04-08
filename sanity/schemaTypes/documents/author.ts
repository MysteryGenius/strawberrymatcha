import { defineField } from "sanity";

const author = {
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'text',
      description: 'Write a short bio for the author (150-200 characters recommended)',
      validation: Rule => Rule.max(300).warning('Bios are usually most effective when kept under 300 characters.')
    })
  ]
}

export default author;
