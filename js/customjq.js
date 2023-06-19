$(document).ready(function(){
      
    

      const ww = $(window).width();
      // console.log(ww);

      //window width 960이상에서만 적용시킨다
      $(window).scroll(function(){
            if( ww >= 960){
                  
                  ////////// Coffee section 작아지면서 투명하게 만들기//////////
                  //window scrollTop값
                  const wscrT = $(window).scrollTop();
                  // console.log(wscrT);

                  //투명하게 만들기
                  //적용하고싶은 섹션 scrollTop값 구하기 1200에서 1700까지 
                  //0과1은 opacity
                  //1 = a * 1200 + b
                  //0 = a * 1700 + b
                  //1=a*1200+b,0=a*1700+b 방정식 풀기
                  //a = - 1/500
                  //b = 17/5
                  const opacity = -1/500 * wscrT + 17/5;
                  $('.coffee').css('opacity',opacity);

                  //작아지게 만들기
                  //1 과 0.8은 scale
                  // 1 = a * 1200 + b
                  // 0.8 = a * 1700 + b
                  //a = - 1/2500
                  //b = 37/25
                  const scale = -1/2500 * wscrT + 37/25;
                  $('.coffee').css('transform',`scale(${scale})`);

                  ////////// merchandise 작아지면서 투명하게 만들기//////////
                  //2050-2600
                  //1 = a * 2050 + b
                  //0 = a * 2600 + b
                  //a = -1/550
                  //b = 52/11
                  const opacity2 = -1/550 * wscrT + 52/11
                  $('.merchandise').css('opacity',opacity2);

                  //1 = a * 2050 + b
                  //0.8 = a * 2600 + b
                  //a= -1/2750
                  //b= 96/55
                  const scale2 = -1/2750 *wscrT + 96/55;
                  $('.merchandise').css('transform',`scale(${scale2})`);





            }
      });


}); /* end */