import React, { useEffect } from "react";
import { motion } from "framer-motion";
import PreLoader from "../components/PreLoader";
import { NavLink, Link } from "react-router-dom";
import { ReactComponent as ScrollSVG } from "../assets/images/down-scroll.svg";
import { ReactComponent as Triangle } from "../assets/images/triangle.svg";
import { boxHover, boxExit } from "../animations";
import Footer from "../components/Footer";
import AnimateEl from "../components/AnimateEl";

const transition = { duration: 1, ease: "easeInOut", delay: 0.8 };

const text1 = "I curate experiences";
const text2 = "with technology.";

const Home = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
    document.title = "Sharmil — Developer";
  }, []);

  return (
    <>
      <PreLoader />

      <motion.div
        exit={{ height: "100vh", transition }}
        className="transition2"
      />

      <div className="landing">
        <section className="landing__top">
          <div className="sub">Full-Stack Developer</div>
          <h1 className="landing__main">
            <span className="text-con">
              {text1.split("").map((t, i) => (
                <span key={i} className="text">
                  {t}
                </span>
              ))}
              <br />
              {text2.split("").map((t, i) => (
                <span key={i} className="text">
                  {t}
                </span>
              ))}
            </span>
          </h1>
          <h1 className="landing__main2">
            I curate experiences <br /> with technology.
          </h1>
          <div className="links">
            <NavLink className="item" to="/about">
              About Me
            </NavLink>
            <span className="item">—</span>
            <span className="item"><a href="#projects">My Projects</a></span>
          </div>

          <div className="scroll-down">
            <ScrollSVG />
          </div>

          <div className="shapes">
            <div className="main-circle" />
            <div className="shape shape-1" />
            <div className="shape shape-2">
              <Triangle />
            </div>
            <div className="shape shape-3" />
            <div className="shape shape-4" />
          </div>
        </section>

        <section className="landing__work">
          <AnimateEl>
            <div className="title" id="projects">
              My <br /> Projects -
            </div>
          </AnimateEl>
          <div className="boxes">
            <AnimateEl>
              <a
                onMouseEnter={boxHover}
                onMouseLeave={boxExit}
                className="box box-1"
                target="_blank"
                rel="noopener noreferrer"
                href="https://sharmil001.github.io/Music-Player/"
              >
                <div className="box-content">
                  <div className="box-anim p-title">Coding Music</div>
                  <div className="box-anim p-sub">
                    A website for the soothing & cool music.
                  </div>
                  <div className="box-anim link">View Project &#8594;</div>
                </div>

                <div className="box-image"></div>
              </a>
            </AnimateEl>
            <AnimateEl>
              <a
                href="https://python-food.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="box box-2"
                onMouseEnter={boxHover}
                onMouseLeave={boxExit}
              >
                <div className="box-content">
                  <div className="box-anim p-title">Digital Menu Cards</div>
                  <div className="box-anim p-sub">
                  Restaurants and Ordering System Using QR Code Scanning.
                  </div>
                  <div className="box-anim link">View Project &#8594;</div>
                </div>

                <div className="box-image"></div>
              </a>
            </AnimateEl>
            <AnimateEl>
              <a
                href="https://github.com/Sharmil001/Attendance_Marking_face_recognition"
                target="_blank"
                rel="noopener noreferrer"
                className="box box-3"
                onMouseEnter={boxHover}
                onMouseLeave={boxExit}
              >
                <div className="box-content">
                  <div className="box-anim p-title">Attendace System</div>
                  <div className="box-anim p-sub">
                  Smart attendace marking system using face recognition.
                  </div>
                  <div className="box-anim link">View Project &#8594;</div>
                </div>

                <div className="box-image"></div>
              </a>
            </AnimateEl>
            <AnimateEl>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={boxHover}
                onMouseLeave={boxExit}
                className="box box-4"
              >
                <div className="box-content">
                  <div className="box-anim p-title">Shopify</div>
                  <div className="box-anim p-sub">
                  Shopify is interactive UI for Ecommerce Website. 
                  </div>
                  <div className="box-anim link">Under Construction &#8594;</div>
                </div>

                <div className="box-image"></div>
              </a>
            </AnimateEl>
          </div>
          <a
            href="https://github.com/Sharmil001"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="more">
              <div className="btn-content">View more projects</div>
            </button>
          </a>
        </section>

        <section className="find-me">
          <div className="title">
            Find <br /> Me{" "}
            <span role="img" aria-label="find-emoji">
              🔎
            </span>
          </div>
          <div className="topic">PS: I also write, sometimes.</div>

          <div className="social-boxes">
            <a
              href="https://github.com/Sharmil001"
              target="_blank"
              rel="noopener noreferrer"
              className="box github"
            >
              <div className="content">
                <i className="fab fa-github-alt"></i>
                <div className="items">
                  <div className="name">Github</div>
                  <div className="user">/Sharmil001</div>
                </div>
              </div>
            </a>
            <a
              href="https://twitter.com/AdrojaSharmil"
              target="_blank"
              rel="noopener noreferrer"
              className="box twitter"
            >
              <div className="content">
                <i className="fab fa-twitter"></i>
                <div className="items">
                  <div className="name">Twitter</div>
                  <div className="user">/AdrojaSharmil</div>
                </div>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/sharmil-ml/"
              target="_blank"
              rel="noopener noreferrer"
              className="box linkedin"
            >
              <div className="content">
                <i className="fab fa-linkedin-in"></i>
                <div className="items">
                  <div className="name">Linkedin</div>
                  <div className="user">/sharmil-ml</div>
                </div>
              </div>
            </a>
            <a
              href="https://www.instagram.com/sharmil_adroja/"
              target="_blank"
              rel="noopener noreferrer"
              className="box instagram"
            >
              <div className="content">
                <i className="fab fa-instagram"></i>
                <div className="items">
                  <div className="name">Instagram</div>
                  <div className="user">/sharmil_adroja</div>
                </div>
              </div>
            </a>
          </div>
        </section>

        <section className="contact">
          <div className="topic">Need a developer ?</div>
          <Link to="/contact">
            <div className="title">Let's Collaborate &#8594;</div>
          </Link>
        </section>

        {/* footer exported as component */}
        <Footer />
      </div>
    </>
  );
};

export default Home;
