function counter() {
    $('.count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 8000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
}

function up_click(id) {
    $("#" + id).click(function() {
        $('html,body').animate({
                scrollTop: $(".navbar-brand").offset().top},
            'slow')
        $("#up").hide("slow")
    })
}

// A $( document ).ready() block.
$( document ).ready(function() {
    $('.navbar-nav .nav-link').click(function(){
        $('.navbar-nav .nav-link').removeClass('active');
        $(this).addClass('active');
    })


    $('#section_five button').click(function(){
        $('button').removeClass('active');
        $(this).addClass('active');
    })

    $(function() {
        $('html').on("mousewheel", function() {
            let a = $(document).scrollTop()
            a >= 100 ? $("#up").show("slow") : $("#up").hide("slow")
        });
    });
    up_click("up")
    counter()
});
