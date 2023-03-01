const burgerItem = document.querySelector('.header-burger');
const nav = document.querySelector('.nav');
const menuClose = document.querySelector('.window-close');
const menuLink = document.querySelectorAll('.nav-link');

burgerItem.addEventListener('click', (e) => {
    nav.classList.add('nav-active');
    e.stopPropagation();
});

menuClose.addEventListener('click', () => {
    nav.classList.remove('nav-active');
});

for(let i = 0; i < menuLink.length; i++) {
    menuLink[i].addEventListener ('click', () => {
        nav.classList.remove('nav-active');
    });
}
document.addEventListener('click', e => {
    let target = e.target;
    let its_nav = target == nav || nav.contains(target);
    let its_burger = target == burgerItem;
    let menu_is_active = nav.classList.contains('nav-active');
    
    if (!its_nav && !its_burger && menu_is_active) {
        nav.classList.remove('nav-active');
    }    
});

  // pop-up

const login = document.querySelector('.login-click');
const account = document.querySelector('.account');
console.log(login, account);
const popup = document.querySelector('.pop-up');
const popupcontent = document.querySelector('.pop-up-content');
const signup = document.querySelector('.sign-up');
const register = document.querySelectorAll('.register');
const form = document.querySelectorAll('.form-sabmit');
const signIn = document.querySelectorAll('.sign-in');
const input = document.querySelectorAll('.input');

function showPopup(clickLocation) {
  clickLocation.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('click');
    popup.classList.add('pop-up-active');
  });
}
showPopup(account);
popup.addEventListener('click', event => {
    if(event.target.classList.contains('pop-up')) {
        popup.classList.toggle('pop-up-active');
    };
});
for(let i = 0; i < register.length; i++) {
    if( i < register.length -1) {
    register[i].addEventListener('click', () => {
        signup.classList.add('sign-up-active');
        popupcontent.classList.add('pop-up-non-active');
    });
    } else {
        register[i].addEventListener('click', () => {
            signup.classList.remove('sign-up-active');
            popupcontent.classList.remove('pop-up-non-active');
    });
    }
}    

for(let i = 0; i < signIn.length; i++) {
    signIn[i].addEventListener('click', () => {
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        alert(email.value + " " + password.value);    
    });    
}

  // slider

const slider = document.querySelector('.wrap-destinations');
const slides = document.querySelectorAll('.destination');
const slide1 = document.querySelector('.destination1');
const slide2 = document.querySelector('.destination2');
const slide3 = document.querySelector('.destination3');
const img = document.querySelector('.img-dest');
const arrowLeft = document.querySelectorAll('.arrow-left');
const arrowRight = document.querySelectorAll('.arrow-right');
const ellipse = document.querySelectorAll('.ellipse');

  // Desktop
const width = img.width;

function sliderDecstop() {
  slide1.addEventListener('click', () => {
    slides.forEach(slide => {
      slide.style.transform=`translateX(${width}px)`;
    });
    activeEllipse(index);
    ellipse[1].classList.add('ellipse-non-active');  
  });
  slide2.addEventListener('click', () => {
    slides.forEach(slide => {
      slide.style.transform=`translateX(0px)`;
    });
    ellipse[1].classList.add('ellipse-active');
    ellipse[1].classList.remove('ellipse-non-active');
    ellipse[0].classList.remove('ellipse-active');
    ellipse[2].classList.remove('ellipse-active');
  });
  slide3.addEventListener('click', () => {
    slides.forEach(slide => {
      slide.style.transform=`translateX(-${width}px)`;
    });
    ellipse[2].classList.add('ellipse-active');
    ellipse[1].classList.remove('ellipse-active');
    ellipse[1].classList.add('ellipse-non-active');
    ellipse[0].classList.remove('ellipse-active');
  });
}

if (window.innerWidth > 766) {
  showPopup(login);
  sliderDecstop();
}

  // mobile
let index = 0;
const activeSlide = n => {
    for(slide of slides) {
        slide.classList.remove('destination-active');
    }
    slides[n].classList.add('destination-active');
}
const activeEllipse = n => {
    for(ellips of ellipse) {
        ellips.classList.remove('ellipse-active');
    }
    ellipse[n].classList.add('ellipse-active');
}

const nextSlide = () => {
    if(index == slides.length -1) {
        index = 0;
        activeSlide(index);
        activeEllipse(index);
    } else {
        index++;
        activeSlide(index);
        activeEllipse(index);
    };
    arrowRight[0].classList.remove('arrow-non-active');
    arrowLeft[0].classList.add('arrow-non-active');
}
const prevSlide = () => {
    if(index == 0) {
        index = slides.length -1;
        activeSlide(index);
        activeEllipse(index);
    } else {
        index--;
        activeSlide(index);
        activeEllipse(index);
    }; 
    arrowRight[0].classList.add('arrow-non-active');
    arrowLeft[0].classList.remove('arrow-non-active');
};

arrowRight[0].addEventListener('click', nextSlide);
arrowLeft[0].addEventListener('click', prevSlide);
