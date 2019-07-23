import React from 'react';

import { useStateValue } from './State';
import { INPUT_TYPES } from './constants';
import { Input } from './Input';

export const renderInputs = props => {
  const { type, id } = props;

  switch (type) {
    case INPUT_TYPES.TEXT:
      return <Input key={id} {...props} />;
    default:
      return null;
  }
};

export const InputOnSteroids = () => {
  const [{ inputsList }] = useStateValue();

  return <div>{inputsList.map(renderInputs)}</div>;
};
