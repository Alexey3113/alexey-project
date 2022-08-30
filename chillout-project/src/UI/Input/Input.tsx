import React, { FC } from "react"

import "./input.scss"

interface InputProps {
    myClass: string
    type: string
    text: string
    value: string
    changing: (e: any) => void
}

const Input: FC<InputProps> = React.memo(
    ({ myClass, type, text, value, changing }) => {
        return (
            <div>
                <input
                    value={value}
                    onChange={changing}
                    type={type}
                    placeholder={text}
                    className={`input ${myClass}`}
                />
            </div>
        )
    }
)

export default Input
