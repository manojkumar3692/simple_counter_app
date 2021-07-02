import { useState, useEffect } from 'react'
import Counter from './component/counter'
import './App.css';
function App() {
  const [initialValue, setInitialValue] = useState(1);

  return (
    <div className="App">
      <Counter counterValue={initialValue} />
    </div>
  );
}

export default App;
