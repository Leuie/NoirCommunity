import { buildConfig } from 'payload/config'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { slateEditor } from '@payloadcms/richtext-slate'
import path from 'path'

export default buildConfig({
  admin: {
    user: 'users',
    bundler: webpackBundler(),
  },
  editor: slateEditor({}),
  collections: [
    // Users collection for admin authentication
    {
      slug: 'users',
      auth: true,
      access: {
        delete: () => false,
        update: () => false,
      },
      fields: [],
    },
    // Posts collection for blog posts and articles
    {
      slug: 'posts',
      admin: {
        defaultColumns: ['title', 'author', 'category', 'status'],
      },
      access: {
        read: () => true,
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'author',
          type: 'text',
          required: true,
        },
        {
          name: 'slug',
          type: 'text',
          required: true,
          unique: true,
        },
        {
          name: 'category',
          type: 'select',
          required: true,
          options: [
            {
              label: 'MMO',
              value: 'mmo',
            },
            {
              label: 'ARPG',
              value: 'arpg',
            },
            {
              label: 'MOBA',
              value: 'moba',
            },
            {
              label: 'FPS',
              value: 'fps',
            },
            {
              label: 'RPG',
              value: 'rpg',
            },
            {
              label: 'Action',
              value: 'action',
            },
            {
              label: 'Sports',
              value: 'sports',
            },
            {
              label: 'Indie',
              value: 'indie',
            },
            {
              label: 'TCG',
              value: 'tcg',
            },
            {
              label: 'Industry',
              value: 'industry',
            },
            {
              label: 'Esports',
              value: 'esports',
            },
          ],
        },
        {
          name: 'excerpt',
          type: 'textarea',
          required: true,
        },
        {
          name: 'content',
          type: 'richText',
          required: true,
        },
        {
          name: 'featuredImage',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'tags',
          type: 'array',
          fields: [
            {
              name: 'tag',
              type: 'text',
            },
          ],
        },
        {
          name: 'readTime',
          type: 'text',
          defaultValue: '5 min read',
        },
        {
          name: 'source',
          type: 'text',
        },
        {
          name: 'status',
          type: 'select',
          options: [
            {
              label: 'Draft',
              value: 'draft',
            },
            {
              label: 'Published',
              value: 'published',
            },
          ],
          defaultValue: 'draft',
          admin: {
            position: 'sidebar',
          },
        },
      ],
    },
    // Community Posts collection
    {
      slug: 'community-posts',
      admin: {
        defaultColumns: ['content', 'author', 'createdAt'],
      },
      access: {
        read: () => true,
      },
      fields: [
        {
          name: 'content',
          type: 'textarea',
          required: true,
        },
        {
          name: 'author',
          type: 'group',
          fields: [
            {
              name: 'name',
              type: 'text',
              required: true,
            },
            {
              name: 'avatar',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'badge',
              type: 'select',
              options: [
                { label: 'Veteran', value: 'veteran' },
                { label: 'Streamer', value: 'streamer' },
                { label: 'Collector', value: 'collector' },
                { label: 'Pro Player', value: 'pro' },
                { label: 'Content Creator', value: 'creator' },
                { label: 'Moderator', value: 'moderator' },
                { label: 'VIP', value: 'vip' },
              ],
              defaultValue: 'veteran',
            },
          ],
        },
        {
          name: 'likes',
          type: 'number',
          defaultValue: 0,
        },
        {
          name: 'comments',
          type: 'number',
          defaultValue: 0,
        },
        {
          name: 'tags',
          type: 'array',
          fields: [
            {
              name: 'tag',
              type: 'text',
            },
          ],
        },
      ],
    },
    // Team Members collection
    {
      slug: 'team-members',
      admin: {
        defaultColumns: ['name', 'role', 'order'],
      },
      access: {
        read: () => true,
      },
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'role',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'order',
          type: 'number',
          required: true,
          defaultValue: 1,
        },
      ],
    },
    // Media collection for file uploads
    {
      slug: 'media',
      upload: {
        staticURL: '/media',
        staticDir: 'media',
        imageSizes: [
          {
            name: 'thumbnail',
            width: 400,
            height: 300,
            position: 'centre',
          },
          {
            name: 'card',
            width: 768,
            height: 1024,
            position: 'centre',
          },
          {
            name: 'tablet',
            width: 1024,
            height: undefined,
            position: 'centre',
          },
        ],
        adminThumbnail: 'thumbnail',
        mimeTypes: ['image/*'],
      },
      fields: [
        {
          name: 'alt',
          type: 'text',
        },
      ],
    },
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || 'mongodb://localhost/noir-community',
  }),
})