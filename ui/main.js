console.log('Loaded!');

//change the text of main-text div

var element = document.getElementById('main-text');
element.innerHTML = 'This is my webpage';

//move image a little right gradually

var img = document.getElementById('madi');

img.onclick = function () {
    var interval = setInterval(moveRight, 100);
};

var marginLeft = 0;

function moveRight () {
  marginLeft = marginLeft + 10;
  img.style.marginLeft = marginLeft + 'px';
}