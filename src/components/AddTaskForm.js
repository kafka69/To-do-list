import React from 'react'

export default function AddTaskForm({newTask,handleSubmit,handleInputChange}) {
  return (
    <form onSubmit={handleSubmit} action="#" className="form">
        <label htmlFor="newitem">Add to the todo list</label>
        <input
          type="text"
          id="newitem"
          value={newTask}
          onChange={handleInputChange}
        />
        <button type="submit">Add Item</button>
      </form>
  )
}
