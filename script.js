let svg = document.querySelector("svg");
let path = svg.querySelector("path");

const pathLength = path.getTotalLength()

console.log(pathLength);

gsap.set(path, { strokeDasharray: pathLength });

// Simuliertes horizontales Scrollen
gsap.to(".container", {
    x: () => -window.innerWidth * 2, // Verschiebt den Container nach links
    ease: "none",
    scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "+=200%",
        scrub: 1,
    },
});

// Pfad animieren
gsap.fromTo(
    path,
    { strokeDashoffset: pathLength },
    {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "+=200%",
            scrub: 1,
        },
    }
);