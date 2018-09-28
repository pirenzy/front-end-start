console.log('chess');


var wrap = document.querySelector('.wrap');
var str = '';
var className = '';
var isWhite = false;


for(let i = 1; i <= 4; i++) {
  for(let j = 1; j <= 4; j++) {
      // let block = document.createElement('div');
      // block.className = (i + j) % 2 == 1 ? 'black' : 'white';
      // wrap.appendChild(block);
      str += `<div class='${(i + j) % 2 == 1 ? 'black' : 'white'}'></div>`   // 검은색 , 흰색 으로 4x4 체스판 만들기.
  }
}


wrap.innerHTML = str;


// DOM에 클릭 이벤트 할당

var boards = document.querySelectorAll('.wrap > div');
var selectedDom = null;



function selectBoard(event) {
  console.log('selected');

  var board = event.currentTarget;
  console.log(board)

  if(selectedDom){
    selectedDom.className =  selectedDom.className.replace(' select', '');
  }


  board.className += ' select';

  selectedDom = board;
}

for(var i=0; i<boards.length; i++){
  boards[i].addEventListener('click', selectBoard);
}