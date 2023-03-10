import React from "react";
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function Search({handleSearchNote}){
    return(
        <div className="search">
         <IconButton>
         <SearchIcon />
         </IconButton>
         <input type="text"
         onChange={(event)=>handleSearchNote(event.target.value)}
         placeholder="type here to search..."
         />
        </div>
    )
}