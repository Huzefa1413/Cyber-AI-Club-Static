team = [
  {
    name: 'Saim',
    position: 'Media Head',
    pic: '../assets/Event.PNG',
  },
  {
    name: 'Huzefa',
    position: 'Member',
    pic: '../assets/Event.PNG',
  },
  {
    name: 'Zehra',
    position: 'Member',
    pic: '../assets/Event.PNG',
  },
];

var section = document.getElementById('team');
team.forEach((element) => {
  var div = document.createElement('div');
  div.setAttribute('class', 'card');

  var img = document.createElement('img');
  img.setAttribute('src', element.pic);

  var innerdiv = document.createElement('div');
  innerdiv.setAttribute('class', 'container');

  var h4 = document.createElement('h4');
  var nameText = document.createTextNode(element.name);
  h4.appendChild(nameText);

  var p = document.createElement('p');
  var posText = document.createTextNode(element.position);
  p.appendChild(posText);

  innerdiv.appendChild(h4);
  innerdiv.appendChild(p);

  div.appendChild(img);
  div.appendChild(innerdiv);

  section.appendChild(div);
});
