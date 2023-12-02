import Root from './Root';
import Explore from './pages/Explore';
import Home from './pages/Home'
import Lists from './pages/Lists';
import Login from './pages/Login';
import Messages from './pages/Messages';
import Notifications from './pages/Notifications';
import Profile from './pages/Profile';
import Register from './pages/Register';
import Tweet from './pages/Tweet';
import "./tailwind.css"
import {BrowserRouter,Route,Routes} from "react-router-dom";
import { NavbarProvider } from './components/Mycontext';


function App() {

  return (
    <NavbarProvider>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Root/>}>
          <Route index element={<Home/>}/>
          <Route path='/explore' element={<Explore/>}/>
          <Route path='/notifications' element={<Notifications/>}/>
          <Route path='/messages' element={<Messages/>}/>
          <Route path='/lists' element={<Lists/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/signup' element={<Register/>}/>
          <Route path='signin' element={<Login/>}/>
          <Route path='/tweet' element={<Tweet/>}/>
        </Route>
      </Routes>
   </BrowserRouter>
   </NavbarProvider>
  )
}

export default App
