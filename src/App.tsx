import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CommonLayout from './layouts/CommonLayout'
import Login from './pages/Login'
import CreatePlan from './pages/CreatePlan'
import Thanks from './pages/Thanks'
import './Global.scss'

function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={ <CommonLayout /> }>
          <Route index element={ <Login /> } />
          <Route path='create-plan' element={ <CreatePlan /> } />
          <Route path='thanks' element={ <Thanks /> } />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
