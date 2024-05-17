import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import Script from "next/script";



const Page = () => (
  <>
  <Script src='/js/main.js' />
    <Head>
      <title>Studio RHE</title>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE-edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon" />

    </Head>
    <main>
      <header>
        <div className="headerLeft">
          <a href="#" className="Head">
            <span>est.1997</span>
            <span className="headLogoChange">
              <svg viewBox="0 0 20 127" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[2rem] h-[12.7rem]">
                <path d="..." fill="black"></path>
              </svg>
            </span>
          </a>
          <a href="#" className="HeaderBtn">
            <span className="btnLine Line1"></span>
            <span className="btnLine Line2"></span>
            <span className="btnLine Line3"></span>
          </a>
          <div className="headProgress">0%</div>
          <ul id="gnb">
            <li><a href="about.html">About</a></li>
            <li><a href="#">Project</a></li>
            <li><a href="journal.html">Journal</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
          <div className="gnbBack"></div>
        </div>
      </header>
      <div className="pageScreen">
        <div className="downToup on"></div>
        <div className="downToup on"></div>
        <div className="downToup on"></div>
      </div>
      <div className="scrollBox">
        <section id="mainWrapper">
          <div id="logoContainer">
            <h1 className="h1Logo">
              <a href="#">
                <svg viewBox="0 0 75 77" fill="white" xmlns="http://www.w3.org/2000/svg" className="logo w-[7.7rem] h-auto">
                  <g className="transition-opacity duration-500 ease-out opacity-100 delay-500"><path d="..." fill="white" /></g>
                  <g className="transition-opacity duration-500 ease-out opacity-0"><path d="..." fill="white" /></g>
                </svg>
              </a>
            </h1>
          </div>
          <section id="FirstContainer">
            <div className="introbox">
              <p className="topLeftComment">
                <span>We are a london based archutecture and</span>
                <span>design studio with a global reputation</span>
                <span>for creating innovative spaces</span>
              </p>
              <h2 className="h2Title">
                <div className="titLeft">
                  <span>B</span>
                  <span>u</span>
                  <span>i</span>
                  <span>l</span>
                  <span>d</span>
                  <span>i</span>
                  <span>n</span>
                  <span>g</span>
                </div>
                <div className="titRight">
                  <span>B</span>
                  <span>e</span>
                  <span>y</span>
                  <span>o</span>
                  <span>n</span>
                  <span>d</span>
                </div>
              </h2>
            </div>
            <div className="shadowBox"></div>
          </section>
          <section id="secondContainer">
            <div className="introduction">
              <div className="upper">
                <p className="greeting">introduction</p>
                <figure className="imgBox">
                  <img src="/images/main_img/1657797867-aerial-3-copy.jpg" alt="img2" />
                </figure>
              </div>
              <div className="downer">
                <h2 className="downTit">established 1997</h2>
                <p className="downText">
                  <span>We are an architectural studio that believes in going further. Being bold.</span>
                  <span>Exploring the new. Where the surprising delights the mind. Where people love</span>
                  <span>to live, work and play. Let’s start building beyond.</span>
                </p>
                <a href="#" className="uLine">Learn more about us</a>
              </div>
            </div>
            <div className="portFolio">
              <ul id="folios">
                <li className="artwork">
                  <a href="#" className="flexBox">
                    <figure className="imgSizeBox">
                      <img src="/images/main_img/1665559885-zil-pasyon-r1_1-2.jpg" alt="#" />
                    </figure>
                    <div className="textLine">
                      <h3 className="workName">Zil Pasyon</h3>
                      <span className="uLine">view project</span>
                    </div>
                  </a>
                </li>
                <li className="artwork">
                  <a href="#" className="flexBox">
                    <figure className="imgSizeBox">
                      <img src="/images/main_img/1665999727-dl-rhe-gb-0977-online.jpg" alt="#" />
                    </figure>
                    <div className="textLine">
                      <h3 className="workName">The Gramophone Works</h3>
                      <span className="uLine">view project</span>
                    </div>
                  </a>
                </li>
                <li className="artwork">
                  <a href="#" className="flexBox">
                    <figure className="imgSizeBox">
                      <img src="/images/main_img/1659950206-dl-rhe-pr-3720-online-1-1.jpg" alt="#" />
                    </figure>
                    <div className="textLine">
                      <h3 className="workName">Republic</h3>
                      <span className="uLine">view project</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </section>
          <section id="thirdContainer">
            <div className="whatWeDo">
              <h2 className="h2doTitle">what we do</h2>
              <div className="textWarpper">
                <p>Collaborating to create the surprising with innovation that inspires. Let’s work towards something bigger and brighter.</p>
                <p className="marginText">focusing on <a href="#" className="uLine">Commercial</a> & <a href="#" className="uLine">Resort</a> Projects</p>
              </div>
              <a href="#" className="uLine">View All Projects</a>
            </div>
            <figure className="imgWrapper">
              <div className="movement">
                <img src="/images/main_img/1660813591-home-image.jpg" alt="ocean" />
              </div>
            </figure>
          </section>
          <section id="fourthContainer">
            <div className="journalBox">
              <div className="textBox">
                <h2 className="h2Title">Collaborating to create the surprising with innovation that inspires. Let’s work towards something bigger and brighter.</h2>
                <div className="flexBox">
                  <a href="journal.html" className="uLine">View All Articles</a>
                </div>
              </div>
              <ul className="aniTextBox">
                <li className="aniTransform">J</li>
                <li className="aniTransform">o</li>
                <li className="aniTransform">u</li>
                <li className="aniTransform">r</li>
                <li className="aniTransform">n</li>
                <li className="aniTransform">a</li>
                <li className="aniTransform">l</li>
              </ul>
            </div>
            <div className="journalList">
              <article className="contBox">
                <figure>
                  <img src="/images/main_img/1665150856-journal-richard-1.jpg" alt="cont1" />
                </figure>
                <h2 className="articleName">Architecture and change</h2>
                <div className="linkBox">
                  <a href="journal.html" className="uLine">read article</a>
                </div>
              </article>
              <article className="contBox">
                <figure>
                  <img src="/images/main_img/1665137202-six-senses-journal-6.jpg" alt="cont2" />
                </figure>
                <h2 className="articleName">Is This The World’s Most Photogenic Spa?</h2>
                <div className="linkBox">
                  <a href="journal.html" className="uLine">read article</a>
                </div>
              </article>
              <article className="contBox">
                <figure>
                  <img src="/images/main_img/1665137010-journal-awards-5.jpg" alt="cont3" />
                </figure>
                <h2 className="articleName">Six Senses Zil Pasyon Awards</h2>
                <div className="linkBox">
                  <a href="journal.html" className="uLine">read article</a>
                </div>
              </article>
            </div>
          </section>
        </section>
      </div>
    </main>
  </>
);


export default Page;
