<<<<<<< HEAD
import {createContext, useState} from "react";
=======
import { createContext, useState } from "react";
>>>>>>> 1fc34cbd620d947e35f2ab9ef600059782a8b273

export const UserContext = createContext();

const UserProvider = ({children}) => {
<<<<<<< HEAD
    const [user,setUser] = useState(null);
    return (
      <UserContext.Provider value={{
          user,
          setUser
        }}>
        {children}
      </UserContext.Provider>
    );
  }
  
  export default UserProvider;
=======
  const [user,setUser] = useState(null);  
  

  return ( 
    <UserContext.Provider value={{
      user,
      setUser
    }}>
      {children}
    </UserContext.Provider>
   );
}
 
export default UserProvider;

>>>>>>> 1fc34cbd620d947e35f2ab9ef600059782a8b273
