//구구단 함수
function gugudan(num){
    console.log(num + '단');
    for(j=1; j<10; j++){
        console.log(num + '*' + j + '=' + num*j);
    }
}

for(i=2; i<10; i++){
    gugudan(i);
}