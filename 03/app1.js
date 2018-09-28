function test(){
    console.log("test()");
}

var id = setInterval(test, 3000);

var head = document.querySelector('head')
var script = document.createElement('script');
script.src = 'app2.js';
head.appendChild(script);