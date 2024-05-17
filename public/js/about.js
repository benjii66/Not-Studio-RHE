const toggleBtn = document.querySelector("#toggleBtn");
const menuBar = document.querySelector(".menuBar");
const gnb = document.querySelector("#gnb");

toggleBtn.addEventListener("click", (e) => {
  e.preventDefault();
  menuBar.classList.toggle("on");
  gnb.classList.toggle("active");
});


gnb.addEventListener("click", (e) => {
  gnb.classList.remove("active");
});


const wrapper = document.querySelector("#wrapper");
const boxes = document.querySelectorAll("#wrapper > div");

const scrolled = (e) => {
  wrapper.scrollLeft += e.deltaY;
};
wrapper.addEventListener("wheel", scrolled);


const rhe = document.querySelector(".rhe");
const rheLogo = document.querySelector(".rhe svg");
const rheTxt = document.querySelector(".rhe p");

addEventListener("wheel", (e) => {
  e.preventDefault();
  if (wrapper.scrollLeft <= 1000) {
    rheLogo.style.opacity = 0;
    rheTxt.style.opacity = 1;
  } else {
    rheLogo.style.opacity = 1;
    rheTxt.style.opacity = 0;
  }
});

const sIndi = document.querySelector(".scrollIndi");

function progress() {
  const scrollLeft = wrapper.scrollLeft;
  const scrollWidth = wrapper.scrollWidth;
  const clientWidth = wrapper.clientWidth;

  let width = (scrollLeft / (scrollWidth - clientWidth)) * 100;
  sIndi.innerHTML = Math.floor(width) + "%";
}
progress();
addEventListener("wheel", progress);


addEventListener("wheel", (e) => {
  wrapper.scroll({
    behavior: "smooth",
  });
});


// const london = document.querySelector(".down");
// addEventListener("wheel", (e) => {
//   if (wrapper.scrollLeft > 500) {
//     // console.log(wrapper.scrollLeft);
//     london.style.opacity = 1;
//     london.style.transform = `translateY(20vh)`;
//   }
// });


// const awards = document.querySelector(".box8 h1");

// addEventListener("wheel", () => {
//   if (wrapper.scrollLeft > 13500) {
//     awards.style.opacity = 1;
//     awards.style.transform = `translateY(20vh)`;
//   }
// });

const londonTrans = document.querySelectorAll(".box2-2 > .aniTextbox > li");
const awardsTrans = document.querySelectorAll(".box8 > .aniTextbox > li");

const scrollLeft = (e) => {
  let transNum = (wrapper.scrollLeft += e.deltaY);
  console.log(transNum);

  switch (transNum) {
    case 600:
      for (let idx = 0; idx < londonTrans.length; idx++) {
        if (wrapper.scrollLeft < 500) {
          londonTrans[idx].classList.remove("on");
        } else {
          londonTrans[idx].classList.add("on");
        }
      }
    case 13600:
      for (let idx = 0; idx < awardsTrans.length; idx++) {
        if (wrapper.scrollLeft < 13500) {
          awardsTrans[idx].classList.remove("on");
        } else {
          awardsTrans[idx].classList.add("on");
        }
      }
  }
};
wrapper.addEventListener("wheel", scrollLeft);


/* const richardI = document.querySelector(".box7-1 figure .videoWrapper img");
const richardV = document.querySelector(".box7-1 figure .videoWrapper video");

richardI.addEventListener("click", (e) => {
  richardI.classList.toggle("active");
  richardV.play();
}); */

const imgs = document.querySelectorAll(".box7 img");
const videos = document.querySelectorAll(".box7 video");
const videoWrapper = document.querySelectorAll(".videoWrapper");
const playBtn = document.querySelectorAll("#playBtn");
const playBtnA = document.querySelectorAll("#playBtn a");
imgs.forEach((img, idx) => {
  img.addEventListener("click", (e) => {
    imgs[idx].style.opacity = 0;
    videos[idx].style.zIndex = 999;
    videos[idx].play();
    playBtn[idx].style.opacity = 0;
    playBtnA[idx].classList.toggle("active");
  });
});

videos.forEach((wp, idx) => {
  wp.addEventListener("click", (e) => {
    imgs[idx].style.opacity = 1;
    videos[idx].style.zIndex = 0;
    videos[idx].pause();
    playBtnA[idx].classList.toggle("active");
  });
});

videoWrapper.forEach((wp, idx) => {
  wp.addEventListener("mouseover", (e) => {
    playBtn[idx].style.opacity = 1;
  });
  wp.addEventListener("mouseleave", (e) => {
    playBtn[idx].style.opacity = 0;
  });
});



let observer = new IntersectionObserver((e) => {
  // e div
  e.forEach((img) => {
    if (img.isIntersecting) {
      img.target.style.transform = `scale(1)`;
    } else {
      // img.target.style.opacity = 0; 
    }
  });
});

// observer.observe() html 
observer.observe(imgs[0]);
observer.observe(imgs[1]);
observer.observe(imgs[2]);
observer.observe(imgs[3]);
observer.observe(imgs[4]);
observer.observe(imgs[5]);
observer.observe(imgs[6]);
observer.observe(imgs[7]);
observer.observe(imgs[8]);
observer.observe(imgs[9]);


const logo = document.querySelector(".box1 a");
addEventListener("wheel", () => {
  if (wrapper.scrollLeft > 100) {
    logo.style.opacity = 0;
  } else if (wrapper.scrollLeft <= 100) {
    logo.style.opacity = 1;
  }
});