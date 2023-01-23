let parent = document.getElementById('parent');
let mode = 0;
let startCoordX;
let startCoordY;
console.log(parent.offsetHeight)
parent.addEventListener('mousedown', function (event) {
    let target = event.target;
    if (target.hasAttribute('class')) {
        startCoordX = event.pageX;
        startCoordY = event.pageY;
        mode = 1;
    }
});
parent.addEventListener('mouseup', function (event) {
    mode = 0;
});
parent.addEventListener('mousemove', function (event) {
    let target = event.target;
    if (mode && target.hasAttribute('class')) {
        let newCoordX = event.pageX;
        let newCoordY = event.pageY;
        let dx = newCoordX - startCoordX;
        let dy = newCoordY - startCoordY;
        let left = parseInt(getComputedStyle(target).left);
        let top = parseInt(getComputedStyle(target).top);

        startCoordX = newCoordX;
        startCoordY = newCoordY;
        left += dx;
        top += dy;

        if (left + target.offsetWidth < parent.offsetWidth-2 && top + target.offsetHeight < parent.offsetHeight-2 &&
        left>0 && top>0) {
            target.style.left = left + 'px';
            target.style.top = top + 'px';
        }
    }
});
