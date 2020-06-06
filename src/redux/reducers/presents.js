const initialState = {
  presents: [],
  present: {},
};
export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_PRESENTS':
      return {
        ...state,
        presents: action.presents,
      };
    case 'VIEW_PRESENT':
      return {
        ...state,
        present: action.present,
      };
    case 'UPDATE_PRESENT':
      return {
        ...state,
        present: action.present,
      };
    case 'CREATE_PRESENT':
      return {
        ...state,
        present: action.present,
      };
    case 'DELETE_PRESENT':
      return {
        ...state,
        present: action.present,
      };
    default:
      return state;
  }
};
