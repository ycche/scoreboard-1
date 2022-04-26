import React, {useState, useEffect} from 'react';

const UserContext = React.createContext();

export function UserContextProvider(props) {
    const [userName, setUserName] = useState()
    const switchName = (name) => setUserName(name)
  return (
    <UserContext.Provider value={{switchName, userName}}>
      {props.children}
    </UserContext.Provider>
  );
}

export const useUserContext = () => React.useContext(UserContext);