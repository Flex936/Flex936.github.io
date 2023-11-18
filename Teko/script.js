function Home() {
    document.getElementById('Home Page').style.display="block"
    document.getElementById('Page2').style.display="none"
    document.getElementById('Page3').style.display="none"
    document.getElementById('Page4').style.display="none"
    document.getElementById('slidertest').style.display="none"
}

function Page2() {
    document.getElementById('Home Page').style.display="none"
    document.getElementById('Page2').style.display="block"
    document.getElementById('Page3').style.display="none"
    document.getElementById('Page4').style.display="none"
    document.getElementById('slidertest').style.display="none"
}

function Page3() {
    document.getElementById('Home Page').style.display="none"
    document.getElementById('Page2').style.display="none"
    document.getElementById('Page3').style.display="block"
    document.getElementById('Page4').style.display="none"
    document.getElementById('slidertest').style.display="none"
}

function Page4() {
    document.getElementById('Home Page').style.display="none"
    document.getElementById('Page2').style.display="none"
    document.getElementById('Page3').style.display="none"
    document.getElementById('Page4').style.display="block"
    document.getElementById('slidertest').style.display="none"
}

function ShowSlider() {
    document.getElementById('Home Page').style.display="none"
    document.getElementById('Page2').style.display="none"
    document.getElementById('Page3').style.display="none"
    document.getElementById('Page4').style.display="none"
    document.getElementById('slidertest').style.display="block"
}


const nav = document.querySelector('.nav');
const nav_tog = document.querySelector('.nav_tog');

nav_tog.onclick = function() {
    nav.classList.toggle('open')
}

const list = document.querySelectorAll('.list');

function activeLink() {
    list.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((item) =>
item.addEventListener('click',activeLink))


const swiper = new Swiper(".mySlider", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 3000,
    },
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });