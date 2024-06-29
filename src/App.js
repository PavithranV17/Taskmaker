import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { AddTask } from './components/AddTask';
import { ShowTask } from './components/ShowTask';
import './App.css';

function App() {
  const [tasklist, setTasklist] = useState(JSON.parse(localStorage.getItem("tasklist")) || []);
  const [edtask, setEdtask] = useState({});

  useEffect(() => {
    localStorage.setItem("tasklist", JSON.stringify(tasklist))
  },[tasklist]);

  return (
    <div className="App">
      <div className="container">
        <Header />
        <AddTask
          tasklist={tasklist}
          setTasklist={setTasklist}
          edtask={edtask}
          setEdtask={setEdtask}
        />
        <ShowTask
          tasklist={tasklist}
          setTasklist={setTasklist}
          edtask={edtask}
          setEdtask={setEdtask}
        />
      </div>
    </div>
  );
}

export default App;
