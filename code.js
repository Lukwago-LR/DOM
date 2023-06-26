const fruits = ['Apples', 'Pears', 'Oranges', 'Grapes', 'Bananas'];
button = document.querySelector(".button")

const fruitList = document.querySelector(".fruits");

function showFruits(){
    for(let i=0;i<fruits.length;i++){
        // get fruits from the list
        const fruit = fruits[i];
        
        // create a new li element
        const li = document.createElement('li');
        li.innerText = fruit;
        fruitList.appendChild(li);
     }

     button.disabled = true;
}


button.addEventListener('click', function(){
   showFruits();
})