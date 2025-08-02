import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Scale, Users, Shield, Gamepad2, AlertTriangle, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Terms of Service - NOIR Gaming Community',
  description: 'Terms of Service for NOIR Gaming Community. Learn about our community rules, user responsibilities, and legal terms for using our gaming platform.',
  keywords: ['terms of service', 'gaming community rules', 'user agreement', 'community guidelines'],
}

export default function TermsPage() {
  const lastUpdated = "January 2, 2025"

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-24 sm:py-32 lg:py-40 bg-background/50 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="relative z-10 container-noir text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-neon-blue/20 text-neon-blue border-neon-blue/30 text-lg px-4 py-2">
              <Scale className="w-4 h-4 mr-2" />
              Legal Terms & Community Rules
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
              Terms of <span className="neon-text font-jarvish-blurry px-2 py-1 inline-block">Service</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Welcome to the <span className="font-jarvish-blurry neon-text px-1 py-0.5 inline-block">NOIR</span> Gaming Community. 
              These terms govern your use of our platform and community services.
            </p>
            <p className="text-sm text-muted-foreground">
              Last updated: {lastUpdated}
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="section-padding bg-background">
        <div className="container-noir max-w-4xl mx-auto">
          
          {/* Acceptance of Terms */}
          <Card className="card-noir mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-display flex items-center">
                <Scale className="w-6 h-6 mr-3 text-neon-blue" />
                Acceptance of Terms
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                By accessing or using the <span className="font-jarvish-blurry neon-text px-1 py-0.5 inline-block">NOIR</span> Gaming Community website, 
                Discord server, or any related services (collectively, the "Service"), you agree to be bound by these Terms of Service ("Terms"). 
                If you disagree with any part of these terms, you may not access the Service.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                These Terms apply to all visitors, users, and others who access or use the Service. 
                By using our Service, you represent that you are at least 18 years old or have reached the age of majority in your jurisdiction.
              </p>
            </CardContent>
          </Card>

          {/* Description of Service */}
          <Card className="card-noir mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-display flex items-center">
                <Gamepad2 className="w-6 h-6 mr-3 text-neon-purple" />
                Description of Service
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <span className="font-jarvish-blurry neon-text px-1 py-0.5 inline-block">NOIR</span> Gaming Community provides:
              </p>
              <ul className="space-y-2 text-muted-foreground mb-4">
                <li>• A gaming community platform for connecting with other gamers</li>
                <li>• Discord server access for real-time communication</li>
                <li>• Gaming news, reviews, and industry content</li>
                <li>• Community events, tournaments, and competitions</li>
                <li>• User-generated content sharing and discussion forums</li>
                <li>• Gaming resources, guides, and educational content</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify, suspend, or discontinue any part of the Service at any time without notice.
              </p>
            </CardContent>
          </Card>

          {/* User Accounts and Registration */}
          <Card className="card-noir mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-display flex items-center">
                <Users className="w-6 h-6 mr-3 text-neon-cyan" />
                User Accounts and Registration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Account Creation</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• You must be at least 18 years old to create an account</li>
                    <li>• You must provide accurate and complete information</li>
                    <li>• You are responsible for maintaining account security</li>
                    <li>• One person may not maintain multiple accounts</li>
                    <li>• You must notify us immediately of any unauthorized use</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Account Responsibilities</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Keep your login credentials confidential</li>
                    <li>• Update your information when it changes</li>
                    <li>• Use your real identity (no impersonation)</li>
                    <li>• Comply with all applicable laws and regulations</li>
                    <li>• Respect other community members</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Community Guidelines */}
          <Card className="card-noir mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-display flex items-center">
                <Shield className="w-6 h-6 mr-3 text-neon-purple" />
                Community Guidelines and Conduct
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Acceptable Use</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Engage respectfully with all community members</li>
                    <li>• Share gaming-related content and discussions</li>
                    <li>• Provide constructive feedback and criticism</li>
                    <li>• Report violations of these terms to moderators</li>
                    <li>• Respect intellectual property rights</li>
                    <li>• Follow Discord Terms of Service when using our server</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Prohibited Conduct</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• <strong>Harassment or Toxicity:</strong> No bullying, harassment, hate speech, or discriminatory language</li>
                    <li>• <strong>Spam and Self-Promotion:</strong> No excessive self-promotion, spam, or unrelated advertising</li>
                    <li>• <strong>Cheating and Exploits:</strong> No discussion of game cheats, hacks, or exploits</li>
                    <li>• <strong>Illegal Content:</strong> No sharing of pirated games, illegal downloads, or copyrighted material</li>
                    <li>• <strong>Adult Content:</strong> No NSFW content, sexual material, or inappropriate imagery</li>
                    <li>• <strong>Doxxing:</strong> No sharing of personal information without consent</li>
                    <li>• <strong>Impersonation:</strong> No impersonating other users, staff, or public figures</li>
                    <li>• <strong>Malicious Software:</strong> No sharing of viruses, malware, or harmful links</li>
                    <li>• <strong>Real Money Trading:</strong> No selling game accounts, items, or currency for real money</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Gaming-Specific Rules</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• No griefing or intentionally ruining other players' experiences</li>
                    <li>• Respect tournament rules and fair play principles</li>
                    <li>• No stream sniping or similar unsportsmanlike conduct</li>
                    <li>• Follow game-specific community standards</li>
                    <li>• Report bugs and exploits responsibly to game developers</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Content and Intellectual Property */}
          <Card className="card-noir mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-display">Content and Intellectual Property</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">User-Generated Content</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• You retain ownership of content you create and share</li>
                    <li>• You grant us a license to use, display, and distribute your content</li>
                    <li>• You are responsible for ensuring you have rights to shared content</li>
                    <li>• We may remove content that violates these terms</li>
                    <li>• You may not share copyrighted material without permission</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Our Content</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• All <span className="font-jarvish-blurry neon-text px-1 py-0.5 inline-block">NOIR</span> branding, logos, and original content are our property</li>
                    <li>• You may not use our intellectual property without permission</li>
                    <li>• Community-created content may be featured with attribution</li>
                    <li>• We respect the intellectual property rights of others</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">DMCA and Copyright</h3>
                  <p className="text-muted-foreground">
                    We respond to valid DMCA takedown notices. If you believe your copyrighted work has been 
                    infringed, please contact us with detailed information about the alleged infringement.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Privacy and Data Protection */}
          <Card className="card-noir mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-display">Privacy and Data Protection</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Your privacy is important to us. Our collection and use of personal information is governed by our 
                  <Link href="/privacy" className="text-neon-blue hover:text-neon-blue/80 underline">Privacy Policy</Link>, 
                  which complies with GDPR, PIPEDA, and applicable US privacy laws.
                </p>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Key Privacy Points</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• We collect minimal data necessary for service provision</li>
                    <li>• You have rights to access, correct, and delete your data</li>
                    <li>• We use cookies and analytics to improve our services</li>
                    <li>• We do not sell your personal information</li>
                    <li>• Data is processed lawfully and transparently</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Moderation and Enforcement */}
          <Card className="card-noir mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-display">Moderation and Enforcement</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Enforcement Actions</h3>
                  <p className="text-muted-foreground mb-3">
                    Violations of these terms may result in the following actions:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• <strong>Warning:</strong> First-time or minor violations</li>
                    <li>• <strong>Temporary Suspension:</strong> Repeated or moderate violations</li>
                    <li>• <strong>Permanent Ban:</strong> Severe or repeated violations</li>
                    <li>• <strong>Content Removal:</strong> Deletion of violating posts or media</li>
                    <li>• <strong>Feature Restrictions:</strong> Limited access to certain features</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Appeals Process</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• You may appeal moderation decisions within 30 days</li>
                    <li>• Appeals should be sent to our moderation team</li>
                    <li>• Provide clear reasoning and evidence for your appeal</li>
                    <li>• Decisions on appeals are final</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Gaming-Specific Terms */}
          <Card className="card-noir mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-display flex items-center">
                <Gamepad2 className="w-6 h-6 mr-3 text-neon-cyan" />
                Gaming-Specific Terms
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Tournaments and Competitions</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Participation is voluntary and subject to specific rules</li>
                    <li>• Prizes are awarded at our discretion</li>
                    <li>• Cheating or unsportsmanlike conduct results in disqualification</li>
                    <li>• Tournament rules may vary by event</li>
                    <li>• Age restrictions may apply to certain competitions</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Third-Party Games and Services</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• We are not responsible for third-party game servers or services</li>
                    <li>• Game-specific terms of service apply when playing</li>
                    <li>• We may integrate with gaming platforms (Steam, Discord, etc.)</li>
                    <li>• Account linking is optional but may enhance features</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Virtual Items and Currency</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Any virtual items or currency have no real-world value</li>
                    <li>• We do not facilitate real money trading</li>
                    <li>• Virtual rewards may be revoked for terms violations</li>
                    <li>• No refunds for virtual items or services</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Disclaimers and Limitations */}
          <Card className="card-noir mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-display flex items-center">
                <AlertTriangle className="w-6 h-6 mr-3 text-yellow-500" />
                Disclaimers and Limitations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Service Availability</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Services are provided "as is" without warranties</li>
                    <li>• We do not guarantee uninterrupted service availability</li>
                    <li>• Maintenance and updates may cause temporary disruptions</li>
                    <li>• We are not liable for third-party service outages</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Limitation of Liability</h3>
                  <p className="text-muted-foreground mb-3">
                    To the maximum extent permitted by law:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• We are not liable for indirect, incidental, or consequential damages</li>
                    <li>• Our total liability is limited to the amount you paid us (if any)</li>
                    <li>• We are not responsible for user-generated content</li>
                    <li>• You use the service at your own risk</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Indemnification</h3>
                  <p className="text-muted-foreground">
                    You agree to indemnify and hold us harmless from any claims, damages, or expenses 
                    arising from your use of the service or violation of these terms.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Jurisdiction and Governing Law */}
          <Card className="card-noir mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-display">Jurisdiction and Governing Law</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Governing Law</h3>
                  <p className="text-muted-foreground">
                    These Terms are governed by the laws of the jurisdiction where <span className="font-jarvish-blurry neon-text px-1 py-0.5 inline-block">NOIR</span> Gaming Community 
                    is established, without regard to conflict of law principles.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Dispute Resolution</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Disputes should first be addressed through direct communication</li>
                    <li>• Mediation may be required before legal action</li>
                    <li>• Class action lawsuits are waived where legally permissible</li>
                    <li>• EU users retain rights under applicable consumer protection laws</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">International Users</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• EU users have additional rights under GDPR</li>
                    <li>• Canadian users are protected under PIPEDA</li>
                    <li>• California users have rights under CCPA</li>
                    <li>• Local laws may provide additional protections</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Changes to Terms */}
          <Card className="card-noir mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-display">Changes to These Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  We may update these Terms from time to time. When we make material changes, we will:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Post the updated Terms on our website</li>
                  <li>• Send email notifications to registered users</li>
                  <li>• Display prominent notices on our platform</li>
                  <li>• Provide at least 30 days notice for material changes</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  Your continued use of the Service after changes take effect constitutes acceptance of the new Terms. 
                  If you disagree with changes, you should discontinue using the Service.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Termination */}
          <Card className="card-noir mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-display">Termination</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Your Right to Terminate</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• You may delete your account at any time</li>
                    <li>• Account deletion removes your personal data per our Privacy Policy</li>
                    <li>• Some content may remain for legal or operational reasons</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Our Right to Terminate</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• We may suspend or terminate accounts for terms violations</li>
                    <li>• We may discontinue the Service with reasonable notice</li>
                    <li>• Termination may be immediate for severe violations</li>
                    <li>• You remain liable for activities before termination</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="card-noir mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-display flex items-center">
                <Mail className="w-6 h-6 mr-3 text-neon-purple" />
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  If you have questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-muted/20 p-4 rounded-lg">
                  <p className="text-foreground font-semibold mb-2">NOIR Gaming Community</p>
                  <p className="text-muted-foreground">Email: legal@noircommunity.com</p>
                  <p className="text-muted-foreground">General Contact: contact@noircommunity.com</p>
                  <p className="text-muted-foreground">Moderation Appeals: appeals@noircommunity.com</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Effective Date */}
          <div className="text-center py-8">
            <p className="text-muted-foreground">
              These Terms of Service are effective as of {lastUpdated}
            </p>
            <p className="text-muted-foreground mt-2 text-sm">
              By using our Service, you acknowledge that you have read, understood, and agree to be bound by these Terms.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}