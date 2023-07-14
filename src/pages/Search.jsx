import React, {useState} from'react';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import { Button } from '@mui/material';
import {useHistory} from "react-router-dom"; 
import './Search.css'



function Search({hideButtons = false} ){
   const [input, setInput] = useState("");
  const history = useHistory();
   const search = (e)=>{
   e.preventDefault();
    console.log("you hit the button>>" ,input)
    history.push('/search')
};
  return(
    <form  className="search">

      <div className='Search__input'>
        <SearchIcon className="search__inputIcon" />
        <input value={input} onChange={e => setInput(e.target.value)} />
        <MicIcon /> 
      </div>
      {!hideButtons ?(
        <div className='Search__buttons'>
         <Button   type='submit' onClick={search} variant="outlined"> Google Search</Button>
        <Button  variant="outlined"> I'm Feeling Lucky</Button>
      
      
      
      </div>
      ):(
 <div className='Search__buttons'>
         <Button   type='submit' onClick={search} variant="outlined" className="search__buttonsHidden"> Google Search</Button>
        <Button  variant="outlined"> I'm Feeling Lucky</Button>
      
      
      
      </div>
      
      )}
    
    </form>



    
  )
}
export default Search