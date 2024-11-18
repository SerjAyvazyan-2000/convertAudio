
const swiper = new Swiper('.indispensable-swiper', {
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides: true, // Центровка активного слайда

    pagination: {
        el: '.indispensable-pagination',
        clickable: true,

    },

    navigation: {
        nextEl: '.-convert-swiper-next',
        prevEl: '.convert-swiper-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1.2,
            spaceBetween: 20
        },
        567: {
            slidesPerView: 2,
            spaceBetween: 10

        },

        900: {
            slidesPerView: 3,
            spaceBetween: 10

        },
        1200: {
            slidesPerView: 3,
        },
    }


});


const swiperReviews = new Swiper('.reviews-swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    clickable: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        567: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        600: {
            slidesPerView: 3,
            spaceBetween: 10
        },
        900: {
            slidesPerView: 3,
            spaceBetween: 10
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 10
        },
    },
});


let generatorSwiper = new Swiper(".generator-swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    autoplay:true,
    slidesPerView: 5,
    initialSlide: 2,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 3,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
    breakpoints: {
        320: {
            slidesPerView: 1.2,
        },
        400: {
            slidesPerView: 2,
        },
        567: {
            slidesPerView: 3,

        },

        900: {
            slidesPerView: 4,

        },
        1200: {
            slidesPerView: 5,
        },
    }

});



