let button = document.querySelector('button');
let countBlock = document.querySelector('#select');
let checkMode = 0;
let pyramid = document.getElementById('pyramid');
let material = document.getElementById('material');

button.addEventListener('click', function(event){
    event.preventDefault();
    if(checkMode)
        return;
    for(let i=0; i<countBlock.value; i++){
        let divBlock = document.createElement('div');
        divBlock.style.width = Math.round(Math.random()*290 + 10) + 'px';
        divBlock.style.height = 50 + 'px';
        divBlock.style.backgroundColor = 'lightblue';
        divBlock.style.boxSizing = 'border-box';
        divBlock.style.border = '1px solid black';
        divBlock.style.marginBottom = '1px';
        material.appendChild(divBlock);
    }
    console.log();
    checkMode = 1;
});

material.addEventListener('click', function (event){
    if(event.target.id === 'material')
        return;
    pyramid.prepend(event.target);
    event.target.style.margin = 'auto auto';

    if(getComputedStyle(material).height === '18px'){
        let checkLoop = 0;
        let p = document.createElement('p');
        p.style.color = 'red';


        for(let i=0; i<pyramid.children.length; i++){
            for(let j=i+1; j<pyramid.children.length; j++){
                if(parseInt(pyramid.children[j].style.width) < parseInt(pyramid.children[i].style.width)){
                    p.innerHTML = 'Невдача';
                    checkLoop = 1;
                    break;
                }
            }
            if(checkLoop)
                break;
        }
        if(!checkLoop)
            p.innerHTML = 'Можна заселяти!';

        p.style.textAlign = 'center';
        pyramid.append(p);
    }

});

