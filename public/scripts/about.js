// 메뉴아이콘 클릭했을 때
const toggleBtn = document.querySelector("#toggleBtn");
const menuBar = document.querySelector(".menuBar");
const gnb = document.querySelector("#gnb");

toggleBtn.addEventListener("click", (e) => {
  e.preventDefault();
  menuBar.classList.toggle("on");
  gnb.classList.toggle("active");
});

// 메뉴 한부분 클릭하면 닫힘 (닫힐 때 이상하게 닫힘..)

gnb.addEventListener("click", (e) => {
  gnb.classList.remove("active");
});

// 좌우 스크롤 휠로 제어

const wrapper = document.querySelector("#wrapper");
const boxes = document.querySelectorAll("#wrapper > div");

const scrolled = (e) => {
  wrapper.scrollLeft += e.deltaY;
};
wrapper.addEventListener("wheel", scrolled);

// 우측 바 로고

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

// 우측 바 스크롤 인디케이터
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

// 스크롤을 일정px씩 부드럽게 이동시키기 (미완)

addEventListener("wheel", (e) => {
  wrapper.scroll({
    behavior: "smooth",
  });
});

// 런던 글자 애니메이션

// const london = document.querySelector(".down");
// addEventListener("wheel", (e) => {
//   if (wrapper.scrollLeft > 500) {
//     // console.log(wrapper.scrollLeft);
//     london.style.opacity = 1;
//     london.style.transform = `translateY(20vh)`;
//   }
// });

// // 어워즈 글자 애니메이션

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

// 멤버들 프로필 비디오

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

// 재생버튼
// 휠을 굴리면 프로필 이미지 약축소효과

let observer = new IntersectionObserver((e) => {
  // e 는 감시중인 div박스
  e.forEach((img) => {
    if (img.isIntersecting) {
      //박스가 등장시 실행됨
      img.target.style.transform = `scale(1)`; //서서히 나타남
    } else {
      //박스가 사라지면 실행됨
      // img.target.style.opacity = 0; //서서히 사라짐
    }
  });
});

// observer.observe() html 요소가 화면에 등장하는지 감시
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

// 좌측 상단 로고 애니메이션

const logo = document.querySelector(".box1 a");
addEventListener("wheel", () => {
  if (wrapper.scrollLeft > 100) {
    logo.style.opacity = 0;
  } else if (wrapper.scrollLeft <= 100) {
    logo.style.opacity = 1;
  }
});

//
