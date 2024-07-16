import React, { useEffect, useState } from 'react';
import './searchBar.scss';

import { IoSearch } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { sideBarOptions } from '../../redux/reducer/appFunctions';
import { getSearchUser } from '../../redux/action/conversations';

const SearchBar = () => {

    const [search, setSearch] = useState();
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        getSearchUser(dispatch, search);
        sideBarHandler(5);
    };



    const sideBarHandler = (index) => {

        dispatch(sideBarOptions(index));

    };

    useEffect(() => {
        // console.log(search);

    }, [search]);


    return (
        <div className='searchBar' onSubmit={submitHandler} >

            <form className='searchBox'>
                <span> <IoSearch /></span>

                <input type="text" placeholder='Enter for Search...' onChange={(e) => setSearch(e.target.value)} />


            </form>



        </div>
    );
};

export default SearchBar;