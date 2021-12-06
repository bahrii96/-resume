$(document).ready(function () {
    $('.interest__slider').slick({
        dots: true,
        // кількість елементів
        slidesToShow: 3,
        // з якого слайду починається
        initialSlide:3,
        // прокручування безкінечне
        infinite: false,
        // ділення елемента на частини потрібно при перетягувванні мишкою
        touchThreshold: 10,
        // центрує зображення
        centerMode:true
    });
})