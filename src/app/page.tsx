"use client";

import { ThemeProvider } from "@/components/theme/ThemeProvider";
import NavbarStyleFullscreen from "@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen";
import HeroBillboardTestimonial from "@/components/sections/hero/HeroBillboardTestimonial";
import { MessageCircle } from "lucide-react";

const navItems = [
  { name: "Home", id: "/" },
  { name: "About", id: "about" },
  { name: "Services", id: "services" },
  { name: "Contact", id: "contact" },
];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="medium"
      background="none"
      cardStyle="solid"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="glass"
      headingFontWeight="semibold"
    >
      <NavbarStyleFullscreen
        navItems={navItems}
        brandName="Nebula"
        bottomLeftText="Global Community"
        bottomRightText="hello@nebula.com"
      />
      <div id="hero" data-section="hero">
        <HeroBillboardTestimonial
          title="Professional Websites in 24 Hours"
          description="Get stunning, conversion-focused websites for UAE businesses delivered instantly with premium design and unmatched quality."
          tag="Fast & Affordable"
          imageSrc="/hero-image.jpg"
          imageAlt="Professional website showcase"
          mediaAnimation="slide-up"
          testimonials={[
            {
              name: "Ahmed Al Mansouri",              handle: "CEO, Tech Dubai",              testimonial: "Absolutely stunning work! They delivered exactly what we needed in record time.",              rating: 5,
              imageSrc: "/avatar-1.jpg"},
            {
              name: "Fatima Al Qasimi",              handle: "Marketing Director, UAE Retail",              testimonial: "Best investment for our business. The website converts!",              rating: 5,
              imageSrc: "/avatar-2.jpg"},
          ]}
          buttons={[
            {
              text: "Get Started",              href: "https://wa.me/971501234567"},
            {
              text: "View Portfolio",              href: "portfolio"},
          ]}
          background={{
            variant: "glowing-orb"}}
          buttonAnimation="slide-up"
        />
      </div>
    </ThemeProvider>
  );
}
