import { Link } from "react-router-dom";
import styled from "styled-components";

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
export default StyledLink;
