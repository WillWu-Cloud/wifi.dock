import React, { useContext, useState } from 'react'

const SearchContext = React.createContext()

// custom hook
export function useSearch() {
  return useContext(SearchContext)
}

export function SearchProvider({ children }) {
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
    <SearchContext.Provider value={value}>
        {children}
    </SearchContext.Provider>
  )
}  