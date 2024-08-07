//3판 2선승제 제도 도입
var user_score=0;
var com_score=0;

window.onload = function(){

    rpcInputText1 = document.getElementById("rpc_input_text1");       // 연결
    rpcInputText2 = document.getElementById("rpc_input_text2");       // 연결
    rpcInputText3 = document.getElementById("rpc_input_text3");       // 연결

}


function rpcInputButtonClick(){
    var userChoices=[
        rpcInputText1.value,
        rpcInputText2.value,
        rpcInputText3.value
    ];
    
    
        // for(r=1 ; r<=3; r++){
            
        // }
        
        
        
        for(i=0; i<3; i++){
            
            //가위 바위 보 프로그램
            
            
            var user=userChoices[i];

            if(user!="가위" && user!="바위" && user !="보"){
                alert("user 의 선택이 없으므로 com의 승리입니다.");
                com_score=com_score+1;
                continue;
            }
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
            br();
            dw("user의 선택: "),dw(user);
            br();
            dw("com의 선택: "),dw(com_diss);
            
           
            
            if(user=="가위"){
                if(com_diss=="가위"){
                    hr();
                    dw("비김");
                    hr();
                }
                else if(com_diss=="바위"){
                    hr();
                    dw("user의 패배");
                    hr();
                    com_score=com_score+1;
                }
                else{
                    hr();
                    dw("com 의 패배");
                    hr();
                    user_score=user_score+1;
                }
            }else if(user=="바위"){
                if(com_diss=="가위"){
                    hr();
                    dw("com 의 패배");
                    hr();
                    user_score=user_score+1;
                }
                else if(com_diss=="바위"){
                    hr();
                    dw("비김");
                    hr();
                }
                else{
                    hr();
                    dw("user 의 패배");
                    hr();
                    com_score=com_score+1;
                }
            }else if(user=="보"){
                if(com_diss=="가위"){
                    hr();
                    dw("user의 패배");
                    hr();
                    com_score=com_score+1;
                }
                else if(com_diss=="바위"){
                    hr();
                    dw("com 의 패배");
                    hr();
                    user_score=user_score+1;
                }
                else{
                    hr();
                    dw("비김");
                    hr();
                }
            }else{
                hr();
                dw("user의 패배");
                com_score=com_score+1;
            }
        
            
            
        }
        hr();
        dw("user 스코어: "+user_score);
        br();
        dw("com 스코어: "+com_score);
        
        if(user_score>com_score){
            hr();
            dw("user 의 최종 승리!");
            
        }else if(user_score<com_score){
            hr();
            dw("com 의 최종 승리!");
        }else{
            hr();
            dw("최종 무승부!");
        }
    }



