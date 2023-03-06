// const listItems = JSON.parse(localStorage.getItem('listItems')) || Array(0)
const listItems = Array(0)

// const handleLoadWindow = () => {
//     // localStorage.removeItem('listItems')

//     [...listItems].reverse().forEach((listItem) => {
//         setTodo(listItem)
//     })
//     document.querySelector('html').scrollTo({ top: 0, behavior: 'smooth' })
// }

// const handleUnloadWindow = () => {
//     localStorage.setItem('listItems', JSON.stringify(listItems))
// }

// uuidv4 함수는 제가 짠거 아니고 찾아서 가져온겁니다... ㅎㅎ
const uuidv4 = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};

const handleKeyPressInput = (e) => {
    e.code === 'Enter' && addTodo()
}

const handleChangeRadio = (e) => {
    const { checked, id } = e.target;
    const label = e.target.closest(".list-item").querySelector('div').querySelector('label')
    checked ? label.classList.add('done') : label.classList.remove('done')
    const list = listItems.find((listItem) => listItem.id === id);
    list.checked = !list.checked;
}

const setTodo = (listItem) => {
    const { id, label, checked } = listItem;
    createListElement(id, label, checked);
}

const addTodo = () => {
    const textArea = document.querySelector('.text-area')
    const value = textArea.value;
    textArea.value = "";
    if (value.trim() !== "") {
        const id = uuidv4();
        createListElement(id, value);
        listItems.unshift({ id: id, label: value, checked: false })
        document.querySelector('html').scrollTo({ top: 0, behavior: 'smooth' })
    }
}

const createListElement = (id, value, checked = false) => {
    const ul = document.querySelector('.list-items');
    const li = document.createElement("li");
    const input = document.createElement("input");
    const div = document.createElement("div");
    const label = document.createElement("label");
    const span = document.createElement("span");
    const i = document.createElement("i");
    li.classList.add("list-item");
    li.key = id;
    input.setAttribute('type', "checkbox");
    input.setAttribute('id', id);
    input.addEventListener('click', handleChangeRadio)
    input.checked = checked
    label.setAttribute('for', id);
    label.innerHTML = value;
    i.classList.add("fa-solid")
    i.classList.add("fa-xmark")
    div.appendChild(label);
    span.appendChild(i);
    span.addEventListener('click', deleteTodo);
    li.appendChild(input)
    li.appendChild(div);
    li.appendChild(span);
    if (ul) {
        ul.prepend(li)
    } else {
        const listWrap = document.querySelector('.list-wrap')
        const ul = document.createElement("ul");
        ul.classList.add("list-items")
        ul.appendChild(li);
        listWrap.appendChild(ul)
    }
}

const deleteTodo = (e) => {
    const ul = document.querySelector('.list-items');
    const li = e.target.closest('.list-item');
    const listIndex = listItems.findIndex((listItem) => listItem.id === li.key);
    listItems.splice(listIndex, 1);
    if (!!listItems.length) {
        ul.removeChild(li);
    } else {
        const listWrap = document.querySelector(".list-wrap");
        listWrap.removeChild(ul);
    }
}

const handleResizeWindow = () => {
    const offset = 15
    const { height: headerHeight } = document.querySelector('.header').getBoundingClientRect();
    const listWrap = document.querySelector('.list-wrap');
    listWrap.style.paddingTop = headerHeight +  offset + 'px';
}

// window.addEventListener('load', () => handleLoadWindow(), handleResizeWindow())
// window.addEventListener('unload', handleUnloadWindow)
window.addEventListener('load', handleResizeWindow)
window.addEventListener('resize', handleResizeWindow)