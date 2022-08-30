import React, { FC } from "react"

import "./button.scss"

interface ButtonProps {
    text: string
    myClass?: string
    clicked?: () => void
}

const Button: FC<ButtonProps> = React.memo(({ text, myClass, clicked }) => {
    return (
        <div>
            <button onClick={clicked} className={`button ${myClass}`}>
                {text}
            </button>
        </div>
    )
})

export default Button
