import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from "../axios";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request =  await axios.get("/");
      
      setNotes(request.data);
      return request;
    }
    fetchData().catch((err) => console.log(err));
  });

  async function addNote(newNote) {
    //console.log(newNote);
     axios.post("/", {
      title : newNote.title,
      content : newNote.content
    }, {
     headers: {
       'Content-Type': 'application/json'
     }
    }).then((res) => {console.log(res)}).catch((err) => {console.log(err)});
 
 //addNote().catch((err) => console.log(err));
  }   

  async function deleteNote(noteId) {
    //console.log(noteId);
    axios.delete("/",{
      headers: {
        'Content-Type': 'application/json'
      },
      data : {
        id : noteId
      }
     }).then((res) => console.log(res)).catch((err) => console.log(err));  

    }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={noteItem.id}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
