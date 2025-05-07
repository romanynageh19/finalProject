import { useState, useEffect } from 'react';
import * as React from 'react';

import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import {  InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import styled from 'styled-components';


const StyledSearch = styled(TextField)`
    border-radius: 16px;
    gap: 158.67px;
    background-color: rgba(255, 255, 255, 1);
    font-family: Open Sans;
    font-weight: 400;
    font-size: 50px;
    line-height: 100%;
    letter-spacing: 0%;

    .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
        border: none;
    }
    .MuiInputLabel-root {
        display: none;
    }
`



const top100Films = []

export default function FreeSolo() {
    const [inputValue, setInputValue] = useState("") 
    const [isFocused, setIsFocused] = useState(false);
    
    useEffect(() => {
        const handleKeyPress = (e) => {
            
            if (e.key === 'Enter' && isFocused && inputValue.length > 3) {
            console.log("Entered text:", inputValue); 
            }
        };
    
        document.addEventListener('keydown', handleKeyPress);
    
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, [inputValue, isFocused]);

    return (
        <Stack spacing={2} sx={{ width: 300, marginRight: 15}}>
            <Autocomplete
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            options={top100Films.map((option) => option.title)}
            renderInput={(params) => (
                
            <StyledSearch
                {...params}
                placeholder="Search..."
                variant="outlined"
                label="Search input"
                value={inputValue}
                onFocus={() => setIsFocused(true)} 
                onBlur={() => setIsFocused(false)}
                onChange={(e) => setInputValue(e.target.value)} 
                    InputProps={{
                        ...params.InputProps,
                        type: 'search',
                        startAdornment : !inputValue &&  (
                            <InputAdornment position="start">
                                <SearchIcon sx={{ color: '#bbb8b8' }} />
                            </InputAdornment>
                            ),
                    }}

            />

            )}
            />
        </Stack>
    );
}