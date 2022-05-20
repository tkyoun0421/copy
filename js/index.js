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
    const scrollDown = $('.header_wrap .scroll_down');
    const content = $('.content');
    const credit = $('.header_wrap .credit');
    const copyright = $('.header_wrap .copyright');
    const disribution = $('.header_wrap .nav li').eq(0);
    const marketing = $('.header_wrap .nav li').eq(1);
    const upstream = $('.header_wrap .nav li').eq(2);
    const subscription = $('.header_wrap .nav li').eq(3);
    const html = $('html');
    const body = $('body');
    const scroll = $(window).scrollTop();
    let loc = [];
    let ind = 0;
    let now = 0;
    let flag = true;

    // 새로고침 시 맨 위 페이지 이동
    if ($(window).width() >= 499) {
        html.animate({
            scrollTop: 0
        },100);
    }

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
    
    disribution.click(function(){
        if ( flag == true ) {
            flag =! true;
            navBtn.removeClass('on');
            navBtn.eq(1).addClass('on');
            ind = $(this).index();
            $('html').animate({
                scrollTop: loc[1]
            },500,function(){
                flag =! false;
            });
        }
        ind = 1;
    });

    marketing.click(function(){
        if ( flag == true ) {
            flag =! true;
            navBtn.removeClass('on');
            navBtn.eq(2).addClass('on');
            ind = $(this).index();
            $('html').animate({
                scrollTop: loc[2]
            },500,function(){
                flag =! false;
            });
        }
        ind = 2;
    });

    upstream.click(function(){
        if ( flag == true ) {
            flag =! true;
            navBtn.removeClass('on');
            navBtn.eq(3).addClass('on');
            ind = $(this).index();
            $('html').animate({
                scrollTop: loc[3]
            },500,function(){
                flag =! false;
            });
        }
        ind = 3;
    });

    subscription.click(function(){
        if ( flag == true ) {
            flag =! true;
            navBtn.removeClass('on');
            navBtn.eq(4).addClass('on');
            ind = $(this).index();
            $('html').animate({
                scrollTop: loc[4]
            },500,function(){
                flag =! false;
            });
        }
        ind = 4;
    });
    // header::end
    
    // main::start
    navBtn.click(function(){
        if ( flag == true ) {
            flag =! true;
            navBtn.removeClass('on');
            $(this).addClass('on');
            ind = $(this).index();
            $('html').animate({
                scrollTop: loc[ind]
            },500,function(){
                flag =! false;
            });
        }
        if ( ind >= 1 ) {
            credit.css({
                display: 'none'
            });
            copyright.css({
                display: 'block'
            });
        } else {
            credit.css({
                display: 'block'
            });
            copyright.css({
                display: 'none'
            });
        }
    });
    content.on('mousewheel',function(eve){
        if ($(window).width() >= 1024) {
            now = eve.originalEvent.wheelDelta;
        if ( ind == 0 ) {
            credit.css({
                display: 'block'
            });
            copyright.css({
                display: 'none'
            });
        } else if ( ind >= 1 ) {
            credit.css({
                display: 'none'
            });
            copyright.css({
                display: 'block'
            });
        }
        if ( ind == 5 ) {
            credit.css({
                display: 'none'
            });
            copyright.css({
                display: 'none'
            });
        }

        if (flag) {
            if ( now < 0 ) {
                ind++;
                if ( ind > 5) {
                    ind = 5;
                }
                if ( ind == 5) {
                    scrollDown.css({
                        display: 'none'
                    });
                }
                flag = false;
            } else {
                ind--;
                if ( ind <= 0 ) {
                    ind = 0;
                } else {
                    scrollDown.css({
                        display: 'block'
                    });
                }
                flag = false;
            }
            $('html').animate({
                scrollTop: loc[ind]
            },1000,function(){
                flag = true;
            });
        }
        navBtn.removeClass('on');
        navBtn.eq(ind).addClass('on');
        }        
    });
    
    $(window).resize(function(){
        if ($(window).width() >= 1024) {
            html.animate({
                scrollTop: content.eq(ind).offset().top
            },0,function(){
            });
            for (var i = 0; i < content.length; i++){
                loc[i] = content.eq(i).offset().top;
            }
        }
    });
    
    $(window).scroll(function(){
        if (($(window).scrollTop() * 1.2) - (content.eq(0).offset().top) > 0) {
            navBtn.removeClass('on');
            navBtn.eq(0).addClass('on');
        } 
        if (($(window).scrollTop() * 1.2) - (content.eq(1).offset().top) > 0) {
            navBtn.removeClass('on');
            navBtn.eq(1).addClass('on');
        }
        if (($(window).scrollTop() * 1.2) - (content.eq(2).offset().top) > 0) {
            navBtn.removeClass('on');
            navBtn.eq(2).addClass('on');
        } 
        if (($(window).scrollTop() * 1.2) - (content.eq(3).offset().top) > 0) {
            navBtn.removeClass('on');
            navBtn.eq(3).addClass('on');
        } 
        if (($(window).scrollTop() * 1.2) - (content.eq(4).offset().top) > 0) {
            navBtn.removeClass('on');
            navBtn.eq(4).addClass('on');
        } 
        if (($(window).scrollTop()) - (content.eq(4).offset().top) > 0) {
            navBtn.removeClass('on');
            credit.css({
                display: 'none'
            });
            copyright.css({
                display: 'none'
            });
            scrollDown.css({
                display: 'none'
            });
        } else {
            credit.css({
                display: 'none'
            });
            copyright.css({
                display: 'block'
            });
            scrollDown.css({
                display: 'block'
            });
        }
    });

    for (let i = 0; i < content.length; i++){
        loc[i] = content.eq(i).offset().top;
    }
});