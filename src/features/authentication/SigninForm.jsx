import styled from "styled-components"
import Form from "../../UI/Form"
import StyledLink from "../../UI/StyledLink"
import Button from "../../UI/Button"
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

function SigninForm() {
    return (
        <FormContent>
            <StyledHeading>Sign In</StyledHeading>
            <Form>
                <Form.Email/>
                <Form.Password forgetPassword={true}/>
                <Button inForm={true} type="submit" variation="primary" size="large" >Create Account</Button>
                <StyledP>Already have an account ? <StyledLink to="/signup" >Sign up</StyledLink> </StyledP>`
            </Form>
        </FormContent>
    )
}

export default SigninForm






