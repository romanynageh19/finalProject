import styled from "styled-components";

    const StyledFormRow = styled.div`
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;    
        gap: 16px;
        padding: 1.2rem 0;
        width: 100%;
    `;
    const Label = styled.label`
        font-family: Open Sans;
        font-weight: 600;
        font-size: 24px;
        line-height: 100%;
        letter-spacing: 0%;
        color: rgba(0, 0, 0, 0.8);
        /* background: rgba(0, 0, 0, 0.8); */

    `;
    const Error = styled.span`
        font-size: 1.4rem;
        color: var(--ErrorMessage);
    `;


function FormRow({label = "", error, children}) {
    return (
        <StyledFormRow>
            <Label htmlFor={children.props?.id}>{label}</Label>
            {children}
            { error  && <Error>{error}</Error>}
        </StyledFormRow>
    )
}

export default FormRow


