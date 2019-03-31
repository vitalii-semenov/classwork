window.onload = function() {
let secondaryElements = document.querySelectorAll('.menu-inner-list'),
    firstElements = document.querySelectorAll('.menu-first-item');
for (let i = 0; i < firstElements.length; i++){
    firstElements[i].addEventListener('click', function(){
        for (let j = 0; j < secondaryElements[i].children.length; j++){
                let styleElem = secondaryElements[i].children[j].style.display;
                secondaryElements[i].children[j].style.display = (styleElem == 'none')? 'inline-block' : 'none';    
            }
    });
}

}