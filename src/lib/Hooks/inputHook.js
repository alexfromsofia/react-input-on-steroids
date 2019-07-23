import { useStateValue } from '../State';
import { ACTION_TYPES } from '../constants';

export const useInput = id => {
  const [state, dispatch] = useStateValue();
  const { value } = state.inputsList.find(input => input.id === id);

  return {
    value,
    // reset: () => setValue(''),
    bind: {
      value,
      onChange: event => {
        dispatch({
          type: ACTION_TYPES.UPDATE_TEXT_FIELD,
          payload: { value: event.target.value, id },
        });
      },
      onKeyPress: event => {
        if (event.key === '@') {
          event.preventDefault();
          dispatch({
            type: ACTION_TYPES.ADD_HTML_FIELD,
          });
        }
      },
    },
  };
};
