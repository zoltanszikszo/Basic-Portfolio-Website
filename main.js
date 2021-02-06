// TypeWriter

let typing = document.getElementById('typing');

let typewriter = new Typewriter(typing, {
    loop: false,
    cursor: ""
});

typewriter.typeString('Software Developer Student')
    .start();
