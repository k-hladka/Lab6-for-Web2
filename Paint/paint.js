let chooseColor = document.getElementById('chooseColor');
let canvas = document.getElementById('canvas');
let color;

chooseColor.addEventListener('click', function(event){
    let target = event.target;
    color = getComputedStyle(target).backgroundColor;
    for(let child of chooseColor.children)
        child.classList.remove('active');
    target.classList.add('active');
});

canvas.addEventListener('click', function (event){
    let target = event.target;
    if(target.style.backgroundColor === color)
        target.style.backgroundColor = 'white';
    else
        target.style.backgroundColor = color;
});