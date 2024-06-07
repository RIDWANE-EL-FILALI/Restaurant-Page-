//css styles
import './../assets/css/styles.css';
// js files
import menu from './menu.js'
import home from './home.js'
import contact from './contact.js'
// images
import './../assets/images/home.png'
import './../assets/images/menu.png'
import './../assets/images/contact.png'




const tabs = document.querySelectorAll('#tabs li');
tabs.forEach(tab => {
    tab.addEventListener('click', change_tab)
})

function change_tab(e)
{
    console.log("i have entered change_tab");
    tabs.forEach(tab => tab.classList.remove('current'))
    e.target.classList.add('current');
    if (e.target.classList.contains('home'))
        home();
    else if (e.target.classList.contains('menu'))
        menu();
    else if (e.target.classList.contains('contact'))
        contact();
}

home();
