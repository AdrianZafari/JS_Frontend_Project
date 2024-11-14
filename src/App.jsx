import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './views/Home'
import Contact from './views/Contact'


function App() {

  // const [mode, setMode] = useState('light')

  // const changeMode = () => {
  //   setMode( mode === 'light' ? 'dark' : 'light')
  // }

  return (

      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home /> }/>
          <Route path='/contact' element={ <Contact /> }/>
        </Routes>
      </BrowserRouter>
  )
}

export default App


