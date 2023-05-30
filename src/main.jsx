import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const senders = [
  {
    name: 'Unicorn',
    iconCode: '0x1F984',
    imagePath: 'https://img.icons8.com/flat-round/64/unicorn.png',
  },
  {
    name: 'Lama',
    iconCode: '0x1F999',
    imagePath: 'https://img.icons8.com/flat-round/64/llama.png',
  },
  {
    name: 'Ladybug',
    iconCode: '0x1F41E',
    imagePath: 'https://img.icons8.com/flat-round/64/insect--v1.png',
  },
];

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App senders={senders} />
  </React.StrictMode>,
)
