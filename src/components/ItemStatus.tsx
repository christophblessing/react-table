import styled from "styled-components";
import { TItemStatus } from "../@types/common";


const Container = styled.div`
    display: flex;
    align-items: center;
`;

const Indicator = styled.div<{status: TItemStatus}>`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: ${({ theme, status }) => theme[status]};
    margin: 0 20px 0 20px;
`;

const ItemStatus: React.FC<{
    item: { id: number; status: TItemStatus };
}> = ({ item }) => {

    return (
        <Container>
            <Indicator status={item.status}/>
            <span>{item.status}</span>
        </Container>
    );
};

export default ItemStatus;
