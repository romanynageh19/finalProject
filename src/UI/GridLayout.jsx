import styled from "styled-components";

const StyledGridLayout = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr; 
    height: 100%;
    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
    }
`

export default StyledGridLayout;
