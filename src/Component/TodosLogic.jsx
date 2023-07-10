import { useState } from 'react';
import TodosList from './TodosList'
import InputTodo from './InputTodo'
import saveStorage from '../Logic/localStorage';
import { v4 as uuidv4 } from "uuid";

export default function TodosLogic() {

  const styleContainer = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '40%',
    padding: '0 6vh',
    gap: '3vh',
  }

  const storage = () => {
    if (localStorage.getItem('tasksReact')) {
      return JSON.parse(localStorage.getItem('tasksReact'));
    }
    return [{
      id: uuidv4(),
      title: 'Setup development environment',
      completed: true,
    },
    {
      id: uuidv4(),
      title: 'Develop website and add content',
      completed: false,
    },
    {
      id: uuidv4(),
      title: 'Deploy to live server',
      completed: false,
    }];
  };

  const data = storage();

  const [todos, setTodos] = useState(data)

  saveStorage(todos);

  const handleChange = (id) => {
    setTodos((prevState) =>
      prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
    saveStorage(todos);
  };

  const delTodo = (id) => {
    setTodos([
      ...todos.filter((todo) => {
        return todo.id !== id;
      }),
    ]);
    saveStorage(todos);
  };

  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  }

  return (
    <div style={styleContainer}>
      <InputTodo addTodoItem={addTodoItem}/>
      <TodosList 
      todosProps={todos} 
      handleChange={handleChange} 
      delTodo={delTodo}
      />
    </div>
  )
}
