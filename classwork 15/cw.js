window.onload = function(){    
let list = ['Create', 'Paste', 'Cut'],
    ul = document.querySelector('ul');

function rightClick(ev){
    ev.preventDefault();
    ul.style.top = ev.offsetY + 'px';
    ul.style.left = ev.clientX + 'px';
    for (let i = 0; i < list.length; i++){
        let li = document.createElement('li');
        li.innerHTML = list[i];
        ul.appendChild(li);
        // li.style.position = 'absolute';
    }
}
document.addEventListener('contextmenu', rightClick);
}