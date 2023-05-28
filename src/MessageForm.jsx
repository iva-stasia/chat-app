import { useState } from 'react';
import './MessageForm.css'

export default function MessageForm({ onSubmit, senders }) {
  const [sender, setSender] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const date = new Date();
    const minutes =
      date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes();
    const time = `${date.getHours()}:${minutes} ${date.toLocaleDateString()}`;

    onSubmit(message, sender, time);

    setMessage('');
  }

  return (
    <form className="message-input" onSubmit={handleSubmit}>
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
        defaultValue=''
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
  );
}
