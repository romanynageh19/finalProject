import styled from "styled-components"
import PrimaryImage from "../assets/icons/PrimaryLogo.svg"


const StyledPrimaryLogo = styled.img`
    width: 570;
    height: 519;
    /* top: 253px;
    left: 70px; */
`


function PrimaryLogo() {
    return (
        <StyledPrimaryLogo src={PrimaryImage} alt="Company logo" />
    )
}

export default PrimaryLogo
