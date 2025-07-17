import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";


function CreateArea(props) {

    const [note, setNote] = React.useState({
        title : "",
        content : ""
    })

    const [isExpanded, setIsExpanded] = React.useState(false);

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
    
    function expand() {
        setIsExpanded(true);
    }
    
  return (
    <div>
      <form className="create-note">
       {isExpanded ? <input name="title" value = {note.title} placeholder="Title" onChange = {handleChange}  /> : null}
        <textarea onClick = {expand} name="content" placeholder="Take a note..." onChange = {handleChange} value = {note.content} rows= {isExpanded ? "3" : "1"} />
        <Zoom in={isExpanded}>
        <Fab onClick = {handleSubmit} >
            <AddIcon />
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
