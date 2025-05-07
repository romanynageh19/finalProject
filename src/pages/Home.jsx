import { useEffect } from "react"
import ProductList from "../UI/ProductList"
import Slider from "../UI/Slider"

function Home() {
    useEffect(()=>{
        document.title = "Home";
    }, [])
    return (
        <>
            <Slider/>
            <ProductList/>
        </>
    )
}

export default Home
