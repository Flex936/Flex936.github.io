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