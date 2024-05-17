const box = document.querySelector('.scrollBox');
const container = document.querySelector('#mainWrapper');
const pScreen = document.querySelector('.pageScreen');
const downToUp = document.querySelectorAll('.downToup');
const haeder = document.querySelector('.headerLeft');
const logoChange = document.querySelector('.Head');
const btn = document.querySelector('.HeaderBtn');
const logoArea = document.querySelector('#logoContainer');
const gnb = document.querySelector("#gnb");
const introImg = document.querySelector('.imgBox img');

const startWorkBox = document.querySelector('.artwork img');
const ndartWorkBox = document.querySelector('.artwork:nth-child(2) img');
const rdartWorkBox = document.querySelector('.artwork:nth-child(3) img');

const stJournal = document.querySelector('.contBox figure img');
const ndJournal = document.querySelector('.contBox:nth-child(2) figure img');
const rdJournal = document.querySelector('.contBox:nth-child(3) figure img');
const titRight = document.querySelectorAll('.titRight span');
const titLeft = document.querySelectorAll('.titLeft span');
const jornalTrans = document.querySelectorAll('.aniTextBox > li');
const proGress = document.querySelector('.headProgress');

/* container scrollLeft  */
const containerScrL = container.scrollLeft;
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

btn.addEventListener("click", (e) => {
    e.preventDefault();
    haeder.classList.toggle('active');
    gnb.classList.toggle("active");
  });

//   gnb.addEventListener("click", (e) => {
//     gnb.classList.remove("active");
//   });


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

/* active */
btn.addEventListener('click', e =>{
    e.preventDefault();
});

function crtProgress(){
    const scrollLt = container.scrollLeft;
    const scrollWd = container.scrollWidth;
    const clientWd = container.clientWidth;
    
    let currentWidth = (scrollLt / (scrollWd - clientWd)) * 100;

    proGress.innerHTML = Math.floor(currentWidth) + `%`;
}
addEventListener('wheel', crtProgress);