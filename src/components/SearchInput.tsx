import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Input = styled.input`
    margin: 8px;
`;

const SearchInput: React.FC<{onChange: (value: string)=>void}> = ({ onChange }) => {
    const [ value, setValue ] = useState("");

    useEffect(() => {
        const debounce = setTimeout(() => {
            onChange(value);
        }, 200);
        return () => clearTimeout(debounce);
    }, [ value ]);

    return (
        <label>
            Filter Table:
            <Input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Type to filter..."
            />
        </label>
    );
};

export default SearchInput;
