import React, { useEffect } from "react";
import { Element } from "react-scroll";
import Layout from "../components/Layout/Layout";
import About from "../components/Sections/About";
import Herosection from "../components/Sections/Herosection";
import SectionHeading from "../components/Items/SectionHeading";
import Skills from "../components/Sections/Skills";

import Services from "../components/Sections/Services";
import Portfolios from "../components/Sections/Portfolios";

import Contact from "../components/Sections/Contact";
import Languages from "../components/Sections/Languages";
import Educations from "../components/Sections/Educations";

import Experiences from "../components/Sections/Experiences";

function Homepage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <Element name="section-home">
        <Herosection />
      </Element>

      <Element name="section-about">
        <section className="shadow-blue white-bg padding">
          <SectionHeading title="About Me" />
          <About />
        </section>
      </Element>

      <Element name="section-skills">
        <section className="shadow-blue white-bg padding">
          <SectionHeading title="My skills" />
          <Skills />
        </section>
      </Element>

      <Element name="section-languages">
        <section className="shadow-blue white-bg padding">
          <SectionHeading title="Languages" />
          <Languages />
        </section>
      </Element>

      <Element name="section-services">
        <section className="shadow-blue white-bg padding">
          <SectionHeading title="Soft Skills" />
          <Services />
        </section>
      </Element>

      <Element name="section-experiences">
        <section className="shadow-blue white-bg padding">
          <SectionHeading title="Education" />
          <Educations />
        </section>
      </Element>

      <Element name="section-experiences">
        <section className="shadow-blue white-bg padding">
          <SectionHeading title="Work Experience" />
          <Experiences />
        </section>
      </Element>

      <Element name="section-portfolios">
        <section className="shadow-blue white-bg padding">
          <SectionHeading title="Portfolio" />
          <Portfolios />
        </section>
      </Element>

      {/* <Element name="section-pricing">
        <section className="shadow-blue white-bg padding">
          <SectionHeading title="Pricing table" />
          <PricingTable />
        </section>
      </Element> */}

      {/* <Element name="section-testimonials">
        <section className="shadow-blue white-bg padding">
          <SectionHeading title="Testimonials" />
          <Testimonials />
        </section>
      </Element> */}

      {/* <Element name="section-clients">
        <Clients />
      </Element> */}

      <Element name="section-contact">
        <section className="shadow-blue white-bg padding">
          <SectionHeading title="Get in touch" />
          <Contact />
        </section>
      </Element>
    </Layout>
  );
}

export default Homepage;
