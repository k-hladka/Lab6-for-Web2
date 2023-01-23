let table1 = document.getElementById('table1');
let table2 = document.getElementById('table2');
let outputs = document.querySelectorAll('output');

table1.addEventListener('click', function (event) {
    let target = event.target;
    if (target.hasAttribute('class'))
        searchOutput(outputs, target.getAttribute('class'));
});

document.getElementById('clear').addEventListener('click', function () {
    for (let v of outputs)
        v.innerHTML = '';
});

function searchOutput(outputs, classValue) {
    for (let v of outputs)
        if (v.getAttribute('class') === classValue)
            v.innerHTML = +v.value + 1;
}