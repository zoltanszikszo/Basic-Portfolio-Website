// TypeWriter

let typing = document.getElementById('typing');

let typewriter = new Typewriter(typing, {
    loop: true
});

typewriter.typeString('Software Engineering Student')
    .start();
