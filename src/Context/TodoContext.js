import React, { createContext, useContext } from "react";

const TodoContext = createContext({
  todos: [
    {
        id: 1,
        todo: " Todo msg",
        completed: false,
    }
],
addTodo: (todo) => {},
updateTodo: (id, todo) => {},
deleteTodo: (id) => {},
toggleComplete: (id) => {}
});

export const TodoProvider = TodoContext.Provider;

export function useTodo () 
{
  return useContext(TodoContext);
}
