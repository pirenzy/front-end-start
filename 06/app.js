console.log('app')

var appkey = 'd59566bffc696db3da72a0f293c96975';
var query = '제주대학교';
var url = `https://dapi.kakao.com/v2/search/web?query=${query}`;  // 'https://dapi.kakao.com/v2/search/web?query=' + query; 처럼 써도되지만 ' 대신 ` 로 감싸서 이렇게 사용할 수 있음.


var myHeaders = new Headers();
myHeaders.append("Authorization", "KakaoAK d59566bffc696db3da72a0f293c96975");
var options = {
    headers: myHeaders
};

fetch(url, options)
  .then(function(response){
    response.json().then(function(data){
      console.log('json data:',data);
    });
  })
