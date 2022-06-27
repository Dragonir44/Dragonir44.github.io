let list = document.getElementsByClassName('list');
let content = document.querySelectorAll('.content');
console.log(list[0])
for (let i=0; i<list.length; i++){
    list[i].onclick = function(){
        let j = 0;
        while (j < list.length){
            list[j++].className = 'list';
        }
        console.log(list[i])
        list[i].className = 'list active';

        let g = 0;
        while (g < content.length){
            content[g++].className = 'content';
        }
        content[i].className = 'content active';
    }
}