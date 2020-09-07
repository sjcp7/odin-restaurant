import '../css/home.css';

const homeBanner = document.createElement('div');
const bannerText = document.createElement('div');
const title = document.createElement('h1');
const subtitle = document.createElement('h2');

title.textContent = 'Chez Lorem';
subtitle.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin odio.';

homeBanner.classList.add('banner');
bannerText.classList.add('banner-text');

bannerText.appendChild(title);
bannerText.appendChild(subtitle);

homeBanner.appendChild(bannerText);

export default homeBanner;
