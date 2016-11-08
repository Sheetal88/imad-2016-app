var button = document.getElementById('counter');
var counter = 0;

button.onclick = function() {
    counter = counter + 1;
    var apan = document.getElementById('count');
    span.innerHTML = counter.toString();
};