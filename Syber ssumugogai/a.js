// // ****************
// // 수 입력만큼 고양이 마리수 출력
// var b;
// b=prompt("수를 입력하세요:")


// for(var i=0;i<=b;i=i+1){
//     document.write("고양이");
//     if(i==b){
//         document.write("마지막입니다."+"<br>"+"고양이는 총"+b+"마리 입니다.")
//     }
//     else{
//         document.write(i+"마리"+"<br>");
//     }
// }

// // 로그 체크
// console.log("헬로월드!!!");

var random_num= Math.floor(Math.random()*7)+1; //1~7까지 랜덤수
console.log(random_num);
var b= prompt("수를 입력하세요(1~7사이 범위) 기회는 4번입니다.:");
for(a=1; a<4; a++){

    if(random_num==b){
        document.write("입력하신 수가 랜덤수와 같습니다. 당신이 이겼어요");
        break;
    }else if(b>7){
        var b= prompt("범위를 초과했습니다.(1~7사이 범위) 기회는 "+(4-a)+" 번 입니다.:");
        continue;
    }else if(random_num != b) {
        var b= prompt("수를 다시입력하세요(1~7사이 범위) 기회는 "+(4-a)+" 번 입니다.:");
        if((4-a)==1){
            document.write("졌습니다.");
            break;
        }
        continue;
    }

    
}





//추가해야할것: 횟수 제한, 횟수제한동안 랜덤수 유지 및 출력

