import { createContext } from "react";
import React from 'react'

let UserContext = createContext()
const UserProvider = UserContext.Provider

export {UserProvider}
export default UserContext