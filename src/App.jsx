import { useState } from 'react';
import './App.css';
import Message from './Message';
import MessageForm from './MessageForm';

function App() {
  const [messages, setMessages] = useState([]);

  function addMessage(message, sender, time) {
    setMessages([...messages, { text: message, sender, time }]);
  }

  return (
    <>
      <div className="chat">
        <div className="chat-header">
          <h2>Chat &#128172;</h2>
        </div>
        <div className="chat-messages">
          {messages.map(({ text, sender, time }, id) => {
            return <Message text={text} sender={sender} time={time} key={id} />;
          })}
        </div>
        <MessageForm onSubmit={addMessage} />
      </div>
    </>
  );
}

export default App;
