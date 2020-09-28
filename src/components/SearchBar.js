import React, { useState, useEffect } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdKeyboard } from 'react-icons/md'
import './SearchBar.css'

function SearchBar({ handleSubmit }) {
  const [state, setState] = useState({
    searchTerm: ''
  })
  const onChange = (e) => setState({ searchTerm: e.target.value })
  const onSubmit = (e) => {
    const { searchTerm } = state
    console.log(searchTerm)
    handleSubmit(searchTerm)
    e.preventDefault()
  }
  return (
    <form>
    <div className="header__middle">
        <div className="header__input-set">
          <input 
            className="header__input"
            placeholder="검색"
            onChange={onChange}
          />
          <MdKeyboard className="keyboard" />
        </div>
        <button className="header__input__button" onSubmit={onSubmit}>
          <AiOutlineSearch />
        </button>
      </div>

    
    </form>
  )
}

export default SearchBar
