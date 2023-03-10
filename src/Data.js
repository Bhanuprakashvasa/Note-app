import React from "react";
import Note from "./Note"
import AddNote from "./AddNote"

  export default function Data({ noteData, handleAddNote, handleDeleteNote }){
      return(
        <div className='notes-list'>
           { noteData.map((note,index)=>(
            <Note 
            key={index}
            id={note.id}
            text={note.text}
            date={note.date}
            handleDeleteNote={handleDeleteNote}
            />
            ))}
            <AddNote handleAddNote={handleAddNote}/> 
        </div>
      )
  }