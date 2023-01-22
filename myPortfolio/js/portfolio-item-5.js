const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open')
    navToggle.classList.toggle('nav-open')
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.toggle('nav-open');
        navToggle.classList.toggle('nav-open');
    })
});

//          to do list

const form = document.querySelector('.list__form')
const input = document.querySelector('#new-task-input')
const listEl = document.querySelector('#tasks')



form.addEventListener('submit', function(e) {
    e.preventDefault()
    const task = input.value

    const taskEl = document.createElement('div')
    taskEl.classList.add('task')

    const taskContentEl = document.createElement('div')
    taskContentEl.classList.add('content')

    taskEl.appendChild(taskContentEl)

    const taskInputEl = document.createElement('input')
    taskInputEl.classList.add('text')
    taskInputEl.type = 'text'
    taskInputEl.setAttribute('readonly', 'readonly')
    taskInputEl.value = task;

    taskContentEl.appendChild(taskInputEl)

    const taskActionEl = document.createElement('div')
    taskActionEl.classList.add('btnActions')

    const editBtn = document.createElement('button')
    editBtn.classList.add('edit')
    editBtn.innerHTML = 'edit'

    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('delete')
    deleteBtn.innerHTML = 'delete'

    taskActionEl.appendChild(editBtn)
    taskActionEl.appendChild(deleteBtn)

    taskEl.appendChild(taskActionEl)

    listEl.appendChild(taskEl)

    editBtn.addEventListener('click', () => {
        if (editBtn.innerText === 'edit') {
            taskInputEl.removeAttribute('readonly')
            taskInputEl.focus()
            editBtn.innerText = 'save'
        } else {
            taskInputEl.setAttribute('readonly', 'readonly')
            editBtn.innerText = 'edit'
        }

    })
    deleteBtn.addEventListener('click', () => {
        taskContentEl.parentElement.remove();
    })
    input.value = ''
})