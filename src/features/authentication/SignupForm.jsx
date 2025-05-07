import styled from "styled-components"
import Form from "../../UI/Form"
import Button from "../../UI/Button"
import { Link } from "react-router-dom"
import StyledHeading from "../../UI/Heading"
import FormContent from "../../UI/FormContent"

const StyledP = styled.p`
    font-family: Open Sans;
    font-weight: 400;
    font-size: 24px;
    line-height: 100%;
    letter-spacing: 0%;
    color: rgba(133, 135, 141, 1);
    margin: 10px 0 30px ;
    
`
const StyledLink = styled(Link)`
    font-family: Open Sans;
    font-weight: 700;
    font-size: 24px;
    line-height: 100%;
    letter-spacing: 0%;
    text-decoration: underline;
    text-decoration-style: solid;
    text-decoration-offset: 10%;
    text-decoration-thickness: 5%;
    text-decoration-skip-ink: auto;
    color: var(--main);
`
function SignupForm() {
    return (
        <FormContent>
            <StyledHeading>Create new account</StyledHeading>
            <Form URL="/signup/verify" >
                <Form.FirstName/>
                <Form.LastName/>
                <Form.Email/>
                <Form.Password/>
                <Form.PhoneNumber/>
                <Button inForm={true} type="submit" variation="primary" size="large" >Create Account</Button>
                <StyledP>Already have an account ? <StyledLink to="/login" >Sign in</StyledLink> </StyledP>`
            </Form>

        </FormContent>
    )
}

export default SignupForm
