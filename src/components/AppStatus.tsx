import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";

const AppStatusContainer = styled.div`
    ::before{
        content: "😐 "
    }
    margin: auto;
    padding: 8px;
    max-width: 600px;
    background-color: ${({ theme }) => theme.error};
`;

const AppStatus: React.FC = () => {
    const { errorMessage, loading } = useContext(AppContext);
    return (
        <>
            {loading && <Spinner />}
            {
                errorMessage && (
                    <AppStatusContainer>
                        {errorMessage}
                    </AppStatusContainer>
                )
            }
        </>
    );
};

export default AppStatus;
