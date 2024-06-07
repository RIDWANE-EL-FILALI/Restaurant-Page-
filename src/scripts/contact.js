export default function contact() {
    const content = document.querySelector('#content');
    content.innerHTML = '';

    const intro = document.createElement('div');
    intro.setAttribute('id', 'intro-contact');

    const heading = document.createElement('h3');
    heading.innerHTML = 'REACH OUT AND <br/>CONNECT <span class="highlight">TODAY</span>!'

    const image = document.createElement('img');
    image.setAttribute('src', './images/contact.png');
    image.setAttribute('id', 'image-contact');

    intro.append(image, heading);
    content.appendChild(intro);
}

