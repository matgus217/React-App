import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
      // prevent default action
        e.preventDefault();
        if (value) {
          // add todo
          addTodo(value);
          // clear form after submission
          setValue('');
        }
      };
  return (
    <form onSubmit={handleSubmit} className="T-Form">
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="t-input" placeholder='Add your scheduled items' />
    <button type="submit" className='button'>Add</button>
  </form>
  )
}