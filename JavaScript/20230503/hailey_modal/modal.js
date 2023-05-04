const article = document.querySelector(".popup");
const openBtn = document.querySelector(".btn-open");
const closeBtn = document.querySelector(".btn-close");

const dim = document.querySelector(".dim");

//첫번째 포커스 요소
const firstEl = article.querySelector("a");

function openPopup() {
  // console.log('click!');
  article.classList.add("active");
}

function closePopup() {
  article.classList.remove("active");
}
openBtn.addEventListener("click", openPopup);
closeBtn.addEventListener("click", closePopup);

//key tab, shift+tab 누를때 closeBtn 안에서 돌도록(이하 코드 없으면 다른 곳까지 넘어감)
closeBtn.addEventListener("keydown", function (e) {
  // 내가 누르고 있는 키 정보를 알려줌
  // console.log(e.key)
  // tab만 눌렀을때 (shift+tab일땐 실행되지 않음)
  if (!e.shiftKey && e.key === "Tab") {
    // console.log('tab만 누름');
    e.preventDefault();
    firstEl.focus();
  }
});

firstEl.addEventListener("keydown", function (e) {
  // Shift_tab 같이 눌렀을 때 실행
  if (e.shiftKey && e.key === "Tab") {
    e.preventDefault();
    closeBtn.focus();
  }
});

dim.addEventListener("click", closePopup); //dim 배경화면쪽 클릭해도 닫힐 수 있도록




//path 선택하기
const path = document.querySelector("#path");

//path의 전체 길이 구하기
const pathLength = path.getTotalLength();

console.log(pathLength);

// stroke-dasharray : 1588 1588; 형태로 css 설정하기
path.style.strokeDasharray = pathLength + " " + pathLength;

// stroke-dashoffset : 1588; 형태로 css 초기값 설정하기
path.style.strokeDashoffset = pathLength;

function scrollHandler() {
  // console.log('scroll')
  const scrollTop = document.documentElement.scrollTop;
  // console.log('scrollTop')
  const scrollHeight = document.documentElement.scrollHeight;
  // console.log('scrollHeight')
  const clientHeight = document.documentElement.clientHeight;
  // console.log("clientHeight");

  const scrollPercentage = scrollTop / (scrollHeight - clientHeight);

  const drawLength = pathLength * scrollPercentage;
  path.style.strokeDashoffset = pathLength - drawLength;

  //아래에 if문으로 짜지말고 그냥 스크롤 퍼센테이지랑 같도록 짤 수 있음
  openBtn.style.opacity = scrollPercentage;

  // if (drawLength > 1500) {
  //   openBtn.classList.add("scroll");
  // }else{
  //   openBtn.classList.remove("scroll");
    
  // }

  if (scrollPercentage > 0.6) {
    openBtn.removeAttribute("disabled");
  } else {
    openBtn.setAttribute("disabled", "disabled");
  }
}
window.addEventListener("scroll", scrollHandler);
