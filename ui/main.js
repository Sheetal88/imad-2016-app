console.log('Loaded!');

//change the text of main-text div

var element = document.getElementById('main-text');
element.innerHTML = 'This is my webpage';

//make an element move right

var img = document.getElementById('madi');

img.onclick = function () {
    img.style.marginLeft = '100px';
};

    