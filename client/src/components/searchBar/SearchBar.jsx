import React from 'react';
import './searchBar.scss';

import { IoSearch } from "react-icons/io5";
import { MdHistory } from "react-icons/md";

const SearchBar = () => {
    return (
        <div className='searchBar'>

            <div className='searchBox'>
                <span> <IoSearch /></span>

                <input type="text" placeholder='Enter for Search...' />


            </div>
            {/* 
            <div className='searchHistory'>
                <span> <MdHistory /></span>
            </div> */}


        </div>
    );
};

export default SearchBar;