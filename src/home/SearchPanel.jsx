import React from 'react'
import { CiSearch } from 'react-icons/ci'
import {TiFilter} from 'react-icons/ti'
import './SearchPanel.css'


const SearchPanel = ({setSearchValue}) => {
    return (
        <div className='search-panel'>
            <div className='search-input-group'>
                <input
                  type="text"
                  placeholder='Search objects...'
                  onChange={(e) => setSearchValue(e.target.value)} />
                <span><CiSearch size={20} className='search-icon' /></span>
            </div>
            <button>
                <TiFilter className='filter-button' size={22}/>
            </button>
        </div>
    )
}

export default SearchPanel