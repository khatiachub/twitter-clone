import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';


export default function Navigation() {
  return (
    <div className="fixed bottom-0 w-full h-[60px] bg-white sm:hidden flex justify-between items-center px-6 border-t border-t-1">
        <HomeIcon style={{fontSize:'30px'}} />
        <SearchIcon style={{fontSize:'30px'}} />
        <NotificationsNoneIcon style={{fontSize:'30px'}} />
        <MailOutlineIcon style={{fontSize:'30px'}} />
    </div>
  )
}
