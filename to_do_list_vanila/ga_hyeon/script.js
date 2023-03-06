let totalnum = 0;

function clickEvent(){
    const todo = document.getElementById("inputTodo");
    if(todo.value){
        const items = document.getElementsByClassName("item");
        const itemList = document.getElementById('item-list');
        itemList.className = "list-border";

        let newItem = document.createElement("li");
        newItem.className = "item";
        newItem.id = `todolist${totalnum}`;

        let newInput = document.createElement("input");
        newInput.type = "checkbox";
        newInput.id = `todoitem${totalnum}`;
        newInput.className = "pointer";

        let newLabel = document.createElement("label");
        newLabel.innerHTML=todo.value;
        newLabel.className = "item-label";
        newLabel.htmlFor = `todoitem${totalnum}`;

        let newButton = document.createElement("button");
        newButton.innerHTML = "X";
        newButton.className = "button-style";

        newItem.appendChild(newInput);
        newItem.appendChild(newLabel);
        newItem.appendChild(newButton);

        newInput.onclick = function(){
            newLabel.style.opacity = newInput.checked ? '0.3' : '1';
            newLabel.style.textDecoration = newInput.checked ? 'line-through' : 'none';
        }
        newButton.onclick = function(){
            itemList.removeChild(newItem);
            if(itemList.firstElementChild===null) itemList.className = "";

        }
        
        itemList.prepend(newItem);
        todo.value = "";
        totalnum++;
    }
}
