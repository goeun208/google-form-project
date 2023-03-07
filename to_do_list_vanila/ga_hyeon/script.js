function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }

  let todolist = JSON.parse(window.localStorage.getItem('todolist')) || Array(0);
  todolist.forEach(e => addList(e.id, e.label, e.checked, false));

  const itemList = document.getElementById('item-list');
  const resetButton = document.getElementById('reset-button');
  itemList.firstElementChild !== null ? resetButton.style.visibility = 'visible' : resetButton.style.visibility = 'hidden';

  function addList(id, label, checked, isInput){
    if(label){
        const itemList = document.getElementById('item-list');
        itemList.className = "list-border";

        let newItem = document.createElement("li");
        newItem.className = "item";
        newItem.id = `list-${id}`;

        let newInput = document.createElement("input");
        newInput.type = "checkbox";
        newInput.id = id;
        newInput.className = "pointer";
        newInput.checked = checked;

        let newLabel = document.createElement("label");
        newLabel.innerHTML=label;
        newLabel.className = "item-label";
        newLabel.htmlFor = id;
        newLabel.style.opacity = checked ? '0.3' : '1';
        newLabel.style.textDecoration = checked ? 'line-through' : 'none';

        let newButton = document.createElement("button");
        newButton.innerHTML = "X";
        newButton.className = "button-style";

        newItem.appendChild(newInput);
        newItem.appendChild(newLabel);
        newItem.appendChild(newButton);

        newInput.onclick = function(){
            newLabel.style.opacity = newInput.checked ? '0.3' : '1';
            newLabel.style.textDecoration = newInput.checked ? 'line-through' : 'none';
            todolist = todolist.map((e) => {
              return e.id == id ? {
                ...e,
                checked: !checked
              } : e
            })
        }
        newButton.onclick = function(){
            const resetButton = document.getElementById('reset-button');
            itemList.removeChild(newItem);
            if(itemList.firstElementChild===null) {
              itemList.className = "";
              resetButton.style.visibility = 'hidden';
            }else{
              resetButton.style.visibility = 'visible';
            }
            todolist = todolist.filter((e) => e.id !== id);
        }

        if(isInput){
          itemList.prepend(newItem);

          todolist.unshift({
              id,
              label,
              checked
          })
          document.getElementById("inputTodo").value = "";
        }else{
          itemList.append(newItem);
        }
        const resetButton = document.getElementById('reset-button');
        itemList.firstElementChild !== null ? resetButton.style.visibility = 'visible' : resetButton.style.visibility = 'hidden';
      }
}

function clickEvent(){
    const todo = document.getElementById("inputTodo");
    const randomId = uuidv4();
    addList(randomId, todo.value, false, true);
}

resetButton.addEventListener('click',()=>{
  const resetButton = document.getElementById('reset-button');
  itemList.replaceChildren();
  todolist = [];
  resetButton.style.visibility = 'hidden';
  itemList.className = "";
  window.localStorage.removeItem('todolist');
  alert('초기화했습니다.');
})

window.addEventListener('unload',()=>{
  if(todolist.length>0) window.localStorage.setItem('todolist',JSON.stringify(todolist));
})