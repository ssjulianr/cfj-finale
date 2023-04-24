const nav = document.querySelector('.nav');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () =>{
    nav.classList.toggle('nav--open'); //This line of code creates the class 'nav--open' whenever the hamburger element is clicked
    hamburger.classList.toggle('hamburger--open');
}
)