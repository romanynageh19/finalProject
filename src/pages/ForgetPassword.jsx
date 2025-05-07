import { useEffect } from "react"
import ForgetPasswordForm from "../features/authentication/ForgetPasswordForm"
import BrandBadge from "../UI/BrandBadge"
import GridLayout from "../UI/GridLayout"


function ForgetPassword() {
    useEffect(function(){
        document.title = "forget password";
    }, [])
    return (
        <GridLayout>
            <ForgetPasswordForm/>
            <BrandBadge/>
        </GridLayout>
    )
}

export default ForgetPassword
