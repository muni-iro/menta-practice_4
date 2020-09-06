// ========== humburger ============

$('.humburger').on('click', function(){
    $(this).toggleClass('trigger'); // = と x のトグル
    $('.navigation').fadeToggle(300);
    $('body').toggleClass('overflow-hidden') // navigation 展開時にスクロールできてしまうのを回避。body に overflow-hidden をトグル
});
$('.navigation').on('click', function(){ // x をクリックしなくても navigation を閉じれる仕様
    $('.humburger').removeClass('trigger');
    $('.navigation').fadeOut();
    $('body').removeClass('overflow-hidden')
});

// ========== /humburger ============



// ========== メインヴィジュアルパララックス ============

$(function() {
	let top = $('.mainvisual-inner').offset().top - 147; //初期値を取得
	$(window).scroll(function() {
	    let value = $(this).scrollTop(); //スクロールの値を取得
 
	    $('.mainvisual-inner').css('background-position-y', top + value / 2 - 200 + 'px');
	})
});

// ========== /メインヴィジュアルパララックス ============



// ========== what we are 下線アニメーション ============

$(window).on("load scroll", function(){
    let $WeAreDist = $('.we-are').offset().top,
        $scroll = $(window).scrollTop();
        $windowHeight = $(window).height();

        // console.log($WeAreDist)
        // console.log($scroll)

    if ($scroll > $WeAreDist - $windowHeight + 160){
        $('.txt-liner').addClass('is-slide');
    }
});

// ========== /what we are 下線アニメーション ============



// ========== 122% カウントアニメーション ============

$(window).scroll(function (){
    $('.count-num').each(function(){
        let targetElement = $(this).offset().top;
        let scroll = $(window).scrollTop();
        let windowHeight = $(window).height();
        if (scroll > targetElement - windowHeight + 300){

            $(function(){
                let countElm = $('.count'),
                countSpeed = 10;
            
                countElm.each(function(){
                    let self = $(this),
                    countMax = self.attr('data-num'),
                    thisCount = self.text(),
                    countTimer;
            
                    function timer(){
                        countTimer = setInterval(function(){
                            let countNext = thisCount++;
                            self.text(countNext);
            
                            if(countNext == countMax){
                                clearInterval(countTimer);
                            }
                        },countSpeed);
                    }
                    timer();
                });
            });
        }
    });
});

// ========== / 122% カウントアニメーション ============



// ========== faq toggle =========

$('.faq-list').on('click', function(){
    const $aaa = $(this).find('.answer')
    const $vLine = $(this).find('.v-line')
    if($aaa.hasClass('open')){
        $aaa.removeClass('open');
        // $aaa.fadeOut(500);
        $aaa.slideUp(300);
        $vLine.css('height', '20px');
    } else {
        $aaa.addClass('open');
        // $aaa.fadeIn(500);
        $aaa.slideDown(500);
        $vLine.css('height', '0px');
    }

});

// ========== /faq toggle =========



// ========== /pagetop-btn =========

$(".pagetop-btn").on("click",function(){
        $("html,body").animate({scrollTop:0},1000);
});

// ========== /pagetop-btn =========



// ========== "相談してみる" が copylight とかぶるので、上にずらす処理 =========

$(window).on("load scroll",function(){
    let $footer = $(".footer"),
        $homeHeader = $(".contact-me"),
        $windowWidth = $(window).width(),
        $windowHeight = $(window).height(),
        $distance = $footer.offset().top-$windowHeight,
                // window上端 から footer上端 までの距離
        $scrollVal = $(window).scrollTop();
                // 現在 window 上に標示されてる最上端の座標

    if($scrollVal>$distance){
        $homeHeader.css("bottom","80px");
    } else if ($windowWidth>768){
        $homeHeader.css("bottom","40px");
    } else {
        $homeHeader.css("bottom","10px");
    }
});

// ========== /"相談してみる" が copylight とかぶるので、上にずらす処理 =========