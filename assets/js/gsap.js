




document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    // Закрепляем секцию и создаем таймлайн для движения карточек
    gsap.to('.animation-card', {
        scrollTrigger: {
            trigger: '.pin-content', // Секция
            start: 'top top', // Начало пиннинга
            end: 'bottom bottom', // Продолжительность эффекта
            // end: '+=2000', // Продолжительность эффекта
            scrub: true, // Связь со скроллом
            pin: true, // Закрепляем секцию
            anticipatePin: 3, // Смягчение закрепления
            // markers: true, // Отладка (убрать в продакшене)
        },
        y: -500, // Движение вверх
        stagger: 0.2, // Задержка между анимациями карточек
        ease: 'power1.inOut', // Плавное ускорение и замедление
    });

});

document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    // Анимация появления
    gsap.fromTo(
        '.song-about-item',
        {
            scale: 3.5, // Уменьшенный размер (появляются из центра)
            opacity: 0, // Изначально невидимые
            y: -800, // Появляются снизу
            z: -700, // Глубина
        },
        {
            scale: 1, // Нормальный размер
            opacity: 1, // Полностью видимые
            y: 0, // На своих местах
            z: 0, // Плоскость экрана
            duration: 1, // Длительность появления
            ease: 'power3.out', // Плавный эффект
            stagger: 0.2, // Интервалы между карточками
            scrollTrigger: {
                trigger: '.song-about-section',
                start: 'top top',
                end: 'top bottom',
                toggleActions: 'play none none reverse',
                // markers: true, // Отладка (убрать в продакшене)

            },
        }
    );

    // Анимация "улёта" обратно
    // gsap.to('.song-about-item', {
    //     scale: 3.5, // Увеличиваются перед исчезновением
    //     opacity: 0, // Постепенно исчезают
    //     y: -700, // "Улетают" вверх
    //     z: 700, // "Вылетают" вперёд
    //     duration: 1.5, // Длительность анимации
    //     ease: 'power3.in', // Плавное ускорение при улёте
    //     stagger: 0.2, // Интервалы между карточками
    //     scrollTrigger: {
    //         trigger: '.song-about-section',
    //         start: 'center 30%', // Анимация начинается, когда секция в центре
    //         end: 'bottom top', // Заканчивается, когда секция уходит вверх
    //         scrub: true, // Связь со скроллом
    //         toggleActions: 'play none none reverse',
    //         // markers: true, // Отладка (убрать в продакшене)
    //
    //     },
    // });
});


