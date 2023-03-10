import React from "react";
import { useState } from "react";

 function AddNote( { handleAddNote }){
    const[note,setNote]=useState("");
    const characterLimit=200;

    const handleChange=(event)=>{
        if(characterLimit-event.target.value.length>=0){
            setNote(event.target.value)
        }
         
    }

    const handleClick=()=>{
        if(note.trim().length>0){
            handleAddNote(note)
            setNote('')
        }
          
    }

    return(
        <div className="addnote">
            <textarea
            rows='10'
            cols='30'
            placeholder='Type here to add a note..'
            value={note}
            onChange={handleChange}
            >
            </textarea>
            <div className="note-footer">
                <small>{characterLimit-note.length} Remaining</small>
                <button className="save"
                   onClick={handleClick}>
                Save
                    </button>
            </div>
        </div>
    )
}

export default AddNote;