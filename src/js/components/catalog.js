function catalogSlider() {
    var swiper = new Swiper('.catalog-categories1 .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 1500,
        navigation: {
            nextEl: '.catalog-categories1 .swiper-button-next',
            prevEl: '.catalog-categories1 .swiper-button-prev',
        },
        scrollbar: {
            el: '.catalog-categories1 .swiper-scrollbar',
            draggable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: "auto",
                spaceBetween: 20
            },
            800: {
                slidesPerView: 2,
            },
            1000: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
        }
    })
}

function catalogSlider2() {
    var swiper = new Swiper('.catalog-categories2 .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: '.catalog-categories2 .swiper-button-next',
            prevEl: '.catalog-categories2 .swiper-button-prev',
        },
        scrollbar: {
            el: '.catalog-categories2 .swiper-scrollbar',
            draggable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: "auto",
                spaceBetween: 20
            },
            800: {
                slidesPerView: 2,
            }
        }
    })
}


catalogSlider()
catalogSlider2()


$(".filter__more").click(function() {
    $(this).toggleClass("filter__more--active")
    $(this).siblings(".filter__checks").toggleClass("filter__checks--all")
})


$(".selected-filters__item-btn").click(function() {
    let parent = $(this).parents(".selected-filters")
    let filterId = $(this).parents(".selected-filters__item").attr("data-filter-id")
    console.log(filterId);
    $(`.selected-filters__item[data-filter-id="${filterId}"]`).remove()
    let filterNum = $(parent).find(".selected-filters__item").length
    if (filterNum === 0) {
        $(".selected-filters").hide()
    }
})

$(".selected-filters__refresh").click(function() {
    $(".selected-filters__item").remove()
    $(".selected-filters").hide()
})

$(".catalog__filter").click(function() {
    $(".filter").addClass("filter--active")
    $("body").addClass("fixed-body")
})

$(".filter__bg").click(function() {
    closeFilter()
})

$(".filter__close").click(function() {
    closeFilter()
})


function closeFilter() {
    $(".filter").removeClass("filter--active")
    $("body").removeClass("fixed-body")
}



$(".product-card").each(function(index, el) {

    let sizes = $(el).find(".product-card__size")
    let sizesLength = $(sizes).length
    let dots = `<div class="product-card__dots">...</div>`
    let allBtn = `<button class="product-card__sizes-all">показать все</button>`
    console.log(sizesLength);


    $(sizes).find("input").attr("name", `size${index}`)


    if (sizesLength > 6) {
        $(el).addClass("product-card--all-sizes")
        $(el).find(".product-card__sizes-wrap").append(allBtn)
        $(el).find(".product-card__size:nth-child(4)").after(dots)
    }

});

$(".product-card__sizes-all").click(function() {
    $(this).parents(".product-card").toggleClass("product-card--show-sizes")
})

$(".catalog-table__sort-item").click(function() {
    if ($(this).hasClass("catalog-table__sort-item--active")) {
        $(".catalog-table__sort-item").removeClass("catalog-table__sort-item--active")
    } else {
        $(".catalog-table__sort-item").removeClass("catalog-table__sort-item--active")
        $(this).addClass("catalog-table__sort-item--active")
    }

    $(this).toggleClass("catalog-table__sort-item--reverse")
})

$(".seo__group-btn").click(function() {
    $(this).toggleClass("seo__group-btn--active")
    $(this).parents(".seo__group").find(".seo__group-hidden").slideToggle()
})