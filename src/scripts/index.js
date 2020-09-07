import '../css/reset.css';

import topnav from './topnav';
import { addWhiteClass, removeWhiteClass } from './topnav';

import homeBanner from './home';
import menu from './menu' ;
import about from './about';
import contact from './contact';

const content = document.querySelector('#content');
content.appendChild(topnav);
addWhiteClass();
content.appendChild(homeBanner);

function changeTab(e) {
  const tab = e.target;
  content.innerHTML = '';
  content.appendChild(topnav);
  removeWhiteClass();
  if (tab.className === 'nav-logo') { return }

  if (tab.className === 'nav-home') {
    content.appendChild(homeBanner);
    addWhiteClass();
  }

  if (tab.className === 'nav-menu') {
    content.appendChild(menu);
  }

  if (tab.className === 'nav-about') {
    content.appendChild(about);
  }

  if (tab.className === 'nav-contact') {
    content.appendChild(contact);
  }
  
}

const tabs = document.querySelectorAll('nav button');

tabs.forEach(tab => {
  tab.addEventListener('click', changeTab);
})
