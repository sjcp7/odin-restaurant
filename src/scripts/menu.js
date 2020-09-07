import '../css/menu.css';

const menu = document.createElement('div');
const menuTitle = document.createElement('h1');
const list = document.createElement('ul');

const item1 = document.createElement('li');
item1.textContent = 'winter rice bun';
list.appendChild(item1);

const item2 = document.createElement('li');
item2.textContent = 'chorizo';
list.appendChild(item2);

const item3 = document.createElement('li');
item3.textContent = 'frightened butter with distressed orecchiette sliders';
list.appendChild(item3);

const item4 = document.createElement('li');
item4.textContent = 'gravlax, marrow & miniature hazelnuts frittata';
list.appendChild(item4);

const item5 = document.createElement('li');
item5.textContent = 'bison platter with fingerling water bruschetta';
list.appendChild(item5);

const item6 = document.createElement('li');
item6.textContent = 'rubbed rye pate & tormented pepper';
list.appendChild(item6);

const item7 = document.createElement('li');
item7.textContent = 'lifted corn';
list.appendChild(item7);

const item8 = document.createElement('li');
item8.textContent = 'spicy kale';
list.appendChild(item8);

const item9 = document.createElement('li');
item9.textContent = 'massaged artichoke';
list.appendChild(item9);

const item10 = document.createElement('li');
item10.textContent = 'sublimated lamb';
list.appendChild(item10);

menu.classList.add('menu');
menuTitle.textContent = 'Menu';

menu.appendChild(menuTitle);
menu.appendChild(list);

export default menu;