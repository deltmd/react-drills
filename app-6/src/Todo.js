import React from 'react';
const Todo = function (params) {
  let todoList = params.list.map((e,i)=> <h4 key={i}>{e}</h4>)
  return (
    <div>
     {todoList}
    </div>
  )
}
export default Todo