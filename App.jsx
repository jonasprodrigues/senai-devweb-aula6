import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Alunos from './pages/Alunos'
import NovoAluno from './pages/NovoAluno'
import EditarAluno from './pages/EditarAluno'


  function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/alunos" element={<Alunos />} />
          <Route path="/novoaluno" element={<NovoAluno />} />
          <Route path="/editaraluno" element={<EditarAluno />} />

          
        </Routes>
      </BrowserRouter>
  )
}

export default App
