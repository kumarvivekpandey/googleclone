import "./Home.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AppsIcon from '@mui/icons-material/Apps';
import { Link } from 'react-router-dom';
import Search from './Search.jsx';

export default function Home(){
  return(
    <div className="home">
     
        
     <div className="home__header">
       <div className="home__headerLeft">
         <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
      </div>

       <div className="home__headerRight">
          <Link to="/gmail">Gmail</Link>
          <Link to="/about">Image</Link>
         <Link to="/app"><AppsIcon  /></Link>
         <Link to="/signout"><AccountCircleIcon  /></Link>
         
      </div>

       
      </div>



      
      <div className="home__body">
        <img 
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
           alt="error" className="Logog"/>

        <div className="home__inputContainer">
               <Search  hideButtons />
        </div>
        
         <div>
      
    </div>
       </div>
      
    </div>
  );
}
