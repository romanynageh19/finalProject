import styled from "styled-components"

import wishlistIcon from "../assets/icons/wishlistIcon.svg"
import noWishlist from "../assets/icons/noWishlist.svg"

const StyledWishlistIcon = styled.button`
    width: 40px;
    height: 40px;
    border-radius: 15px;
    background: rgba(255, 255, 255, 0.5);
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    > img {
        width: 28px;
        height: 26px;
        border-width: 1px;
    }
`

function WishlistIcon({inWishlist}) {
    return (
        <StyledWishlistIcon>
            {
                inWishlist ?
                <img src={wishlistIcon} alt="wishlist icon" />
                :
                <img src={noWishlist} alt="wishlist icon" />
            }
        </StyledWishlistIcon>
    )
}
export default WishlistIcon;