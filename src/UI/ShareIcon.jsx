import styled from "styled-components"

import shareIcon from "../assets/icons/shareIcon.svg"

const StyledShareIcon = styled.button`
    width: 40px;
    height: 40px;
    border-radius: 15px;
    background: rgba(255, 255, 255, 0.5);
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        height: 25px;
    }
`

function WishlistIcon() {
    return (
        <StyledShareIcon>
            <img src={shareIcon} alt="shareIcon" />
        </StyledShareIcon>
    )
}
export default WishlistIcon;