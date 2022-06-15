$(document).ready(function() {
    $('input[type="tel"]').mask('+7 (999) 999 99 99', { autoclear: false }, { placeholder: '+7            ' });



    $('.image-popup').magnificPopup({
        type: 'image'
    });

    $('.popup-youtube, .popup-video, .popup-maps').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        preloader: true,
    });



    $('.gallery-group').each(function() { // the containers for all your galleries
        $(this).magnificPopup({
            delegate: 'a', // the selector for gallery item
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    });


    $(".scroll-up").click(function() {
        $("body,html").scrollTop(0);
    })
    $(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
            $(".scroll-up").addClass("scroll-up--active")
        } else {
            $(".scroll-up").removeClass("scroll-up--active")
        }
    })


    $(".custom-select input").click(function() {
        $(this).parents(".custom-select").addClass("custom-select--active")
    })

    $(".custom-select").each(function(index, el) {
        setSelect($(el))
    });

    $(".custom-select__item").click(function() {
        $(this).siblings(".custom-select__item").removeClass("custom-select__item--selected")
        $(this).addClass("custom-select__item--selected")

        setSelect($(this).parents(".custom-select"))
    })

    $(document).mouseup(function(e) {
        var div = $('.custom-select__dropdown');
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            if ($(div).parents(".custom-select").hasClass("custom-select--active")) {
                $(div).parents(".custom-select").removeClass("custom-select--active")
            }
        }
    });
});

function setSelect(el) {
    let selected = $(el).find(".custom-select__item--selected").html()
    let input = $(el).children("input")
    $(input).val(selected)
    $(el).removeClass("custom-select--active")
}

$(".file-input input").each(function(index, el) {
    dragFile($(this))
})

function dragFile(dropZone) {

    dropZone.on('dragenter focus click', function() {
        dropZone.addClass('is-active');
    });

    dropZone.on('dragleave blur drop', function() {
        dropZone.removeClass('is-active');
    });
}


cartCalc()


function cartCalc() {

    $(".cartcalc input").each(function(index, el) {
        let val = +$(el).val()
        console.log(val);

        if (val === 1) {
            $(el).siblings(".ccalc-minus").addClass("ccalc-disabled")
        } else {
            $(el).siblings(".ccalc-minus").removeClass("ccalc-disabled")
        }
    });

    $('.cartcalc .ccalc-minus').click(function() {
        let a = $(this).closest('.cartcalc').find('input').val();
        if (a > 1) {
            let b = +a - 1;
            $(this).closest('.cartcalc').find('input').val(b);
            if (b === 1) {
                $(this).addClass("ccalc-disabled")
            }
        } else {
            $(this).closest('.cartcalc').find('input').val(a);
            $(this).addClass("ccalc-disabled")
        }
    });
    $('.cartcalc .ccalc-plus').click(function() {
        let a = $(this).closest('.cartcalc').find('input').val();
        let b = +a + 1;
        $(this).closest('.cartcalc').find('input').val(b);
        if (b > 1) {
            $(this).siblings(".ccalc-minus").removeClass("ccalc-disabled")
        }
    });
}


$(".tab").click(function() {
    let parent = $(this).parents(".tab-parent")
    let path = $(this).attr("data-tabs-path")
    $(parent).find(".tab").removeClass("tab--active")
    $(this).addClass("tab--active")

    $(parent).find(".tabs-content").removeClass("tabs-content--active")
    $(parent).find(`.tabs-content[data-tabs-path="${path}"]`).addClass("tabs-content--active")
})