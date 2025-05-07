import styled from "styled-components"

import WishlistIcon from "./WishlistIcon"
import ShareIcon from "../UI/ShareIcon"
import location from "../assets/icons/location.svg"
// import shareIcon from "../assets/icons/shareIcon.svg"

import bathroomIcon from "../assets/icons/bathroomIcon.svg"
import bedroomIcon from "../assets/icons/bedroomIcon.svg"
import areaIcon from "../assets/icons/areaIcon.svg"
import phoneIcon from "../assets/icons/phoneIcon.svg"


const ProductDetails = styled.div`
    margin-bottom: 30px;
    height: max-content;
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    gap: 20px;
    @media (max-width:720px) {
        grid-template-columns: 1fr;
    }
`
const LeftColumn = styled.div`
    gap: 16px;
`
const ProductPriceAndInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 15px;
    padding: 10px;
    background: rgba(213, 198, 198, 0.15);
    border-radius: 10px;
    margin-bottom: 16px;
    .price{
        font-family: Open Sans;
        font-weight: 600;
        font-size: 40px;
        line-height: 100%;
        letter-spacing: 0%;
    }
    .name{
        font-family: Open Sans;
        font-weight: 600;
        font-size: 24px;
        line-height: 140%;
        letter-spacing: 0%;
        text-align: right;
    }
    .location{
        display: flex;
        align-items: center;
        gap: 8px;
        span{
            font-family: Open Sans;
            font-weight: 400;
            font-size: 15px;
            line-height: 100%;
            letter-spacing: 0%;
            color: rgba(0, 0, 0, 0.7);
        }
    }

`
const StyledProductDetail = styled.div`
    padding: 10px;
    border-radius: 10px;
    background: rgba(213, 198, 198, 0.15);
    h4{
        font-family: Open Sans;
        font-weight: 600;
        font-size: 36px;
        line-height: 140%;
        letter-spacing: 0%;
    }
    .content{
        font-family: Open Sans;
        font-weight: 400;
        line-height: 160%;
        letter-spacing: 0%;
        text-align: right;
        font-size: 16px;
        color: rgba(0, 0, 0, 0.7);
        padding: 10px;
        .services > span {
            display: block;
        }
        .head{
            font-weight: 400;
        }
    }
`
const RightColumn = styled.div`
    background: rgba(213, 198, 198, 0.15);
    border-radius: 10px;
    padding: 10px;
    h4{
        font-family: Open Sans;
        font-weight: 600;
        font-size: 36px;
        line-height: 140%;
        letter-spacing: 0%;
        color: rgba(0, 0, 0, 0.7);
    }
    .PropertyFeatures{
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        gap: 15px;
        color: var(--main, rgba(25, 22, 84, 1));
        margin: 60px 0;
        > div{
            
            display: flex;
            flex-direction: column;
            align-items: center;

            max-width: 70px;
            max-height: 80px;
            gap: 4px;
            .name{
                font-family: Open Sans;
                font-weight: 400;
                font-size: 16px;
                line-height: 140%;
                letter-spacing: 0%;
                text-align: center;
                width: max-content;
            }
            .num{
                font-family: Open Sans;
                font-weight: 600;
                font-size: 24px;
                line-height: 140%;
                letter-spacing: 0%;
                text-align: center;
                width: max-content;
            }
        }
    }
    
`
const StyledIcons = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`
const StyledContent = styled.div`
    display: flex;
    align-items: center;
    font-family: Open Sans;
    font-weight: 600;
    font-size: 16px;
    line-height: 140%;
    letter-spacing: 0%;
    color: rgba(0, 0, 0, 0.7);
    gap: 10px;
    .phoneNumber{
        font-family: Open Sans;
        font-weight: 600;
        font-size: 30px;
        line-height: 140%;
        letter-spacing: 0%;
        color: rgba(0, 0, 0, 1);
    }
    .icon{
        width: 20px;
        height: 20px;
    }
`


const formatCurrency = (value) => new Intl.NumberFormat('en', {minimumFractionDigits: 0,maximumFractionDigits: 0,}).format(value);


    function ProductInfo() {
        return (
            <ProductDetails>
                <LeftColumn>
                    <ProductPriceAndInfo>
                        <p className="price">{formatCurrency(150000000000)} Egp</p>
                        <p className="name" >للبيع في قلب التجمع الخامس علي محور جمال عبد الناصر تاون هاوس من لافيستا</p>
                        <div className="location">
                            <img src={location} alt="location icon"/>
                            <span>New Cairo</span>
                        </div>
                    </ProductPriceAndInfo>
                    <StyledProductDetail>
                        <h4>Details</h4>
                        <div className="content">
                            <p>نوع الوحده/ تاون هاوس  مساحة 235م </p>
                            <p>يقع الكمبوند علي محور جمال عبد الناصر و بجوار الجامعه الامريكي امام هايد بارك التجمع الخامس </p>
                            <p className="services" > 
                                <span className="head" >الخدمات</span>
                                <span> نادي رياضي </span>
                                <span> مطاعم</span>
                                <span>كيدزاريا</span>
                                <span>امن و امان</span>
                                <span> جراج خاص بكل فيلا  </span>
                            </p>
                        </div>
                    </StyledProductDetail>
                </LeftColumn>
                <RightColumn>
                    <StyledIcons>
                        <ShareIcon/>
                        <WishlistIcon inWishlist={true} />
                    </StyledIcons>
                    <h4>Highlights</h4>
                    <div className="PropertyFeatures">
                        <div>
                            <img src={bedroomIcon}  alt="PropertyFeature" />
                            <p className="name">Bedroom</p>
                            <p className="num">4</p>
                        </div>
                        <div>
                            <img src={bathroomIcon}  alt="PropertyFeature" />
                            <p className="name">Bathroom</p>
                            <p className="num">4</p>
                        </div>
                        <div>
                            <img src={areaIcon}  alt="PropertyFeature" />
                            <p className="name">Area</p>
                            <p className="num">235 m²</p>
                        </div>
                    </div>
                    <StyledContent>
                        <img className="icon" src={phoneIcon} alt="phone icon"/>
                        <p>Contact : </p>
                        <p className="phoneNumber">01040863795</p>
                    </StyledContent>
                </RightColumn>
            </ProductDetails>
        )
}

export default ProductInfo

// Area