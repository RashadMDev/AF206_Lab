import Counter from './components/Counter';
import Todo from './components/Todo';

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Counter />
      <Todo />
    </div>

  );
}

export default App;
