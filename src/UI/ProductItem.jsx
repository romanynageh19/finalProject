import styled from "styled-components"


import productItemImage from "../assets/images/productItemImage.jpg"
import WishlistIcon from "./WishlistIcon";


const formatCurrency = (value) =>
    new Intl.NumberFormat('en', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(
        value
    );


const StyledProductItem = styled.div`
    border-radius: 36px;
    background: rgba(255, 255, 255, 1);
    margin: 20px;
    cursor: pointer;
`
const StyledCardMedia = styled.div`
    position: relative;
    height: 30vh;

    .productItemImage {
        width: 100%;
        height: 100%;
        border-radius: 20px;
    }
`
const StyledWishlistIcon = styled.div`
    position: absolute;
    right: 15px;
    top: 15px;
    width: 40px;
    height: 40px;
`
const StyledCardDescription = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
`
const StyledProductName = styled.p`
    font-family: Open Sans;
    font-weight: 600;
    font-size: 20px;
    line-height: 100%;
    letter-spacing: 0%;
`
const StyledProductPrice = styled.p`
    font-family: Open Sans;
    font-weight: 700;
    font-size: 20px;
    line-height: 100%;
    letter-spacing: 0%;
`
const StyledProductDetails = styled.p`
    font-family: Open Sans;
    font-weight: 400;
    font-size: 13px;
    line-height: 100%;
    letter-spacing: 0%;
    color: rgba(0, 0, 0, 0.69);

`


function ProductItem({product}) {
    const {inWishlist, price, productDetails, productName} = product;
    return (
        <StyledProductItem>
            <StyledCardMedia>
                <img className="productItemImage" src={productItemImage} alt="productItemImage" />
                <StyledWishlistIcon>
                    <WishlistIcon inWishlist={inWishlist}/>
                </StyledWishlistIcon>
            </StyledCardMedia>
            <StyledCardDescription>
                <StyledProductName>{productName}</StyledProductName>
                <StyledProductDetails>{productDetails}</StyledProductDetails>
                <StyledProductPrice>{formatCurrency(price)} EGP</StyledProductPrice>

            </StyledCardDescription>
        </StyledProductItem>
    )
}

export default ProductItem
