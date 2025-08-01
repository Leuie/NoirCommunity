import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Mail, MessageSquare, Users } from 'lucide-react'
import { SocialLinks } from '@/components/social-links'

export const metadata: Metadata = {
  title: 'Contact Us - NOIR Gaming Community',
  description: 'Get in touch with the NOIR Gaming Community. We\'re here to help with any questions or feedback.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have questions, feedback, or want to join our community? We'd love to hear from you!
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-gray-800/50 border-purple-500/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center gap-2">
                  <MessageSquare className="w-6 h-6 text-purple-400" />
                  Send us a Message
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-white">First Name</Label>
                      <Input
                        id="firstName"
                        placeholder="Enter your first name"
                        className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-purple-400"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-white">Last Name</Label>
                      <Input
                        id="lastName"
                        placeholder="Enter your last name"
                        className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-purple-400"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-purple-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-white">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="What's this about?"
                      className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-purple-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about your inquiry..."
                      rows={5}
                      className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-purple-400 resize-none"
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-gray-800/50 border-purple-500/20 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl text-white flex items-center gap-2">
                    <Mail className="w-6 h-6 text-purple-400" />
                    Get in Touch
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                    <p className="text-gray-300">contact@noirgaming.com</p>
                    <p className="text-gray-400 text-sm mt-1">We typically respond within 24 hours</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Community Support</h3>
                    <p className="text-gray-300">support@noirgaming.com</p>
                    <p className="text-gray-400 text-sm mt-1">For technical issues and account help</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Business Inquiries</h3>
                    <p className="text-gray-300">business@noirgaming.com</p>
                    <p className="text-gray-400 text-sm mt-1">Partnerships and sponsorship opportunities</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border-purple-500/20 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl text-white flex items-center gap-2">
                    <Users className="w-6 h-6 text-purple-400" />
                    Join Our Community
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">
                    Connect with us on social media and join thousands of gamers in the NOIR community.
                  </p>
                  <SocialLinks />
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border-purple-500/30 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Quick Response Times</h3>
                  <p className="text-gray-300 text-sm">
                    Our community managers are active daily and respond to messages quickly. 
                    For the fastest response, join our Discord server where you can chat with 
                    our team and community members in real-time.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}