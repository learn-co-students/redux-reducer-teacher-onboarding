export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      state.friends.push(action.friend);
      return state;
    case 'REMOVE_FRIEND':
      let badFriendIndex = state.friends.findIndex(friend => friend.id === action.id)
      let newState = {...state,
            friends: [
              ...state.friends.slice(0, badFriendIndex),
              ...state.friends.slice(badFriendIndex + 1)
            ]
        };
      return newState;
    default:
      return state;
  };
};
