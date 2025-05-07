import { useEffect } from "react";
import SignupForm from "../features/authentication/SignupForm"
import BrandBadge from "../UI/BrandBadge"
import GridLayout from "../UI/GridLayout"

function Signup() {
    useEffect(()=>{
            document.title = "sign up";
        }, [])
    return (
        <GridLayout>
            <SignupForm/>
            <BrandBadge/>
        </GridLayout>
    )
}

export default Signup
