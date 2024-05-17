import React, { useEffect, useRef } from 'react';

const MainComponent: React.FC = () => {
    // Références pour les éléments DOM
    const boxRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const pScreenRef = useRef<HTMLDivElement>(null);
    const downToUpRef = useRef<NodeListOf<HTMLDivElement>>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const logoChangeRef = useRef<HTMLAnchorElement>(null);
    const btnRef = useRef<HTMLAnchorElement>(null);
    const logoAreaRef = useRef<HTMLDivElement>(null);
    const gnbRef = useRef<HTMLUListElement>(null);
    const introImgRef = useRef<HTMLImageElement>(null);
    const startWorkBoxRef = useRef<HTMLImageElement>(null);
    const ndartWorkBoxRef = useRef<HTMLImageElement>(null);
    const rdartWorkBoxRef = useRef<HTMLImageElement>(null);
    const stJournalRef = useRef<HTMLImageElement>(null);
    const ndJournalRef = useRef<HTMLImageElement>(null);
    const rdJournalRef = useRef<HTMLImageElement>(null);
    const titRightRef = useRef<NodeListOf<HTMLSpanElement>>(null);
    const titLeftRef = useRef<NodeListOf<HTMLSpanElement>>(null);
    const jornalTransRef = useRef<NodeListOf<HTMLLIElement>>(null);
    const proGressRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const box = boxRef.current;
        const container = containerRef.current;
        const pScreen = pScreenRef.current;
        const downToUp = downToUpRef.current;
        const header = headerRef.current;
        const logoChange = logoChangeRef.current;
        const btn = btnRef.current;
        const logoArea = logoAreaRef.current;
        const gnb = gnbRef.current;
        const introImg = introImgRef.current;
        const startWorkBox = startWorkBoxRef.current;
        const ndartWorkBox = ndartWorkBoxRef.current;
        const rdartWorkBox = rdartWorkBoxRef.current;
        const stJournal = stJournalRef.current;
        const ndJournal = ndJournalRef.current;
        const rdJournal = rdJournalRef.current;
        const titRight = titRightRef.current;
        const titLeft = titLeftRef.current;
        const jornalTrans = jornalTransRef.current;
        const proGress = proGressRef.current;

        const scrollLeft = (e: WheelEvent) => {
            if (!container) return;
            let transNum = container.scrollLeft += e.deltaY;
            console.log(transNum);

            switch (transNum) {
                case 100:
                    if (logoArea && header && logoChange) {
                        logoArea.style.opacity = '0';
                        header.style.borderLeft = '1px solid #bfbfbf';
                        logoChange.classList.add('off');
                    }
                    break;
                case 500:
                    if (introImg) {
                        introImg.style.animation = '1s ease 0s 1 normal none running imgScale2';
                    }
                    break;
                case 1000:
                    if (startWorkBox) {
                        startWorkBox.style.animation = '1s ease 0s 1 normal none running imgScale';
                    }
                    break;
                case 1700:
                    if (ndartWorkBox) {
                        ndartWorkBox.style.animation = '1s ease 0s 1 normal none running imgScale';
                    }
                    break;
                case 2500:
                    if (rdartWorkBox) {
                        rdartWorkBox.style.animation = '1s ease 0s 1 normal none running imgScale';
                    }
                    break;
                case 5300:
                    if (jornalTrans) {
                        jornalTrans.forEach((trans) => {
                            if (container.scrollLeft < 5300) {
                                trans.classList.remove('on');
                            } else {
                                trans.classList.add('on');
                            }
                        });
                    }
                    break;
                case 6500:
                    if (stJournal) {
                        stJournal.style.animation = '1s ease 0s 1 normal none running imgScale';
                    }
                    break;
                case 7100:
                    if (ndJournal && rdJournal) {
                        ndJournal.style.animation = '1s ease 0s 1 normal none running imgScale';
                        rdJournal.style.animation = '1s ease 0s 1 normal none running imgScale';
                    }
                    break;
            }
            if (container.scrollLeft < 100 && logoArea && header && logoChange) {
                logoArea.style.opacity = '1';
                header.style.borderLeft = '0';
                logoChange.classList.remove('off');
            }
        };

        if (container) {
            container.addEventListener('wheel', scrollLeft);
        }

        if (btn) {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                if (header && gnb) {
                    header.classList.toggle('active');
                    gnb.classList.toggle('active');
                }
            });
        }

        const pageAniTime = () => {
            setTimeout(() => {
                if (downToUp && pScreen) {
                    downToUp.forEach((el) => {
                        el.classList.remove('on');
                    });
                    pScreen.style.display = 'none';
                }
            }, 1520);
        };

        pageAniTime();

        const crtProgress = () => {
            if (!container || !proGress) return;
            const scrollLt = container.scrollLeft;
            const scrollWd = container.scrollWidth;
            const clientWd = container.clientWidth;

            let currentWidth = (scrollLt / (scrollWd - clientWd)) * 100;

            proGress.innerHTML = Math.floor(currentWidth) + `%`;
        };

        window.addEventListener('wheel', crtProgress);

        // Cleanup function
        return () => {
            if (container) {
                container.removeEventListener('wheel', scrollLeft);
            }
            window.removeEventListener('wheel', crtProgress);
        };
    }, []);

    return (
        <div>
            {/* Assurez-vous que les éléments DOM existent dans le JSX */}
            <div ref={boxRef} className="scrollBox">
                <div ref={containerRef} id="mainWrapper">
                    <div ref={pScreenRef} className="pageScreen">
                        <div className="downToup on"></div>
                        <div className="downToup on"></div>
                        <div className="downToup on"></div>
                    </div>
                    <div ref={headerRef} className="headerLeft">
                        <a ref={logoChangeRef} href="#" className="Head">
                            <span>est.1997</span>
                            <span className="headLogoChange">Logo</span>
                        </a>
                        <a ref={btnRef} href="#" className="HeaderBtn">
                            <span className="btnLine Line1"></span>
                            <span className="btnLine Line2"></span>
                            <span className="btnLine Line3"></span>
                        </a>
                        <div className="headProgress">0%</div>
                        <ul ref={gnbRef} id="gnb">
                            <li><a href="about.html">About</a></li>
                            <li><a href="#">Project</a></li>
                            <li><a href="journal.html">Journal</a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                        <div className="gnbBack"></div>
                    </div>
                    <div ref={logoAreaRef} id="logoContainer">
                        <h1 className="h1Logo">
                            <a href="#">
                                <svg viewBox="0 0 75 77" fill="white" xmlns="http://www.w3.org/2000/svg" className="logo w-[7.7rem] h-auto">
                                    <g className="transition-opacity duration-500 ease-out opacity-100 delay-500"><path d="..." fill="white" /></g>
                                    <g className="transition-opacity duration-500 ease-out opacity-0"><path d="..." fill="white" /></g>
                                </svg>
                            </a>
                        </h1>
                    </div>
                    <div ref={introImgRef} className="imgBox">
                        <img src="/images/main_img/1657797867-aerial-3-copy.jpg" alt="img2" />
                    </div>
                    <div className="artwork">
                        <img ref={startWorkBoxRef} src="/images/main_img/1665559885-zil-pasyon-r1_1-2.jpg" alt="artwork" />
                        <img ref={ndartWorkBoxRef} src="/images/main_img/1665999727-dl-rhe-gb-0977-online.jpg" alt="artwork" />
                        <img ref={rdartWorkBoxRef} src="/images/main_img/1659950206-dl-rhe-pr-3720-online-1-1.jpg" alt="artwork" />
                    </div>
                    <div className="contBox">
                        <img ref={stJournalRef} src="/images/main_img/1665150856-journal-richard-1.jpg" alt="journal" />
                        <img ref={ndJournalRef} src="/images/main_img/1665137202-six-senses-journal-6.jpg" alt="journal" />
                        <img ref={rdJournalRef} src="/images/main_img/1665137010-journal-awards-5.jpg" alt="journal" />
                    </div>
                    <div className="aniTextBox">
                        <li ref={jornalTransRef}>J</li>
                        <li>o</li>
                        <li>u</li>
                        <li>r</li>
                        <li>n</li>
                        <li>a</li>
                        <li>l</li>
                    </div>
                    <div ref={proGressRef} className="headProgress"></div>
                </div>
            </div>
        </div>
    );
};

export default MainComponent;
