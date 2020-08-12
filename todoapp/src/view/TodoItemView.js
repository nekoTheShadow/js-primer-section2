import {element} from './html-util.js'

export class TodoItemView {
  createElement(todoItem, {onUpdateTodo, onDeleteTodo}) {
    const todoItemElement = item.completed
      ? element`
          <li>
            <input type="checkbox" class="checkbox" checked />
            <s>${item.title}</s>
            <button class="delete">x</button>
          </li>`
      : element`
          <li>
            <input type="checkbox" class="checkbox" />
            ${item.title}
            <button class="delete">x</button>
          </li>`
      
    const inputCheckElement = todoItemElement.querySelector('.checkbox')
    inputCheckElement.addEventListener('change', () => {
      onUpdateTodo({id: item.id, completed: !item.completed})
    })

    const deleteButtonElement = todoItemElement.querySelector('.delete')
    deleteButtonElement.addEventListener('click', () => {
      onDeleteTodo({id: item.id})
    })

    return todoItemElement
  }
}