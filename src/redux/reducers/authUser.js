const initialState = {
  user: {},
  isAuth: false,
  profile: {},
  friends: [],
  profiles: [],
};
export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER': {
      return {
        ...state,
        isAuth: Object.keys(action.user).length > 0 ? true : false,
        user: action.user,
      };
    }
    case 'FOLLOW_USER': {
      return {
        ...state,
        user: action.user,
      };
    }
    case 'UNFOLLOW_USER': {
      return {
        ...state,
        user: {},
      };
    }
    case 'SET_PROFILE':
      return {
        ...state,
        profile: action.profile,
      };
    case 'SET_FRIENDS':
      return {
        ...state,
        friends: action.friends,
      };
    case 'SET_PROFILES':
      return {
        ...state,
        profiles: action.profiles,
      };
    case 'LOGOUT':
      return {
        ...state,
        isAuth: false,
        profile: action.user,
        user: action.user,
      };
    default:
      return state;
  }
};
