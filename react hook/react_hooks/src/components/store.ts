import { createContext } from "react";

interface UserContextValue {
  user: {
    name: string;
    age: number;
  };
  updateUser: (obj: { name: string; age: number }) => void;
}

const initialUser: UserContextValue = {
  user: {
    name: "",
    age: 0,
  },
  updateUser: () => {},
};

const UserContext = createContext<UserContextValue>(initialUser);

export type userType = typeof initialUser;

export default UserContext;