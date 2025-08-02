import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { 
  Download, 
  Palette, 
  Type, 
  Image as ImageIcon, 
  Copy,
  ExternalLink,
  AlertTriangle,
  CheckCircle
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Official Art & Media - NOIR Gaming Community',
  description: 'Download official NOIR Gaming Community artwork, fonts, logos, and media assets for content creation and community projects.',
  keywords: ['NOIR art', 'gaming community assets', 'brand resources', 'logos', 'fonts'],
}

const brandColors = [
  { name: 'NOIR Purple', hex: '#a855f7', rgb: '168, 85, 247', usage: 'Primary brand color' },
  { name: 'NOIR Blue', hex: '#3b82f6', rgb: '59, 130, 246', usage: 'Secondary accent' },
  { name: 'NOIR Cyan', hex: '#06b6d4', rgb: '6, 182, 212', usage: 'Tertiary accent' },
  { name: 'Dark Background', hex: '#0f172a', rgb: '15, 23, 42', usage: 'Primary background' },
  { name: 'Card Background', hex: '#1e293b', rgb: '30, 41, 59', usage: 'Secondary background' },
]

const logoAssets = [
  {
    name: 'NOIR Logo - Main',
    description: 'Primary logo with full branding',
    formats: ['PNG', 'SVG'],
    sizes: ['512x512', '256x256', '128x128', '64x64'],
    usage: 'Headers, main branding, social media',
    preview: '/N.png'
  },
  {
    name: 'NOIR Icon - N Only',
    description: 'Standalone N icon for compact spaces',
    formats: ['PNG', 'SVG', 'ICO'],
    sizes: ['512x512', '256x256', '128x128', '64x64', '32x32', '16x16'],
    usage: 'Favicons, app icons, small spaces',
    preview: '/N.png'
  },
  {
    name: 'NOIR Wordmark',
    description: 'Text-only logo using Jarvish Blurry font',
    formats: ['PNG', 'SVG'],
    sizes: ['Various widths'],
    usage: 'Text-based applications, headers',
    preview: null
  }
]

const fontAssets = [
  {
    name: 'Jarvish Blurry',
    description: 'Primary brand font used for "NOIR" text',
    formats: ['OTF', 'TTF'],
    usage: 'Brand name, headlines, special text',
    license: 'Community use only',
    preview: 'NOIR'
  },
  {
    name: 'Inter',
    description: 'Primary body text font',
    formats: ['Google Fonts'],
    usage: 'Body text, UI elements',
    license: 'Open source',
    preview: 'The quick brown fox jumps over the lazy dog'
  },
  {
    name: 'Orbitron',
    description: 'Display font for headings',
    formats: ['Google Fonts'],
    usage: 'Headings, titles, tech-themed text',
    license: 'Open source',
    preview: 'Gaming Community'
  }
]

const mediaAssets = [
  {
    name: 'Hero Backgrounds',
    description: 'Gaming-themed background images',
    count: '3 images',
    formats: ['JPG'],
    sizes: ['1920x1080'],
    usage: 'Website backgrounds, social media'
  },
  {
    name: 'Social Media Kit',
    description: 'Pre-sized graphics for social platforms',
    count: '12 templates',
    formats: ['PNG', 'JPG'],
    sizes: ['Various platform sizes'],
    usage: 'Discord, Twitter, Instagram, YouTube'
  },
  {
    name: 'Stream Overlays',
    description: 'Streaming graphics and overlays',
    count: '5 templates',
    formats: ['PNG'],
    sizes: ['1920x1080'],
    usage: 'Twitch, YouTube streaming'
  }
]

const attributionPhrase = "Powered by NOIR Gaming Community"

export default function ArtPage() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-24 sm:py-32 lg:py-40 bg-background/50 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="relative z-10 container-noir text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
            Official <span className="neon-text font-jarvish-blurry px-2 py-1 inline-block">NOIR</span> Art & Media
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Download official artwork, fonts, logos, and media assets for your content creation 
            and community projects. All resources are free for community use.
          </p>
        </div>
      </section>

      {/* Attribution Requirements */}
      <section className="section-padding bg-background">
        <div className="container-noir">
          <Alert className="mb-12 border-neon-purple/30 bg-neon-purple/10">
            <AlertTriangle className="h-4 w-4 text-neon-purple" />
            <AlertDescription className="text-foreground">
              <strong>Attribution Required:</strong> When using any <span className="font-jarvish-blurry neon-text px-1 py-0.5 inline-block">NOIR</span> assets in your projects, 
              you must include the phrase: <strong>"{attributionPhrase}"</strong> in a visible location.
              <Button
                variant="outline"
                size="sm"
                className="ml-4"
                onClick={() => copyToClipboard(attributionPhrase)}
              >
                <Copy className="w-3 h-3 mr-1" />
                Copy Phrase
              </Button>
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Brand Colors */}
      <section className="section-padding bg-background/50">
        <div className="container-noir">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
              Brand <span className="neon-text">Colors</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Official color palette for <span className="font-jarvish-blurry neon-text px-1 py-0.5 inline-block">NOIR</span> Gaming Community branding and design consistency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brandColors.map((color, index) => (
              <Card key={index} className="card-noir">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div 
                      className="w-16 h-16 rounded-lg border-2 border-border"
                      style={{ backgroundColor: color.hex }}
                    />
                    <div>
                      <CardTitle className="text-lg">{color.name}</CardTitle>
                      <CardDescription>{color.usage}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">HEX:</span>
                      <code className="bg-muted px-2 py-1 rounded text-xs">{color.hex}</code>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">RGB:</span>
                      <code className="bg-muted px-2 py-1 rounded text-xs">{color.rgb}</code>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Logo Assets */}
      <section className="section-padding bg-background">
        <div className="container-noir">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
              Logo <span className="neon-text">Assets</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Official <span className="font-jarvish-blurry neon-text px-1 py-0.5 inline-block">NOIR</span> logos and icons in various formats and sizes for all your project needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {logoAssets.map((asset, index) => (
              <Card key={index} className="card-noir">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <ImageIcon className="w-6 h-6 text-neon-purple" />
                    <CardTitle className="text-xl">{asset.name}</CardTitle>
                  </div>
                  {asset.preview && (
                    <div className="w-full h-32 bg-muted rounded-lg flex items-center justify-center">
                      <Image
                        src={asset.preview}
                        alt={asset.name}
                        width={64}
                        height={64}
                        className="object-contain"
                      />
                    </div>
                  )}
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{asset.description}</CardDescription>
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm font-medium text-foreground">Formats:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {asset.formats.map((format) => (
                          <Badge key={format} variant="outline" className="text-xs">
                            {format}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-foreground">Sizes:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {asset.sizes.map((size) => (
                          <Badge key={size} variant="secondary" className="text-xs">
                            {size}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-foreground">Usage:</span>
                      <p className="text-xs text-muted-foreground mt-1">{asset.usage}</p>
                    </div>
                  </div>
                  <Button className="w-full mt-4 btn-primary" disabled>
                    <Download className="w-4 h-4 mr-2" />
                    Download Package
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Font Assets */}
      <section className="section-padding bg-background/50">
        <div className="container-noir">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
              Typography <span className="neon-text">Assets</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Official fonts used in <span className="font-jarvish-blurry neon-text px-1 py-0.5 inline-block">NOIR</span> Gaming Community branding and design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fontAssets.map((font, index) => (
              <Card key={index} className="card-noir">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <Type className="w-6 h-6 text-neon-blue" />
                    <CardTitle className="text-xl">{font.name}</CardTitle>
                  </div>
                  <div className="w-full h-20 bg-muted rounded-lg flex items-center justify-center p-4">
                    <span 
                      className={`text-lg ${font.name === 'Jarvish Blurry' ? 'font-jarvish-blurry' : font.name === 'Orbitron' ? 'font-display' : 'font-sans'}`}
                      style={{ fontSize: font.name === 'Inter' ? '14px' : '18px' }}
                    >
                      {font.preview}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{font.description}</CardDescription>
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm font-medium text-foreground">Formats:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {font.formats.map((format) => (
                          <Badge key={format} variant="outline" className="text-xs">
                            {format}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-foreground">Usage:</span>
                      <p className="text-xs text-muted-foreground mt-1">{font.usage}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-foreground">License:</span>
                      <Badge variant={font.license === 'Open source' ? 'default' : 'secondary'} className="text-xs ml-2">
                        {font.license}
                      </Badge>
                    </div>
                  </div>
                  <Button 
                    className="w-full mt-4 btn-primary" 
                    disabled={font.formats.includes('Google Fonts')}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    {font.formats.includes('Google Fonts') ? 'Available on Google Fonts' : 'Download Font'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Media Assets */}
      <section className="section-padding bg-background">
        <div className="container-noir">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
              Media <span className="neon-text">Assets</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Additional media resources including backgrounds, social media templates, and streaming assets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mediaAssets.map((asset, index) => (
              <Card key={index} className="card-noir">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <Palette className="w-6 h-6 text-neon-cyan" />
                    <CardTitle className="text-xl">{asset.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{asset.description}</CardDescription>
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm font-medium text-foreground">Count:</span>
                      <Badge variant="secondary" className="text-xs ml-2">
                        {asset.count}
                      </Badge>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-foreground">Formats:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {asset.formats.map((format) => (
                          <Badge key={format} variant="outline" className="text-xs">
                            {format}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-foreground">Sizes:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {asset.sizes.map((size) => (
                          <Badge key={size} variant="secondary" className="text-xs">
                            {size}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-foreground">Usage:</span>
                      <p className="text-xs text-muted-foreground mt-1">{asset.usage}</p>
                    </div>
                  </div>
                  <Button className="w-full mt-4 btn-primary" disabled>
                    <Download className="w-4 h-4 mr-2" />
                    Download Package
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Usage Guidelines */}
      <section className="section-padding bg-background/50">
        <div className="container-noir">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
              Usage <span className="neon-text">Guidelines</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="card-noir">
              <CardHeader>
                <CardTitle className="text-2xl font-display text-green-400 flex items-center">
                  <CheckCircle className="w-6 h-6 mr-3" />
                  Allowed Uses
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Community content creation and fan art</li>
                  <li>• Streaming overlays and graphics</li>
                  <li>• Social media posts about <span className="font-jarvish-blurry neon-text px-1 py-0.5 inline-block">NOIR</span></li>
                  <li>• Community event promotion</li>
                  <li>• Personal projects showcasing <span className="font-jarvish-blurry neon-text px-1 py-0.5 inline-block">NOIR</span></li>
                  <li>• Educational or tutorial content</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-noir">
              <CardHeader>
                <CardTitle className="text-2xl font-display text-red-400 flex items-center">
                  <AlertTriangle className="w-6 h-6 mr-3" />
                  Prohibited Uses
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Commercial use without permission</li>
                  <li>• Modifying logos or brand elements</li>
                  <li>• Using assets for competing communities</li>
                  <li>• Selling or redistributing assets</li>
                  <li>• Inappropriate or offensive content</li>
                  <li>• Misrepresenting <span className="font-jarvish-blurry neon-text px-1 py-0.5 inline-block">NOIR</span> brand or values</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Alert className="max-w-2xl mx-auto border-neon-blue/30 bg-neon-blue/10">
              <AlertTriangle className="h-4 w-4 text-neon-blue" />
              <AlertDescription className="text-foreground">
                <strong>Questions about usage?</strong> Contact our team before using assets in ways not listed above. 
                We're happy to discuss special use cases and partnerships.
                <Button asChild variant="outline" size="sm" className="ml-4">
                  <Link href="/contact">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Contact Us
                  </Link>
                </Button>
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </section>
    </div>
  )
}