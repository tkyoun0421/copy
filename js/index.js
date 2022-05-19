$(function(){
    // 변수
    const callNav = $('.header_wrap .call_nav');
    const modalBoxWrap = $('.modal_box_wrap');
    const modalBg = $('.modal_bg');
    const serviceBtn = $('.header_wrap .btn_service');
    const btnHelp = $('.header_wrap .btn_help');
    const btnSignup = $('.header_wrap .btn_signup');
    const modalClose = $('.modal_box_wrap a');
    const navBtn = $('.header_wrap .nav_btn li');
    let loc = [];
    let ind = 0;
    let now = 0;
    let y = 0;
    let flag = true;

    // modal::start
    callNav.click(function(){
        modalBoxWrap.addClass('on');
        modalBg.addClass('on');
    });

    serviceBtn.click(function(){
        modalBoxWrap.addClass('on');
        modalBg.addClass('on');
    });

    modalClose.click(function(){
        modalBoxWrap.removeClass('on');
        modalBg.removeClass('on');
    });
    // modal::end

    // header::start
    btnHelp.click(function(){
        alert('서비스 준비중입니다!');
    });

    btnSignup.click(function(){
        alert('서비스 준비중입니다!');
    });
    // header::end
    
    // main::start
    navBtn.click(function(){
        navBtn.removeClass('on');
        $(this).addClass('on');
        ind = $(this).index();
        $('html').animate({
            scrollTop: loc[ind]
        },500);
        y = ind;
    });

    $(window).on('mousewheel',function(eve){
        now = eve.originalEvent.wheelDelta;
        console.log(now);
        console.log(y);
        if (flag == true) {
            if ( now < 0 ) {
                y++;
                if ( y > 5) {
                    y = 5;
                }
                flag = false;
            } else {
                y--;
                if ( y <= 0 ) {
                    y = 0;
                }
                flag = false;
            }
            $('html').animate({
                scrollTop: loc[y]
            },1000,function(){
                flag = true;
            });
        }
        navBtn.removeClass('on');
        navBtn.eq(y).addClass('on');
    });


    $(window).scroll(function(){
        for (var i = 0; i < $('html>div').length; i++) {
            loc[i] = $('html>div').eq(i).offset().top;
        }        
    });

    for (var i = 0; i < $('.content').length; i++){
        loc[i] = $('.content').eq(i).offset().top;
    }
});