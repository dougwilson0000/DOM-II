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

//#3
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
window.addEventListener('beforeprint', (event) => {
    console.log('Before print');
    console.log(event);
  });

// #7
window.addEventListener('load', (event) => {
    alert(`${event} page is fully loaded`);
  });

// #8
document.addEventListener('keydown', event => {
    if(event.key === 'Escape'){
    alert(`${event.code} Was pressed, Proceed with Caution`)
    }
});


// #9
const imgContent = document.querySelectorAll('img');
imgContent.forEach(img => {
    img.addEventListener('mouseenter', event => {
        event.target.style.border = '3px solid purple';
    })
})

// #10

const button = document.querySelectorAll('.btn');
button.forEach(btn => {
btn.addEventListener('mousedown', event => {
    event.target.style.backgroundColor = 'black';
})
})

