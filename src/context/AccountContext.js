import { createContext, useContext, useState } from "react";

import React from 'react'
export const AccountContext=createContext(null);
export const AccountContextProvider = ({children}) => {
   const [data,setData]=useState(null);
  return (
    <AccountContext.Provider value={{
        data,setData
    }} >
       
       {children}
   </AccountContext.Provider>
  )
}
export default AccountContextProvider
