import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Form } from './components/Form';
import { Header } from './components/Header';
import { ListTasks } from './components/ListTasks';
import { TasksContextProvider } from './context/TasksContext';

function App() {

  return (

    <div className="app container text-light">

      <TasksContextProvider>
        <Header />

        <Routes>

          <Route path='/' element={<ListTasks />} />
          <Route path='/form' element={<Form />} />
          <Route path='*' element={<ListTasks />} />

        </Routes>
      </TasksContextProvider>
    </div>

  )
}

export default App
