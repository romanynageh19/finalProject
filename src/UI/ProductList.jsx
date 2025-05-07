import styled from "styled-components"
import ProductItem from "./ProductItem";
import { Link } from "react-router-dom";

const StyledProductList = styled.div`
    padding: 0 100px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 60px;
    @media (max-width: 768px){
        padding: 0 20px;
    }
    @media (max-width: 1024) {
        padding: 0 7px;
    }
`
const obj = {
    id:1,
    inWishlist:false,
    price:1600000,
    productDetails:"3 bedrooms - 2 bathroom",
    productName:"Product Name",
}
const obj2 = {
    id:2,
    inWishlist:true,
    price:9500000,
    productDetails:"3 bedrooms - 2 bathroom",
    productName:"Product Name",
}
const arr=[obj2, obj, obj2, obj, obj, obj2, obj, obj2, obj, obj2, obj, obj2];

function ProductList() {
    return (
        <StyledProductList>
            {arr.map((ele, idx)=>  <Link key={idx} to={`/products/:${ele.id}`} > <ProductItem product={ele} /> </Link>)}
        </StyledProductList>
    )
}

export default ProductList
