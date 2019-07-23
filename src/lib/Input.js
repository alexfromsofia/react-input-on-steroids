import React from 'react';

import { useInput } from './Hooks/inputHook';

export const Input = ({ id, type }) => {
  const { bind } = useInput(id);

  return <input type={type} {...bind} />;
};
