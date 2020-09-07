import '../css/topnav.css';
import menu from './menu';
const topnav = document.createElement('nav');

const homeBtn = document.createElement('button');
const menuBtn = document.createElement('button');
const aboutBtn = document.createElement('button');
const contactBtn = document.createElement('button');
const logoBtn = document.createElement('button');

homeBtn.textContent = 'Home';
menuBtn.textContent = 'Menu';
aboutBtn.textContent = 'About';
contactBtn.textContent = 'Contact';
logoBtn.textContent = 'Chez Lorem';

logoBtn.classList.add('nav-logo');
homeBtn.classList.add('nav-home');
menuBtn.classList.add('nav-menu');
aboutBtn.classList.add('nav-about');
contactBtn.classList.add('nav-contact');

topnav.appendChild(homeBtn);
topnav.appendChild(menuBtn);
topnav.appendChild(logoBtn);
topnav.appendChild(aboutBtn);
topnav.appendChild(contactBtn);

function addWhiteClass() {
  homeBtn.classList.add('white');
  menuBtn.classList.add('white');
  aboutBtn.classList.add('white');
  contactBtn.classList.add('white');
  logoBtn.classList.add('white');
}


function removeWhiteClass() {
  homeBtn.classList.remove('white');
  menuBtn.classList.remove('white');
  aboutBtn.classList.remove('white');
  contactBtn.classList.remove('white');
  logoBtn.classList.remove('white');
}



export default topnav;
export { addWhiteClass , removeWhiteClass }