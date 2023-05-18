import { useState } from 'react';
import './App.css';

const senders = {
  unicorn: {
    name: 'Unicorn',
    imagePath: 'https://img.icons8.com/flat-round/64/unicorn.png',
  },
  lama: {
    name: 'Lama',
    imagePath: 'https://img.icons8.com/flat-round/64/llama.png',
  },
  ladybug: {
    name: 'Ladybug',
    imagePath: 'https://img.icons8.com/flat-round/64/insect--v1.png',
  },
};

function App() {
  const [sender, setSender] = useState(senders.unicorn);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  function addMessage(e) {
    e.preventDefault();
    const date = new Date();
    const minutes =
      date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes();
    const time = `${date.getHours()}:${minutes} ${date.toLocaleDateString()}`;
    setMessages([...messages, { text: message, sender, time }]);
    setMessage('');
  }

  return (
    <>
      <div className="chat">
        <div className="chat-header">
          <h2>Chat &#128172;</h2>
        </div>
        <div className="chat-messages">
          {messages.map(({ text, sender, time }, id) => {
            return (
              <div className="message" key={id}>
                <img className="avatar" src={sender.imagePath} alt="" />
                <p className="message-text">
                  <span className="message-sender">{sender.name}</span>
                  {text}
                  <span className="message-time">{time}</span>
                </p>
              </div>
            );
          })}
        </div>
        <form className="message-input" onSubmit={addMessage}>
          <input
            className="input"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            type="text"
            placeholder="Message"
            required
          />
          <select
            className="sender-select"
            onChange={(e) => setSender(senders[e.target.value])}
            name="sender"
            required>
            <option value="" disabled>
              Select Sender:
            </option>
            <option value="unicorn">&#129412; Unicorn</option>
            <option value="lama">&#129433; Lama</option>
            <option value="ladybug">&#128030; Ladybug</option>
          </select>
          <button className="send-btn">Send</button>
        </form>
      </div>
    </>
  );
}

export default App;
