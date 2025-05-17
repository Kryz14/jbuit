import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Swiper from "swiper";
import "swiper/css";

export default function PortfolioDetails() {
  useEffect(() => {
    new Swiper(".init-swiper", {
      loop: true,
      speed: 600,
      autoplay: {
        delay: 5000,
      },
      slidesPerView: "auto",
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
    });
  }, []);

  return (
    <>
      <Head>
        <title>Portfolio Details - GP</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <link rel="icon" href="/assets/img/favicon.png" />
      </Head>

      <header id="header" className="header d-flex align-items-center position-relative">
        <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
          <Link href="/" className="logo d-flex align-items-center me-auto me-lg-0">
            <h1 className="sitename">GP</h1>
            <span>.</span>
          </Link>

          <nav id="navmenu" className="navmenu">
            <ul>
              <li><Link href="#hero">Home</Link></li>
              <li><Link href="#about">About</Link></li>
              <li><Link href="#services">Services</Link></li>
              <li><Link href="#portfolio">Portfolio</Link></li>
              <li><Link href="#team">Team</Link></li>
              <li className="dropdown">
                <a href="#"><span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                <ul>
                  <li><a href="#">Dropdown 1</a></li>
                  <li className="dropdown">
                    <a href="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                    <ul>
                      <li><a href="#">Deep Dropdown 1</a></li>
                      <li><a href="#">Deep Dropdown 2</a></li>
                      <li><a href="#">Deep Dropdown 3</a></li>
                      <li><a href="#">Deep Dropdown 4</a></li>
                      <li><a href="#">Deep Dropdown 5</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Dropdown 2</a></li>
                  <li><a href="#">Dropdown 3</a></li>
                  <li><a href="#">Dropdown 4</a></li>
                </ul>
              </li>
              <li><Link href="#contact">Contact</Link></li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>

          <Link className="btn-getstarted" href="/#about">Get Started</Link>
        </div>
      </header>

      <main className="main">
        <div className="page-title" data-aos="fade">
          <div className="heading">
            <div className="container">
              <div className="row d-flex justify-content-center text-center">
                <div className="col-lg-8">
                  <h1>Portfolio Details</h1>
                  <p className="mb-0">Odio et unde deleniti... Sit quaerat ipsum dolorem.</p>
                </div>
              </div>
            </div>
          </div>
          <nav className="breadcrumbs">
            <div className="container">
              <ol>
                <li><Link href="/">Home</Link></li>
                <li className="current">Portfolio Details</li>
              </ol>
            </div>
          </nav>
        </div>

        <section id="portfolio-details" className="portfolio-details section">
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row gy-4">
              <div className="col-lg-8">
                <div className="portfolio-details-slider swiper init-swiper">
                  <div className="swiper-wrapper align-items-center">
                    {["app-1.jpg", "product-1.jpg", "branding-1.jpg", "books-1.jpg"].map((img, index) => (
                      <div className="swiper-slide" key={index}>
                        <Image src={`/assets/img/portfolio/${img}`} alt="slide" width={800} height={500} />
                      </div>
                    ))}
                  </div>
                  <div className="swiper-pagination"></div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="portfolio-info" data-aos="fade-up" data-aos-delay="200">
                  <h3>Project information</h3>
                  <ul>
                    <li><strong>Category</strong>: Web design</li>
                    <li><strong>Client</strong>: ASU Company</li>
                    <li><strong>Project date</strong>: 01 March, 2020</li>
                    <li><strong>Project URL</strong>: <a href="#">www.example.com</a></li>
                  </ul>
                </div>
                <div className="portfolio-description" data-aos="fade-up" data-aos-delay="300">
                  <h2>Exercitationem repudiandae officiis neque suscipit</h2>
                  <p>Autem ipsum nam porro corporis rerum... Sequi nulla at esse enim cum deserunt eius.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
