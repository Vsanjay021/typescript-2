import React, { ReactNode, useState } from "react";
import UserContext, { userType } from "./store";

function ContextProvider({ children }: { children: ReactNode }) {
  let [user, setUser] = useState<userType["user"]>({
    name: "unknown",
    age: 0,
  });

  const updateUser = (obj: userType["user"]) => {
    setUser(obj);
  };

  return (
    <UserContext.Provider value={{user,updateUser}}>
      {children}
    </UserContext.Provider>
  );
}

export default ContextProvider;