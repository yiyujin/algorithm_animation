document.getElementById("button1").addEventListener( 'click' , () => {
    gsap.to(
        ".rects>span>p",
        { opacity: 0, duration: 0.3 }
    );

    gsap.fromTo(
        ".rects",
        { y: 140, opacity : 0 },
        { y: 100, opacity : 1, duration: 1 }
    ); // gently move up
})

document.getElementById("button2").addEventListener( 'click' , () => {
    gsap.fromTo(
        ".rects>span>p",
        { opacity : 0 },
        { opacity : 1, duration: 1, stagger : 0.2, ease : "power2.out" }
    );
})