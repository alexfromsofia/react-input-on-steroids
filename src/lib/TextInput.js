import React from 'react';
import './TextInput.css';

const TextInput = ({ type = 'text', label, value, onChange }) => (
  <div className="simple-form-group">
    {label && <div className="simple-text-label">{label}</div>}
    <input
      type={type}
      className="simple-text-input"
      value={value}
      onChange={e => onChange && onChange(e.target.value)}
    />
  </div>
);

export default TextInput;
