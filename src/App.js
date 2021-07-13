import React, { useState, useEffect } from "react";
import "./App.css";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import Message from "./Message";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";
import { IconButton } from "@material-ui/core";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState("");
  useEffect(() => {
    db.collection(`${user}`)
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);
  useEffect(() => {
    setUser(prompt("enter your name"));
  }, []);

  const sendmessage = (event) => {
    event.preventDefault();
    db.collection(`${user}`).add({
      message: input,
      username: user,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMessages([...messages, { username: user, message: input }]);
    setInput("");
  };

  return (
    <div className="App">
      <img src="data:image/png;base64,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" />
      <h1>hello world</h1>
      <h2>welcome {user}</h2>
      <form className="app__form">
        <FormControl className="app__formcontrol">
          <Input
            className="app__input"
            placeholder="Enter a message..."
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <IconButton
            className="app__iconbutton"
            disabled={!input}
            variant="outlined"
            color="primary"
            type="submit"
            onClick={sendmessage}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>
      <FlipMove>
        {messages.map(({ message, id }) => (
          <Message key={id} user={user} message={message} />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
