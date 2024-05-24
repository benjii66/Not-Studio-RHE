import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import Script from "next/script";



const Page = () => (
    <>
        <Script src='/js/main.js' />

        <Head>
            <title>Studio RHEE</title>
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
                                    <svg viewBox="0 0 75 77" fill="white" xmlns="http://www.w3.org/2000/svg" className="logo w-[7.7rem] h-auto">
                                        <g className="transition-opacity duration-500 ease-out opacity-100 delay-500"><path d="M32.9269 68.9795H31.7909V76.8173H32.9269V68.9795ZM1.57882 68.8572C1.57882 67.8876 2.43562 67.1284 3.77789 67.1284C4.84098 67.1284 5.79954 67.4764 6.75811 68.2809L7.4375 67.3553C6.38954 66.4903 5.3127 66.0516 3.80677 66.0516C1.84425 66.0516 0.412583 67.2646 0.412583 68.9617C0.412583 70.6588 1.50455 71.5101 3.88103 72.0395C6.05122 72.5099 6.56695 73.071 6.56695 74.0708C6.56695 75.1463 5.65239 75.8903 4.26473 75.8903C2.87708 75.8903 1.80024 75.3897 0.723396 74.3899L0 75.2701C1.23912 76.4074 2.58277 76.9685 4.22073 76.9685C6.27126 76.9685 7.74694 75.7858 7.74694 73.9512C7.74694 72.3132 6.68385 71.4495 4.38301 70.9338C2.10968 70.4332 1.57882 69.8721 1.57882 68.8572V68.8572ZM10.8097 70.0096H13.2302V68.9782H10.8097V66.6127H9.6737V68.9782H8.61061V70.0096H9.6737V74.7392C9.6737 76.3318 10.6034 76.9534 11.8274 76.9534C12.3734 76.9534 12.8011 76.8324 13.1999 76.6206V75.6194C12.8011 75.8161 12.4765 75.8917 12.0928 75.8917C11.3254 75.8917 10.8083 75.5438 10.8083 74.5879V70.0096H10.8097ZM15.5338 76.4514V73.8384C15.5269 73.7476 15.5228 73.6541 15.5228 73.5579V68.9795H14.3868V73.8467C14.3868 74.9909 14.7939 75.9109 15.5338 76.4528V76.4514ZM19.9209 76.8186H21.0431V68.9809H19.9209V73.4685C19.9209 74.9386 18.9321 75.9247 17.6338 75.9247C17.2666 75.9247 16.9462 75.8546 16.6684 75.7267V76.9286C16.8705 76.9658 17.0837 76.985 17.3092 76.985C18.6226 76.985 19.4038 76.3029 19.9209 75.4544V76.8186V76.8186ZM25.9817 76.985C26.3104 76.985 26.6102 76.9397 26.8867 76.8599V75.8367C26.6597 75.9027 26.4246 75.9385 26.188 75.9385C24.7412 75.9385 23.5021 74.7557 23.5021 72.8908C23.5021 71.026 24.7124 69.8584 26.188 69.8584C26.4246 69.8584 26.6597 69.8955 26.8867 69.9601V68.9314C26.6102 68.8558 26.309 68.8118 25.9817 68.8118C24.1512 68.8118 22.3359 70.3287 22.3359 72.906C22.3359 75.4832 24.1512 76.9837 25.9817 76.9837V76.985ZM28.9042 76.8173H30.0402V65.749H28.9042V70.48C28.6663 70.1265 28.3761 69.7882 28.0226 69.5104V70.6189C28.5783 71.1525 28.9482 71.9364 28.9482 72.8908C28.9482 73.8453 28.5769 74.6402 28.0226 75.1752V76.2493C28.3692 75.9618 28.6594 75.6111 28.9042 75.2398V76.8159V76.8173ZM31.718 67.266H33.0163V65.9773H31.718V67.266ZM37.105 76.7884V75.6125C36.1945 75.105 35.599 74.0805 35.599 72.8908C35.599 71.7012 36.1767 70.6519 37.105 70.1582V69.0346C35.5042 69.5915 34.4328 71.1442 34.4328 72.9211C34.4328 74.698 35.5042 76.2451 37.105 76.7884V76.7884ZM42.3888 72.8908C42.3888 70.6615 40.7055 68.8118 38.4184 68.8118C38.3579 68.8118 38.3001 68.8186 38.241 68.8214V69.8515C38.2905 69.8487 38.3386 69.8432 38.3881 69.8432C39.9972 69.8432 41.2226 71.2075 41.2226 72.9211C41.2226 74.6347 40.0701 75.9536 38.4184 75.9536C38.3579 75.9536 38.3001 75.9481 38.241 75.944V76.9919C38.2905 76.9947 38.3386 77.0002 38.3881 77.0002C40.6903 77.0002 42.3874 75.1202 42.3874 72.8922L42.3888 72.8908ZM47.7262 72.6942H48.4565V71.6187H47.7262V67.3127H48.4565V66.2056H46.56V76.8186H47.7262V72.6942V72.6942ZM54.7938 76.8186L51.621 72.4824C53.2439 72.1798 54.4252 71.1484 54.4252 69.3743C54.4252 67.464 52.9647 66.2056 50.6913 66.2056H49.5925V67.3127H50.6019C52.2688 67.3127 53.2438 68.1007 53.2438 69.421C53.2438 70.7413 52.1368 71.6201 50.5868 71.6201H49.5925V72.6955H50.3668L53.3621 76.82H54.7938V76.8186ZM57.5388 72.0423V70.9201V66.2042H56.3726V76.8173H57.5388V72.0409V72.0423ZM63.502 76.8186H64.6683V66.2056H63.502V70.9214H58.6748V72.0437H63.502V76.82V76.8186ZM67.83 75.7267V72.012H73.4673V70.9201H67.83V67.2962H74.1329V66.2042H66.6652V76.8173H74.2072V75.7253H67.8314L67.83 75.7267Z" fill="white" /> <path d="M49.0568 45.5014H56.8936V56.8765H49.0568V45.5014ZM43.46 38.6767H56.8936V44.3642H47.9369V56.8778H43.4586V38.6767H43.46ZM37.8617 29.5761H56.8936V37.5381H42.34V56.8765H37.8617V29.5761V29.5761ZM27.7852 17.0639H56.8936V28.4376H36.7418V56.8765H27.7852V17.0639V17.0639ZM16.59 1.13723H56.8936V15.9253H26.6652V56.8765H16.59V1.13723ZM15.4701 58.0137H58.0121V0H15.4688V58.0137H15.4701Z" fill="white" /></g> <g class="transition-opacity duration-500 ease-out opacity-0"><path d="M32.9269 68.9795H31.7909V76.8173H32.9269V68.9795ZM1.57882 68.8572C1.57882 67.8876 2.43562 67.1284 3.77789 67.1284C4.84098 67.1284 5.79954 67.4764 6.75811 68.2809L7.4375 67.3553C6.38954 66.4903 5.3127 66.0516 3.80677 66.0516C1.84425 66.0516 0.412583 67.2646 0.412583 68.9617C0.412583 70.6588 1.50455 71.5101 3.88103 72.0395C6.05122 72.5099 6.56695 73.071 6.56695 74.0708C6.56695 75.1463 5.65239 75.8903 4.26473 75.8903C2.87708 75.8903 1.80024 75.3897 0.723396 74.3899L0 75.2701C1.23912 76.4074 2.58277 76.9685 4.22073 76.9685C6.27126 76.9685 7.74694 75.7858 7.74694 73.9512C7.74694 72.3132 6.68385 71.4495 4.38301 70.9338C2.10968 70.4332 1.57882 69.8721 1.57882 68.8572V68.8572ZM10.8097 70.0096H13.2302V68.9782H10.8097V66.6127H9.6737V68.9782H8.61061V70.0096H9.6737V74.7392C9.6737 76.3318 10.6034 76.9534 11.8274 76.9534C12.3734 76.9534 12.8011 76.8324 13.1999 76.6206V75.6194C12.8011 75.8161 12.4765 75.8917 12.0928 75.8917C11.3254 75.8917 10.8083 75.5438 10.8083 74.5879V70.0096H10.8097ZM15.5338 76.4514V73.8384C15.5269 73.7476 15.5228 73.6541 15.5228 73.5579V68.9795H14.3868V73.8467C14.3868 74.9909 14.7939 75.9109 15.5338 76.4528V76.4514ZM19.9209 76.8186H21.0431V68.9809H19.9209V73.4685C19.9209 74.9386 18.9321 75.9247 17.6338 75.9247C17.2666 75.9247 16.9462 75.8546 16.6684 75.7267V76.9286C16.8705 76.9658 17.0837 76.985 17.3092 76.985C18.6226 76.985 19.4038 76.3029 19.9209 75.4544V76.8186V76.8186ZM25.9817 76.985C26.3104 76.985 26.6102 76.9397 26.8867 76.8599V75.8367C26.6597 75.9027 26.4246 75.9385 26.188 75.9385C24.7412 75.9385 23.5021 74.7557 23.5021 72.8908C23.5021 71.026 24.7124 69.8584 26.188 69.8584C26.4246 69.8584 26.6597 69.8955 26.8867 69.9601V68.9314C26.6102 68.8558 26.309 68.8118 25.9817 68.8118C24.1512 68.8118 22.3359 70.3287 22.3359 72.906C22.3359 75.4832 24.1512 76.9837 25.9817 76.9837V76.985ZM28.9042 76.8173H30.0402V65.749H28.9042V70.48C28.6663 70.1265 28.3761 69.7882 28.0226 69.5104V70.6189C28.5783 71.1525 28.9482 71.9364 28.9482 72.8908C28.9482 73.8453 28.5769 74.6402 28.0226 75.1752V76.2493C28.3692 75.9618 28.6594 75.6111 28.9042 75.2398V76.8159V76.8173ZM31.718 67.266H33.0163V65.9773H31.718V67.266ZM37.105 76.7884V75.6125C36.1945 75.105 35.599 74.0805 35.599 72.8908C35.599 71.7012 36.1767 70.6519 37.105 70.1582V69.0346C35.5042 69.5915 34.4328 71.1442 34.4328 72.9211C34.4328 74.698 35.5042 76.2451 37.105 76.7884V76.7884ZM42.3888 72.8908C42.3888 70.6615 40.7055 68.8118 38.4184 68.8118C38.3579 68.8118 38.3001 68.8186 38.241 68.8214V69.8515C38.2905 69.8487 38.3386 69.8432 38.3881 69.8432C39.9972 69.8432 41.2226 71.2075 41.2226 72.9211C41.2226 74.6347 40.0701 75.9536 38.4184 75.9536C38.3579 75.9536 38.3001 75.9481 38.241 75.944V76.9919C38.2905 76.9947 38.3386 77.0002 38.3881 77.0002C40.6903 77.0002 42.3874 75.1202 42.3874 72.8922L42.3888 72.8908ZM47.7262 72.6942H48.4565V71.6187H47.7262V67.3127H48.4565V66.2056H46.56V76.8186H47.7262V72.6942V72.6942ZM54.7938 76.8186L51.621 72.4824C53.2439 72.1798 54.4252 71.1484 54.4252 69.3743C54.4252 67.464 52.9647 66.2056 50.6913 66.2056H49.5925V67.3127H50.6019C52.2688 67.3127 53.2438 68.1007 53.2438 69.421C53.2438 70.7413 52.1368 71.6201 50.5868 71.6201H49.5925V72.6955H50.3668L53.3621 76.82H54.7938V76.8186ZM57.5388 72.0423V70.9201V66.2042H56.3726V76.8173H57.5388V72.0409V72.0423ZM63.502 76.8186H64.6683V66.2056H63.502V70.9214H58.6748V72.0437H63.502V76.82V76.8186ZM67.83 75.7267V72.012H73.4673V70.9201H67.83V67.2962H74.1329V66.2042H66.6652V76.8173H74.2072V75.7253H67.8314L67.83 75.7267Z" fill="wihte" /> <path d="M49.0568 45.5014H56.8936V56.8765H49.0568V45.5014ZM43.46 38.6767H56.8936V44.3642H47.9369V56.8778H43.4586V38.6767H43.46ZM37.8617 29.5761H56.8936V37.5381H42.34V56.8765H37.8617V29.5761V29.5761ZM27.7852 17.0639H56.8936V28.4376H36.7418V56.8765H27.7852V17.0639V17.0639ZM16.59 1.13723H56.8936V15.9253H26.6652V56.8765H16.59V1.13723ZM15.4701 58.0137H58.0121V0H15.4688V58.0137H15.4701Z" fill="white" /></g>
                                    </svg>
                                </svg>
                            </a>
                        </h1>
                    </div>
                    <section id="FirstContainer">
                        <div className="introbox">
                            <p className="topLeftComment font-">
                                <span>We are a london based architecture and</span>
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
