import React, { useState, useRef, useCallback} from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';
import CreateTodo from './components/CreateTodo';
import styled from 'styled-components';

const TodoTemplate = styled.div`
  width: 500px;
  margin: 0 auto;
  border: 1px solid black;
`;

const App = () => {
  const [todos, setTodos] = useState([{
    id: 1,
    text: 'todo sample',
    checked: false
  }]);
  const [id, text] = todos;
  const [newText, setNewText] = useState(text);

  const nextId = useRef(2);

  const handleSubmit = useCallback(
      (text) => {
        const todo = {
          id: nextId.current,
          text,
          checked: false,
        };
        setTodos(todos.concat(todo));
        nextId.current += 1;
        }, 
      [todos]
  );

  const handleDelete = useCallback(
      (id) => {
      setTodos(todos.filter(todo => todo.id !== id));
    }, 
    [todos]
  );

  const handleUpdate = () => {
    setTodos(todos.map((todo) => ({
      ...todo,
      text: todo.id === id ? newText : todo.text,
    })));

    setNewText(newText);
  };

  const handleCheck = useCallback(
      (id) => {
        setTodos(todos.map(todo => {
          return todo.id === id ? { ...todo, checked: !todo.checked } : todo;
        })); 
      }, 
    [todos]
  );

  return (
    <>
      <TodoTemplate>
        <Header todos={todos} />
        <CreateTodo handleSubmit={handleSubmit}  />
        <TodoList todos={todos} handleDelete={handleDelete} handleUpdate={handleUpdate} handleCheck={handleCheck} />
      </TodoTemplate>
    </>
  );
}

export default React.memo(App);