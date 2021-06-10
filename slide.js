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


