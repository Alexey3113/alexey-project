import React, { FC, useCallback, useState, useEffect } from "react"

import Auth from "../../components/Auth/Auth"
import Registration from "../../components/Registration/Registration"
import logo from "../../assets/icons/logo.svg"

import "./signinup.scss"
import RegistrationIcon from "../../assets/components/RegistrationIcon"
import LockIcon from "../../assets/components/LockIcon"

const SignInUpPage: FC = () => {
    const [regOrLogin, setRegOrLogin] = useState<string>("auth")

    const toRegistration = () => {
        setRegOrLogin("reg")
    }

    const toAuthorization = () => {
        setRegOrLogin("auth")
    }

    return (
        <div className="regAuth">
            <div className="regAuth__container">
                <div className="regAuth__header">
                    <img src={logo} alt="logo" />
                </div>
                {regOrLogin === "reg" ? <Registration /> : <Auth />}
                <div className="regAuth__footer">
                    <div
                        onClick={
                            regOrLogin === "reg"
                                ? toAuthorization
                                : toRegistration
                        }
                        className="regAuth__text"
                    >
                        <RegistrationIcon />
                        {regOrLogin === "reg" ? (
                            <span>Authorization</span>
                        ) : (
                            <span>Registration</span>
                        )}
                    </div>
                    <div className="regAuth__forgot">
                        <LockIcon />
                        <span>Password?</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignInUpPage
