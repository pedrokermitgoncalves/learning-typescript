import React from "react";

interface Todo {
  id: number;
  text: string;
}

interface TodoListProps {
  items: Todo[];
}

const TodoList: React.FC<TodoListProps> = props => {
  return (
    <ul>
      {props.items.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
};

export default TodoList;
