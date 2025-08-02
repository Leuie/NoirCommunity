export default {
  name: 'communityPost',
  title: 'Community Post',
  type: 'document',
  fields: [
    {
      name: 'content',
      title: 'Content',
      type: 'text',
      rows: 4,
      validation: (Rule: any) => Rule.required().max(500)
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'communityMember'},
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'likes',
      title: 'Likes',
      type: 'number',
      initialValue: 0
    },
    {
      name: 'comments',
      title: 'Comments',
      type: 'number',
      initialValue: 0
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'featured',
      title: 'Featured Post',
      type: 'boolean',
      initialValue: false
    }
  ],
  preview: {
    select: {
      title: 'content',
      author: 'author.name',
      media: 'author.avatar',
    },
    prepare(selection: any) {
      const {author, title} = selection
      return Object.assign({}, selection, {
        title: title.substring(0, 50) + '...',
        subtitle: author && `by ${author}`,
      })
    },
  },
}