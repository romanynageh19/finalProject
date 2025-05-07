import styled from "styled-components"
import { useNavigate } from "react-router-dom"

import GridLayout from "../UI/GridLayout"
import BrandBadge from "../UI/BrandBadge"
import Button from "../UI/Button"
import TopLeftBubble from "../UI/TopLeftBubble"


const StyledApp = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr; /* Two equal columns */
`


const StyledStart = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 40px;
`

const StyledContent = styled.p`
    color: var(--main, rgba(25, 22, 84, 1));
    width: 588px;
    height: 204px;
    font-weight: 600;
    font-size: 26px;
    line-height: 140%;
    letter-spacing: 0%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`


function Start() {
    const navigate = useNavigate();
    return (
        <GridLayout>
            <StyledStart>
                <TopLeftBubble/>
                <StyledContent> 
                    <span>
                    Your ultimate destination for finding your perfect property..
                    </span>
                    <span>
                    Buy, sell, and invest in real estate with ease and at the best prices!
                    </span>
                </StyledContent>
                <Button onClick={()=>navigate("/signup")} variation="primary" size="large" >Get started</Button>
            </StyledStart>
            <BrandBadge/>
        </GridLayout> 
    )
}

export default Start
