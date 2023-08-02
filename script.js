(function(){
    const spanE1 = document.querySelector("main h2 span");
    const txtArr = ['Web Publisher', 'Front-End Developer', 'Web UI Designer', 'UX Designer', 'Back-End Dev']
    let index = 0;
    let currentTxt = txtArr[index].split('');
    
    function writeTxt(){
      spanE1.textContent += currentTxt.shift();
      if(currentTxt.length!==0){
      setTimeout(writeTxt, Math.floor(Math.random()*100));
      }else{
        currentTxt = spanE1.textContent.split('');
        setTimeout(deleteTxt, 3000);
      } 
    }
    
    function deleteTxt(){
        currentTxt.pop();
        spanE1.textContent = currentTxt.join('');
        if(currentTxt.length !==0){
            setTimeout(deleteTxt, Math.floor(Math.random()*100));
        }else{
            index = (index + 1) % txtArr.length;
            currentTxt = txtArr[index].split('');
            writeTxt();
            
        }
    }
    
    writeTxt();
})();

// 수직 스크롤이 발생하면 header 태그에 active 클래스 추가 및 삭제
(function(){
    const headerE1 = document.querySelector("header");
    window.addEventListener("scroll", function(){
        this.requestAnimationFrame(scrollCheck);
    });
    
    function scrollCheck(){
        const browserScrollY = window.scrollY ? window.scrollY : window.pageYOffset;
        if(browserScrollY>0){
            headerE1.classList.add('active');
        }else{
            headerE1.classList.remove('active');
        }
        console.log('scroll')
    }
})();

// 애니메이션 스크롤
(function(){
    const animationMove = function(selector){
        const target = document.querySelector(selector);
        const browserScrollY = window.pageYOffset;
        const targetScrollY = target.getBoundingClientRect().top + browserScrollY;
        window.scrollTo({top: targetScrollY, behavior:'smooth'});
    }
    
    
    const scrollMoveE1 = document.querySelectorAll("[data-animation-scroll='true']");
    console.log(scrollMoveE1);
    for(let i=0; i<scrollMoveE1.length; i++){
        scrollMoveE1[i].addEventListener("click", function(e){
            animationMove(this.dataset.target);
        });
    }
})();