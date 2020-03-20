// Your code goes here

// Event One: click

const nav = document.querySelector('nav');

nav.addEventListener('click', (e) => {
    e.target.style.color ='blue';
});

// Event Two: dblclick

const headerImg = document.querySelector('header img');

headerImg.addEventListener('dblclick', (e) => {
    e.target.style.display = 'none';
});

// Event Three: mousemove

const logo = document.querySelector('header h1');

logo.addEventListener('mousemove', (e) => {
    e.target.style.color = 'green';
});

 // Event Four: mouseenter

const letsGo = document.querySelector('.content-section img');

letsGo.addEventListener('mouseenter', (e) => {
    e.target.style.display = 'none';
});

// Event Five: mouseleave

const awaits = document.querySelector('.inverse-content img');

awaits.addEventListener('mouseleave', (e) => {
    e.target.style.display = 'none';
});

// Event Six: mouseout

const destination = document.querySelector('.content-destination img');

destination.addEventListener('mouseout', (e) => {
    e.target.style.display = 'none';
});

// Event Seven: scroll

const body = document.querySelector('header');

body.addEventListener('wheel', (e) => {
    e.target.style.backgroundColor = 'blue';
});

// Event Eight: pointerdown

buttons = document.querySelector('.btn');

buttons.addEventListener('pointerdown', (e) => {
    e.target.style.color = 'yellow';
});

// Event Nine: pointerenter

const copyright = document.querySelector('.footer');

copyright.addEventListener('pointerenter', (e) => {
    e.target.style.visibility = 'hidden';
});

// Event Ten: pointerleave

copyright.addEventListener('pointerleave', (e) => {
    e.target.style.visibility = 'visible'
});