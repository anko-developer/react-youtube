import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function SearchHeader() {
  const navigate = useNavigate();
  const [text, setText] = useState('');
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length === 0) {
      return;
    }
    navigate(`/videos/${text}`);
    setText('');
  };

  return (
    <header className="flex">
      <Link to='/'>유튜브</Link>

      <form onSubmit={handleSubmit}>
        <input value={text} onChange={handleChange} type="text" className="text-[#000]" />
        <button>검색</button>
      </form>
    </header>
  );
}

