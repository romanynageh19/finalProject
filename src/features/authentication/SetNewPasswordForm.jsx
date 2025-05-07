import styled from "styled-components"
import FormContent from "../../UI/FormContent"
import Heading from "../../UI/Heading"
import key from "../../assets/icons/key.svg"
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

function SetNewPasswordForm() {
    return (
        <FormContent>
            <Heading>Set new password</Heading>
            <Icon>
                <img src={key} alt="key"/>
            </Icon>
            <Form>
                <Form.Password/>
                <Form.ConfirmPassword/>
                <Button inForm={true} type="submit" variation="primary" size="large" >Confirm</Button>
            
            </Form>
        </FormContent>
    )
}

export default SetNewPasswordForm
