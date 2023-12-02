import { Link, Outlet, useLocation } from 'react-router-dom'
import NavBar from './components/NavBar'
import Trends from './components/Trends'
import "./tailwind.css"
import Navigation from './components/Navigation'
import Tweet from './pages/Tweet'
import {useNavbarContext } from './components/Mycontext';


export default function Root() {
const location=useLocation()
const { state,setState,toggleNavbar} = useNavbarContext();
const handlePost=()=>{
  toggleNavbar();
}
  return (
    <>
    {location.pathname!=='/tweet'?
    <div className='flex'>
        <NavBar/>
        <Navigation/>
        <Link  onClick={handlePost} to={'/tweet'} className='w-[60px] h-[60px] text-white fixed bg-blue-400 bottom-40 right-5 rounded-full sm:hidden flex justify-center items-center '>T</Link>
        <Outlet/>
        <div className='max-md:hidden'>
        {state?<Tweet/>:''}
        </div>
        <Trends/>
    </div>
     :<Outlet/>}
    </>
  )
}
