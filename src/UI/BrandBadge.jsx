import styled from "styled-components"
import PrimaryLogo from "./PrimaryLogo"
import RightBottomBubble from "./RightBottomBubble"

const AppStyledDiv = styled.div`
    background: linear-gradient(180deg, #191654 0%, #003973 100%);
    height: 100%;
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 1024px) {
        display: none;
    }
`


function BrandBadge() {
    return (
        <AppStyledDiv>
                <PrimaryLogo/>
                <RightBottomBubble/>
        </AppStyledDiv>
    )
}

export default BrandBadge
