import styled from "styled-components"
import LeftTopBuble from "../assets/icons/LeftTopBuble.svg"

const StyledTopLeftBubble = styled.img`
    position: absolute;
    top: 0;
    left: 0;
` 

function TopLeftBubble() {
    return (
        <StyledTopLeftBubble src={LeftTopBuble} />
    )
}

export default TopLeftBubble
