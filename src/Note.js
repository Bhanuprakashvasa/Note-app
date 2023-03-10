import React from "react";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';


export default function Note({id,text,date,handleDeleteNote}){
   
    return(
      <div className='note'>
			<span>{text}</span>
			<div className='note-footer'>
		    <small>{date}</small>
        <IconButton
        onClick={()=>handleDeleteNote(id)}
        >
        <DeleteIcon/>
        </IconButton>
				
			</div>
		</div>
    )
}