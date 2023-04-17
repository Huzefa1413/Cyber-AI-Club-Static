upcomingevents = [
  {
    date: '16 Feb 2023',
    title: 'Seminar',
    text: 'epellendus magni illo ea animi?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?HuzefaLorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?Huzefa',
    pic: '../assets/CYBER AI..png',
  },
  {
    date: '24 Feb 2023',
    title: 'Seminar',
    text: 'lorem ipsum data hdiajadi',
    pic: '../assets/CYBER AI..png',
  },
];

latestevents = [
  {
    date: '10 Feb 2023',
    title: 'Seminar',
    text: 'epellendus magni illo ea animi?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?HuzefaLorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?Huzefa',
    pic: '../assets/CYBER AI2.png',
  },
  {
    date: '8 Feb 2023',
    title: 'Seminar',
    text: 'lorem ipsum data hdiajadi',
    pic: '../assets/CYBER AI2.png',
  },
];

var upcomingeventsDiv = document.getElementById('upcoming-events');
// if (upcomingevents.length > 0) {
upcomingevents.forEach((element) => {
  var divblogslider = document.createElement('div');
  divblogslider.setAttribute('class', 'blog-slider');

  var divblogsliderwrp = document.createElement('div');
  divblogsliderwrp.setAttribute('class', 'blog-slider__wrp swiper-wrapper');

  var divblogslideritem = document.createElement('div');
  divblogslideritem.setAttribute('class', 'blog-slider__item');

  var divblogsliderimg = document.createElement('div');
  divblogsliderimg.setAttribute('class', 'blog-slider__img');
  var img = document.createElement('img');
  img.setAttribute('src', element.pic);
  divblogsliderimg.appendChild(img);

  var divblogslidercontent = document.createElement('div');
  divblogslidercontent.setAttribute('class', 'blog-slider__content');
  var code = document.createElement('span');
  code.setAttribute('class', 'blog-slider__code');
  var date = document.createTextNode(element.date);
  code.appendChild(date);
  var title = document.createElement('div');
  title.setAttribute('class', 'blog-slider__title');
  var titletext = document.createTextNode(element.title);
  title.appendChild(titletext);
  var text = document.createElement('text');
  text.setAttribute('class', 'blog-slider__text');
  var texttext = document.createTextNode(element.text);
  text.appendChild(texttext);
  divblogslidercontent.appendChild(code);
  divblogslidercontent.appendChild(title);
  divblogslidercontent.appendChild(text);

  divblogslideritem.appendChild(divblogsliderimg);
  divblogslideritem.appendChild(divblogslidercontent);
  divblogsliderwrp.appendChild(divblogslideritem);
  divblogslider.appendChild(divblogsliderwrp);
  upcomingeventsDiv.appendChild(divblogslider);
});
// }
// else {
//   var subheading = upcomingeventsDiv.childNodes[3];
//   subheading.style.display = 'block';
// }

var latesteventsDiv = document.getElementById('latest-events');
latestevents.forEach((element) => {
  var divblogslider = document.createElement('div');
  divblogslider.setAttribute('class', 'blog-slider');

  var divblogsliderwrp = document.createElement('div');
  divblogsliderwrp.setAttribute('class', 'blog-slider__wrp swiper-wrapper');

  var divblogslideritem = document.createElement('div');
  divblogslideritem.setAttribute('class', 'blog-slider__item');

  var divblogsliderimg = document.createElement('div');
  divblogsliderimg.setAttribute('class', 'blog-slider__img');
  var img = document.createElement('img');
  img.setAttribute('src', element.pic);
  divblogsliderimg.appendChild(img);

  var divblogslidercontent = document.createElement('div');
  divblogslidercontent.setAttribute('class', 'blog-slider__content');
  var code = document.createElement('span');
  code.setAttribute('class', 'blog-slider__code');
  var date = document.createTextNode(element.date);
  code.appendChild(date);
  var title = document.createElement('div');
  title.setAttribute('class', 'blog-slider__title');
  var titletext = document.createTextNode(element.title);
  title.appendChild(titletext);
  var text = document.createElement('text');
  text.setAttribute('class', 'blog-slider__text');
  var texttext = document.createTextNode(element.text);
  text.appendChild(texttext);
  divblogslidercontent.appendChild(code);
  divblogslidercontent.appendChild(title);
  divblogslidercontent.appendChild(text);

  divblogslideritem.appendChild(divblogsliderimg);
  divblogslideritem.appendChild(divblogslidercontent);
  divblogsliderwrp.appendChild(divblogslideritem);
  divblogslider.appendChild(divblogsliderwrp);
  latesteventsDiv.appendChild(divblogslider);
});
ScrollReveal().reveal('.blog-slider', {
  delay: 500,
  origin: 'left',
});
