import { NavLink } from "react-router-dom"
import styled from "styled-components"
import SearchWithIcon from "./Search";

import Button from "./Button";

import Logo from "../assets/icons/Logo1.svg"
import logout from "../assets/icons/log-out-icon.svg"


const StyledHeader = styled.header`
    height: 99px;
    background-color: rgba(25, 22, 84, 1);
    box-shadow: 0px 0px 20px 10px rgba(42, 42, 42, 0.5);
    padding: 0 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const StyledLinks = styled(NavLink)`
    font-family: Open Sans;
    font-size: 20px;
    line-height: 100%;
    letter-spacing: 0%;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.7);
    margin: 0 40px 0 0;
    &.active {
        font-weight: 700;
        text-decoration: underline;
        text-decoration-style: solid;
        text-decoration-offset: 20%;
        text-decoration-thickness: 10%;
        text-decoration-skip-ink: auto;
        color: rgba(255, 255, 255, 1);
    }
    @media (max-width:760px) {
        margin: 0 20px 0 0;
    }
`
const StyledLogo = styled.img`
    margin: 0 40px 0 0;
    @media (max-width:760px) {
        display: none;
    }
`




function Header() {
    return (
        <StyledHeader>
            <StyledLogo src={Logo} alt="company Logo" />
            <StyledLinks to="/home"  >Home</StyledLinks>
            <StyledLinks to="/about" >About us</StyledLinks>
            <SearchWithIcon/>
            <Button inForm={false} onClick={()=>console.log("hello")} size="medium" variation="danger" > Log out  <img src={logout} /> </Button>
        </StyledHeader>
    )
}

export default Header
