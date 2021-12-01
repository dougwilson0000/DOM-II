import './less/index.less'

// Your code goes here!

// #1
const logoText = document.querySelector('.logo-heading');
logoText.addEventListener('mouseover', function(event) {
    event.target.style.color = 'blue';
    setTimeout(function() {
        event.target.style.color = "";
      }, 600);
    }, false);

// #2
const topImage = document.querySelector('.intro img');
topImage.addEventListener('dblclick', function (event) {
    event.target.style.transform = 'scale(.5)';
} )

// #3
const links = document.querySelectorAll('nav a');
links.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
    })
})

// #4
const introP = document.querySelector('.intro p');
introP.addEventListener('contextmenu', event => {
    event.preventDefault();
})

// #5
document.addEventListener('copy', event => {
    const copyText = document.getSelection();
    event.clipboardData.setData('text/plain', copyText.toString().toUpperCase());
    event.preventDefault();
})

// #6


// #7


// #8


// #9


// #10