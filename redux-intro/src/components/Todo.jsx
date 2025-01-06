import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { addTodo, clearTodos, deleteTodo } from '../redux/todoSlice';

function Todo() {
      const [todoText, setTodoText] = useState('');
      const todos = useSelector((state) => state.todos.todos);
      const dispatch = useDispatch();

      const handleAddTodo = () => {
            if (todoText.trim()) {
                  dispatch(addTodo(todoText));
                  setTodoText('');
            }
      };

      return (
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
                  <h1>Todo List</h1>
                  <div>
                        <input
                              type="text"
                              value={todoText}
                              onChange={(e) => setTodoText(e.target.value)}
                              placeholder="Add a new task..."
                        />
                        <button onClick={handleAddTodo}>Add Todo</button>
                  </div>
                  <ul style={{ listStyleType: 'none', padding: 0, marginTop: '20px' }}>
                        {todos.map((todo) => (
                              <li
                                    key={todo.id}
                                    style={{
                                          marginBottom: '10px',
                                    }}
                              >
                                    <span style={{ cursor: 'pointer' }}>
                                          {todo.text}
                                    </span>
                                    <button
                                          onClick={() => dispatch(deleteTodo(todo.id))}
                                          style={{ marginLeft: '10px' }}
                                    >
                                          Delete
                                    </button>
                              </li>
                        ))}
                  </ul>
                  {todos.length > 0 && (
                        <button onClick={() => dispatch(clearTodos())} style={{ marginTop: '20px' }}>
                              Clear All Todos
                        </button>
                  )}
            </div>
      );
}

export default Todo;
