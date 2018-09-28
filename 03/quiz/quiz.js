var todayPhoto = [
    {"url":"http://media.daum.net/photo/2841","img":"http://icon.daumcdn.net/w/c/12/05/82877085750988319.jpeg","title":"&quot;뜨면 끝장&quot; 최강 공격헬기 성능이 설마","id":"20120516082207657"}
    ,{"url":"http://media.daum.net/entertain/photo/gallery/?gid=100320","img":"http://icon.daumcdn.net/w/c/12/05/82876693901189319.jpeg","title":"&#39;오늘만&#39; 필리핀 새댁 5개국어 능통 엄친딸","id":"20120516091011626"}
    ,{"url":"http://media.daum.net/photo/4010","img":"http://icon.daumcdn.net/w/c/12/05/82876307459008319.jpeg","title":"[북한 결혼식 풍경] 신랑·신부 &quot;행복합니다&quot;","id":"20120516092605081"}
    ,{"url":"http://sports.media.daum.net/general/gallery/gagsports/index.html","img":"http://icon.daumcdn.net/w/c/12/05/81730673405131839.jpeg","title":"&#39;내가 더 잘해&#39; 후보GK 경기 난입해 선방","id":"20120516100608409"}
    ,{"url":"http://sports.media.daum.net/general/gallery/0516ufc/index.html","img":"http://icon.daumcdn.net/w/c/12/05/81728759258718839.jpeg","title":"양동이의 하이킥에 타바레스 &#39;주춤&#39;","id":"20120516093313331"}
    ,{"url":"http://media.daum.net/entertain/photo/gallery/?gid=100539","img":"http://icon.daumcdn.net/w/c/12/05/81728404408992839.jpeg","title":"이승철 아내와 딸 사진 공개 &quot;사주에. .&quot;","id":"20120516093918544"}
    ,{"url":"http://media.daum.net/photo/3899","img":"http://icon.daumcdn.net/w/c/12/05/81728227037306839.jpeg","title":"생후 6개월에 프랑스로 입양됐던 아이가..","id":"20120516030614331"}
    ,{"url":"http://sports.media.daum.net/general/gallery/STARKIMYUNA/index.html","img":"http://icon.daumcdn.net/w/c/12/05/81727815537682839.jpeg","title":"&#39;교생&#39; 김연아, 스승의날에도 인기폭발","id":"20120516092003892"}

];


var page = 1;   // 1  = 0~3,  2 = 3~6, 3 = 6~9
var pageCount = 3; //한페이지당 보여질 이미지갯수

var pageDom = document.getElementById('page');
var totalPageDom = document.getElementById('totalPage');
var totalPage= Math.ceil(todayPhoto.length / pageCount);

totalPageDom.innerHTML = totalPage;


// 이미지를 3개씩 화면에 배치하기 위한 함수 및 변수
function showList(){

  console.log('page:',page)

  var start = 0;
  var end = 3;


  start = (page - 1) * pageCount;
  end = page * pageCount;

  // if(page === 1){
  //   start = 0;
  //   end = 3;
  // }
  // else if(page === 2){
  //   start = 3;
  //   end = 6;
  // }
  // else if(page === 3){
  //   start = 6;
  //   end = 9;
  // }

  var wrap = document.querySelector('.wrap');
  var str = '';
  //3개씩 이미지를 보이게 하기위한 반복문.
  for(var i=start; i<end; i++){
    if(todayPhoto[i]) {

      str += '<img src="' + todayPhoto[i].img + '">';     // 이미지

    }
    
  }

  wrap.innerHTML = str;
  pageDom.innerHTML = page;

}

// 버튼 클릭 이벤트 생성 (다음 3개 또는 이전3개 이미지 불러오고 버튼 옆 숫자 증가 및 감소)
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');

btn2.addEventListener('click', function(){

  console.log('next');
  if(page < totalPage) {
    page++;
    showList();
  }
  else{
    page = 1;  // 마지막페이지에서 다음 페이지버튼을 누르면 첫페이지로 이동.
    showList();
  }


})
btn1.addEventListener('click', function(){

  console.log('prev');

  if(page > 1) {
    page--;
  }
  else{
    page=3;   // 첫페이지에서 전 페이지 버튼을 누르면 마지막 페이지로 이동.
    showList();
  }
  showList();

})


showList();










