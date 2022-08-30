import React, { FC, useCallback, useState } from "react"
import "./backgroundChanger.scss"

interface IRgb {
    r: string
    g: string
    b: string
}

export const BackgroundChanger: FC = () => {
    const [rgb, setRgb] = useState<IRgb>({ r: "248", g: "245", b: "240" })
    const [background, setBackground] = useState<string>("rgb(248, 245, 240)")

    const generateBackgroundRbg = () => {
        const newObj: IRgb = { r: "248", g: "245", b: "240" }
        newObj.r = Math.floor(Math.random() * 255).toString()
        newObj.g = Math.floor(Math.random() * 255).toString()
        newObj.b = Math.floor(Math.random() * 255).toString()
        setRgb(newObj)
    }

    const applyBackground = () => {
        setBackground(`rgba(${rgb.r},${rgb.g},${rgb.b})`)
    }

    const changeRgbR = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value: string = e.target.value.replace(/[^0-9]/, "")
        if (+value > 255) {
            value = "255"
        } else if (+value < 0 || value === "") {
            value = "0"
        }
        setRgb({ ...rgb, r: value })
    }

    const changeRgbG = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = +e.target.value.replace(/[^0-9]/, "")
        if (value > 255) {
            value = 255
        } else if (value < 0) {
            value = 0
        }
        setRgb({ ...rgb, g: String(value) })
    }

    const changeRgbB = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = +e.target.value.replace(/[^0-9]/, "")
        if (value > 255) {
            value = 255
        } else if (value < 0) {
            value = 0
        }
        console.log("b - ", value, "rgb", { ...rgb, b: value })
        setRgb({ ...rgb, b: String(value) })
    }

    return (
        <div className="backgroundChanger" style={{ background: background }}>
            <div className="backgroundChanger__title">Генерация Фона</div>
            <div className="backgroundChanger__block">
                <div className="backgroundChanger__block_title">Фон</div>
                <div className="backgroundChanger__block_fields">
                    <div>R</div>
                    <input type="string" value={rgb.r} onChange={changeRgbR} />
                    <div>G </div>
                    <input type="string" value={rgb.g} onChange={changeRgbG} />
                    <div>B</div>
                    <input type="string" value={rgb.b} onChange={changeRgbB} />
                </div>
                <div className={`backgroundChanger__block_preview`}>
                    Preview:
                    <div
                        style={{
                            background: `rgba(${rgb.r},${rgb.g},${rgb.b})`,
                        }}
                    ></div>
                </div>
                <div
                    className={`backgroundChanger__block_generate`}
                    onClick={generateBackgroundRbg}
                >
                    Сгенерировать
                </div>
                <div
                    className={`backgroundChanger__block_generate greenAccept`}
                    onClick={applyBackground}
                >
                    Применить
                </div>
            </div>
        </div>
    )
}
