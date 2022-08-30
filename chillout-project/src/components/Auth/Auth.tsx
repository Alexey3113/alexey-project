import React, { FC, useCallback, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { authUser } from "../../store/thunk/userThunks"
import Button from "../../UI/Button/Button"
import Input from "../../UI/Input/Input"

import "./auth.scss"

const Auth: FC = () => {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const { isAuth } = useAppSelector((state) => state.user)

    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const changeEmailFunc = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setEmail(e.target.value)
        },
        []
    )

    const changePasswordFunc = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setPassword(e.target.value)
        },
        []
    )

    const loginInUser = useCallback(() => {
        dispatch(authUser({ email, password }))
    }, [email, password])

    useEffect(() => {
        if (isAuth) navigate("/home")
    }, [isAuth])

    return (
        <div className="auth">
            <Input
                changing={changeEmailFunc}
                value={email}
                text="Your E-mail"
                myClass="auth__input"
                type="email"
            />
            <Input
                changing={changePasswordFunc}
                value={password}
                text="Password"
                myClass="auth__input"
                type="password"
            />
            <Button text="Log In" clicked={loginInUser} />
        </div>
    )
}

export default Auth
