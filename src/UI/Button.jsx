import styled, { css } from "styled-components";

const variations = {
    primary: css`
        color: rgba(255, 255, 255, 1);
        background: var(--buttonBackground);
    `,
    danger: css`
        color: rgba(255, 255, 255, 1);
        background: rgba(239, 10, 10, 0.5);
        box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
        display: flex;
        justify-content: center;
        align-items: center;
        display: flex;
        gap: 6px;
    `
};

const sizes = {
    large: css`
        width: 450px;
        height: 66px;
        border-radius: 8px;
        padding-top: 13px;
        padding-right: 72px;
        padding-bottom: 13px;
        padding-left: 72px;
        gap: 8px;
        font-family: Open Sans;
        font-weight: 700;
        font-size: 25px;
        line-height: 100%;
        letter-spacing: 0%;
        text-align: center;
    `,
    medium: css`
        width: 157px;
        height: 60px;
        border-radius: 22px;
        padding-top: 16px;
        padding-right: 24px;
        padding-bottom: 16px;
        padding-left: 24px;
        margin-left: auto;
    `
};

const Button = styled(({ inForm, ...rest }) => <button {...rest} />)`
    border: none;
    ${(props)=>  sizes[props.size]}
    ${(props)=> variations[props.variation]}
    margin: ${(props) => (props.inForm === true && '24px 0 30px')};
`


Button.defaultProps = {
    size : "large",
    inForm:false,
    variations : "primary",
}


export default Button;