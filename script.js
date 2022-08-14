// UI vars 

const form = document.querySelector('form');
const input = document.querySelector('#txtTaskName');
const btnDeleteAll = document.querySelector('#btnDeleteAll');
const tasklist = document.querySelector('#task-list');
const items = ['item1', 'item2', 'item3', 'item4'];
eventlisteners();
load();
function eventlisteners() {
    //submit event
    form.addEventListener('submit', addNewItem);

    //delete event
    tasklist.addEventListener('click', deleteItem);

    //delete all event
    btnDeleteAll.addEventListener('click', deleteAllItems)
}

function load(){
    items.forEach(function (item) {
        createItem(item);

    })
}

function createItem(text) {
    const li = document.createElement('li');
    li.className = 'list-group-item list-group-item-secondary';
    li.appendChild(document.createTextNode(text));

    //create a
    const a = document.createElement('a');
    a.className = 'delete-item float-right';
    a.setAttribute('href', '#');
    a.innerHTML = '<i class="fas fa-times"></i>';

    //add a to li
    li.appendChild(a);

    //add li to ul
    tasklist.appendChild(li);

}

function addNewItem(e) {
    /*if(input.value===''){
        alert('lütfen bilgi giriniz');
    }*/

    createItem(input.value);

    //create li



    


    e.preventDefault();
}

function deleteItem(e) {
    if (e.target.className === 'fas fa-times') {
        e.target.parentElement.parentElement.remove();
    }



    e.preventDefault();
}

function deleteAllItems(e) {

    if (confirm('eminmisiniz!')) {
        tasklist.childNodes.forEach(function (item) {
            if (item.nodeType === 1) {
                item.remove();
            }
        })
    }






    e.preventDefault();
}
