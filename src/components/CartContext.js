import React, { useState } from 'react';

const MyContext = React.createContext();

function ContextProvider(props) {
  let [itemState, setitemState] = useState([]);

  var obj = {
    items: itemState,
    addItem: (item) => {
      setitemState([...itemState, item]);
    },
    removeItem: (id) => {
      itemState = itemState.filter((item) => item.id != id);
    },
    updateItem: (id) => {},
  };
  // console.log(itemState);
  return (
    <>
      <MyContext.Provider value={obj}>{props.children}</MyContext.Provider>
    </>
  );
}

export { ContextProvider, MyContext };
