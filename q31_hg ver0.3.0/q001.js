//n판 n선승
var user_score=0;
var com_score=0;
// var round;
var resultString="";

//이미지 놓일 div들
var divRpcImgUser;
var divRpcImgCom;


var rpcResultScreen;

window.onload = function(){
    rpcResultScreen = document.getElementById("rpc_result_screen");

    rpcInputText1 = document.getElementById("rpc_input_text1");       // 연결
    rpcInputText2 = document.getElementById("rpc_input_text2");       // 연결
    rpcInputText3 = document.getElementById("rpc_input_text3"); 
    
    divRpcImgUser = document.getElementById("rpc_user");       // 연결
    divRpcImgCom = document.getElementById("rpc_com");       // 연결// 연결

}

//html 상에 버튼 입력으로 결과 확인 , 3번의 입력을 받음
function rpcInputButtonClick(){
    var userChoices=[
        rpcInputText1.value,
        rpcInputText2.value,
        rpcInputText3.value
    ];
    
    resultString="";
    rpcResultScreen.value= resultString;

    //이전 이미지 초기화
    divRpcImgUser.innerHTML="";
    divRpcImgCom.innerHTML="";
    
    
    //가위 바위 보 프로그램,3번 반복
    
    for(i=0; i<3; i++){
        
        // resultString = "";  //결과 화면 초기화
        // rpcResultScreen.value = resultString;
        
        var user=userChoices[i];
        var win_lose="";
        
            //아무것도 입력 하지 않고 제출 시 com의 승리 처리 및 com 점수 득점

            if(user!="가위" && user!="바위" && user !="보"){
                alert("user 의 선택이 없으므로 com의 승리입니다.");
                com_score=com_score+1;
                continue;
            }
            rpc(user, win_lose); 
            
        }
        result();
        rpcResultScreen.value = resultString;

}
function result(){
    //스코어 확인
       // hr();
       // dw("user 스코어: "+user_score);
       resultString=resultString+"user 스코어: "+user_score+"\n";
       // br();
       // dw("com 스코어: "+com_score);
       resultString=resultString+"com 스코어: "+com_score+"\n";
       
       //스코어 비교 후 승자 결정
    //    if(user_score>com_score){
    //        // hr();
    //        // dw("user 의 최종 승리!");
    //        resultString=resultString+"user 의 최종 승리";
           
    //    }else if(user_score<com_score){
    //        // hr();
    //        // dw("com 의 최종 승리!");
    //        resultString=resultString+"com 의 최종 승리";
    //    }else{
    //        // hr();
    //        // dw("최종 무승부!");
    //        resultString=resultString+"최종 비김";
    //    }
}
function rpc(user, win_lose){
    var com=Math.floor(Math.random()*3+1);
            var com_diss;
            
            if(com==1){
                com_diss="가위";
            }else if(com==2){
                com_diss="바위";
            }else{
                com_diss="보";
            }
            // if((user !="가위")&&(user !="바위")&&(user !="보")){
            //     alert("user 의 선택이 없으므로 com의 승리입니다.");
            // }
            // br();
            // dw("user의 선택: "),dw(user);
            // br();
            // dw("com의 선택: "),dw(com_diss);

            resultString = resultString+"user 의 선택: "+user;
            resultString = resultString+"\n";
            resultString = resultString+"com 의 선택: "+com_diss;
            resultString = resultString+"\n";
            
             // 이미지 추가
            switch(user){
                case "가위":
                    divRpcImgUser.innerHTML += "<img src='sc.png' alt='가위'>"
                    break;
                case "바위":
                    divRpcImgUser.innerHTML += "<img src='ro.png' alt='바위'>"
                    break;
                case "보":
                    divRpcImgUser.innerHTML += "<img src='pa.png' alt='보'>"
                    break;
            }
            switch(com_diss){
                case "가위":
                    divRpcImgCom.innerHTML += "<img src='c_sc.png' alt='가위'>"
                    break;
                case "바위":
                    divRpcImgCom.innerHTML += "<img src='c_ro.png' alt='바위'>"
                    break;
                case "보":
                    divRpcImgCom.innerHTML += "<img src='c_pa.png' alt='보'>"
                    break;
                }
           
            
            if(user=="가위"){
                if(com_diss=="가위"){
                    // hr();
                    // dw("비김");
                    win_lose="비김";
                    // hr();
                }
                else if(com_diss=="바위"){
                    // hr();
                    win_lose="user의 패배"
                    // resultString = resultString+"user 의 패배";
                    // hr();
                    com_score=com_score+1;
                }
                else{
                    // hr();
                    win_lose="com 의 패배";
                    // resultString = resultString+"com 의 패배";
                    // hr();
                    user_score=user_score+1;
                }
            }else if(user=="바위"){
                if(com_diss=="가위"){
                    // hr();
                    // dw("com 의 패배");
                    // resultString = resultString+"com 의 패배";
                    win_lose="com 의 패배";
                    // hr();
                    user_score=user_score+1;
                }
                else if(com_diss=="바위"){
                    // hr();
                    // dw("비김");
                    // resultString = resultString+"비김";
                    win_lose="비김";
                    // hr();
                }
                else{
                    // hr();
                    // dw("user 의 패배");
                    // resultString = resultString+"user 의 패배";
                    win_lose="user 의 패배";
                    // hr();
                    com_score=com_score+1;
                }
            }else if(user=="보"){
                if(com_diss=="가위"){
                    // hr();
                    // dw("user의 패배");
                    win_lose="user 의 패배";
                    // resultString = resultString+"user 의 패배";
                    // hr();
                    com_score=com_score+1;
                }
                else if(com_diss=="바위"){
                    // hr();
                    // dw("com 의 패배");
                    win_lose="com 의 패배";
                    // resultString = resultString+"com 의 패배";
                    // hr();
                    user_score=user_score+1;
                }
                else{
                    // hr();
                    // dw("비김");
                    // resultString = resultString+"비김";
                    win_lose="비김";
                    // hr();
                }
            }else{
                // hr();
                // dw("user의 패배");
                win_lose="user 의 패배";
                // resultString = resultString+"user 의 패배";
                com_score=com_score+1;
            }
        
            resultString=resultString+"결과: "+win_lose+"\n\n";
            
}
