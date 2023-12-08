import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function SearchHeader() {
  const navigate = useNavigate();
  const [text, setText] = useState('');
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if(text.trim().length === 0) {
      return;
    }
    navigate(`/videos/${text}`);
    setText('');
  };
  return (
    <header>
      <Link to='/'>Home</Link>

      <form onSubmit={handleSubmit}>
        <input value={text} onChange={handleChange} type="text" />
        <button>검색</button>
      </form>
    </header>
  );
}

