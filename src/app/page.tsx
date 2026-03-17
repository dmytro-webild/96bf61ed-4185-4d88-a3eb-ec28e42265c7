"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroCentered from '@/components/sections/hero/HeroCentered';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterCard from '@/components/sections/footer/FooterCard';
import { Gift, Mail, MessageCircle, Sparkles } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="medium"
      sizing="medium"
      background="fluid"
      cardStyle="glass-elevated"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="glass"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="Nebula Studio"
          navItems={[
            { name: "Pricing", id: "pricing" },
          ]}
          button={{
            text: "WhatsApp Now",            href: "https://wa.me/971585636936"
          }}
          animateOnLoad={true}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroCentered
          title="Professional Websites Live in 24 Hours"
          description="Nebula Studio creates stunning, conversion-focused websites for UAE businesses. We combine rapid delivery with premium design to help you capture leads and grow fast."
          background={{ variant: "plain" }}
          buttons={[
            { text: "Chat on WhatsApp", href: "https://wa.me/971585636936" }
          ]}
          buttonAnimation="slide-up"
          avatars={[
            { src: "http://img.b2bpic.net/free-photo/portrait-professional-confident-young-woman-working-retail-business-industry-promote-company-advertise-join-her-team-smiling-self-assured-pleased-camera-stand-hall_197531-22167.jpg", alt: "Client 1" },
            { src: "http://img.b2bpic.net/free-photo/portrait-confident-businessman_107420-84879.jpg", alt: "Client 2" },
            { src: "http://img.b2bpic.net/free-photo/man-portrait-posing-loft-modern-space_158595-5369.jpg", alt: "Client 3" }
          ]}
          avatarText="Join 50+ UAE businesses"
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardThree
          title="Ramadan Special"
          description="Professional, conversion-focused website delivered in 24 hours"
          tag="Limited Time Offer"
          tagIcon={Gift}
          tagAnimation="slide-up"
          animationType="slide-up"
          plans={[
            {
              id: "1",              badge: "Ramadan Special",              badgeIcon: Sparkles,
              price: "AED 1,499",              name: "Professional Website",              buttons: [
                { text: "Get Started Now", href: "https://wa.me/971585636936" }
              ],
              features: [
                "Mobile Responsive Design",                "WhatsApp Integration",                "24-Hour Delivery",                "Email Support"
              ]
            }
          ]}
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCTA
          tag="Ready to Launch"
          tagIcon={MessageCircle}
          title="Convert Visitors into WhatsApp Leads"
          description="Let's turn your vision into reality. Chat with our team on WhatsApp to get started with your 24-hour website."
          buttons={[
            { text: "Chat on WhatsApp", href: "https://wa.me/971585636936" }
          ]}
          buttonAnimation="slide-up"
          background={{ variant: "plain" }}
          useInvertedBackground={false}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterCard
          logoText="Nebula Studio"
          copyrightText="© 2024 Nebula Studio. Websites delivered in 24 hours. All rights reserved."
          socialLinks={[
            { icon: Mail, href: "mailto:artem@sha-ms.com", ariaLabel: "Email us" },
            { icon: MessageCircle, href: "https://wa.me/971585636936", ariaLabel: "Chat with us on WhatsApp" }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}