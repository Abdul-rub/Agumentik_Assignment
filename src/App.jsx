
import './App.css'
import { Intro } from './Component/Intro'
import Home from './Home'
import {RouterProvider , createBrowserRouter} from "react-router-dom"


const router = createBrowserRouter([
  {
    path:'/',
    element: <Home></Home>
  },
  {
    path:'/about',
    element: <Intro></Intro>
  },

])

function App() {
  return (
 
     <div className='App'>
     <RouterProvider router={router} />
     </div>
   
  )
}

export default App
