import React from "react";
import IconButton from '@mui/material/IconButton';
import DescriptionIcon from '@mui/icons-material/Description';

export default function Header({handleToggleMode}){
    return(
        <div className="header">
            <IconButton> 
             
             <h2 ><DescriptionIcon />Keep-Notes</h2>

             </IconButton>
           <button 
           onClick={()=>handleToggleMode(
            (previousDarkMode)=>!previousDarkMode
            )}
           className="rounded-circle">Toggle Mode</button>
        </div>
    )
}