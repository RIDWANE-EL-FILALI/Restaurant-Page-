export default function menu() {
    const content = document.querySelector('#content');
    content.innerHTML = '';

    const intro = document.createElement('div');
    intro.setAttribute('id', 'intro');

    const heading = document.createElement('h3');
    heading.innerHTML = 'TASTE THE <br/>EXQUISITE <span class="highlight">DELIGHTS</span>!'

    const image = document.createElement('img');
    image.setAttribute('src', './images/menu.png');

    intro.append(image, heading);
    content.appendChild(intro);
}

