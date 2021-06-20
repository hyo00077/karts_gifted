$( document ).ready(function() {      
    var is_mobile = false;

    if( $('.grid_line').css('display')=='none') {
        is_mobile = true;       
    }

    if (is_mobile == true) {
        $(".grid_line").remove();
        // $("body").add("div").addClass("prev_button");
        // $("body").add("div").addClass("next_button");
        $("<div class='prev_button'></div>").appendTo("body");
        $("<div class='next_button'></div>").appendTo("body");
        $("<img class='prev_arrow' style='width:100%; height:100%;' type='image/svg+xml' src='prev_arrow.svg'>").appendTo(".prev_button");
        $("<img class='next_arrow' style='width:100%; height:100%;' type='image/svg+xml' src='next_arrow.svg'>").appendTo(".next_button");
        $(".head_box").remove();
        $(".active").remove();

        $("#text_1").prepend('<div class="head_box" id="head_1"><p>1. 배경 및 목적</p></div>');
        $("#text_2").prepend('<div class="head_box" id="head_2"><p>2. 교육방향</p></div>');
        $("#text_3").prepend('<div class="head_box" id="head_3"><p>3. 교육과정 커리큘럼</p></div>');
        $("#text_4").prepend('<div class="head_box" id="head_4"><p>4. 교육과정 커리큘럼</p></div>');
        // $("#text_5").prepend('<div class="head_box" id="head_5"><p>5. 교육과정 커리큘럼</p></div>');
        $("#box_4").after('<div class="content_box" id="box_5"><div class="text_box" id="text_5"></div></div>');
        $("#text_5").prepend('<div class="head_box" id="head_5"><p>5. 갤러리</p></div>');

        for (let index = 0; index < 45; index++) {
            let element = "<img class='gallery' src='./source/background/{0}.jpg' width='100%' object-fit='contain'>".format(index);
            $(element).appendTo("#text_5");
        }

        $(document).ready(function(){
            $(".container").slick({
                lazyLoad: 'ondemand',
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                prevArrow: $('.prev_arrow'),
                nextArrow: $('.next_button')
            });
        });
    }
 });


 String.prototype.format = function() {
    a = this;
    for (k in arguments) {
      a = a.replace("{" + k + "}", arguments[k])
    }
    return a
  }