import React,{useState} from 'react'
import './ToDo.css'
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions/index'

export default function AddItemsForm() {

  const [items, setItems] = useState("");
  const dispatch = useDispatch();

  let handleAddItems =(e) =>{
    e.preventDefault();
    let todoObj ={
      id: Math.floor((Math.random() * 1000) + 1),
      todo: items,
      completed: false
    }
    setItems('');
    dispatch(addTodo(todoObj))
  }

  return (
    <div >
      <h2 data-testid ='appHeading'>  Todo App </h2>
      <form onSubmit={handleAddItems} >
            <input
            className='input'
            label ="Add ToDo's"
            placeholder='Add your items to the list'
            value ={items}
            onChange = {(e) => {setItems(e.target.value)}}
            required
            >
            </input>
            <button className='button' type="submit">Add Items</button>
        </form>

    </div>
  )
}
