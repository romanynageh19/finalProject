import { createContext, useContext, useState } from "react";
import {useForm} from "react-hook-form"
import { useNavigate } from "react-router-dom";


import styled from "styled-components";
import Input from "../UI/Input"
import FormRow from "../UI/FormRow"
import ForgetPassword from "../UI/ForgetPassword"


import showPasswordLogo from "../assets/icons/showPassword.svg"

const FormContext = createContext();

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    font-size: 1.4rem;
    
`;
const StyledPasswordField = styled.div`
    position: relative;
`
const StyledShowPassword = styled.img`
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
`
const StyledPasswordContainer = styled.div`
    width: 100%;
    height: 100%;
`

export default function FormElement({children, URL}){
    const navigate = useNavigate();
    const {register, formState, handleSubmit, getValues} = useForm()
    const {errors} = formState;

    function onSubmit(props){
        // const obj={
        //     firstName,
        //     lastName,
        //     email,
        //     password,
        //     phoneNumber
        // }
        // console.log(obj);
        console.log(props)
        navigate(URL)
    }
    return(
        <FormContext.Provider value={{errors, register, getValues}}>
            <StyledForm onSubmit={handleSubmit(onSubmit)} >
                {children}
            </StyledForm>
        
        </FormContext.Provider>
    )
}

function FirstName (){
    const { errors, register } = useContext(FormContext);
    return(
    <FormRow  error = {errors?.firstName?.message} label="First name"  >
        <Input type="text" id='firstName' 
        {...register("firstName", {required:"This filed is required"})}
        />
    </FormRow>
    )
}

function LastName (){
    const { errors, register } = useContext(FormContext);
    return(
        <FormRow label="Last name" error={errors?.lastName?.message} >
            <Input type="text" id='lastName' 
            {...register("lastName", {required:"This filed is required"})}/>
        </FormRow>
    )
}
function Email(){
    const { errors, register } = useContext(FormContext);
    return(
        <FormRow label="Email" error={errors?.email?.message} >
            <Input type="email" id="email"  
            {...register("email", {required:"This filed is required",
            pattern:{
                value: /\S+@\S+\.\S+/,
                message : "Provide valid email address"
            }
            })} />
        </FormRow>
    )
}

function Password({forgetPassword}){
    const { errors, register } = useContext(FormContext);
    const [showPassword, setShowPassword] = useState(false);
    function handleSetShowPassword(){
        setShowPassword((e)=>!e);
    }
    return(
        <FormRow label="Password" error={errors?.password?.message} >
            <StyledPasswordContainer>
                <StyledPasswordField>
                    <Input 
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    {...register("password", {required:"This filed is required",
                        minLength:{
                            value:8,
                            message:"Passwords needs a minimum 8 characters",
                        }
                    })}
                    />
                    <StyledShowPassword onClick={handleSetShowPassword}  src={showPasswordLogo} />
                </StyledPasswordField>
                {forgetPassword && <ForgetPassword to="/forget-password" >Forget Password ?</ForgetPassword> }
            </StyledPasswordContainer>
        </FormRow>
    )
}

function ConfirmPassword(){
    const { errors, register, getValues } = useContext(FormContext);
    const [showPassword, setShowPassword] = useState(false);
    function handleSetShowPassword(){
        setShowPassword((e)=>!e);
    }
    return(
        <FormRow label="Confirm new password" error={errors?.confirmPassword?.message} >
            <StyledPasswordContainer>
                <StyledPasswordField>
                    <Input 
                    id="confirmPassword"
                    type={showPassword ? 'text' : 'password'}
                    {...register("confirmPassword", {required:"This filed is required",
                        minLength:{
                            value:8,
                            message:"Passwords needs a minimum 8 characters",
                        },
                        validate: (value) => value === getValues().password || "password need to match",
                    })}
                    />
                    <StyledShowPassword onClick={handleSetShowPassword}  src={showPasswordLogo} />
                </StyledPasswordField>
            </StyledPasswordContainer>
        </FormRow>
    )
}
function PhoneNumber(){
    const { errors, register } = useContext(FormContext);
    return(
    <FormRow label="Phone Number" error={errors?.phoneNumber?.message}  >
        <Input type="tel" 
        id='phoneNumber'
        {...register("phoneNumber", {
            required:"this field is required", 
            pattern:{
                value:/^01[0125][0-9]{8}$/ ,
                message : "Provide valid phone number"
            },
            
        })} />
    </FormRow>
    )
}


FormElement.FirstName = FirstName;
FormElement.LastName = LastName;
FormElement.Email = Email;
FormElement.Password = Password;
FormElement.ConfirmPassword = ConfirmPassword;
FormElement.PhoneNumber = PhoneNumber;














// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import {useForm} from "react-hook-form"

// import FormRow from "../UI/FormRow"
// import Input from "../UI/Input"
// import styled from "styled-components";
// import Button from "./Button";






// const StyledP = styled.p`
//     font-family: Open Sans;
//     font-weight: 400;
//     font-size: 24px;
//     line-height: 100%;
//     letter-spacing: 0%;
//     color: rgba(133, 135, 141, 1);
//     margin: 10px 0 30px ;
    
// `
// const StyledLink = styled(Link)`
//     font-family: Open Sans;
//     font-weight: 700;
//     font-size: 24px;
//     line-height: 100%;
//     letter-spacing: 0%;
//     text-decoration: underline;
//     text-decoration-style: solid;
//     text-decoration-offset: 10%;
//     text-decoration-thickness: 5%;
//     text-decoration-skip-ink: auto;
//     color: var(--main);
// `



// export default function Form (){
//     function onSubmit({firstName, lastName, email, password, phoneNumber}){
//         const obj={
//             firstName,
//             lastName,
//             email,
//             password,
//             phoneNumber
//         }
//         console.log(obj);
//         navigate("/signup/verify")
//     }
//     function handleSetShowPassword(){
//         setShowPassword((e)=> !e);
//     }


//     return(
//         <StyledForm onSubmit={handleSubmit(onSubmit)} >
//             <FormRow  error={errors?.firstName?.message} label="First name"  >
//                 <Input type="text" id='firstName' 
//                 {...register("firstName", {required:"This filed is required"})}
//             />
//             </FormRow>

//             <FormRow label="Last name" error={errors?.lastName?.message} >
//                 <Input type="text" id='lastName' 
//                 {...register("lastName", {required:"This filed is required"})}/>
//             </FormRow>
            
//             <FormRow label="Email" error={errors?.email?.message} >
//                 <Input type="email" id="email"  
//                 {...register("email", {required:"This filed is required",
//                 pattern:{
//                     value: /\S+@\S+\.\S+/,
//                     message : "Provide valid email address"
//                 }
//                 })} />
//             </FormRow>

//             <FormRow label="Password" error={errors?.password?.message} >
//                 <StyledPasswordField>
//                     <Input 
//                     type={showPassword ? 'text' : 'password'}
//                     id="password" 
//                     {...register("password", {required:"This filed is required",
//                         minLength:{
//                             value:8,
//                             message:"Passwords needs a minimum 8 characters",
//                         }
//                     })}
//                     />
//                     <StyledShowPassword onClick={handleSetShowPassword}  src={showPasswordLogo} />
//                 </StyledPasswordField>
//             </FormRow>
            
//             <FormRow label="Phone Number" error={errors?.phoneNumber?.message}  >
//                 <Input type="tel" 
//                 id='phoneNumber'
//                 {...register("phoneNumber", {
//                     required:"this field is required", 
//                     pattern:{
//                         value:/^01[0125][0-9]{8}$/ ,
//                         message : "Provide valid phone number"
//                     },
                    
//                 })} />
//             </FormRow>
//             <Button inForm={true} type="submit" variation="primary" size="large" >Create Account</Button>
//             <StyledP>Already have an account ? <StyledLink to="/login" >Sign in</StyledLink> </StyledP>
//         </StyledForm>
//     )
// }

// Form.defaultProps= {
//     type:"regular",
// }