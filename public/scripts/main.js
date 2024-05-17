/* 메인최상위 선언 및 하위 컨텐츠 박스 선언 */
const box = document.querySelector('.scrollBox');
const container = document.querySelector('#mainWrapper');
/* 페이지 로딩 영역 선언 */
const pScreen = document.querySelector('.pageScreen');
const downToUp = document.querySelectorAll('.downToup');
/* 헤더 영역 선언 */
const haeder = document.querySelector('.headerLeft');
const logoChange = document.querySelector('.Head');
const btn = document.querySelector('.HeaderBtn');
const logoArea = document.querySelector('#logoContainer');
const gnb = document.querySelector("#gnb");
/* 이미지 박스 영역 선언 */
const introImg = document.querySelector('.imgBox img');

const startWorkBox = document.querySelector('.artwork img');
const ndartWorkBox = document.querySelector('.artwork:nth-child(2) img');
const rdartWorkBox = document.querySelector('.artwork:nth-child(3) img');

const stJournal = document.querySelector('.contBox figure img');
const ndJournal = document.querySelector('.contBox:nth-child(2) figure img');
const rdJournal = document.querySelector('.contBox:nth-child(3) figure img');
/* h2Title 제목부분 영역 선언 */
const titRight = document.querySelectorAll('.titRight span');
const titLeft = document.querySelectorAll('.titLeft span');
/* 저널 애니메이션 */
const jornalTrans = document.querySelectorAll('.aniTextBox > li');
/* progress 영역 선언 */
const proGress = document.querySelector('.headProgress');

/* contianer scrollLeft 값 */
const containerScrL = container.scrollLeft;
/* 가로스크롤 이벤트 */
/* 델타값을 이용하여 스크롤 되도록 값도 저장되게 */
/* function transNum (e){
    let scrNum = 0;
    scrNum += e.deltaY;
    console.log(scrNum);
//    for(let scrNum = 0; scrNum < container.clientWidth; scrNum-100){
//         scrNum += e.deltaY;
//         console.log(scrNum);
//     } 
    container.style.transfrom = `translateX(-${scrNum}px)`;
} */
//container.addEventListener('wheel', transNum);


const scrollLeft = (e) =>{
    let transNum = container.scrollLeft += e.deltaY;
    // e.preventDefault();
    console.log(transNum);
    // container.style.transform = `translateX(-${transNum}px)`;
    
    /* 델타Y 중첩값이 일정 이상이 될때 조건문 */
    switch (transNum) {
        case 100:
            logoArea.style.opacity = '0'
            haeder.style.borderLeft = '1px solid #bfbfbf'
            logoChange.classList.add('off')
            break;
        case 500:
            introImg.style.animation = '1s ease 0s 1 normal none running imgScale2'
            break;
        case 1000:
            startWorkBox.style.animation = '1s ease 0s 1 normal none running imgScale'
            break;
        case 1700:
            ndartWorkBox.style.animation = '1s ease 0s 1 normal none running imgScale'
            break;
        case 2500:
            rdartWorkBox.style.animation = '1s ease 0s 1 normal none running imgScale'
            break;
        case 5300:
            for(let idx = 0; idx < jornalTrans.length ; idx++){
                 if(container.scrollLeft < 5300){
                    jornalTrans[idx].classList.remove('on');
                 }else{
                    jornalTrans[idx].classList.add('on');
                 }
            }
            break;
        case 6500:
            stJournal.style.animation = '1s ease 0s 1 normal none running imgScale'
            break;
        case 7100:
            ndJournal.style.animation = '1s ease 0s 1 normal none running imgScale'
            rdJournal.style.animation = '1s ease 0s 1 normal none running imgScale'
            break;
    }
    if (container.scrollLeft < 100){
        logoArea.style.opacity = '1'
        haeder.style.borderLeft = '0'
        logoChange.classList.remove('off')
    }
}  
container.addEventListener('wheel', scrollLeft);

/* 메뉴 여닫기 설유미님 작업 */
btn.addEventListener("click", (e) => {
    e.preventDefault();
    haeder.classList.toggle('active');
    gnb.classList.toggle("active");
  });

/* 메뉴 한부분 클릭하면 닫힘 (닫힐 때 이상하게 닫힘..) */
//   gnb.addEventListener("click", (e) => {
//     gnb.classList.remove("active");
//   });


/* 페이지 로딩 스크린 이벤트 */
function pageAniTime() {
    /* downToUp.forEach((idx) => {
        if (idx === 0){
            setTimeout(() => {
                downToUp[idx].style.animation = 'downToup 2s cubic-bezier(.98,.01,.43,1)'
            }, 1000)
        } else if(idx === 1){
            setTimeout(() => {
                downToUp[idx].style.animation = 'downToup 2.5s cubic-bezier(.98,.01,.43,1)'
            }, 1500)
        } else if(idx === 2){
            setTimeout(() => {
                downToUp[idx].style.animation = 'downToup 2.9s cubic-bezier(.98,.01,.43,1)'
            }, 1800)
        }
    }); */
    /* toptit.forEach(idx => {
        setTimeout(() => {
            toptit[idx].style.animation ='titleRising 2s ease'
        }, 2900);
    }) */
    setTimeout(() => {  
        for(let ind = 0; ind < downToUp.length; ind++ ){
            downToUp[ind].classList.remove('on');
        }
        pScreen.style.display = 'none'
    }, 1520);
}
pageAniTime();

/* 헤더 영역 클릭시 active 클래스 추가 */
btn.addEventListener('click', e =>{
    e.preventDefault();
});

/* 스크롤 진행도 표시 */
function crtProgress(){
    const scrollLt = container.scrollLeft;
    const scrollWd = container.scrollWidth;
    const clientWd = container.clientWidth;
    
    let currentWidth = (scrollLt / (scrollWd - clientWd)) * 100;

    proGress.innerHTML = Math.floor(currentWidth) + `%`;
}
addEventListener('wheel', crtProgress);