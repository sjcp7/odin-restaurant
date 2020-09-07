import '../css/contact.css';

const contact = document.createElement('div');
contact.classList.add('contact');

const contactTitle = document.createElement('h1');
contactTitle.textContent = 'Contact Us';

const list = document.createElement('ul');

const phoneNumber = document.createElement('li');
phoneNumber.textContent = '123-456-789';
list.appendChild(phoneNumber);

const email = document.createElement('li');
email.textContent = 'hi@chezlorem.com';
list.appendChild(email);

const address = document.createElement('li');
address.textContent = '420 FloridaMan, FL, USA';
list.appendChild(address);

contact.appendChild(contactTitle);
contact.appendChild(list);

export default contact;