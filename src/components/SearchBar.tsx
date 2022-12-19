import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import styled from 'styled-components';

const SearchBar: React.FC = () => {
    const [searchValue, setSearchValue] = useState<string>('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setSearchValue(e.target.value);
    };

    return (
        <InputTextField
            value={searchValue}
            onChange={handleInputChange}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                ),
            }}
        />
    );
};

const InputTextField = styled(TextField)`
    width: 100%;
    background-color: #fff;
    font-size: 13px;
    .MuiInputBase-input {
        padding: 10px;
        font-size: 13px;
    }
`;

export default SearchBar;
