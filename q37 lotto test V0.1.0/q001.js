var a=6;

var my_choose_lotto= new Array();
var lotto= new Array();
var bonus= new Array(1);
// lotto=[2,3,19,20,45,13];


    //랜덤하게 난수를 만들고(1~45) 6칸 배열에 집어넣되, 중복된 수를 넣지 않는다
    for(i=0 ; i<a; i++){
        var rand= Math.floor(Math.random()*45+1);
        //입력받은 랜덤수와 배열내 원소가 다르다면 if 실행 아니라면 else 실행
        if(! sameNum2(rand)){
            my_choose_lotto.push(rand);
        }else{
            i--;
        }
        
    }
    //랜덤하게 난수를 만들고(1~45) 6칸 배열에 집어넣되, 중복된 수를 넣지 않는다
    for(i=0 ; i<a; i++){
        var rand_com= Math.floor(Math.random()*45+1);
        //입력받은 랜덤수와 배열내 원소가 다르다면 if 실행 아니라면 else 실행
        if(! sameNum1(rand_com)){
            lotto.push(rand_com);
        }else{
            i--;
        }
    }
   
    // lotto=[1,2,3,4,5,6];
    // my_choose_lotto=[1,2,3,4,7,6];

    
    document.write("로또번호(보너스 숫자 x): "+lotto);
    document.write("<br>");
    document.write("나의 로또번호(보너스 숫자 x): "+my_choose_lotto);
    document.write("<br>");
    hr();
    //보너스 번호 추가 (1~45까지)
    my_bonus=Math.floor(Math.random()*45+1);
    bonus=Math.floor(Math.random()*45+1);
   

    var total_lotto=lotto+","+bonus;
    var total_my_lotto=my_choose_lotto+","+my_bonus;
    hr();
    dw("로또 번호: "+total_lotto);
    hr();
    dw("나의 로또 번호: "+total_my_lotto);
    hr();
    console.log(total_lotto);
    console.log(total_my_lotto);

    // document.write(s);
    
    //배열 내 동일한 수가 없는지 확인
    function sameNum1(n){
        return lotto.find((e)=>(e==n)); //lotto 라는 배열 내의 원소가 입력받은 원소와 같을시 리턴
    }
    function sameNum2(n){
        return my_choose_lotto.find((e)=>(e==n));//my_choose_lotto 라는 배열 내의 원소가 입력받은 원소와 같을시 리턴
    }
    
    //두 배열내 같은 값 찾기
    var s= new Array();
    s=my_choose_lotto.filter(x => lotto.includes(x));
    
    console.log(my_choose_lotto.filter(x => lotto.includes(x)));
    
    //맟춘 수 확인
    var correct=s.length;
    hr();
    
    dw("맟춘 수: "+correct);
    
    hr();
    dw("보너스 번호: "+ bonus);
    br();
    dw("내 보너스 번호: "+ my_bonus);


    
    hr();
    if(correct==6){
        dw("1등");
    }else if(correct==5){
        if(bonus==my_bonus){
            dw("2등");
         }else{
             dw("3등");

         }
    }else if(correct==4){
        dw("4등");
    }else if(correct==3){
        dw("5등");
    }else{
        dw("꽝");
    }
    hr();

    
    
    
    
    
    // document.write(correct);