$(".contacts-req__show").click(function() {
    $(this).toggleClass("contacts-req__show--active")
    $(this).siblings(".contacts-req__hidden").slideToggle()
})