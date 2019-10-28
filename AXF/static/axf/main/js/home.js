$(function () {
    initTopSwiper();
    initSwiperMenu();
})

function initTopSwiper() {
    var swiper = new Swiper("#topSwiper", {
        loop: true,
        autoplay: 1000,
        pagination: '.swiper-pagination'
    });
}
function initSwiperMenu() {
    var swiper = new Swiper("#swiperMenu", {
        slidsPerView:3,
    });
}