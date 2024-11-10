
gsap.from('nav', {
    duration: 1,
    y: "-100%",
    ease: "bounce",
});
gsap.from('.name', {
    duration: 1,
    y: "100%",
    opacity: 0,
    ease: "easein",
});

gsap.from('.description', {
    duration: 1,
    y: "100%",
    opacity: 0,
    ease: "easein",
});
gsap.from('.header-btns', {
    duration: 1,
    y: "100%",
    opacity: 0,
    ease: "easein",
});
gsap.from('.user', {
    duration: 1,
    x: "100%",
    opacity: 0,
    ease: "bounce",
});

gsap.from('.skill', {
    trigger: 'scroll',
    start: 'top',
    x: '-100%',
    scrub: true
})