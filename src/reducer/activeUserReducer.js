const defaultUser = {activeUser: null};
export default function activeUserReducer(state = defaultUser, action) {
  switch(action.type) {
    case 'ADD_ACTIVE_USER': return {...state, activeUser: action.payload};
    case 'UPDATE_ADDRESS': {
      let tmpState = { ...state };
      tmpState.activeUser.c_addresses = action.payload;
      return tmpState;
    }
    default:
      return state;
  }
}
