import styled from "styled-components"

import LinkBack from "../UI/LinkBack"
import ImageGallery from "../UI/ImageGallery"
import ProductInfo from "../UI/ProductInfo"
import { useEffect } from "react"




const StyledProductDetailsPage = styled.div`
    padding: 100px 140px;

`

function ProductDetails() {
    useEffect(()=>{
            document.title = "product details";
        }, [])
    return (
        <StyledProductDetailsPage>
            <LinkBack content="للبيع فيلا قيد الاستلام في التجمع الخامس"/>
            <ImageGallery/>
            <ProductInfo/>
        </StyledProductDetailsPage>
    )
}

export default ProductDetails
