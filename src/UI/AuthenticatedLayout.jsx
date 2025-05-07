import styled from "styled-components"
import Header from "./Header"
import { Outlet } from "react-router-dom"

const StyledAppLayout = styled.main`
    width: 100%;
    height: 100%;
`

function AuthenticatedLayout() {
    return (
        <StyledAppLayout>
            <Header/>
            <Outlet/>
        </StyledAppLayout>
    )
}

export default AuthenticatedLayout
