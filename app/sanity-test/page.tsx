'use client'

import * as React from 'react'
import { client, newsQuery, communityPostsQuery, teamMembersQuery } from '@/lib/sanity'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CheckCircle, XCircle, AlertCircle, RefreshCw } from 'lucide-react'

interface TestResult {
  name: string
  status: 'success' | 'error' | 'warning'
  message: string
  data?: any
}

export default function SanityTestPage() {
  const [testResults, setTestResults] = React.useState<TestResult[]>([])
  const [testing, setTesting] = React.useState(false)

  const runTests = async () => {
    setTesting(true)
    const results: TestResult[] = []

    // Test 1: Basic client connection
    try {
      const projectInfo = await client.fetch('*[_type == "sanity.imageAsset"][0]')
      results.push({
        name: 'Sanity Client Connection',
        status: 'success',
        message: 'Successfully connected to Sanity project',
        data: { projectId: 'nbeqhsdj', dataset: 'production' }
      })
    } catch (error) {
      results.push({
        name: 'Sanity Client Connection',
        status: 'error',
        message: `Failed to connect: ${error instanceof Error ? error.message : 'Unknown error'}`,
      })
    }

    // Test 2: News Articles
    try {
      const newsData = await client.fetch(newsQuery)
      results.push({
        name: 'News Articles Query',
        status: newsData.length > 0 ? 'success' : 'warning',
        message: newsData.length > 0 
          ? `Found ${newsData.length} news articles` 
          : 'No news articles found in Sanity',
        data: newsData.slice(0, 2) // Show first 2 articles
      })
    } catch (error) {
      results.push({
        name: 'News Articles Query',
        status: 'error',
        message: `Query failed: ${error instanceof Error ? error.message : 'Unknown error'}`,
      })
    }

    // Test 3: Community Posts
    try {
      const communityData = await client.fetch(communityPostsQuery)
      results.push({
        name: 'Community Posts Query',
        status: communityData.length > 0 ? 'success' : 'warning',
        message: communityData.length > 0 
          ? `Found ${communityData.length} community posts` 
          : 'No community posts found in Sanity',
        data: communityData.slice(0, 2)
      })
    } catch (error) {
      results.push({
        name: 'Community Posts Query',
        status: 'error',
        message: `Query failed: ${error instanceof Error ? error.message : 'Unknown error'}`,
      })
    }

    // Test 4: Team Members
    try {
      const teamData = await client.fetch(teamMembersQuery)
      results.push({
        name: 'Team Members Query',
        status: teamData.length > 0 ? 'success' : 'warning',
        message: teamData.length > 0 
          ? `Found ${teamData.length} team members` 
          : 'No team members found in Sanity',
        data: teamData
      })
    } catch (error) {
      results.push({
        name: 'Team Members Query',
        status: 'error',
        message: `Query failed: ${error instanceof Error ? error.message : 'Unknown error'}`,
      })
    }

    // Test 5: Schema validation
    try {
      const schemas = await client.fetch('*[_type in ["newsArticle", "communityPost", "teamMember", "author", "communityMember"]] | {"type": _type, "count": count(*[_type == ^._type])}')
      results.push({
        name: 'Schema Validation',
        status: 'success',
        message: 'All schemas are accessible',
        data: schemas
      })
    } catch (error) {
      results.push({
        name: 'Schema Validation',
        status: 'error',
        message: `Schema validation failed: ${error instanceof Error ? error.message : 'Unknown error'}`,
      })
    }

    setTestResults(results)
    setTesting(false)
  }

  React.useEffect(() => {
    runTests()
  }, [])

  const getStatusIcon = (status: TestResult['status']) => {
    switch (status) {
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-500" />
      case 'error':
        return <XCircle className="w-5 h-5 text-red-500" />
      case 'warning':
        return <AlertCircle className="w-5 h-5 text-yellow-500" />
    }
  }

  const getStatusColor = (status: TestResult['status']) => {
    switch (status) {
      case 'success':
        return 'border-green-500/30 bg-green-500/10'
      case 'error':
        return 'border-red-500/30 bg-red-500/10'
      case 'warning':
        return 'border-yellow-500/30 bg-yellow-500/10'
    }
  }

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container-noir max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-display font-bold mb-4">
            Sanity <span className="neon-text">Configuration Test</span>
          </h1>
          <p className="text-muted-foreground mb-6">
            Testing your Sanity CMS connection and data availability
          </p>
          <Button 
            onClick={runTests} 
            disabled={testing}
            className="btn-primary"
          >
            {testing ? (
              <>
                <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                Testing...
              </>
            ) : (
              <>
                <RefreshCw className="w-4 h-4 mr-2" />
                Run Tests Again
              </>
            )}
          </Button>
        </div>

        <div className="space-y-6">
          {testResults.map((result, index) => (
            <Card key={index} className={`card-noir ${getStatusColor(result.status)}`}>
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  {getStatusIcon(result.status)}
                  <span>{result.name}</span>
                  <Badge variant={result.status === 'success' ? 'default' : result.status === 'error' ? 'destructive' : 'secondary'}>
                    {result.status.toUpperCase()}
                  </Badge>
                </CardTitle>
                <CardDescription>{result.message}</CardDescription>
              </CardHeader>
              {result.data && (
                <CardContent>
                  <details className="mt-4">
                    <summary className="cursor-pointer text-sm font-medium text-muted-foreground hover:text-foreground">
                      View Data
                    </summary>
                    <pre className="mt-2 p-3 bg-muted/50 rounded text-xs overflow-auto max-h-40">
                      {JSON.stringify(result.data, null, 2)}
                    </pre>
                  </details>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        <div className="mt-12 p-6 bg-muted/20 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Next Steps</h2>
          <div className="space-y-3 text-sm text-muted-foreground">
            <p>
              <strong>If all tests pass:</strong> Your Sanity configuration is working correctly! 
              You can access your Sanity Studio at: 
              <a 
                href="https://nbeqhsdj.sanity.studio/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neon-blue hover:underline ml-1"
              >
                https://nbeqhsdj.sanity.studio/
              </a>
            </p>
            <p>
              <strong>If you see warnings:</strong> Your connection works but you need to add content. 
              Use the Sanity Studio to create news articles, team members, and community posts.
            </p>
            <p>
              <strong>If you see errors:</strong> Check your project ID, dataset name, or network connection. 
              Make sure your Sanity project is properly configured.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}