import './Message.css'

export default function Message({ text, sender, time }) {
  return (
    <div className="message">
      <img className="avatar" src={sender.imagePath} alt="" />
      <p className="message-text">
        <span className="message-sender">{sender.name}</span>
        {text}
        <span className="message-time">{time}</span>
      </p>
    </div>
  );
}
