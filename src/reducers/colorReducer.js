/* eslint-disable max-len */
export const initialState = {
  before: [],
  current: '#00FF00',
  after: []
};

export default function reducer(state, action) {
  switch(action.type) {
    case 'COLOR_CHANGE':
      return { ...state, before: action.current, current: action.payload };
    case 'UNDO_COLOR':
      return { ...state, before: action.before.slice(0, -1), current: action.before.length - 1, after: action.current };
    case 'REDO_COLOR':
      return { ...state, before: action.current, current: action.after[0], after: action.after.slice(1) };
  }
}
