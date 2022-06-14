$(".cart-card__delete").click(function() {
    let parent = $(this).parents(".cart-card")
    $(parent).addClass("cart-card--delete")

    let sec = 4

    $(parent).find(".cart-card__sec").html(sec)
    const timer = setInterval(() => {
        sec--
        $(parent).find(".cart-card__sec").html(sec)
        $(parent).find(".cart-card__deleting-btn").click(function() {
            $(parent).removeClass("cart-card--delete")
            clearInterval(timer)
            sec = 4
        })
        if (sec === 0) {
            clearInterval(timer)
            $(parent).remove()
        }


    }, 1000);

})