let parentLike = document.querySelector('.parent');
let countLike = 0;
let countDislike = 0;
let output = document.querySelector('output');
let percentLike;
let polygons = document.querySelectorAll('polygon');
let stops = document.querySelectorAll('stop');
parentLike.addEventListener('click', function (event) {
    let target = event.target;
    if (target.tagName === 'DIV') {
        if (target.id === 'like')
            countLike++;
        if (target.id === 'dislike')
            countDislike++;
        percentLike = calcPercentLike(countLike, countDislike);
        paintStar(percentLike);
        output.innerHTML = percentLike + '%';
    }
});

function calcPercentLike(countLike, countDislike) {
    return Math.round(countLike / (countLike + countDislike) * 100);
}

function paintStar(countPercent) {

    if (countPercent >= 0 && countPercent <= 20) {
        addClass(1);
        addCountPercent(0, countPercent);
    } else if (countPercent > 20 && countPercent <= 40) {
        addClass(2);
        addCountPercent(20, countPercent);
    } else if (countPercent > 40 && countPercent <= 60) {
        addClass(3);
        addCountPercent(40, countPercent);
    } else if (countPercent > 60 && countPercent <= 80) {
        addClass(4);
        addCountPercent(60, countPercent);
    } else if (countPercent > 80 && countPercent <= 100) {
        addClass(5);
        addCountPercent(80, countPercent);
    }
}

function addClass(index) {
    for (let i = 0; i < index; i++) {
        polygons[i].setAttribute("fill", "yellow");
        if (i + 1 === index) {
            polygons[i].setAttribute("fill", "url(#grad1)");
        }
    }
    for (let i = index; i < 5; i++)
        polygons[i].setAttribute("fill", "lightgray");
}

function addCountPercent(previousNumber, thisNumber) {
    let percentStar = Math.round((thisNumber - previousNumber) * 100 / 20);
    for (let i of stops)
        i.setAttribute("offset", percentStar+'%');
}
