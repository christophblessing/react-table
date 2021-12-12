import React, { useEffect } from "react";
import styled from "styled-components";

const ModalDiv = styled.div`
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: #000000EE;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Modal: React.FC<{ url: string, onClose: any }> = ({ url, onClose }) => {
    const onESC = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
            onClose();
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", onESC, false);
        return () => {
            window.removeEventListener("keydown", onESC, false);
        };
    }, []);

    return (
        <ModalDiv
            onClick={() => {
                onClose();
            }}
        >
            <img src={url} alt="" />
        </ModalDiv>
    );
};

export default Modal;
