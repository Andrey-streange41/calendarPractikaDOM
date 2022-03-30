const mainElem = document.querySelector('main');

const links = [
  { time: '0.00', wetherImage: "./assets/images/nightCloud.png", degress:'+25' },
  { time: '3.00', wetherImage: './assets/images/nightCloud.png', degress:'+23' },
  { time: '6.00', wetherImage: './assets/images/sonny.png', degress:'+23' },
  { time: '9.00', wetherImage: './assets/images/cloud.png', degress:'+25' },
  { time: '12.00', wetherImage: './assets/images/cloud.png', degress:'+27' }
];

mainElem.innerHTML = NavList({ links: links });
