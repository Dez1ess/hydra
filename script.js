//hamburger

const hamburger = document.querySelectorAll(".hamburger-menu");
const navigation = document.querySelector(".mobile-navbar");
const bars = document.querySelectorAll('.bar');
const bar2 = document.querySelectorAll(".bar2");
const bar1 = document.querySelectorAll(".bar1");
const bar3 = document.querySelectorAll(".bar3");


hamburger.forEach((hamburger) => {
  hamburger.onclick = () => {
    bars.forEach((bar) => bar.classList.toggle('bar-active'));
    bar2.forEach((bar) => bar.classList.toggle('menu-active'));
    bar1.forEach((bar) => bar.classList.toggle('top-bar-active'));
    bar3.forEach((bar) => bar.classList.toggle('bottom-bar-active'));

    navigation.classList.toggle("mobile-navbar-active");
    if (navigation.classList.contains("mobile-navbar-active")) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
}})


const navLinks = document.querySelectorAll(".mobile-navbar a");

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    bars.forEach((bar) => bar.classList.remove('bar-active'));
    bar2.forEach((bar) => bar.classList.remove('menu-active'));
    bar1.forEach((bar) => bar.classList.remove('top-bar-active'));
    bar3.forEach((bar) => bar.classList.remove('bottom-bar-active'));

    navigation.classList.remove("mobile-navbar-active");

    if (navigation.classList.contains("mobile-navbar-active")) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  })
})



//slider-hero

const prevBtn = document.querySelector('.contact-prev-btn');
const nextBtn = document.querySelector('.contact-next-btn');

const sliderImg = document.querySelector('#slider-img');
const sliderInfo = document.querySelector('#slider-info');
const contactHolder = document.querySelector(".contact-item-holder");

const images = {
  phoneCall: './img/phone-call.svg',
  message: './img/message.svg',
  locationIcon: './img/location-icon.svg'
}

const contacts = {
  'Give Us a Call': '(110) 1111-1010',
  'Send Us a Message': 'Contact@HydraVTech.com',
  'Pay Us a Visit': 'Union St, Seattle, WA 98101'
}

let currentImageIndex = 0;
const imageKeys = Object.keys(images);
const contactKeys = Object.keys(contacts);

nextBtn.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex + 1) % imageKeys.length;

  setTimeout(() => {
    sliderImg.setAttribute('src', images[imageKeys[currentImageIndex]]);
    sliderInfo.innerText = contacts[contactKeys[currentImageIndex]];
  }, 200)

  contactHolder.classList.add('fade');
  setTimeout(() => {
    contactHolder.classList.remove('fade')
  }, 500);
});


prevBtn.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex - 1 + imageKeys.length) % imageKeys.length;

  setTimeout(() => {
    sliderImg.setAttribute('src', images[imageKeys[currentImageIndex]]);
    sliderInfo.innerText = contacts[contactKeys[currentImageIndex]];
  }, 200)

  contactHolder.classList.add('fade');
  setTimeout(() => {
    contactHolder.classList.remove('fade')
  }, 500);
});



//slider-services

const cardPrevBtn = document.querySelector('.card-prev-btn');
const cardNextBtn = document.querySelector('.card-next-btn');

const cardSliderImg = document.querySelector('#card-slider-img');
const cardSliderHeading = document.querySelector('.card-mob h3');
const cardHolder = document.querySelector(".card-holder");

const cardImages = ['./img/simulation-card.png',
'./img/education-card.png',
'./img/care-card.png',
'./img/outdoor-card.png' ];

const cardHeadings = ['SIMULATION','EDUCATION', 'SELF-CARE', 'OUTDOOR'];


let currentCardImageIndex = 0;

cardNextBtn.addEventListener('click', () => {
  currentCardImageIndex = (currentCardImageIndex + 1) % cardImages.length;

  setTimeout(() => {
    cardSliderImg.setAttribute('src', cardImages[currentCardImageIndex]);
    cardSliderHeading.innerText = cardHeadings[currentCardImageIndex];
  }, 200);

  cardHolder.classList.add('fade');
  setTimeout(() => {
    cardHolder.classList.remove('fade')
  }, 500);
});


cardPrevBtn.addEventListener('click', () => {
  currentCardImageIndex = (currentCardImageIndex - 1 + cardImages.length) % cardImages.length;

  setTimeout(() => {
    cardSliderImg.setAttribute('src', cardImages[currentCardImageIndex]);
    cardSliderHeading.innerText = cardHeadings[currentCardImageIndex];
  }, 200)

  cardHolder.classList.add('fade');
  setTimeout(() => {
    cardHolder.classList.remove('fade')
  }, 500);
});


// slider-tect

const techPrevBtn = document.querySelector('.tech-prev-btn');
const techNextBtn = document.querySelector('.tech-next-btn');

const techSliderImg = document.querySelector('#tech-slider-img');

const techImages = ['./img/unrealengine.svg',
'./img/unity.svg',
'./img/oculus.svg',
'./img/vive.svg' ];


let currentTechImageIndex = 0;

techNextBtn.addEventListener('click', () => {
  currentTechImageIndex = (currentTechImageIndex + 1) % techImages.length;

  setTimeout(() => {
    techSliderImg.setAttribute('src', techImages[currentTechImageIndex]);
  }, 200);

  techSliderImg.classList.add('fade');
  setTimeout(() => {
    techSliderImg.classList.remove('fade')
  }, 500);
})


techPrevBtn.addEventListener('click', () => {
  currentTechImageIndex = (currentTechImageIndex - 1 + techImages.length) % techImages.length;

  setTimeout(() => {
    techSliderImg.setAttribute('src', techImages[currentTechImageIndex]);
  }, 200);

  techSliderImg.classList.add('fade');
  setTimeout(() => {
    techSliderImg.classList.remove('fade')
  }, 500);
})


//slider-process 

const processPrevBtn = document.querySelector('.process-prev-btn');
const processNextBtn = document.querySelector('.process-next-btn');

const processSliderHeadings = document.querySelector('.process-item h3');
const processCounter = document.querySelector('.process-img p');

const processHeadings = ['3D Conception<br>& Design', 'Interaction<br>Design', 'VR World<br>User Testing', 'Hydra VR<br>Deploy'];
const processNumber = ['01', '02', '03', '04'];

let currentProcessIndex = 0;

processNextBtn.addEventListener('click', () => {
  currentProcessIndex = (currentProcessIndex + 1) % processHeadings.length;

  setTimeout(() => {
    processSliderHeadings.innerHTML = processHeadings[currentProcessIndex];
    processCounter.innerText = processNumber[currentProcessIndex];
  }, 200);

  processSliderHeadings.classList.add('fade');
  processCounter.classList.add('fade');

  setTimeout(() => {
    processSliderHeadings.classList.remove('fade');
    processCounter.classList.remove('fade');
  }, 500);
})


processPrevBtn.addEventListener('click', () => {
  currentProcessIndex = (currentProcessIndex - 1 + processHeadings.length) % processHeadings.length;

  setTimeout(() => {
    processSliderHeadings.innerHTML = processHeadings[currentProcessIndex];
    processCounter.innerText = processNumber[currentProcessIndex];
  }, 200);

  processSliderHeadings.classList.add('fade');
  processCounter.classList.add('fade');

  setTimeout(() => {
    processSliderHeadings.classList.remove('fade');
    processCounter.classList.remove('fade');
  }, 500);
})



// navbar 


window.addEventListener("scroll", () => {
  const hamburgerScroll = document.querySelector(".hamburger-scroll");

  if (window.scrollY > 125) {
    hamburgerScroll.style.visibility = "visible";
    hamburgerScroll.classList.add("nav-fade");
  } else {
    hamburgerScroll.style.visibility = "hidden";
    hamburgerScroll.classList.remove("nav-fade");
  }
})