
let header = document.getElementById('header');
let navigation = document.querySelector('.navigation');


let lastScrollTop = 0;
window.addEventListener('scroll', (e) =>{
    let st = window.scrollY;

    if (st > lastScrollTop ){
        header.style.height = '0%';
        document.querySelector('.logo__image').style.animation = 'none';
        document.querySelector('.logo__text').style.animation = 'none';
        document.querySelector('.logo-text__name').style.animation = 'none';
        document.querySelector('.logo-text__description').style.animation = 'none';
    }
    else{ 
        header.style.height = '6rem';
        document.querySelector('.logo__image').style.animation = 'logo-img 1s 0.4s forwards, opacity 1s 0.5s forwards';
        document.querySelector('.logo__text').style.animation = 'scale-from-zero 1s forwards';
        document.querySelector('.logo-text__name').style.animation = 'appear-from-left 1.5s 0.6s forwards, opacity 1s 0.8s forwards';
        document.querySelector('.logo-text__description').style.animation = 'appear-from-left 1.5s 0.8s forwards, opacity 1s 1s forwards';
    }
    lastScrollTop = st;
  });
  