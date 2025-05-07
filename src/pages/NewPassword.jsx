import { useEffect } from "react";
import SetNewPasswordForm from "../features/authentication/setNewPasswordForm"
import BrandBadge from "../UI/BrandBadge"
import GridLayout from "../UI/GridLayout"

function NewPassword() {
    useEffect(()=>{
            document.title = "new password";
        }, [])
    return (
        <GridLayout>
            <SetNewPasswordForm/>
            <BrandBadge/>
        </GridLayout>
    )
}

export default NewPassword
