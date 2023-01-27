let build = document.querySelector('.build');
let canvas = document.querySelector('.canvas');
build.addEventListener('click', function (event) {
    let countCircle = +(document.querySelector('input').value);
    for (let i = 0; i < countCircle; i++) {
        let circle = document.createElement('div');
        let width = Math.round(Math.random() * 40 + 10);

        circle.classList.add('circle');
        circle.style.height = circle.style.width = width + 'px';
        circle.style.borderRadius = '50%';
        circle.style.position = 'absolute';
        circle.style.backgroundColor = 'orange';
        circle.style.border = '1px solid orangered';

        let left = Math.round(Math.random() * 250 + 2);
        if (left + width < 300)
            circle.style.left = left + 'px';
        else
            circle.style.left = 0;

        let top = Math.round(Math.random() * 250 + 2);
        if (top + width < 300)
            circle.style.top = top + 'px';
        else
            circle.style.top = 0;

        canvas.appendChild(circle);
    }
});

canvas.addEventListener('click', function (event) {
    let target = event.target;
    if (target.getAttribute('class') === 'circle') {
        target.style.display = 'none';
    }
});