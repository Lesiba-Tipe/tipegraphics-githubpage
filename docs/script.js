//https://getbootstrap.com/docs/5.0/components/carousel/

console.log("Testing");
path = 'http://localhost:3000/data'
//path = './shared/data.json'
fetch(path)
  .then(response => response.json())
  .then(data => {
    link = 'https://drive.google.com/uc?id=';

    let welcomeNote = data.welcomeNote
    let aboutData = data.about;
    let serviceData = data.service
    let images = data.img;

    const elementWelcome = document.getElementById('welcomeNote');
    const elementAbout = document.getElementById('about');
    const elementService = document.getElementById('service');
    const elementPotfolio = document.getElementById('potfolio');

    about = document.createElement('p')
    welcome = document.createElement('p')

    welcome.innerHTML = welcomeNote
    elementWelcome.appendChild(welcome)

    about.innerHTML = aboutData
    elementAbout.appendChild(about)

    for (let index = 0; index < 3; index++) {
      const Element = document.createElement('div');
      Element.classList.add('sevice-card');
      Element.setAttribute('src', './shared/icons/'+ index + 1 + '.png');
      elementService.appendChild(Element);
    }

    images.forEach(img => {
      img = link + img
      const imgElement = document.createElement('img');
      elementPotfolio.appendChild(imgElement);
      imgElement.setAttribute('src', img);
      imgElement.classList.add('potfolio-img');
    });

  })
  .catch(error => {
    alert('Make sure local server is running...\n'+ error)
    console.error('Error:', error);
  });



