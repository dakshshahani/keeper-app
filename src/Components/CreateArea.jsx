import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";


function CreateArea(props) {

    const [note, setNote] = React.useState({
        title : "",
        content : ""
    })

    function handleChange(event) {
        const {name, value} = event.target;
        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });

    }

    function handleSubmit(event) {
        props.onAdd(note);
        event.preventDefault();
        setNote({
            title : "",
            content : ""
        })

    }

    
  return (
    <div>
      <form className="create-note">
        <input name="title" value = {note.title} placeholder="Title" onChange = {handleChange}  />
        <textarea name="content" placeholder="Take a note..." onChange = {handleChange} value = {note.content} rows="3" />
        <button onClick = {handleSubmit} >Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
