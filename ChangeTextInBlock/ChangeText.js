let parent = document.querySelector('#parent');

parent.addEventListener('click', function(event){
    let target = event.target;
    let textarea = target.closest('.parentDiv').children[2];

    if(target.getAttribute('class') === 'close'){
        target.closest('.parentDiv').style.display = 'none';
    }
    if(target.getAttribute('class') === 'edit')
        textarea.removeAttribute('disabled');


    parent.addEventListener('mouseout',function(e){
        if(e.target.tagName === 'TEXTAREA')
            textarea.setAttribute('disabled', 'disabled');
    });

});