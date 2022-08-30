import React, { FC, useState, useCallback, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { useAppDispatch } from "../../store/hooks"
import { registerUser } from "../../store/thunk/userThunks"
import Button from "../../UI/Button/Button"
import Input from "../../UI/Input/Input"

import "./reg.scss"

const Registration: FC = () => {
    const [email, setEmail] = useState<string>("")
    const [name, setName] = useState<string>("")
    const [age, setAge] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [repeatPassword, setRepeatPassword] = useState<string>("")
    const navigate = useNavigate()

    const dispatch = useAppDispatch()

    const changeEmailFunc = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setEmail(e.target.value)
        },
        []
    )

    const changeNameFunc = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setName(e.target.value)
        },
        []
    )

    const changeAgeFunc = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setAge(e.target.value)
        },
        []
    )

    const changePasswordFunc = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setPassword(e.target.value)
        },
        []
    )

    const changeRepeatPasswordFunc = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setRepeatPassword(e.target.value)
        },
        []
    )

    const registrationUser = async () => {
        await dispatch(
            registerUser({ age, email, nickName: name, password })
        ).then((mes: any) => {
            setEmail("")
            setPassword("")
            setRepeatPassword("")
            setAge("")
            setName("")
            if (!mes?.error?.message) {
                toast("Успешная регистрация", { type: "success" })
            }
        })
    }

    return (
        <div className="reg">
            <Input
                changing={changeNameFunc}
                value={name}
                text="Nickname"
                myClass="reg__input"
                type="text"
            />
            <Input
                changing={changeEmailFunc}
                value={email}
                text="E-mail"
                myClass="reg__input"
                type="email"
            />
            <Input
                changing={changeAgeFunc}
                value={age}
                text="Age"
                myClass="reg__input"
                type="text"
            />
            <Input
                changing={changePasswordFunc}
                value={password}
                text="Password"
                myClass="reg__input"
                type="password"
            />
            <Input
                changing={changeRepeatPasswordFunc}
                value={repeatPassword}
                text="Repeat Password"
                myClass="reg__input"
                type="password"
            />
            <Button clicked={registrationUser} text="Sign in" />
        </div>
    )
}

export default Registration
