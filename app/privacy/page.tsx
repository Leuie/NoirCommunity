import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Shield, Mail, Globe, Users, Lock, Eye } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy - NOIR Gaming Community',
  description: 'Learn how NOIR Gaming Community collects, uses, and protects your personal information in compliance with GDPR, PIPEDA, and US privacy laws.',
  keywords: ['privacy policy', 'data protection', 'GDPR', 'gaming community privacy'],
}

export default function PrivacyPage() {
  const lastUpdated = "January 2, 2025"

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-24 sm:py-32 lg:py-40 bg-background/50 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="relative z-10 container-noir text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-neon-purple/20 text-neon-purple border-neon-purple/30 text-lg px-4 py-2">
              <Shield className="w-4 h-4 mr-2" />
              Privacy & Data Protection
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
              Privacy <span className="neon-text font-jarvish-blurry px-2 py-1 inline-block">Policy</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Your privacy matters to us. Learn how we collect, use, and protect your personal information.
            </p>
            <p className="text-sm text-muted-foreground">
              Last updated: {lastUpdated}
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="section-padding bg-background">
        <div className="container-noir max-w-4xl mx-auto">
          
          {/* Introduction */}
          <Card className="card-noir mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-display flex items-center">
                <Globe className="w-6 h-6 mr-3 text-neon-purple" />
                Introduction
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                <span className="font-jarvish-blurry neon-text px-1 py-0.5 inline-block">NOIR</span> Gaming Community ("we," "our," or "us") is committed to protecting your privacy and personal data. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, 
                use our services, or interact with our community.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                This policy complies with the European Union's General Data Protection Regulation (GDPR), 
                Canada's Personal Information Protection and Electronic Documents Act (PIPEDA), 
                and applicable United States privacy laws including the California Consumer Privacy Act (CCPA).
              </p>
            </CardContent>
          </Card>

          {/* Information We Collect */}
          <Card className="card-noir mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-display flex items-center">
                <Eye className="w-6 h-6 mr-3 text-neon-blue" />
                Information We Collect
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Personal Information You Provide</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Account information (username, email address, profile picture)</li>
                    <li>• Authentication data from third-party providers (Google, Discord)</li>
                    <li>• Community posts, comments, and messages</li>
                    <li>• Contact information when you reach out to us</li>
                    <li>• Gaming preferences and interests</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Information Collected Automatically</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Device information (IP address, browser type, operating system)</li>
                    <li>• Usage data (pages visited, time spent, click patterns)</li>
                    <li>• Cookies and similar tracking technologies</li>
                    <li>• Location data (general geographic location based on IP)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Information from Third Parties</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Social media profile information (when you connect accounts)</li>
                    <li>• Gaming platform data (when you link gaming accounts)</li>
                    <li>• Analytics and advertising partners</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* How We Use Your Information */}
          <Card className="card-noir mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-display flex items-center">
                <Users className="w-6 h-6 mr-3 text-neon-cyan" />
                How We Use Your Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">We use your information for the following purposes:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• <strong>Service Provision:</strong> To provide, maintain, and improve our gaming community platform</li>
                  <li>• <strong>Account Management:</strong> To create and manage your user account and profile</li>
                  <li>• <strong>Communication:</strong> To send you updates, newsletters, and respond to your inquiries</li>
                  <li>• <strong>Community Features:</strong> To enable posting, commenting, and social interactions</li>
                  <li>• <strong>Personalization:</strong> To customize content and recommendations based on your interests</li>
                  <li>• <strong>Security:</strong> To protect against fraud, abuse, and security threats</li>
                  <li>• <strong>Analytics:</strong> To understand how our services are used and improve user experience</li>
                  <li>• <strong>Legal Compliance:</strong> To comply with applicable laws and regulations</li>
                  <li>• <strong>Marketing:</strong> To send promotional content (with your consent where required)</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Legal Basis for Processing (GDPR) */}
          <Card className="card-noir mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-display flex items-center">
                <Shield className="w-6 h-6 mr-3 text-neon-purple" />
                Legal Basis for Processing (GDPR)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">For users in the European Union, we process your personal data based on:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• <strong>Consent:</strong> When you explicitly agree to processing (e.g., marketing communications)</li>
                  <li>• <strong>Contract Performance:</strong> To provide services you've requested</li>
                  <li>• <strong>Legitimate Interests:</strong> For analytics, security, and service improvement</li>
                  <li>• <strong>Legal Obligation:</strong> To comply with applicable laws</li>
                  <li>• <strong>Vital Interests:</strong> To protect health and safety when necessary</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Information Sharing */}
          <Card className="card-noir mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-display">Information Sharing and Disclosure</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">We may share your information in the following circumstances:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• <strong>Service Providers:</strong> With trusted third parties who help us operate our services</li>
                  <li>• <strong>Community Features:</strong> Public posts and profile information visible to other users</li>
                  <li>• <strong>Legal Requirements:</strong> When required by law or to protect rights and safety</li>
                  <li>• <strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
                  <li>• <strong>Consent:</strong> With your explicit permission for specific purposes</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  <strong>We do not sell your personal information to third parties.</strong>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Data Security */}
          <Card className="card-noir mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-display flex items-center">
                <Lock className="w-6 h-6 mr-3 text-neon-blue" />
                Data Security
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">We implement appropriate technical and organizational measures to protect your data:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Encryption of data in transit and at rest</li>
                  <li>• Regular security assessments and updates</li>
                  <li>• Access controls and authentication measures</li>
                  <li>• Employee training on data protection</li>
                  <li>• Incident response procedures</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  While we strive to protect your information, no method of transmission over the internet 
                  or electronic storage is 100% secure. We cannot guarantee absolute security.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Your Rights */}
          <Card className="card-noir mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-display">Your Privacy Rights</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">GDPR Rights (EU Users)</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• <strong>Access:</strong> Request copies of your personal data</li>
                    <li>• <strong>Rectification:</strong> Correct inaccurate or incomplete data</li>
                    <li>• <strong>Erasure:</strong> Request deletion of your data ("right to be forgotten")</li>
                    <li>• <strong>Portability:</strong> Receive your data in a structured, machine-readable format</li>
                    <li>• <strong>Restriction:</strong> Limit how we process your data</li>
                    <li>• <strong>Objection:</strong> Object to processing based on legitimate interests</li>
                    <li>• <strong>Withdraw Consent:</strong> Withdraw consent for consent-based processing</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">CCPA Rights (California Users)</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Right to know what personal information is collected</li>
                    <li>• Right to delete personal information</li>
                    <li>• Right to opt-out of the sale of personal information</li>
                    <li>• Right to non-discrimination for exercising privacy rights</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Canadian Users (PIPEDA)</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Right to access your personal information</li>
                    <li>• Right to correct inaccuracies</li>
                    <li>• Right to withdraw consent</li>
                    <li>• Right to file complaints with privacy commissioners</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Retention */}
          <Card className="card-noir mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-display">Data Retention</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">We retain your information for as long as necessary to:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Provide our services to you</li>
                  <li>• Comply with legal obligations</li>
                  <li>• Resolve disputes and enforce agreements</li>
                  <li>• Maintain security and prevent fraud</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  When you delete your account, we will delete or anonymize your personal information 
                  within 30 days, except where we are required to retain it for legal purposes.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* International Transfers */}
          <Card className="card-noir mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-display">International Data Transfers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Your information may be transferred to and processed in countries other than your own. 
                  We ensure appropriate safeguards are in place, including:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Standard Contractual Clauses approved by the European Commission</li>
                  <li>• Adequacy decisions by relevant authorities</li>
                  <li>• Other legally recognized transfer mechanisms</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Cookies and Tracking */}
          <Card className="card-noir mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-display">Cookies and Tracking Technologies</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">We use cookies and similar technologies to:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Remember your preferences and settings</li>
                  <li>• Authenticate your account</li>
                  <li>• Analyze site usage and performance</li>
                  <li>• Provide personalized content</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  You can control cookies through your browser settings. However, disabling cookies 
                  may affect the functionality of our services.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Children's Privacy */}
          <Card className="card-noir mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-display">Children's Privacy</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Our services are not intended for children under 13 years of age (or 16 in the EU). 
                  We do not knowingly collect personal information from children under these ages. 
                  If we become aware that we have collected such information, we will take steps to delete it promptly.
                </p>
                <p className="text-muted-foreground">
                  If you are a parent or guardian and believe your child has provided us with personal information, 
                  please contact us immediately.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Changes to Privacy Policy */}
          <Card className="card-noir mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-display">Changes to This Privacy Policy</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Posting the updated policy on our website</li>
                  <li>• Sending you an email notification</li>
                  <li>• Displaying a prominent notice on our platform</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  Your continued use of our services after any changes indicates your acceptance of the updated policy.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="card-noir mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-display flex items-center">
                <Mail className="w-6 h-6 mr-3 text-neon-cyan" />
                Contact Us
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  If you have questions about this Privacy Policy or want to exercise your privacy rights, please contact us:
                </p>
                <div className="bg-muted/20 p-4 rounded-lg">
                  <p className="text-foreground font-semibold mb-2">NOIR Gaming Community</p>
                  <p className="text-muted-foreground">Email: privacy@noircommunity.com</p>
                  <p className="text-muted-foreground">General Contact: contact@noircommunity.com</p>
                  <p className="text-muted-foreground mt-2">
                    For GDPR-related inquiries, please include "GDPR Request" in your subject line.
                  </p>
                </div>
                <p className="text-muted-foreground">
                  EU users also have the right to lodge a complaint with their local data protection authority.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Effective Date */}
          <div className="text-center py-8">
            <p className="text-muted-foreground">
              This Privacy Policy is effective as of {lastUpdated}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}