$(".app-form__variative input[type='radio']").click(function() {
    let parent = $(this).parents(".app-form__variative")
    let isConfirmed = $(parent).find("[data-value='1']").prop("checked")
    let input = $(parent).find(".form-group input")

    if (isConfirmed) {
        $(input).prop("disabled", false)
    } else {
        $(input).prop("disabled", true)
    }
})


$(".dublicate-input__input2").on("input", function() {
    let val = $(this).val()
    let input1 = $(this).siblings(".dublicate-input__input1")
    let lastLetters = $(input1).attr("data-last")
    val = `${val} ${lastLetters}`
    $(input1).val(val)
})

$(".fixture__item input[name='type']").change(function() {
    let fixtureType = $(".fixture__item input[name='type']:checked").val()
    if (fixtureType == 'fixture1') {
        $(".fixture__type1 input").prop("disabled", false)
        $(".fixture__type2").removeClass("fixture__enabled")
        $(".fixture__item input[name='type2']").prop("checked", false)
        $(".fixture__file").removeClass("fixture__file--active")
    } else if (fixtureType == 'fixture2') {
        $(".fixture__type1 input").prop("disabled", true)
        $(".fixture__type2").addClass("fixture__enabled")
    }
})

$(".fixture__item input[name='type2']").change(function() {
    let fixtureType = $(".fixture__item input[name='type2']:checked").val()
    if (fixtureType == 'sketch') {
        $(".fixture__standart input").prop("disabled", true)
        $(".fixture__file").addClass("fixture__file--active")
    } else if (fixtureType == 'standart') {
        $(".fixture__standart input").prop("disabled", false)
        $(".fixture__file").removeClass("fixture__file--active")
    }
})

$(".app-form__more").click(function() {
    $(this).hide()
    $(".app-form__hidden").slideDown()
})