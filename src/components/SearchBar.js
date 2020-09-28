import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdKeyboard } from 'react-icons/md'
import './SearchBar.css'

function SearchBar() {
  const initialState  = {
    searchTerm: ''
  }
  const [state, setState] = useState({ initialState })
  const value = (e) => e.target.value
  const onChange = (e) => setState({ searchTerm: e.target.value })
  const onSubmit = (e) => {
    const { searchTerm } = state
    e.preventDefault()
  }
  console.log(state)
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
        <button className="header__input__button">
          <AiOutlineSearch />
        </button>
      </div>

    
    </form>
  )
}

export default SearchBar
