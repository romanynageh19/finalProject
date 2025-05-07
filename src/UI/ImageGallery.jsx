import styled from "styled-components"



import mianImage from "../assets/images/mianImage.jpg"
import thumbnailImage1 from "../assets/images/thumbnailImage1.jpg"
import thumbnailImage2 from "../assets/images/thumbnailImage2.jpg"



const StyledImageGallery = styled.div`
    margin-bottom: 30px;
    height: max-content;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    @media (max-width:720px) {
        grid-template-columns: 1fr;
    }
`
const StyledMainImage = styled.div`
    width: 100%;
    height: 400px;
    overflow: hidden;
    border-radius: 12px;
    margin-bottom: 20px;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

`
const StyledThumbnailImage = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    img{
        width: 100%;
        height: 200px;
        object-fit: cover;
        border-radius: 8px;
    }
    height: 400px;
    @media (max-width:720px) {
        display: none;
    }
`

function ImageGallery() {
    return (
        <StyledImageGallery>
            <StyledMainImage>
                <img src={mianImage} alt="main image"/>
            </StyledMainImage>
            <StyledThumbnailImage>
                <img src={thumbnailImage2} alt="thumbnail Image2"/>
                <img src={thumbnailImage1} alt="thumbnail Image1"/>
            </StyledThumbnailImage>
        </StyledImageGallery>
    )
}

export default ImageGallery
