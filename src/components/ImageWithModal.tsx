import React, { useState } from "react";
import styled from "styled-components";
import placeholder from '../assets/placeholder.png';
import Modal from "./Modal";

const Container = styled.div`
  display: flex;
  justify-content: center;
  `;

const RoundImage = styled.img`
  border-radius: 50%;
  width: 80px;
  height: 80px;
  object-fit: cover;
  `;

const ImageWithModal: React.FC<{ url: string|null}> = ({ url }) => {
    const [ showModal, setShowModal ] = useState(false);

    return (
        <Container>
            {showModal
                && (
                    <Modal
                        onClose={() => setShowModal(false)}
                        url={url || placeholder}
                    />
                )}
            <RoundImage
                onClick={() => setShowModal(true)}
                src={url || placeholder}
                alt=""
            />
        </Container>
    );
};

export default ImageWithModal;
