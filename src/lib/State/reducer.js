import uuid from 'uuid';

import { INPUT_TYPES, ACTION_TYPES } from '../constants';

export const initialInputState = type => ({
  id: uuid(),
  type,
  value: '',
});
export const initialState = {
  inputsList: [initialInputState(INPUT_TYPES.TEXT)],
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

    case ACTION_TYPES.ADD_HTML_FIELD:
      return {
        ...state,
        inputsList: [
          ...state.inputsList,
          initialInputState(INPUT_TYPES.HTML),
          initialInputState(INPUT_TYPES.TEXT),
        ],
      };

    default:
      return state;
  }
};
