const defaultUser = {userDetails: null};
export default function activeUserReducer(state = defaultUser, action) {
  switch(action.type) {
    case 'ADD_ACTIVE_USER': return {...state, userDetails: action.payload};
    case 'UPDATE_ADDRESS': {
      let tmpState = { ...state };
      tmpState.userDetails.addresses = action.payload;
      return tmpState;
    }
    case 'UPDATE_GENDER': {
      let tmpState = { ...state };
      tmpState.userDetails.gender = action.payload;
      return tmpState;
    }
    default:
      return state;
  }
}
