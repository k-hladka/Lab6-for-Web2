let figure = document.getElementById('parent');
let polygon = document.querySelector('polygon');
let canvas = document.getElementById('canvas');
let mode = 0;
let activeFigure;

figure.addEventListener('click', function (event) {
    let target = event.target;
    if (target.id === 'square' || target.id === 'circle' || target.tagName === 'polygon') {
        for (let v of figure.children)
            v.classList.remove('active');
        polygon.classList.remove('active');

        target.classList.add('active');
        activeFigure = target;
        mode = 1;
    }
});

canvas.addEventListener('click', function (event) {
    if (mode) {
        let newFigure;
        let dx = event.pageX;
        let dy = event.pageY;
        let widthFigure;
        let heightFigure;

        if (activeFigure.tagName === 'DIV') {
            newFigure = document.createElement('div');
            newFigure.setAttribute('id', `${activeFigure.id}`);

            widthFigure = parseFloat(getComputedStyle(activeFigure).width) / 2;
            heightFigure = parseFloat(getComputedStyle(activeFigure).height) / 2;

        } else {
            let svgNS = "http://www.w3.org/2000/svg";
            newFigure = document.createElementNS(svgNS, 'svg');
            let svgChild = document.createElementNS(svgNS, 'polygon');
            svgChild.setAttributeNS(null, 'points', '30 0, 60 40, 0 40');
            newFigure.appendChild(svgChild);

            heightFigure = 20;
            widthFigure = 30;
        }

        newFigure.style.position = 'absolute';
        newFigure.style.left = dx - widthFigure + 'px';
        newFigure.style.top = dy - heightFigure + 'px';
        newFigure.style.margin = 0;
        canvas.appendChild(newFigure);
    }
});
