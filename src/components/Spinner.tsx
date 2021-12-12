import React from "react";
import styled from "styled-components";

const AnimatedSpinner = styled.div`
    @keyframes animation {
        0% {
            transform: translate3d(-50%, -50%, 0) rotate(0deg);
        }
        100% {
            transform: translate3d(-50%, -50%, 0) rotate(360deg);
        }
      }
    ::before {
        position: absolute;
        top: 50px;
        left: 50px;
        height: 50px;
        width: 50px;
        content: "";
        border-radius: 50%;
        border: solid 10px #ccc5b9;
        border-bottom-color: #343a40;
        animation: 1.5s linear infinite animation;
      }
`;

const Spinner: React.FC = () => {
    return <AnimatedSpinner />;
};

export default Spinner;
