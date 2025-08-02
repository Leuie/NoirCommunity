import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './sanity/schemas'

export default defineConfig({
  name: 'default',
  title: 'NOIR Gaming Community',

  projectId: 'nbeqhsdj',
  dataset: 'production',

  server: {
    port: 3334
  },

  // Authentication and API configuration
  token: process.env.SANITY_API_TOKEN,
  useCdn: false, // Disable CDN for authenticated requests
  apiVersion: '2024-01-01',

  plugins: [
    structureTool(),
    visionTool({
      defaultApiVersion: '2024-01-01',
    }),
  ],

  schema: {
    types: schemaTypes,
  },
  
  // CORS and authentication settings
  cors: {
    origin: ['http://localhost:3000', 'http://localhost:3334'],
    credentials: true
  }
})