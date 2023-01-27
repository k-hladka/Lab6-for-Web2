let parent = document.querySelector('.parent');
let divNote = document.createElement('div');
divNote.classList.add('note');

parent.addEventListener('mousemove', function (event) {
    let target = event.target;
    if (!target.hasAttribute('class')) {
        divNote.style.display = 'block';
        let dx = event.pageX;
        let dy = event.pageY;
        divNote.style.left = dx + 'px';

        let height = parseInt(getComputedStyle(divNote).height);
        divNote.style.top = dy - height + 'px';

        let text;
        switch (target.id) {
            case 'ferrisWheel' :
                text = 'Чортове колесо';
                break;
            case 'research' :
                text = 'Дослідницька робота';
                break;
            case 'homePhoto' :
                text = 'Домашній затишок';
                break;
        }
        divNote.innerHTML = text;

        parent.appendChild(divNote);
    } else {
        divNote.style.display = 'none';
    }
});
