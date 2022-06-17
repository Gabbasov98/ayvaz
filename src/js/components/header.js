$(".header__catalog-btn").click(function() {
    $(this).toggleClass("header__catalog-btn--active")
    $(".header-catalog").toggleClass("header-catalog--active")
    if ($("body").hasClass("fixed-body")) {
        $("body").removeClass("fixed-body")
        return
    }
    $("body").addClass("fixed-body")
})

$(".header-catalog__bg").click(function() {
    closeCatalog()
})

$(".header-catalog__back").click(function() {
    closeCatalog()
})

function closeCatalog() {
    $(".header__catalog-btn").removeClass("header__catalog-btn--active")
    $(".header-catalog").removeClass("header-catalog--active")
}

$(".header__search-btn").click(function() {
    $(this).parents(".header__search").addClass("header__search--active")
})

fixHeader()
$(window).scroll(function() {
    fixHeader()
})
$(window).resize(function() {
    fixHeader()
})

function fixHeader() {
    if (window.innerWidth > 1200) {
        if ($(window).scrollTop() > 90) {
            $(".header").addClass("header--fix")
        } else {
            $(".header").removeClass("header--fix")
        }
    } else if (window.innerWidth > 800) {
        if ($(window).scrollTop() > 74) {
            $(".header").addClass("header--fix")
        } else {
            $(".header").removeClass("header--fix")
        }
    }
}


$(".header__burger").click(function() {
    $(this).toggleClass("header__burger--active")
    $(".header").toggleClass("header--active")
    $("body").toggleClass("fixed-body")
})

$(".header-catalog__toggler").click(function() {
    let parent = $(this).parents(".header-catalog__group")
    $(parent).toggleClass("header-catalog__group--expanded")
    $(parent).find(".header-catalog__links").slideToggle()
})

$(".header__search input").on("input", function() {
    let val = $(this).val()
    if (val.length > 0) {
        $(".header-search").addClass("header-search--active")
        $(".header__search").addClass("header__search--fill")
        $("body").addClass("fixed-body")
    } else {
        closeSearch()
    }

    if (val.length > 5) {
        $(".header-search__best").hide()
        $(".header-search__results").show()
    }
})

$(".header__search-reset").click(function() {
    closeSearch()
})

function closeSearch() {
    $(".header__search input").val("")
    $(".header-search").removeClass("header-search--active")
    $(".header__search").removeClass("header__search--fill")
    if ($(".header-catalog").hasClass("header-catalog--active") || $(".header").hasClass("header--active")) {
        return
    }
    $("body").removeClass("fixed-body")
}