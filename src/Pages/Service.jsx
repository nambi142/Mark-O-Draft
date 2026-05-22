import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "../Css/Service.css";
import {
  FaTools,
  FaUsers,
  FaHome,
  FaDraftingCompass,
  FaBuilding,
  FaCheckCircle,
} from "react-icons/fa";

const Service = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".service-card");

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            entry.target.style.setProperty("--delay", `${index * 0.15}s`);
            entry.target.classList.add("visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );

    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <div>
      <Helmet>
        <title>
          Construction Services in Tirunelveli | Markodraft Builders
        </title>

        <meta
          name="description"
          content="Markodraft Builders offers house construction, renovation, plumbing, electrical and interior design services in Tirunelveli."
        />

        <meta name="robots" content="index, follow" />

        <link rel="canonical" href="https://markodraft.com/service" />

        <meta
          property="og:title"
          content="Construction Services | Markodraft Builders"
        />
        <meta
          property="og:description"
          content="Complete building and renovation services in Tirunelveli."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://markodraft.com/service" />
        <meta
          property="og:image"
          content="https://markodraft.com/img/brand.jpeg"
        />

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Construction Service in Tirunelveli",
              "url": "https://markodraft.com/service",
              "serviceType": "Construction Service",
              "description": "House construction, renovation, plumbing, electrical, exterior, interior design, and civil engineering services in Tirunelveli.",
              "provider": {
                "@type": "HomeAndConstructionBusiness",
                "name": "Markodraft Builders",
                "url": "https://markodraft.com"
              },
              "areaServed": {
                "@type": "City",
                "name": "Tirunelveli"
              }
            }
          `}
        </script>
      </Helmet>

      {/* ---------- OUR SERVICES SECTION ---------- */}
      <section className="page-hero">
        <div className="hero-content">
          <h1 className="page-title">OUR SERVICES</h1>
          <p className="breadcrumb">
            <Link to="/" className="projects-home-link">
              Home
            </Link>{" "}
            » <span>Our Service</span>
          </p>
        </div>
      </section>

      <section className="our-services">
        <div className="container">
          {/* Section Heading */}
          <div className="services-heading">
            <h4 className="services-subtitle">What We Offer</h4>
            <h2 className="services-title">Our Services</h2>
            <p className="services-intro">
              At Markodraft, we provide a wide range of professional
              construction and design solutions. From interior decoration to
              full-scale commercial projects, we ensure quality, trust, and
              modern designs. Premium home construction services starting form
              1900 - 3000 per sq.ft. with teak wook finishing, fingerprint
              sensor doors, fire sppression system, anti-leak and
              water-absoption-proof walls and American-style modern
              design-delivering durable, const-effective construction that's
              truly worth the investment. 1 Lakh worth Home appliances for Fully
              free
            </p>
          </div>

          {/* Services Grid */}
          <div className="services-grid">
            {/* Service 1 */}
            <div className="service-card">
              <div className="service-icon-box">
                <FaHome className="service-icon" />
              </div>
              <h3 className="service-name">Interior & Decoration</h3>
              <p className="service-desc">
                We create modern, elegant, and customized interiors that bring
                life and comfort to your spaces.
              </p>
              <div className="service-img-box">
                <img
                  src="/img/interior-design.jpg"
                  alt="Interior & Decoration"
                />
              </div>
            </div>

            {/* Service 2 */}
            <div className="service-card">
              <div className="service-icon-box">
                <FaTools className="service-icon" />
              </div>
              <h3 className="service-name">Renovation & Remodeling</h3>
              <p className="service-desc">
                From small upgrades to full-scale renovations, we transform
                homes and offices with care.
              </p>
              <div className="service-img-box">
                <img src="/img/renovation.jpg" alt="Renovation & Remodeling" />
              </div>
            </div>

            {/* Service 3 */}
            <div className="service-card">
              <div className="service-icon-box">
                <FaDraftingCompass className="service-icon" />
              </div>
              <h3 className="service-name">Plumbing & Drawings</h3>
              <p className="service-desc">
                Detailed plumbing layouts and technical drawings to ensure
                flawless execution.
              </p>
              <div className="service-img-box">
                <img src="/img/plumbing.jpg" alt="Plumbing & Drawings" />
              </div>
            </div>

            {/* Service 4 */}
            <div className="service-card">
              <div className="service-icon-box">
                <FaCheckCircle className="service-icon" />
              </div>
              <h3 className="service-name">Plan Approval & Design</h3>
              <p className="service-desc">
                Get government approvals and professional designs for a smooth
                construction journey.
              </p>
              <div className="service-img-box">
                <img src="/img/planappruval.jpg" alt="Plan Approval & Design" />
              </div>
            </div>

            {/* Service 5 */}
            <div className="service-card">
              <div className="service-icon-box">
                <FaBuilding className="service-icon" />
              </div>
              <h3 className="service-name">Architectural Plan & 3D Design</h3>
              <p className="service-desc">
                Modern architectural planning with 3D visualization for clear
                project understanding.
              </p>
              <div className="service-img-box">
                <img
                  src="/img/3d-design.jpg"
                  alt="Architectural Plan & 3D Design"
                />
              </div>
            </div>

            {/* Service 6 */}
            <div className="service-card">
              <div className="service-icon-box">
                <FaUsers className="service-icon" />
              </div>
              <h3 className="service-name">
                Residential & Commercial Construction
              </h3>
              <p className="service-desc">
                Trusted construction for homes, offices, and commercial projects
                with lasting value.
              </p>
              <div className="service-img-box">
                <img
                  src="/img/commercial.jpg"
                  alt="Residential & Commercial Construction"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
