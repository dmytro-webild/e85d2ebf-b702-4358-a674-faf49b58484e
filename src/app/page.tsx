"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FeatureCardTwentyThree from '@/components/sections/feature/FeatureCardTwentyThree';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import { Building2 } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="compact"
        sizing="mediumLarge"
        background="blurBottom"
        cardStyle="glass-depth"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",          id: "hero"},
        {
          name: "About",          id: "about"},
        {
          name: "Services",          id: "services"},
        {
          name: "Pricing",          id: "pricing"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="DIEGO GALVEZ AYUSO LIMITED"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardRotatedCarousel
      background={{
        variant: "plain"}}
      title="Residential Architectural Design & Planning Services in London"
      description="We help homeowners and property developers design, plan and deliver high-quality residential projects including home extensions, loft conversions and new build developments."
      buttons={[
        {
          text: "Request a Quote",          href: "#contact"},
      ]}
      carouselItems={[
        {
          id: "1",          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-shot-apartment-with-different-color-doors-daytime_181624-10553.jpg",          imageAlt: "Modern London house exterior architecture"},
        {
          id: "2",          imageSrc: "http://img.b2bpic.net/free-photo/happy-african-american-lady-safety-helmet-standing-near-model-building_23-2148039866.jpg",          imageAlt: "Architect working on blueprints"},
        {
          id: "3",          imageSrc: "http://img.b2bpic.net/free-photo/young-people-watching-smartphone-office_23-2147668943.jpg",          imageAlt: "Interior of a modern home extension"},
        {
          id: "4",          imageSrc: "http://img.b2bpic.net/free-photo/modern-interior-lobby-with-uncommon-furniture_1262-3576.jpg",          imageAlt: "Modern loft conversion interior design"},
        {
          id: "5",          imageSrc: "http://img.b2bpic.net/free-vector/government-buildings-isometric-infographic-set_1284-14204.jpg",          imageAlt: "Architectural model of a residential building"},
        {
          id: "6",          imageSrc: "http://img.b2bpic.net/free-photo/man-showing-blueprint-his-female-colleagues-workplace_23-2148204012.jpg",          imageAlt: "Architects collaborating in a design studio"},
      ]}
      autoPlay={true}
      autoPlayInterval={4000}
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={true}
      tag="About Us"
      title="DIEGO GALVEZ AYUSO LIMITED"
      description="A London-based architectural practice specialising in residential architecture and planning applications. We work with homeowners, landlords, and small property developers."
      subdescription="We provide architectural drawings, planning permission support, building regulations drawings, and project guidance. Our commitment includes navigating London planning regulations, offering clear and transparent pricing, taking a personal approach to each project, ensuring fast turnaround times, and delivering professional drawings and documentation."
      icon={Building2}
      imageSrc="http://img.b2bpic.net/free-photo/crop-people-near-tablet-blueprints_23-2147785604.jpg"
      mediaAnimation="blur-reveal"
      imageAlt="architect working on detailed plans"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwentyThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: "1",          title: "Home Extensions",          tags: [
            "Increase living space and property value."],
          imageSrc: "http://img.b2bpic.net/free-photo/happy-senior-man-communicating-with-courier-who-is-delivering-packages-his-home_637285-2345.jpg",          imageAlt: "modern house extension exterior render"},
        {
          id: "2",          title: "Loft Conversions",          tags: [
            "Turn unused loft space into functional living areas."],
          imageSrc: "http://img.b2bpic.net/free-photo/living-room-background-zoom-calls_23-2149684449.jpg",          imageAlt: "stylish loft conversion interior bedroom"},
        {
          id: "3",          title: "Planning Permission Drawings",          tags: [
            "Improve chances of planning approval."],
          imageSrc: "http://img.b2bpic.net/free-photo/blueprints-near-calculator-compasses_23-2147785565.jpg",          imageAlt: "architectural drawings planning application"},
        {
          id: "4",          title: "Building Regulations Drawings",          tags: [
            "Ensure your project meets UK building regulations."],
          imageSrc: "http://img.b2bpic.net/free-photo/two-colleagues-working-project_114579-2770.jpg",          imageAlt: "construction details drawing blueprint"},
      ]}
      title="Our Architectural Services"
      description="From initial design concepts to final regulatory approvals, we offer comprehensive services to bring your vision to life."
      buttons={[
        {
          text: "Contact Us",          href: "#contact"},
      ]}
    />
  </div>

  <div id="process" data-section="process">
      <MetricCardFourteen
      useInvertedBackground={true}
      title="Our Simple Process"
      tag="How It Works"
      metrics={[
        {
          id: "1",          value: "01",          description: "Initial Consultation: Discuss your project and requirements."},
        {
          id: "2",          value: "02",          description: "Site Survey & Concept Design: We prepare initial drawings and design concepts."},
        {
          id: "3",          value: "03",          description: "Planning & Technical Drawings: We prepare and submit planning and building regulation drawings."},
        {
          id: "4",          value: "04",          description: "Project Support: We support you and your builder during construction if required."},
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardOne
      animationType="depth-3d"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "basic",          badge: "Value",          price: "£495",          subtitle: "Initial consultation, basic layout drawings, project advice.",          features: [
            "Initial consultation",            "Basic layout drawings",            "Project advice"],
        },
        {
          id: "standard",          badge: "Popular",          price: "£1,200",          subtitle: "Measured survey, planning drawings, planning application support.",          features: [
            "Measured survey",            "Planning drawings",            "Planning application support"],
        },
        {
          id: "full-service",          badge: "Premium",          price: "£2,500",          subtitle: "Measured survey, planning drawings, building regulations drawings, project guidance.",          features: [
            "Measured survey",            "Planning drawings",            "Building regulations drawings",            "Project guidance"],
        },
      ]}
      title="Flexible Pricing Packages"
      description="Our transparent pricing ensures clarity and value for every project, from initial consultation to full service. Prices are examples and may vary depending on project size and location."
      buttons={[
        {
          text: "Request a Quote",          href: "#contact"},
      ]}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={true}
      background={{
        variant: "plain"}}
      text="Contact Us - DIEGO GALVEZ AYUSO LIMITED, Director: Diego Gálvez Ayuso, Company number: 16847578, Registered office address: 47 Carnaby Street, London, England, W1F 9PT, Email: info@diegogalvezayuso.co.uk, Phone: +44 20 7946 0857, Business hours: Monday – Friday, 9:00 – 17:00. We look forward to hearing about your project! Please provide your Name, Phone, Email, and Project Description below and click 'Send Message'. We will contact you shortly."
      buttons={[
        {
          text: "Send Message"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Company Info",          items: [
            {
              label: "DIEGO GALVEZ AYUSO LIMITED",              href: "#"},
            {
              label: "Company Number: 16847578",              href: "#"},
            {
              label: "47 Carnaby Street, London, W1F 9PT",              href: "#"},
          ],
        },
        {
          title: "Contact Us",          items: [
            {
              label: "info@diegogalvezayuso.co.uk",              href: "mailto:info@diegogalvezayuso.co.uk"},
            {
              label: "+44 20 7946 0857",              href: "tel:+442079460857"},
          ],
        },
        {
          title: "Legal",          items: [
            {
              label: "Privacy Policy",              href: "#"},
            {
              label: "Terms & Conditions",              href: "#"},
            {
              label: "Contact",              href: "#contact"},
          ],
        },
      ]}
      logoText="DIEGO GALVEZ AYUSO LIMITED"
      copyrightText="© 2026 DIEGO GALVEZ AYUSO LIMITED. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
