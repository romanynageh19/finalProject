import styled from "styled-components"
import FormContent from "../../UI/FormContent"
import Heading from "../../UI/Heading"
import lock from "../../assets/icons/lock.svg"
import Form from "../../UI/Form"
import Button from "../../UI/Button"

const Icon = styled.div`
    width: 159px;
    height: 160px;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--main, rgba(0, 57, 115, 1));
`
const StyledContent = styled.p`
    width: 462px;
    height: 66px;
    font-family: Open Sans;
    font-weight: 400;
    font-size: 24px;
    line-height: 100%;
    letter-spacing: 0%;
    color: rgba(133, 135, 141, 1);
    margin: 60px 0 40px;
`

function ForgetPasswordForm() {
    return (
        <FormContent>
            <Heading>Forgot password</Heading>
            <Icon>
                <img src={lock} alt="Lock" />
            </Icon>
            <StyledContent>Enter your registered email to recover your password we'll send a veriftion code</StyledContent>
            <Form>
                <Form.Email/>
                <Button inForm={true} type="submit" variation="primary" size="large" >Sign in</Button>
            </Form>
        </FormContent>
    )
}

export default ForgetPasswordForm
