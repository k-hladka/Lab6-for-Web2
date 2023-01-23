let parent = document.getElementById('parent');
parent.addEventListener('click', function (event){
    let target = event.target;
    if(target.getAttribute('class') !== 'active'){
        turn(target, 0);
    }
   else {
       turn(target, 1);
    }
    target.classList.toggle('active');
});
function turn(elem, mode){
    if(mode === 0){
        elem.style.transform = 'rotateY(90deg)';
        elem.style.background = 'yellow';
        elem.style.transform = 'rotateY(180deg)';
    }
    else{
        elem.style.transform = 'rotateY(270deg)';
        elem.style.background = 'greenyellow';
        elem.style.transform = 'rotateY(360deg)';
    }
}