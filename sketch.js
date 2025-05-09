let animationVisible = false;

document.addEventListener('click', (e) => {
    if( e.target.id === "button1" || e.target.id === "button2" ){
        console.log('asd');
        return;
    }

    if ( animationVisible === true ) {
        gsap.to(
            ".rects",
            {  opacity: 0,  duration: 0.5, onStart : () => { animationVisible = false; } }
        );
    }
});

document.getElementById("button1").addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent the document click event from firing


    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const rects = document.querySelector(".rects");

    rects.style.left = (mouseX - rects.offsetWidth / 2) + 'px';
    rects.style.top = (mouseY + 20) + 'px'; // Add a small offset so it's not directly under cursor

    gsap.to(
        ".rects>span>p",
        { opacity: 0,  duration: 0.3 }
    );

    gsap.fromTo(
        ".rects",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, onStart: () => { animationVisible = true; }
        }
    );

    console.log(animationVisible)
});

document.getElementById("button2").addEventListener('click', (e) => {
    e.stopPropagation();

    gsap.fromTo(
        ".rects>span>p",
        { opacity: 0 },
        { opacity: 1, duration: 1, stagger: 0.2 }
    );
});