import { useEffect } from "react"
import SigninForm from "../features/authentication/SigninForm"
import BrandBadge from "../UI/BrandBadge"
import GridLayout from "../UI/GridLayout"

function Login() {
    useEffect(()=>{
        document.title = "login";
    }, [])
    return (
        <GridLayout>
            <SigninForm/>
            <BrandBadge/>
        </GridLayout>
    )
}

export default Login
