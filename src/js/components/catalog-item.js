function gallery() {
    var swiper = new Swiper(".gallery .mySwiper", {
        spaceBetween: 12,
        slidesPerView: "auto",
        freeMode: true,
        watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".gallery .mySwiper2", {
        spaceBetween: 10,
        thumbs: {
            swiper: swiper,
        },
    });
}

gallery()

$(".catalog-detail__show").click(function() {
    $(this).toggleClass("catalog-detail__show--active")
    $(this).siblings(".catalog-detail__hidden").slideToggle()
})