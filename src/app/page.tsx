"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroSplitKpi from '@/components/sections/hero/HeroSplitKpi';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardNineteen from '@/components/sections/feature/FeatureCardNineteen';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import ContactText from '@/components/sections/contact/ContactText';
import FooterCard from '@/components/sections/footer/FooterCard';
import { Award, ArrowUp, CheckCircle, Gift, Instagram, Linkedin, Mail, MessageCircle, Star, TrendingUp, Users, Workflow, Zap } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="medium"
      sizing="medium"
      background="circleGradient"
      cardStyle="layered-gradient"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="glass"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="Nebula Studio"
          navItems={[
            { name: "How It Works", id: "features" },
            { name: "Our Results", id: "metrics" },
            { name: "Pricing", id: "pricing" },
            { name: "Testimonials", id: "testimonial" }
          ]}
          button={{
            text: "WhatsApp Now",            href: "https://wa.me/971XXXXXXXXX"
          }}
          animateOnLoad={true}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitKpi
          title="Professional Websites Delivered in 24 Hours"
          description="Nebula Studio creates stunning, conversion-focused websites for UAE businesses. We combine rapid delivery with premium design to help you capture leads and grow fast."
          background={{ variant: "plain" }}
          kpis={[
            { value: "24hrs", label: "Delivery Time" },
            { value: "100%", label: "Lead Focused" },
            { value: "50+", label: "Happy Clients" }
          ]}
          enableKpiAnimation={true}
          tag="Fast • Professional • Results-Driven"
          tagIcon={Zap}
          tagAnimation="slide-up"
          buttons={[
            { text: "Chat on WhatsApp", href: "https://wa.me/971XXXXXXXXX" },
            { text: "See Our Work", href: "#testimonial" }
          ]}
          buttonAnimation="slide-up"
          avatars={[
            { src: "http://img.b2bpic.net/free-photo/portrait-professional-confident-young-woman-working-retail-business-industry-promote-company-advertise-join-her-team-smiling-self-assured-pleased-camera-stand-hall_197531-22167.jpg", alt: "Client 1" },
            { src: "http://img.b2bpic.net/free-photo/portrait-confident-businessman_107420-84879.jpg", alt: "Client 2" },
            { src: "http://img.b2bpic.net/free-photo/man-portrait-posing-loft-modern-space_158595-5369.jpg", alt: "Client 3" }
          ]}
          avatarText="Join 50+ UAE businesses"
          imageSrc="http://img.b2bpic.net/free-vector/gradient-ui-ux-landing-page_52683-70252.jpg"
          imageAlt="Nebula Studio web design dashboard"
          mediaAnimation="slide-up"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          tag="Why Choose Nebula Studio"
          tagIcon={Star}
          tagAnimation="slide-up"
          title="Speed meets quality. We deliver beautiful websites that convert, without the long wait times."
          useInvertedBackground={false}
          buttons={[
            { text: "Start Your Project", href: "https://wa.me/971XXXXXXXXX" }
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardNineteen
          title="Our 24-Hour Process"
          description="From concept to launch, we follow a streamlined process designed for speed and quality."
          tag="How We Work"
          tagIcon={Workflow}
          tagAnimation="slide-up"
          features={[
            {
              id: 1,
              tag: "Phase One",              title: "Design & Strategy",              subtitle: "Your vision, our expertise.",              description: "We begin with a strategic consultation to understand your business goals, target audience, and unique value proposition. Our designers create stunning mockups and wireframes that prioritize lead conversion.",              imageSrc: "http://img.b2bpic.net/free-vector/advertising-agency-infographic-template_23-2150741080.jpg",              imageAlt: "Design and strategy phase"
            },
            {
              id: 2,
              tag: "Phase Two",              title: "Development & Build",              subtitle: "Code that converts.",              description: "Our expert developers build your site using the latest technologies, optimizing for speed, mobile responsiveness, and SEO. Every element is coded for performance and user engagement.",              imageSrc: "http://img.b2bpic.net/free-photo/software-web-developer-coding-html-script-with-online-cloud-server-programming-firewall-security-learning-new-user-interface-terminal-window-with-code-language-application_482257-48034.jpg",              imageAlt: "Development and coding phase"
            },
            {
              id: 3,
              tag: "Phase Three",              title: "Testing & Launch",              subtitle: "Ready to go live.",              description: "We thoroughly test across devices and browsers, fix any issues, and deploy your site. You get a live, fully functional website that's ready to capture leads from day one.",              imageSrc: "http://img.b2bpic.net/free-vector/business-landing-page_52683-9429.jpg",              imageAlt: "Testing and launch phase"
            }
          ]}
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardOne
          title="Nebula Studio By The Numbers"
          description="Proven results from businesses across UAE"
          tag="Our Impact"
          tagIcon={TrendingUp}
          tagAnimation="slide-up"
          metrics={[
            { id: "1", value: "24", title: "Hours", description: "Average website delivery time", icon: Zap },
            { id: "2", value: "50", title: "Plus", description: "Happy clients and growing", icon: Users },
            { id: "3", value: "3x", title: "Average", description: "Lead increase within first month", icon: ArrowUp },
            { id: "4", value: "98", title: "Percent", description: "Client satisfaction rate", icon: Award }
          ]}
          gridVariant="bento-grid"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardFive
          title="What Our Clients Say"
          description="Real feedback from UAE businesses who've partnered with Nebula Studio"
          tag="Client Success Stories"
          tagIcon={MessageCircle}
          tagAnimation="slide-up"
          testimonials={[
            {
              id: "1",              name: "Fatima Al-Mansouri, Owner at Digital Commerce UAE",              date: "Date: November 2024",              title: "Delivered faster than expected, with stunning results",              quote: "Nebula Studio transformed our online presence in just 24 hours. The website they built is beautiful, fast, and has already brought in qualified leads. Their team is professional and easy to work with.",              tag: "E-Commerce",              avatarSrc: "http://img.b2bpic.net/free-photo/portrait-professional-confident-young-woman-working-retail-business-industry-promote-company-advertise-join-her-team-smiling-self-assured-pleased-camera-stand-hall_197531-22167.jpg",              avatarAlt: "Fatima Al-Mansouri",              imageSrc: "http://img.b2bpic.net/free-photo/portrait-professional-confident-young-woman-working-retail-business-industry-promote-company-advertise-join-her-team-smiling-self-assured-pleased-camera-stand-hall_197531-22167.jpg"
            },
            {
              id: "2",              name: "Mohammed Al-Zarooni, CEO at Tech Innovations LLC",              date: "Date: October 2024",              title: "Outstanding service and incredible speed",              quote: "We needed a website urgently for our product launch. Nebula Studio not only met the 24-hour deadline but delivered something we didn't expect—a site that actually converts. Highly recommended for any Dubai business.",              tag: "Tech Startup",              avatarSrc: "http://img.b2bpic.net/free-photo/portrait-confident-businessman_107420-84879.jpg",              avatarAlt: "Mohammed Al-Zarooni",              imageSrc: "http://img.b2bpic.net/free-photo/portrait-confident-businessman_107420-84879.jpg"
            },
            {
              id: "3",              name: "Leila Saeed, Marketing Director at Dubai Retail Co",              date: "Date: September 2024",              title: "Professional, fast, and results-driven",              quote: "Working with Nebula Studio was a game-changer for us. They understood our business immediately and created a website that reflects our brand perfectly. The lead quality has improved significantly since launch.",              tag: "Retail",              avatarSrc: "http://img.b2bpic.net/free-photo/man-portrait-posing-loft-modern-space_158595-5369.jpg",              avatarAlt: "Leila Saeed",              imageSrc: "http://img.b2bpic.net/free-photo/man-portrait-posing-loft-modern-space_158595-5369.jpg"
            },
            {
              id: "4",              name: "Ahmed Hassan, Founder at Services Hub Middle East",              date: "Date: August 2024",              title: "Best investment for our online growth",              quote: "I was skeptical about getting a quality site in 24 hours, but Nebula Studio proved me wrong. The website is SEO-optimized, mobile-friendly, and designed to capture leads. Worth every dirham.",              tag: "Services",              avatarSrc: "http://img.b2bpic.net/free-photo/two-businesswomen-working-cafe_1157-26386.jpg",              avatarAlt: "Ahmed Hassan",              imageSrc: "http://img.b2bpic.net/free-photo/two-businesswomen-working-cafe_1157-26386.jpg"
            },
            {
              id: "5",              name: "Sara Al-Mansoori, GM at Marketing Agency Pro",              date: "Date: July 2024",              title: "Exceptional quality delivered at lightning speed",              quote: "Nebula Studio is exactly what the UAE business market needed. Fast turnaround, premium design, and genuine focus on conversion. Our clients are now asking who built our site.",              tag: "Agency",              avatarSrc: "http://img.b2bpic.net/free-photo/solar-panels-industry-technician-high-tech-factory-inspection-quality-control-production_482257-132256.jpg",              avatarAlt: "Sara Al-Mansoori",              imageSrc: "http://img.b2bpic.net/free-photo/solar-panels-industry-technician-high-tech-factory-inspection-quality-control-production_482257-132256.jpg"
            },
            {
              id: "6",              name: "Hassan Al-Kaabi, Owner at Real Estate Solutions UAE",              date: "Date: June 2024",              title: "Fast, professional, and incredibly effective",              quote: "We launched our new website in record time thanks to Nebula Studio. The team was responsive, professional, and delivered beyond expectations. Our lead generation has tripled.",              tag: "Real Estate",              avatarSrc: "http://img.b2bpic.net/free-photo/beautiful-young-businesswoman-smiling-camera_74855-3966.jpg",              avatarAlt: "Hassan Al-Kaabi",              imageSrc: "http://img.b2bpic.net/free-photo/beautiful-young-businesswoman-smiling-camera_74855-3966.jpg"
            }
          ]}
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <FeatureCardTen
          title="Ramadan Special Offer - AED 1,499"
          description="Get a professional, conversion-focused website delivered in 24 hours at an unbeatable price"
          tag="Limited Time Offer"
          tagIcon={Gift}
          tagAnimation="slide-up"
          features={[
            {
              id: "1",              title: "Basic Website Package",              description: "Perfect for startups and small businesses looking to establish their online presence with a professional, fast-loading website.",              media: { imageSrc: "http://img.b2bpic.net/free-vector/advertising-agency-infographic-template_23-2150741080.jpg" },
              items: [
                { icon: CheckCircle, text: "5 Professional Pages" },
                { icon: CheckCircle, text: "Mobile Responsive Design" },
                { icon: CheckCircle, text: "SEO Optimized" },
                { icon: CheckCircle, text: "WhatsApp Integration" }
              ],
              reverse: false
            },
            {
              id: "2",              title: "Professional Website Package",              description: "Ideal for growing businesses that need lead generation, custom forms, and advanced features to scale online.",              media: { imageSrc: "http://img.b2bpic.net/free-photo/software-web-developer-coding-html-script-with-online-cloud-server-programming-firewall-security-learning-new-user-interface-terminal-window-with-code-language-application_482257-48034.jpg" },
              items: [
                { icon: CheckCircle, text: "Up to 10 Pages" },
                { icon: CheckCircle, text: "Advanced Lead Capture Forms" },
                { icon: CheckCircle, text: "Email Integration" },
                { icon: CheckCircle, text: "24-Hour Support" }
              ],
              reverse: true
            },
            {
              id: "3",              title: "Premium E-Commerce Package",              description: "For businesses ready to sell online with secure payment processing, inventory management, and full e-commerce capabilities.",              media: { imageSrc: "http://img.b2bpic.net/free-vector/business-landing-page_52683-9429.jpg" },
              items: [
                { icon: CheckCircle, text: "Full E-Commerce Setup" },
                { icon: CheckCircle, text: "Secure Payment Gateway" },
                { icon: CheckCircle, text: "Inventory Management" },
                { icon: CheckCircle, text: "Priority Support" }
              ],
              reverse: false
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactText
          text="Ready to launch your website in 24 hours? Let's turn your vision into reality and start capturing leads today."
          animationType="entrance-slide"
          buttons={[
            { text: "Chat with us on WhatsApp", href: "https://wa.me/971XXXXXXXXX" },
            { text: "Schedule a Consultation", href: "https://wa.me/971XXXXXXXXX" }
          ]}
          background={{ variant: "plain" }}
          useInvertedBackground={false}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterCard
          logoText="Nebula Studio"
          copyrightText="© 2024 Nebula Studio. Websites delivered in 24 hours. All rights reserved."
          socialLinks={[
            { icon: Instagram, href: "https://instagram.com/nebulastudiodubai", ariaLabel: "Follow us on Instagram" },
            { icon: Linkedin, href: "https://linkedin.com/company/nebula-studio", ariaLabel: "Connect with us on LinkedIn" },
            { icon: Mail, href: "mailto:hello@nebulastudio.ae", ariaLabel: "Email us" }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
