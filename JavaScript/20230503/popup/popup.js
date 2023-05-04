const article = document.querySelector('.popup');
const openBtn = document.querySelector('.btn-open');
const closeBtn = document.querySelector('.btn-close');

const dim = document.querySelector('.dim');

//첫번째 포커스 요소
const firstEl = article.querySelector('a');

function openPopup(){
  // console.log('click!');
  article.classList.add('active');
}

function closePopup(){
  article.classList.remove('active');
}
openBtn.addEventListener('click', openPopup);
closeBtn.addEventListener('click', closePopup);


//key tab, shift+tab 누를때 closeBtn 안에서 돌도록(이하 코드 없으면 다른 곳까지 넘어감)
closeBtn.addEventListener('keydown', function(e){
  // 내가 누르고 있는 키 정보를 알려줌
  // console.log(e.key)
  // tab만 눌렀을때 (shift+tab일땐 실행되지 않음)
  if(!e.shiftKey && e.key === 'Tab'){
    // console.log('tab만 누름');
    e.preventDefault();
    firstEl.focus();
  }
});

firstEl.addEventListener('keydown',function(e){
  // Shift_tab 같이 눌렀을 때 실행
  if(e.shiftKey && e.key === 'Tab'){
    e.preventDefault();
    closeBtn.focus();
  }
});


dim.addEventListener('click',closePopup); //dim 배경화면쪽 클릭해도 닫힐 수 있도록