import styled from "styled-components"
import Heading from "../UI/Heading"

import Logo from "../assets/icons/blueLogo.svg"
import { useEffect } from "react"


const StyledAbout = styled.div`
    margin: 50px 70px;
`
const StyledContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`
const StyledP = styled.p`
    font-family: Open Sans;
    font-weight: 400;
    font-size: 28px;
    line-height: 160%;
    letter-spacing: 0%;
    text-align: right;

`

function About() {
    useEffect(function(){
        document.title = "About us";
    }, [])
    return (
        <StyledAbout>
            <Heading>About us</Heading>
            <StyledContent>
                <img src={Logo} alt="company logo"/>
                <StyledP>عقارك هى منصة الإعلانات للعقارات في مصر، هدفها الأساسي هو الربط بين المشترين والمستثمرين وأصحاب العقارات والبائعين والمستأجرين والوسطاء لتسهيل عملية البحث عن العقارات.
                لأن عملية البحث عن العقارات عملية مرهقة وتحتاج إلى كثير من الوقت والمجهود، نقدم لكم تجربة عقارية سهلة و مميزة تجعلك تبحث عن العقار المناسب لك سواء للإيجار، البيع أو الشراء كل ذلك من خلال منصة واحدة فقط</StyledP>
            </StyledContent>
        </StyledAbout>
    )
}

export default About
