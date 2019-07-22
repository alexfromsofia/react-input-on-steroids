import React, { useState } from 'react';
import uuid from 'uuid';
import Input from './Input';

export const INPUT_TYPES = {
  TEXT: 'TEXT',
};

export const initialInputState = [{ id: uuid(), type: INPUT_TYPES.TEXT, value: 'bblablbalalb' }];

export const renderInputs = props => {
  const { type } = props;

  switch (type) {
    case INPUT_TYPES.TEXT:
      return <Input {...props} />;
    default:
      return null;
  }
};

function InputOnSteroids() {
  const [inputs] = useState(initialInputState);

  return <div>{inputs.map(renderInputs)}</div>;
}

export default InputOnSteroids;
