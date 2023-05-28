import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App senders={senders} />
  </React.StrictMode>,
)
