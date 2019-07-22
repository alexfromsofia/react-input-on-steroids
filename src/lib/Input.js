import React from 'react';

import { useInput } from './Hooks/input';

export const Input = ({ id, type }) => {
  const { bind } = useInput('');

  return <input key={id} type={type} {...bind} />;
};

export default Input;
