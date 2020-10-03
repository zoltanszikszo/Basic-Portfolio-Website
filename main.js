// TypeWriter

let typing = document.getElementById('typing');

let typewriter = new Typewriter(typing, {
    loop: true
});

typewriter.typeString('Business Information Technology Student.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Studying Software Engineering.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Wannabe Full-Stack Developer.')
    .pauseFor(2500)
    .start();
