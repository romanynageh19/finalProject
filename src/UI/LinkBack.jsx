import { Link } from "react-router-dom"
import styled from "styled-components"
import leftArrow from "../assets/icons/leftArrow.svg"


const StyledLinkBack = styled(Link)`
    font-family: Open Sans;
    font-size: 32px;
    line-height: 140%;
    display: flex;
    align-items: center;
    gap: 24px;    
    margin-bottom: 30px;
`

function LinkBack({content}) {
    return (
        <StyledLinkBack to="/home">
            <img src={leftArrow} alt="leftarrow"/>
            <p>{content}</p>
        </StyledLinkBack>
    )
}

export default LinkBack
