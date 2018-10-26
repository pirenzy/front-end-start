//start...

//input입력받기 


var input = document.getElementById('memo');
var list = document.getElementById('list');
var form = document.querySelector('.new-task');


function addTodo(event){
  // if(event.keyCode === 13) {
  //   var todo = input.value;
  //   console.log(todo);
  // }
  // console.log(event);


  var todo = input.value;
  console.log(todo); 
  insertTodo(todo);

  input.value = '';
  event.preventDefault(); // 기본 행동 중지.
}

// input.addEventListener('keydown', addTodo);
form.addEventListener('submit', addTodo);

function insertTodo(todo){

  var html = `<li>
        <button class="delete">×</button>
        <input type="checkbox" class="toggle-checked">
        <span class="text">${todo}</span>
      </li>`;
    
  list.innerHTML += html;    
}

list.addEventListener('click',delTodo);
list.addEventListener('click',CheckTodo);

function delTodo(event){
    if(event.target.className !== 'delete') {
        return;
      }
      var deleteBtn = event.target;
      //버튼의 상위엘리먼트 <li> 제거
      console.log(deleteBtn.parentElement);
      deleteBtn.parentElement.remove();
  }

  function CheckTodo(event) {
    if(event.target.className !== 'toggle-checked') {
      return;
    }
    //event.target.parentNode.childNodes[5] = span 노드
    console.log(event.target.parentNode.childNodes[5]);
    var todoText = event.target.parentNode.childNodes[5];
    if(event.target.checked){
      todoText.style.textDecoration = "line-through";
      todoText.style.color = "grey";
    }
    else {
      todoText.style.textDecoration = "none";
      todoText.style.color = "black";
    }
  }