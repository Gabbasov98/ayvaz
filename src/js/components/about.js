function aboutSlider() {
    var swiper = new Swiper('.docs .swiper-container', {
        slidesPerView: 1,
        navigation: {
            nextEl: '.docs .swiper-button-next',
            prevEl: '.docs .swiper-button-prev',
        },
        pagination: {
            el: '.docs .swiper-pagination',
            type: 'fraction',
            clickable: true,
        },
    })
}

aboutSlider()