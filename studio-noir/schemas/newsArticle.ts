export default {
  name: 'newsArticle',
  title: 'News Article',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      validation: (Rule: any) => Rule.required().max(200)
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Industry', value: 'industry'},
          {title: 'Indie', value: 'indie'},
          {title: 'Esports', value: 'esports'},
          {title: 'MMO', value: 'mmo'},
          {title: 'ARPG', value: 'arpg'},
          {title: 'MOBA', value: 'moba'},
          {title: 'FPS', value: 'fps'},
          {title: 'RPG', value: 'rpg'},
          {title: 'Action', value: 'action'},
          {title: 'Sports', value: 'sports'},
          {title: 'TCG', value: 'tcg'},
        ]
      }
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'}
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'readTime',
      title: 'Read Time',
      type: 'string',
      placeholder: 'e.g., 5 min read'
    },
    {
      name: 'source',
      title: 'Source',
      type: 'string',
      placeholder: 'e.g., The Verge Gaming'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent'
    }
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection: any) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}