import React, { FC, useCallback, useState } from "react"
import { toast } from "react-toastify"

import "./generationPassword.scss"

export const GenerationPassword: FC = () => {
    const [apiKey, setApiKey] = useState<string>("")
    const [apiKeyLength, setApiKeyLength] = useState<number>(0)

    const randomFunc = {
        lower: getRandomLower,
        upper: getRandomUpper,
        number: getRandomNumber,
        symbol: getRandomSymbol,
    }

    function getRandomLower() {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
    }

    function getRandomUpper() {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
    }

    function getRandomNumber() {
        return +String.fromCharCode(Math.floor(Math.random() * 10) + 48)
    }

    function getRandomSymbol() {
        const symbols = "!@#$%^&*(){}[]=<>/,."
        return symbols[Math.floor(Math.random() * symbols.length)]
    }

    const changeKeyLengthCallback = (e: any) => {
        setApiKeyLength(e.target.value)
    }

    const generateApiKey = (e: any) => {
        if (apiKeyLength === 0) return
        let generatedKey: string = ""
        const valuesGeneratingFunc: Function[] = Object.values(randomFunc)
        for (let i = 0; i < apiKeyLength; i += 1) {
            generatedKey +=
                valuesGeneratingFunc[
                    Math.floor(Math.random() * valuesGeneratingFunc.length)
                ]()
        }
        setApiKey(generatedKey)
    }

    const copyText = useCallback(
        (e: any) => {
            navigator.clipboard.writeText(apiKey)
            toast("API ключ успешно скопирован", { type: "success" })
        },
        [apiKey]
    )

    return (
        <div className="generationPass">
            <div className="generationPass__title">Генерация API ключа</div>
            <div className="generationPass__block">
                <div className="generationPass__block_title">Ваш API ключ</div>
                <div className="generationPass__block_field">
                    {" "}
                    API ключ: <input type="text" readOnly value={apiKey} />{" "}
                </div>
                <div className="generationPass__block_length">
                    Количество символов:{" "}
                    <input
                        type={"number"}
                        value={apiKeyLength}
                        onChange={changeKeyLengthCallback}
                    />{" "}
                </div>
                <div
                    className={`generationPass__block_generate ${
                        apiKey ? "active" : ""
                    }`}
                    onClick={generateApiKey}
                >
                    Сгенерировать
                </div>
                {apiKey && (
                    <div
                        className="generationPass__block_generate active"
                        onClick={copyText}
                    >
                        Копировать
                    </div>
                )}
            </div>
        </div>
    )
}
