"use client";

import { useState } from 'react';
import React from 'react'
import SearchManufacturer from './SearchManufacturer';

const SearchBar = () => {
    const [manufacturer, setManufacturer] = useState('');
    const handleSearch = () => { }

    return (
        <form action="" onSubmit={handleSearch} className="searchbar">
            <div className="searchbar__item">
                <SearchManufacturer manufacturer={manufacturer} />
            </div>
        </form>
    )
}

export default SearchBar