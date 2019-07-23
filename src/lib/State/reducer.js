import uuid from 'uuid';

import { INPUT_TYPES, ACTION_TYPES } from '../constants';

export const initialInputTypeTextState = {
  id: uuid(),
  type: INPUT_TYPES.TEXT,
  value: '',
};
export const initialState = {
  inputsList: [initialInputTypeTextState],
};

export const mainReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.UPDATE_TEXT_FIELD: {
      const { value, id } = action.payload;

      return {
        ...state,
        inputsList: state.inputsList.map(input => {
          if (input.id === id) {
            return {
              ...input,
              value,
            };
          }
          return input;
        }),
      };
    }
    default:
      return state;
  }
};
