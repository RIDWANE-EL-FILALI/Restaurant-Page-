export default function home() {
    const content = document.querySelector('#content');
    content.innerHTML = '';

    const intro = document.createElement('div');
    intro.setAttribute('id', 'intro');

    const heading = document.createElement('h3');
    heading.innerHTML = 'DELICIOUS DISCOVERIES <br/>AWAIT <span class="highlight">YOU</span>'

    const image = document.createElement('img');
    image.setAttribute('src', './images/home.png');

    intro.append(image, heading);
    content.appendChild(intro);
}
