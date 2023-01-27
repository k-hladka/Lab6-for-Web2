let button = document.querySelector('.button');
let light = document.querySelector('.light');
let mode = 1;
button.addEventListener('click', function (event) {
    if (mode > 5)
        mode = 1;
    onLight(mode-1);
    mode++;
});

function onLight(mode) {
    let index = 0;
    for (let i of light.children)
        i.classList.remove('active');

    for (let i = mode; i >= 0; i--) {
        if (index % 2 === 0)
            light.children[i].classList.add('active');
        index++;
    }
}