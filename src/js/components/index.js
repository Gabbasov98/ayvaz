function doneSlider() {
    var swiper = new Swiper('.done-projects .swiper-container', {
        slidesPerView: "auto",
        spaceBetween: 10,
        scrollbar: {
            el: '.done-projects .swiper-scrollbar',
            draggable: true,
        },
        breakpoints: {
            320: {
                allowTouchMove: true,
                spaceBetween: 20,
            },
            800: {
                spaceBetween: 30,
            },
            1200: {
                allowTouchMove: false
            },
        }
    })
}

doneSlider()