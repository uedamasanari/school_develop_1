import React, { useState } from 'react';
import axios from 'axios';

const GptComponent = () => {
  const [message, setMessage] = useState('');
  const [input, setInput] = useState('');

  const fetchMessage = async () => {
    const configuration = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`
      }
    };
    const body = {
      "model": "gpt-3.5-turbo",
      "messages": [
          {"role": "system", "content": "You are always angry but you always respond."},
          {"role": "user", "content": input}
      ]
    };
    
    const res = await axios.post('https://api.openai.com/v1/chat/completions', body, configuration);
    setMessage(res.data.choices[0].message.content);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchMessage();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={e => setInput(e.target.value)} />
        <button type="submit">Send</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default GptComponent;
