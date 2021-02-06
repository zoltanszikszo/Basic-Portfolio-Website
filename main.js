// TypeWriter

let typing = document.getElementById('typing');

let typewriter = new Typewriter(typing, {
    loop: false
});

typewriter.typeString('Software Engineering Student')
    .start();
