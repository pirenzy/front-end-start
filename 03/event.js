// var btn = document.getElementById('btn');
// var btn = document.querySelector('#btn')
// console.log(btn);

// btn.addEventListener('click', click())

// function click(event) {
//     return function () {
//         console.log('click', event);
//         window.open('https://daum.net', '', width = "500", height = "300");
//     };
// }

var clickCount = 0;
function popup(event){
    console.log(++clickCount);
    console.log(arguments, this ,event ,event.type,event.currentTarget);
}
document.body.addEventListener('click', popup);

document.body.addEventListener('click', function(){
    console.log("click");
});
