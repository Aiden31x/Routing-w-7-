import {lazy} from 'react'
import {BrowserRouter,Routes,Route,useNavigate} from 'react-router-dom'
import './App.css'
 
const Landing = lazy(()=> import('./Components/Landing')) 
const Dashboard = lazy(()=> import('./Components/Dashboard'))

function App() {


  return (
    <div>
    <BrowserRouter>
    <AppBar />
    <Routes>
      <Route path='/' element={<Landing />}></Route>
      <Route path='/dashboard' element={<Dashboard />}></Route>
    </Routes>
     
      
    </BrowserRouter>
    </div>

  )
}

function AppBar(){
  const navigate=useNavigate();

  return <div>
    <div>
      <button onClick={()=>{
        navigate("/")
      }}>Landing</button>

      <button onClick={()=>{
        navigate("/dashboard")
      }}>Dashboard</button>


    </div>


  </div>
 
}
export default App
