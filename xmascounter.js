const christmasCoundown = () => {
    let now = new Date();

    let currentMonth = now.getDate();

    let nextXmasYear = now.getFullYear();

    if(currentMonth == 12 && currentDay > 25){
        nextXmasYear = nextXmasYear + 1;
    }

    let nextXmasDate = nextXmasYear + '-12-25T00:00:00.000Z';
    let xmasDay = new Date(nextXmasDate);

    let diffSeconds = Math.floor((xmasDay.getTime() - now.getTime()) / 1000);

    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    if(currentMonth != 12 || (currentMonth == 12 && currentDay != 25)){
        days = Math.floor(diffSeconds / (3600*24));
        diffSeconds -= days * 3600 * 24;
        hours = Math.floor(diffSeconds / 3600);
        diffSeconds -= hours * 3600;
        minutes = Math.floor(diffSeconds / 60);
        diffSeconds -= minutes * 60;
        seconds = diffSeconds;
    }

    document.getElementById('days').innerHTML = days + ' Days';
    document.getElementById('hours').innerHTML = hours + ' Hours';
    document.getElementById('minutes').innerHTML = minutes + ' Minutes';
    document.getElementById('seconds').innerHTML = seconds + ' Seconds';

    setTimeout(christmasCoundown, 1000);
}

christmasCoundown();