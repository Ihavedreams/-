import React, { useEffect, useReducer, useState } from 'react';

function Reducer() {
  const [count, dispatch] = useReducer((state, action) => {
    switch (action) {
    case 'ADD':
      return state + 1;
    case 'SUB':
      return state - 1;
    default:
      return state;
    }
  }, 0);
  return (
    <div>
      <p>{count}</p>
      <button
        onClick={() => {
          dispatch('ADD');
        }}
      >
        添加
      </button>
      <button
        onClick={() => {
          dispatch('SUB');
        }}
      >
        减少
      </button>
    </div>
  );
}
export default Reducer;

// function FriendStatus(props) {
//   const [isOnline, setIsOnline] = useState(null);

//   function handleStatusChange(status) {
//     setIsOnline(status.isOnline);
//   }

//   useEffect(() => {
//     ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
//     // Specify how to clean up after this effect:
//     return function cleanup() {
//       ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
//     };
//   });

//   if (isOnline === null) {
//     return 'Loading...';
//   }
//   return isOnline ? 'Online' : 'Offline';
// }
// export default FriendStatus;
