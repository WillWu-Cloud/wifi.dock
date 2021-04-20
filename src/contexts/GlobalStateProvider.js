import React, { useContext, useState } from 'react'

const GlobalStateContext = React.createContext()

// custom hook
export function useGlobalState() {
  return useContext(GlobalStateContext)
}

export function GlobalStateProvider({ children }) {
  const [searchText, setSearchText] = useState('');
  const [navActive, setNavActive] = useState('');

  const handleSearchInput = (e) => {
    setSearchText(e.target.value)
    // console.log('[SearchProvider] searchText: '+ searchText);
  }

  const value = {
    searchText,
    handleSearchInput,
    navActive,
    setNavActive
  }  

  return (
    <GlobalStateContext.Provider value={value}>
        {children}
    </GlobalStateContext.Provider>
  )
}  