// TypeWriter

let typing = document.getElementById('typing');

let typewriter = new Typewriter(typing, {
    loop: false,
    cursor: false
});

typewriter.typeString('Software Engineering Student')
    .start();
