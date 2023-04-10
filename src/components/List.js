import React from 'react'
import { useSelector ,useDispatch } from 'react-redux'
import { TrashIcon } from 'evergreen-ui'
import { removeTodo, handleCheckbox } from '../redux/actions/index'


export default function List() {

  const todos = useSelector((state) => state.items);
  const dispatch = useDispatch();

  return (

    todos.length === 0 ?
    <h3 data-testid='fallbackMessage'>
      Add items to the list to display here
    </h3>
    :
    todos.map(todo =>(

      <div key={todo.id} className='todo-list'>
        <div className='checkbox'>
          <input
            type = 'checkbox'
            checked={todo.completed}
            onChange={()=>dispatch(handleCheckbox(todo.id))}
          />
          <p style={todo.completed===true?{textDecoration:'line-through'}:{textDecoration:'none'}} className='child'>
            {todo.todo}
          </p>
        </div>
        <div className='action-button'>
          <span onClick={()=>dispatch(removeTodo(todo.id))}><TrashIcon /></span>
        </div>
      </div>
    ))
  )
}
