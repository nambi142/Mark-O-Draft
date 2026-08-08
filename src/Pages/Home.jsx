import React, { useRef, useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import "../Css/Home.css";
import { FaTools, FaClock, FaUsers, FaHome } from "react-icons/fa";
import { HiVolumeUp, HiVolumeOff } from "react-icons/hi";
import { Link } from "react-router-dom";

const Home = () => {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  };

  const heroImages = [
    "public/img/background/backgroundimg1.jpeg",
    "public/img/background/backgroundimg2.jpeg",
    "public/img/background/backgroundimg3.jpeg",
    "public/img/background/backgroundimg4.jpeg",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000); // change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const projects = [
    {
      img: "/project-img/IMG20240729131020.jpg",
      title: "Renovation & Remodelling",
      category: "Interior | Design",
    },
    {
      img: "/project-img/shed-works-ground.jpg",
      title: "Roofing Shed Fabrication Work Shed Work",
      category: "Architecture | Landscape",
    },
    {
      img: "/project-img/terres-roofing.jpg",
      title: "House Shed Work",
      category: "Luxury | Outdoor",
    },
  ];

  return (
    <div>
      {/* SEO Optimization */}
      <Helmet>
        <title>Markodraft Builders & Construction | Tirunelveli</title>

        <meta
          name="description"
          content="Markodraft Builders is a trusted construction company in Tirunelveli offering house construction, renovation, interior and exterior design services across Tamil Nadu."
        />

        <meta name="robots" content="index, follow" />

        <link rel="canonical" href="https://markodraft.com/" />

        <meta
          property="og:title"
          content="Best Builders in Tirunelveli | Markodraft Builders"
        />
        <meta
          property="og:description"
          content="Trusted construction company in Tirunelveli for house building, renovation, and interior works."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://markodraft.com/" />
        <meta
          property="og:image"
          content="https://markodraft.com/img/brand.jpeg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "HomeAndConstructionBusiness",
              "name": "Markodraft Builders",
              "url": "https://markodraft.com",
              "logo": "https://markodraft.com/img/brand.jpeg",
              "image": "https://markodraft.com/img/brand.jpeg",
              "description": "Trusted construction company in Tirunelveli offering house construction, renovation and interior services.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Tirunelveli",
                "addressRegion": "Tamil Nadu",
                "addressCountry": "IN"
              },
              "areaServed": "Tirunelveli",
              "telephone": "+918190859587",
              "sameAs": [
                "https://www.instagram.com/markodraftindia",
                "https://www.facebook.com/profile.php?id=61576484825469"
              ]
            }
          `}
        </script>
      </Helmet>

      {/* ---------- HERO IMAGE SLIDESHOW ---------- */}
      <div className="home-hero">
        {heroImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Construction slide ${index + 1}`}
            className={`bg-slide ${index === currentSlide ? "active" : ""}`}
          />
        ))}
      </div>

      {/* ---------- FEATURES SECTION ---------- */}
      <section className="features-section">
        <div className="features-inner">
          <h2 className="features-title">
            Markodraft - TOP BUILDING CONTRACTOR
          </h2>

          {/* Decorative line + House icon */}
          <div className="title-deco">
            <span className="deco-line"></span>
            <span className="deco-icon">
              <FaHome className="deco-house-icon" />
            </span>
            <span className="deco-line"></span>
          </div>

          <p className="features-subtitle">
            At Markodraft, we specialize in delivering high Premium-quality,
            on-time, and trusted construction services That start from Rs.1900
            to 3000 with Free Home Appliances, Solar and other advanced
            Technologies throuhout Tamilnadu. (Home, Warehouse, Commercial Shops
            and Cold storage)
          </p>

          {/* Services row */}
          <div className="services-row">
            <div className="feature-card">
              <div className="feature-icon-wrap">
                <FaTools className="feature-icon" />
              </div>
              <h3 className="feature-title">Best Quality</h3>
              <p className="feature-disc">
                We use premium materials and modern methods to ensure durability
                and superior finish.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrap">
                <FaClock className="feature-icon" />
              </div>
              <h3 className="feature-title">On Time</h3>
              <p className="feature-disc">
                Projects are always delivered within the agreed timeline without
                compromising quality.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrap">
                <FaUsers className="feature-icon" />
              </div>
              <h3 className="feature-title">Experienced</h3>
              <p className="feature-disc">
                Our expert team brings years of industry experience to every
                project we build.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- PROJECT SECTION ---------- */}
      <section className="featured-project">
        <div className="featured-overlay">
          <h2 className="featured-title">FEATURED PROJECT</h2>

          <div className="featured-slider">
            <div className="featured-track">
              {[...Array(2)].map((_, idx) =>
                projects.map((project, i) => (
                  <div className="project-card" key={`${idx}-${i}`}>
                    <img
                      src={project.img}
                      alt={project.title}
                      className="featured-img"
                    />
                    <div className="featured-hover">
                      <h3 className="featured-name">{project.title}</h3>
                      <p className="featured-category">{project.category}</p>
                    </div>
                  </div>
                )),
              )}
            </div>
          </div>

          <div className="featured-btn-wrap">
            <Link to="/Projects">
              <button className="featured-btn">ALL PROJECTS</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
