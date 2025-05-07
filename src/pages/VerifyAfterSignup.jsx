import { useEffect } from "react"
import styled from "styled-components"
import OTPInput from "../UI/OTPInput"



const StyledVerify = styled.div`
    margin: 100px 40px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`
const H1 = styled.h1`
    font-family: Rubik;
    font-weight: 700;
    font-size: 40px;
    line-height: 100%;
    letter-spacing: 0%;
    text-align: center;
    color: rgba(0, 0, 0, 1);
    margin-bottom: 85px;
    @media (max-width: 1024px) {
        font-size: 28px;
        margin-bottom: 55px;
    }

`
const StyledContent = styled.div`
    margin-bottom:40px;
    @media (max-width: 1024px) {
        text-align: center;
    }

`
const StyledUsername = styled.p`
    width: 253px;
    height: 32px;
    font-family: Open Sans;
    font-weight: 700;
    font-size: 32px;
    line-height: 100%;
    letter-spacing: 0%;
    color: rgba(0, 0, 0, 1);
    float: left;
    @media (max-width: 1024px) {
        font-size: 24px;
    }
`
const StyledUserMessage = styled.p`
    width: 878px;
    height: 135px;
    word-break: auto-phrase;
    font-family: Open Sans;
    font-weight: 600;
    font-size: 32px;
    line-height: 140%;
    letter-spacing: 0%;
    text-align: center;
    color: var(--main);
    margin-top: 50px;
`
function VerifyAfterSignup() {
    useEffect(()=>{
            document.title = "verify signup";
    }, [])
    return (
        <StyledVerify>
            <H1>Confirm Your Registration with code</H1>
            <StyledContent>
                <StyledUsername>Hello Mohamed </StyledUsername>
                <br/>
                <StyledUserMessage>Thank you for registering with Us
                To complete your registration and secure your account, please enter the (code) below:</StyledUserMessage>
            </StyledContent>
            <OTPInput />
        </StyledVerify>
    )
}

export default VerifyAfterSignup
