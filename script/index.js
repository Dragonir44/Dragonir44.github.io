let list = document.querySelectorAll('li');
for (let i=0; i<list.length; i++){
    list[i].onclick = function(){
        let j = 0;
        while (j < list.length){
            list[j++].className = 'list';
        }
        list[i].className = 'list active';

        let bg = document.querySelector('body');
        let color = list[i].getAttribute('data-color');
        console.log(bg)
        bg.style.backgroundColor = color;
    }
}