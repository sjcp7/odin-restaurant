import '../css/about.css';

const about = document.createElement('div');
about.classList.add('about');

const aboutTitle = document.createElement('h1');
aboutTitle.textContent = 'About';

const para = document.createElement('p');
para.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt, erat sit amet vestibulum tempus, nibh augue gravida quam, pellentesque pellentesque justo ante in tortor. Donec fermentum molestie ipsum. Donec faucibus est id consectetur cursus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec tristique efficitur suscipit. Aenean luctus a erat ut vestibulum. Donec tincidunt, est a bibendum tempus, sapien neque iaculis est, interdum vehicula nibh leo ut odio. Aenean finibus condimentum eros eget pulvinar.';

about.appendChild(aboutTitle);
about.appendChild(para);

export default about;