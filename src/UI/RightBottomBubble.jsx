import styled from "styled-components";
import rightBottomBuble from "../assets/icons/rightBottomBuble.svg"


const StyledRightBottomBubble = styled.img`
    position: absolute;
    bottom: 0;
    right: 0;
`


function RightBottomBubble() {
    return (
        <StyledRightBottomBubble src={rightBottomBuble}/>
    )
}

export default RightBottomBubble
