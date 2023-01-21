let choseColor = document.getElementById('chooseColor');
let rectangle = document.getElementById('rectangle');

choseColor.addEventListener('click', function (event){
    let target = event.target;
    target.classList.toggle('chooseElem');
    rectangle.style.background = 'none';
    rectangle.style.backgroundColor = createGradient();
    rectangle.style.background = `linear-gradient(${createGradient()})`;
});

function createGradient(){
    let str = "";
    for(let i=0; i<choseColor.children.length; i++){
        if(choseColor.children[i].getAttribute('class') === 'chooseElem'){
            if(str!== '')
                str+= ',';
            str+= getComputedStyle(choseColor.children[i]).backgroundColor;
        }
    }
    if(str === '')
        str='plum';
    return str;
}