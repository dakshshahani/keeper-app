import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
    const [notes, setNotes] = React.useState([]);

    function addNote(note){
        setNotes(prevNotes => {
            return [...prevNotes, note];
        })
    }

    function deleteNote(id) {
        setNotes(prevNotes => {
            return prevNotes.filter((note, index) => {
                return index !== id;
            });
        });
    }
  return (
    <div>
      <Header />
      <CreateArea onAdd = {addNote}  />
        {notes.map((noteItem, index) => {
            return <Note id = {index} key = {index} title = {noteItem.title} content = {noteItem.content} onDelete = {deleteNote} />;
        })}
      <Footer />
    </div>
  );
}

export default App;
