import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { getFilteredItems, sortByName } from "../utils/item";
import styled from "styled-components";
import ImageWithModal from "./ImageWithModal";
import ItemStatus from "./ItemStatus";
import SearchInput from "./SearchInput";

const Container = styled.div`
    margin: auto;
    max-width: 800px;
`;

const StyledTable = styled.table`
    border-collapse: collapse;
    min-width: 800px;

    td, th {
        border: 1px solid #ddd;
        padding: 8px;
    }
    
    th {
        padding: 12px 12px;
        text-align: left;
        background-color: ${({ theme }) => theme.neutralDark};
        color: white;
    }
    
    tr:nth-of-type(odd) {
        background-color: ${({ theme }) => theme.neutral};
    }
    
    tr:hover {background-color: ${({ theme }) => theme.neutralLight};}
`;

const Table: React.FC = () => {
    const [ data, setData ] = useState([]);
    const [ search, setSearch ] = useState("");
    const [ desc, setDesc ] = useState(false);
    const { setErrorMessage, setLoading } = useContext(AppContext);

    const displayedItems = sortByName(getFilteredItems(data, search), desc);

    const url = "https://christophblessing.github.io/data/bill.json";

    useEffect(() => {
        fetch(url)
            .then((response) => {
                if (response.ok) {
                    setErrorMessage?.("");
                    return response.json();
                }
                throw new Error(`Could not fetch data: ${response.statusText}`);
            })
            .then((responseObj) => {
                setData(responseObj.data);
                setLoading?.(false);
            })
            .catch((err) => {
                setErrorMessage?.(`${err.message}`);
                setLoading?.(false);
            });
    }, []);

    return (
        <Container>
            <label>
                <SearchInput
                    onChange={setSearch}
                />
            </label>
            <StyledTable>
                <thead>
                    <tr>
                        <th
                            onClick={() => {
                                setDesc(!desc);
                            }}
                            style={{ cursor: "pointer" }}
                        >
                            Name {desc ? "🔽" : "🔼"}
                        </th>
                        <th>Image</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {displayedItems.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>
                                <ImageWithModal url={item.image} />
                            </td>
                            <td>
                                <ItemStatus
                                    item={{ id: item.id, status: item.status }}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </StyledTable>
        </Container>
    );
};

export default Table;
