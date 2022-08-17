import { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';

const init = ()=>{
    return JSON.parse( localStorage.getItem('todos') ) || [];
}

export const useTodos = (initialData = []) => {
  const [todos, dispatchTodo] = useReducer(todoReducer, initialData, init);
  const todosCount = todos.length;
  const pendingTodosCount = todos.filter( todo => !todo.done ).length;

  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] add todo",
      payload: todo,
    };
    dispatchTodo(action);
  };

  const handleDeleteTodo = (id) => {
    const action = {
      type: "[TODO] remove todo",
      payload: id,
    };
    dispatchTodo(action);
  };

  const hangleToggleTodo = (id) => {
    const action = {
      type: "[TODO] toggle todo",
      payload: id,
    };
    dispatchTodo(action);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return {
    todos,
    todosCount,
    pendingTodosCount,
    handleNewTodo,
    handleDeleteTodo,
    hangleToggleTodo,
  };
};
