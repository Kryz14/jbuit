import React, { useState, useEffect, useRef } from 'react';
import Isotope from 'isotope-layout';
import 'bootstrap-icons/font/bootstrap-icons.css';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.css';

const App = () => {
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);
  const toggleMobileNav = () => setIsMobileNavActive(!isMobileNavActive);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  


  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [contactStatus, setContactStatus] = useState({ loading: false, error: false, sent: false });
  const [newsletterStatus, setNewsletterStatus] = useState({ loading: false, error: false, sent: false });

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactForm(prev => ({ ...prev, [name]: value }));
  };
  const handleDropdownToggle = (e) => {
  e.preventDefault(); // Stop page from jumping
  setIsDropdownOpen(prev => !prev);
};

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setContactStatus({ loading: true, error: false, sent: false });

    setTimeout(() => {
      setContactStatus({ loading: false, error: false, sent: true });
      setContactForm({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    setNewsletterStatus({ loading: true, error: false, sent: false });

    setTimeout(() => {
      setNewsletterStatus({ loading: false, error: false, sent: true });
      setNewsletterEmail('');
    }, 1000);
  };

  // --- ISOTOPE ---
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState('*');

  // Handle filter change
  const handleFilterChange = (key) => {
    setFilterKey(key);
    if (isotope.current) {
      const filterValue = key === '*' ? key : `.filter-${key}`;
      isotope.current.arrange({ filter: filterValue });
    }
  };

  // Initialize Isotope and GLightbox
  useEffect(() => {
    isotope.current = new Isotope('.isotope-container', {
      itemSelector: '.portfolio-item',
      layoutMode: 'masonry'
    });

    const lightbox = GLightbox({ selector: '.glightbox' });

    return () => {
      isotope.current?.destroy();
      lightbox.destroy();
    };
  }, []);

  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle dropdown toggle for mobile
  

  // Handle smooth scrolling for nav items
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      setIsMobileNavActive(false); // Close mobile menu after clicking
    }
  };
  const [isVisible, setIsVisible] = useState(false);

useEffect(() => {
  const toggleVisibility = () => {
    setIsVisible(window.scrollY > 300);
  };

  window.addEventListener('scroll', toggleVisibility);
  return () => window.removeEventListener('scroll', toggleVisibility);
}, []);

  return (
    <>
      <div className={isMobileNavActive ? 'mobile-nav-active' : ''}>
        <header id="header" className={`header fixed-top ${isScrolled ? 'scrolled' : ''}`}>
          <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
            <a href="index.html" className="logo d-flex align-items-center me-auto me-lg-0">
              <h1 className="sitename">Jbuit</h1>
              <span>.</span>
            </a>

            <nav id="navmenu" className={`navmenu ${isMobileNavActive ? 'mobile-nav-active' : ''}`}>
              <ul>
                <li><a href="#hero" className="active" onClick={(e) => handleNavClick(e, '#hero')}>Home</a></li>
                <li><a href="#about" onClick={(e) => handleNavClick(e, '#about')}>Who we are</a></li>
                <li><a href="#services" onClick={(e) => handleNavClick(e, '#services')}>What we offer</a></li>
                <li><a href="#portfolio" onClick={(e) => handleNavClick(e, '#portfolio')}>Pricing</a></li>
                <li><a href="#team" onClick={(e) => handleNavClick(e, '#team')}>Testimonial</a></li>
                <li className="dropdown">
  <a href="#" onClick={handleDropdownToggle}>
    <span>Our Portfolio</span> 
    <i className="bi bi-chevron-down toggle-dropdown"></i>
  </a>
  <ul style={{ display: isDropdownOpen ? 'block' : 'none' }}>
    <li><a href="#">UI/UX</a></li>
    <li><a href="#">Web Development</a></li>
    <li><a href="#">Mobile App Development</a></li>
  </ul>
</li>

                <li><a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Contact</a></li>
              </ul>
              <i 
                className={`mobile-nav-toggle d-xl-none bi ${isMobileNavActive ? 'bi-x' : 'bi-list'}`}
                onClick={toggleMobileNav}
              />
            </nav>

            <a className="btn-getstarted d-block d-xl-inline-block" href="index.html#about">Get Started</a>
          </div>
        </header>
        </div>
        <main className="main">

          {/* Hero Section */}
          <section id="hero" className="hero section dark-background">

            <img src="assets/img/hero-bg.jpg" alt="" data-aos="fade-in" style={{
              width: "100vw",
              height: "100vh",
              objectFit: "cover",
            }}/>

            <div className="container">
              <div className="row justify-content-center text-center" data-aos="fade-up" data-aos-delay="100">
                <div className="col-xl-6 col-lg-8">
                  <h2>Powerful Digital Solutions With GP<span>.</span></h2>
                  <p>We are team of talented digital marketers</p>
                  
                  {/* Scroll down animation */}
                  <div className="scroll-down-animation mt-5">
                    <a href="#about" className="scroll-down">
                      <span className="mouse">
                        <span className="wheel"></span>
                      </span>
                      <div className="arrows">
                        <span className="arrow-down"></span>
                        <span className="arrow-down"></span>
                        <span className="arrow-down"></span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className="row gy-4 mt-5 justify-content-center" data-aos="fade-up" data-aos-delay="200">
                <div className="col-xl-2 col-md-4" data-aos="fade-up" data-aos-delay="300">
                  <div className="icon-box">
                    <i className="bi bi-binoculars"></i>
                    <h3><a href="">Lorem Ipsum</a></h3>
                  </div>
                </div>
                <div className="col-xl-2 col-md-4" data-aos="fade-up" data-aos-delay="400">
                  <div className="icon-box">
                    <i className="bi bi-bullseye"></i>
                    <h3><a href="">Dolor Sitema</a></h3>
                  </div>
                </div>
                <div className="col-xl-2 col-md-4" data-aos="fade-up" data-aos-delay="500">
                  <div className="icon-box">
                    <i className="bi bi-fullscreen-exit"></i>
                    <h3><a href="">Sedare Perspiciatis</a></h3>
                  </div>
                </div>
                <div className="col-xl-2 col-md-4" data-aos="fade-up" data-aos-delay="600">
                  <div className="icon-box">
                    <i className="bi bi-card-list"></i>
                    <h3><a href="">Magni Dolores</a></h3>
                  </div>
                </div>
                <div className="col-xl-2 col-md-4" data-aos="fade-up" data-aos-delay="700">
                  <div className="icon-box">
                    <i className="bi bi-gem"></i>
                    <h3><a href="">Nemos Enimade</a></h3>
                  </div>
                </div>
              </div>
            </div>
          </section>{/* End Hero Section */}

          {/* About Section */}
          <section id="about" className="about section">
            <div className="container" data-aos="fade-up" data-aos-delay="100">
              <div className="row gy-4">
                <div className="col-lg-6 order-1 order-lg-2">
                  <img src="assets/img/about.jpg" className="img-fluid" alt="" />
                </div>
                <div className="col-lg-6 order-2 order-lg-1 content">
                  <h3>Voluptatem dignissimos provident</h3>
                  <p className="fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                  </p>
                  <ul>
                    <li><i className="bi bi-check2-all"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
                    <li><i className="bi bi-check2-all"></i> <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
                    <li><i className="bi bi-check2-all"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</span></li>
                  </ul>
                  <p>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
                  </p>
                </div>
              </div>
            </div>
          </section>{/* End About Section */}

          {/* Features Section */}
          <section id="features" className="features section">
            <div className="container">
              <div className="row gy-4">
                <div className="features-image col-lg-6" data-aos="fade-up" data-aos-delay="100">
                  <img src="assets/img/features-bg.jpg" alt="" />
                </div>
                <div className="col-lg-6">
                  <div className="features-item d-flex ps-0 ps-lg-3 pt-4 pt-lg-0" data-aos="fade-up" data-aos-delay="200">
                    <i className="bi bi-archive flex-shrink-0"></i>
                    <div>
                      <h4>Est labore ad</h4>
                      <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                    </div>
                  </div>{/* End Features Item*/}

                  <div className="features-item d-flex mt-5 ps-0 ps-lg-3" data-aos="fade-up" data-aos-delay="300">
                    <i className="bi bi-basket flex-shrink-0"></i>
                    <div>
                      <h4>Harum esse qui</h4>
                      <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                    </div>
                  </div>{/* End Features Item*/}

                  <div className="features-item d-flex mt-5 ps-0 ps-lg-3" data-aos="fade-up" data-aos-delay="400">
                    <i className="bi bi-broadcast flex-shrink-0"></i>
                    <div>
                      <h4>Aut occaecati</h4>
                      <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                    </div>
                  </div>{/* End Features Item*/}

                  <div className="features-item d-flex mt-5 ps-0 ps-lg-3" data-aos="fade-up" data-aos-delay="500">
                    <i className="bi bi-camera-reels flex-shrink-0"></i>
                    <div>
                      <h4>Beatae veritatis</h4>
                      <p>Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta</p>
                    </div>
                  </div>{/* End Features Item*/}
                </div>
              </div>
            </div>
          </section>{/* End Features Section */}

          {/* Services Section */}
          <section id="services" className="services section">
            {/* Section Title */}
            <div className="container section-title" data-aos="fade-up">
              <h2>Services</h2>
              <p>Check our Services</p>
            </div>{/* End Section Title */}

            <div className="container">
              <div className="row gy-4">
                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                  <div className="service-item position-relative">
                    <div className="icon">
                      <i className="bi bi-activity"></i>
                    </div>
                    <a href="service-details.html" className="stretched-link">
                      <h3>Nesciunt Mete</h3>
                    </a>
                    <p>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.</p>
                  </div>
                </div>{/* End Service Item */}

                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                  <div className="service-item position-relative">
                    <div className="icon">
                      <i className="bi bi-broadcast"></i>
                    </div>
                    <a href="service-details.html" className="stretched-link">
                      <h3>Eosle Commodi</h3>
                    </a>
                    <p>Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.</p>
                  </div>
                </div>{/* End Service Item */}

                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                  <div className="service-item position-relative">
                    <div className="icon">
                      <i className="bi bi-easel"></i>
                    </div>
                    <a href="service-details.html" className="stretched-link">
                      <h3>Ledo Markt</h3>
                    </a>
                    <p>Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.</p>
                  </div>
                </div>{/* End Service Item */}

                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
                  <div className="service-item position-relative">
                    <div className="icon">
                      <i className="bi bi-bounding-box-circles"></i>
                    </div>
                    <a href="service-details.html" className="stretched-link">
                      <h3>Asperiores Commodit</h3>
                    </a>
                    <p>Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.</p>
                  </div>
                </div>{/* End Service Item */}

                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
                  <div className="service-item position-relative">
                    <div className="icon">
                      <i className="bi bi-calendar4-week"></i>
                    </div>
                    <a href="service-details.html" className="stretched-link">
                      <h3>Velit Doloremque</h3>
                    </a>
                    <p>Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.</p>
                  </div>
                </div>{/* End Service Item */}

                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
                  <div className="service-item position-relative">
                    <div className="icon">
                      <i className="bi bi-chat-square-text"></i>
                    </div>
                    <a href="service-details.html" className="stretched-link">
                      <h3>Dolori Architecto</h3>
                    </a>
                    <p>Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.</p>
                  </div>
                </div>{/* End Service Item */}
              </div>
            </div>
          </section>{/* End Services Section */}

          {/* Call To Action Section */}
          <section id="call-to-action" className="call-to-action section dark-background">
            <img src="assets/img/cta-bg.jpg" alt="" />
            <div className="container">
              <div className="row justify-content-center" data-aos="zoom-in" data-aos-delay="100">
                <div className="col-xl-10">
                  <div className="text-center">
                    <h3>Call To Action</h3>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <a className="cta-btn" href="#">Call To Action</a>
                  </div>
                </div>
              </div>
            </div>
          </section>{/* End Call To Action Section */}

          {/* Portfolio Section */}
           
        
        <section id="portfolio" className="portfolio section">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Portfolio</h2>
            <p>Check our Portfolio</p>
          </div>
          <div className="container">
            <div className="isotope-layout" data-default-filter="*">
              <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
                <li 
                  className={filterKey === '*' ? 'filter-active' : ''} 
                  onClick={() => handleFilterChange('*')}
                >
                  All
                </li>
                <li 
                  className={filterKey === 'app' ? 'filter-active' : ''} 
                  onClick={() => handleFilterChange('app')}
                >
                  App
                </li>
                <li 
                  className={filterKey === 'product' ? 'filter-active' : ''} 
                  onClick={() => handleFilterChange('product')}
                >
                  Card
                </li>
                <li 
                  className={filterKey === 'branding' ? 'filter-active' : ''} 
                  onClick={() => handleFilterChange('branding')}
                >
                  Web
                </li>
              </ul>
              <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                  <img src="assets/img/masonry-portfolio/masonry-portfolio-1.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>App 1</h4>
                    <p>Lorem ipsum, dolor sit</p>
                    <a href="assets/img/masonry-portfolio/masonry-portfolio-1.jpg" title="App 1" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                  <img src="assets/img/masonry-portfolio/masonry-portfolio-3.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>App 2</h4>
                    <p>Mobile application</p>
                    <a href="assets/img/masonry-portfolio/masonry-portfolio-3.jpg" title="App 2" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                  <img src="assets/img/masonry-portfolio/masonry-portfolio-2.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Card 1</h4>
                    <p>Business card design</p>
                    <a href="assets/img/masonry-portfolio/masonry-portfolio-2.jpg" title="Card 1" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                  <img src="assets/img/masonry-portfolio/masonry-portfolio-5.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Card 2</h4>
                    <p>Premium business cards</p>
                    <a href="assets/img/masonry-portfolio/masonry-portfolio-5.jpg" title="Card 2" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                  <img src="assets/img/masonry-portfolio/masonry-portfolio-4.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Web 1</h4>
                    <p>Website redesign</p>
                    <a href="assets/img/masonry-portfolio/masonry-portfolio-4.jpg" title="Web 1" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                  <img src="assets/img/masonry-portfolio/masonry-portfolio-6.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Web 2</h4>
                    <p>E-commerce solution</p>
                    <a href="assets/img/masonry-portfolio/masonry-portfolio-6.jpg" title="Web 2" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

          {/* Stats Section */}
          <section id="stats" className="stats section">
            <div className="container" data-aos="fade-up" data-aos-delay="100">
              <div className="row gy-4 align-items-center justify-content-between">
                <div className="col-lg-5">
                  <img src="assets/img/stats-img.jpg" alt="" className="img-fluid" />
                </div>

                <div className="col-lg-6">
                  <h3 className="fw-bold fs-2 mb-3">Voluptatem dignissimos provident quasi</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                  </p>

                  <div className="row gy-4">
                    <div className="col-lg-6">
                      <div className="stats-item d-flex">
                        <i className="bi bi-emoji-smile flex-shrink-0"></i>
                        <div>
                          <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter">232</span>
                          <p><strong>Happy Clients</strong> <span>consequuntur quae</span></p>
                        </div>
                      </div>
                    </div>{/* End Stats Item */}

                    <div className="col-lg-6">
                      <div className="stats-item d-flex">
                        <i className="bi bi-journal-richtext flex-shrink-0"></i>
                        <div>
                          <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter">521</span>
                          <p><strong>Projects</strong> <span>adipisci atque cum quia aut</span></p>
                        </div>
                      </div>
                    </div>{/* End Stats Item */}

                    <div className="col-lg-6">
                      <div className="stats-item d-flex">
                        <i className="bi bi-headset flex-shrink-0"></i>
                        <div>
                          <span data-purecounter-start="0" data-purecounter-end="1453" data-purecounter-duration="1" className="purecounter">1453</span>
                          <p><strong>Hours Of Support</strong> <span>aut commodi quaerat</span></p>
                        </div>
                      </div>
                    </div>{/* End Stats Item */}

                    <div className="col-lg-6">
                      <div className="stats-item d-flex">
                        <i className="bi bi-people flex-shrink-0"></i>
                        <div>
                          <span data-purecounter-start="0" data-purecounter-end="32" data-purecounter-duration="1" className="purecounter">32</span>
                          <p><strong>Hard Workers</strong> <span>rerum asperiores dolor</span></p>
                        </div>
                      </div>
                    </div>{/* End Stats Item */}

                  </div>

                </div>

              </div>

            </div>

          </section>{/* End Stats Section */}

          {/* Testimonials Section */}
          <section id="testimonials" className="testimonials section dark-background">

            <img src="assets/img/testimonials-bg.jpg" className="testimonials-bg" alt="" />

            <div className="container" data-aos="fade-up" data-aos-delay="100">

              <div className="swiper init-swiper">
                {/* Swiper configuration will be handled in React */}
                <div className="swiper-wrapper">

                  <div className="swiper-slide">
                    <div className="testimonial-item">
                      <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="" />
                      <h3>Saul Goodman</h3>
                      <h4>Ceo &amp; Founder</h4>
                      <div className="stars">
                        <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                      </div>
                      <p>
                        <i className="bi bi-quote quote-icon-left"></i>
                        <span>Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.</span>
                        <i className="bi bi-quote quote-icon-right"></i>
                      </p>
                    </div>
                  </div>{/* End testimonial item */}

                  {/* More testimonial items - shortened for brevity */}
                  {/* Add the rest of the testimonial slides */}

                </div>
                <div className="swiper-pagination"></div>
              </div>

            </div>

          </section>{/* End Testimonials Section */}

         

          <section id="contact" className="contact">
  <div className="container">
    <div className="row gy-4">
      {/* Left side: Contact Info */}
      <div className="col-lg-4">
        <div className="info-item d-flex">
          <div className="icon"><i className="bi bi-geo-alt-fill"></i></div>
          <div>
            <h4>Address</h4>
            <p>A108 Adam Street, New York, NY 535022</p>
          </div>
        </div>

        <div className="info-item d-flex">
          <div className="icon"><i className="bi bi-telephone-fill"></i></div>
          <div>
            <h4>Call Us</h4>
            <p>+1 5589 55488 55</p>
          </div>
        </div>

        <div className="info-item d-flex">
          <div className="icon"><i className="bi bi-envelope-fill"></i></div>
          <div>
            <h4>Email Us</h4>
            <p>info@example.com</p>
          </div>
        </div>
      </div>

      {/* Right side: Contact Form */}
      <div className="col-lg-8">
        <form onSubmit={handleContactSubmit} className="php-email-form">
          <div className="row gy-4">
            <div className="col-md-6">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Your Name"
                required
                value={contactForm.name}
                onChange={handleContactChange}
              />
            </div>

            <div className="col-md-6">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Your Email"
                required
                value={contactForm.email}
                onChange={handleContactChange}
              />
            </div>

            <div className="col-md-12">
              <input
                type="text"
                name="subject"
                className="form-control"
                placeholder="Subject"
                required
                value={contactForm.subject}
                onChange={handleContactChange}
              />
            </div>

            <div className="col-md-12">
              <textarea
                name="message"
                className="form-control"
                rows="6"
                placeholder="Message"
                required
                value={contactForm.message}
                onChange={handleContactChange}
              ></textarea>
            </div>

            <div className="col-md-12 text-center">
              {contactStatus.loading && <div className="loading">Loading</div>}
              {contactStatus.error && <div className="error-message">There was an error sending your message</div>}
              {contactStatus.sent && <div className="sent-message">Your message has been sent. Thank you!</div>}

              <button type="submit" className="btn btn-warning">Send Message</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>

      </main>

      <footer id="footer" className="footer dark-background">
        <div className="footer-top">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-4 col-md-6 footer-about">
                <a href="index.html" className="logo d-flex align-items-center">
                  <span className="sitename">GP</span>
                </a>
                <div className="footer-contact pt-3">
                  <p>A108 Adam Street</p>
                  <p>New York, NY 535022</p>
                  <p className="mt-3"><strong>Phone:</strong> <span>+1 5589 55488 55</span></p>
                  <p><strong>Email:</strong> <span>info@example.com</span></p>
                </div>
                <div className="social-links d-flex mt-4">
                  <a href="#"><i className="bi bi-twitter-x"></i></a>
                  <a href="#"><i className="bi bi-facebook"></i></a>
                  <a href="#"><i className="bi bi-instagram"></i></a>
                  <a href="#"><i className="bi bi-linkedin"></i></a>
                </div>
              </div>

              <div className="col-lg-2 col-md-3 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <a href="#"> Home</a></li>
                  <li><i className="bi bi-chevron-right"></i> <a href="#"> About us</a></li>
                  <li><i className="bi bi-chevron-right"></i> <a href="#"> Services</a></li>
                  <li><i className="bi bi-chevron-right"></i> <a href="#"> Terms of service</a></li>
                  <li><i className="bi bi-chevron-right"></i> <a href="#"> Privacy policy</a></li>
                </ul>
              </div>

              <div className="col-lg-2 col-md-3 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <a href="#"> Web Design</a></li>
                  <li><i className="bi bi-chevron-right"></i> <a href="#"> Web Development</a></li>
                  <li><i className="bi bi-chevron-right"></i> <a href="#"> Product Management</a></li>
                  <li><i className="bi bi-chevron-right"></i> <a href="#"> Marketing</a></li>
                  <li><i className="bi bi-chevron-right"></i> <a href="#"> Graphic Design</a></li>
                </ul>
              </div>

              <div className="col-lg-4 col-md-12 footer-newsletter">
                <h4>Our Newsletter</h4>
                <p>Subscribe to our newsletter and receive the latest news about our products and services!</p>
                <form onSubmit={handleNewsletterSubmit} className="php-email-form">
                  <div className="newsletter-form">
                    <input 
                      type="email" 
                      name="email"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      required
                    />
                    <input type="submit" value="Subscribe" />
                  </div>
                  {newsletterStatus.loading && <div className="loading">Loading</div>}
                  {newsletterStatus.error && <div className="error-message">There was an error with your subscription</div>}
                  {newsletterStatus.sent && <div className="sent-message">Your subscription request has been sent. Thank you!</div>}
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright">
          <div className="container text-center">
            <p>© <span>Copyright</span> <strong className="px-1 sitename">GP</strong> <span>All Rights Reserved</span></p>
            <div className="credits">
              Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
            </div>
          </div>
        </div>
      </footer>

            <a
  href="#"
  className={`scroll-top d-flex align-items-center justify-content-center ${isVisible ? 'active' : ''}`}
  onClick={(e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }}
>
  <i className="bi bi-arrow-up-short fs-3 text-white"></i>
</a>


     
    
    </>
  );
};

export default App;