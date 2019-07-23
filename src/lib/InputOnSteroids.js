import React from 'react';

import { useStateValue } from './State';
import { INPUT_TYPES } from './constants';
import { Input } from './Input';

import './InputOnSteroids.css';

export const renderInputs = props => {
  const { type, id } = props;

  switch (type) {
    case INPUT_TYPES.TEXT:
      return <Input key={id} {...props} />;
    case INPUT_TYPES.HTML:
      return (
        <div className="input-type-html" key={id}>
          Type:
          {type}
        </div>
      );
    default:
      return null;
  }
};

export const InputOnSteroids = props => {
  const [{ inputsList }] = useStateValue();

  return <div className="container">{inputsList.map(renderInputs)}</div>;
};
