import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './sanity/schemas'

export default defineConfig({
  name: 'default',
  title: 'NOIR Gaming Community',

  projectId: 'nbeqhsdj',
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool({
      // Optional: configure vision tool
      defaultApiVersion: '2024-01-01',
    }),
  ],

  schema: {
    types: schemaTypes,
  },
  
  // Studio configuration
  studio: {
    components: {
      // This helps with React component resolution
    }
  }
})