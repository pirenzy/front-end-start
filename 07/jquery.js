// document.querySelector('h1').innerHTML = 'hi';      //모든 h1을 가져와서 hi로 바꿈.
//  $('h1').fadeOut().delay(1000).fadeIn();

// var $div = $('div')

// $div
//   .css('background-color', 'yellow')
//   .css('border', '1px solid red');



// var divs = document.querySelectorAll('div');
// for(var i=0 ; i < divs.length; i++) {
//   divs[i].style.backgroundColor = 'red';
// }




var $btn = $('#btn');          // #을 붙이는 이유는 id 이름   .일경우 class
var $txt = $('#txt');
var $debug = $('#debug');

$btn.on('click', function(event){   //버튼 클릭이벤트(클릭시)
  console.log('click')
  $('h1').toggle('fast');//toggle대신 hide넣으면 fadeOut(); toggle는 show와 hide 반복효과
//   if($txt.val() === '') {           // txt에 값이 없다면
//     alert('값을 넣어주세요')         // 값을 넣어주세요라는 알림
//     return;
//   }

//   $debug.html($txt.val());          // div debug위치에 txt값을 띄움

});


$('.wrap').on('click', 'div', function(event){  //wrap일떄 클릭이벤트를 받는데 div 일때만 콜백을받는다.

    $(event.target).fadeOut();
    // console.log(event.target);
  
  })