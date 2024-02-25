import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchHeader() {
  const navigate = useNavigate();
  const [text, setText] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setText(value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    navigate(`/videos/${text}`);
    setText('');
  };
  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={text} type="text" />
        <button>검색</button>
      </form>
    </header>
  );
}

