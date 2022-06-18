let projectSlidersArray = []

function projectGallery() {
    $(".project-card").each(function(index, el) {
        $(el).attr("data-slider-id", `${index}`)
        projectSlidersArray[index] = {
            thumbs: {},
            swiper: {}
        }

        projectSlidersArray[index].thumbs = new Swiper(`.project-card[data-slider-id="${index}"] .mySwiper`, {
            spaceBetween: 8,
            slidesPerView: "auto",
            freeMode: true,
            watchSlidesProgress: true,
        });
        projectSlidersArray[index].swiper = new Swiper(`.project-card[data-slider-id="${index}"] .mySwiper2`, {
            spaceBetween: 10,
            loop: true,
            navigation: {
                nextEl: ".project-card .swiper-button-next",
                prevEl: ".project-card .swiper-button-prev",
            },
            thumbs: {
                swiper: projectSlidersArray[index].thumbs,
            },
        });
    })
}

projectGallery()