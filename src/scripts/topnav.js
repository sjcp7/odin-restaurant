import '../css/topnav.css';
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

topnav.appendChild(homeBtn);
topnav.appendChild(menuBtn);
topnav.appendChild(logoBtn);
topnav.appendChild(aboutBtn);
topnav.appendChild(contactBtn);

export default topnav;