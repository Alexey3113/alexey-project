import React, { FC, useCallback, useEffect, useRef, useState } from "react"

import "./diagram.scss"

interface IElDiagram {
    id: string
    value: string
}

export const Diagram: FC = () => {
    const [elements, setElements] = useState<string>("2")
    const [diagramData, setDiagramData] = useState<[] | IElDiagram[]>([
        {
            id: "1",
            value: "50",
        },
        {
            id: "2",
            value: "50",
        },
    ])
    const refDiagram = useRef<any>(null)

    const takePercentFromDataToCreateDiagram = () => {
        const array: string[] = diagramData.map((el) => el.value)
        const colors: string[] = [
            "#1063FF",
            "#FF4D4F",
            "#702CC9",
            "green",
            "pink",
        ]
        const arr: any = []
        let j: number = 0
        let string: string = ""

        array.forEach((el: any, i: number) => {
            const num = Math.floor((360 * +el) / 100)
            console.log("num", num, {
                arr: [
                    [1, num - 1],
                    [num - 1, num + 1],
                ],
                n: num,
            })
            if (i === 0)
                return arr.push({
                    arr: [
                        [1, num - 1],
                        [num - 1, num + 1],
                    ],
                    n: num,
                })
            const prevValue = arr.reduce(
                (prev: any, now: any) => (j < i ? prev + now.n : prev + 0),
                0
            )
            console.log("prev", num, {
                arr: [
                    [prevValue, num + prevValue - 2],
                    [num + prevValue - 2, num + prevValue],
                ],
                n: num,
            })
            return arr.push({
                arr: [
                    [prevValue + 1, num + prevValue - 1],
                    [num + prevValue - 1, num + prevValue + 1],
                ],
                n: num,
            })
        })

        arr.forEach((el: any, i: number) => {
            if (arr.length !== i + 1) {
                string = `${string}
                ${colors[i]} ${el.arr[0][0]}deg ${el.arr[0][1]}deg,
                white ${el.arr[1][0]}deg ${el.arr[1][1]}deg,`
            } else {
                string = `${string}
                ${colors[i]} ${el.arr[0][0]}deg ${el.arr[0][1]}deg,
                white ${el.arr[1][0]}deg ${el.arr[1][1]}deg`
            }
        })

        if (refDiagram.current) {
            refDiagram.current.style.background = `conic-gradient(${string})`
        }
    }

    const addElementToDataDiagram = (
        e: React.MouseEvent<HTMLSpanElement, MouseEvent>
    ) => {
        if (elements === "5") return
        setDiagramData([
            ...diagramData,
            { id: Date.now().toString(), value: "0" },
        ])
        setElements((prev) => `${+prev + 1}`)
    }

    const deleteElementToDataDiagram = (
        e: React.MouseEvent<HTMLSpanElement, MouseEvent>
    ) => {
        if (elements === "2") return
        setDiagramData(diagramData.slice(0, diagramData.length - 1))
        setElements((prev) => `${+prev - 1}`)
    }

    useEffect(() => {
        takePercentFromDataToCreateDiagram()
    }, [])

    return (
        <div className="diagram">
            <div className="diagram__title">Создание Диаграмы</div>
            <div className="diagram__block">
                <div className="diagram__block_title">Диаграмма</div>
                <div className="diagram__block_fields">
                    Количество элементов:{" "}
                    <input readOnly type="number" value={elements} />
                    <div className="diagram__block_changer">
                        <span
                            className={`${elements === "5" ? "disable" : ""}`}
                            onClick={addElementToDataDiagram}
                        >
                            {" "}
                            +{" "}
                        </span>
                        <span
                            className={`${elements === "2" ? "disable" : ""}`}
                            onClick={deleteElementToDataDiagram}
                        >
                            {" "}
                            -{" "}
                        </span>
                    </div>
                </div>
                <div className="diagram__block_elements">
                    {diagramData &&
                        diagramData.map((el: IElDiagram, i: number) => {
                            return (
                                <div
                                    key={el.id}
                                    className="diagram__block_elements_item"
                                >
                                    {i + 1}. Процент (от 100%)
                                    <input
                                        type="text"
                                        value={el.value}
                                        onChange={(
                                            e: React.ChangeEvent<HTMLInputElement>
                                        ) =>
                                            setDiagramData(
                                                diagramData.map(
                                                    (elem: IElDiagram) =>
                                                        elem.id === el.id
                                                            ? {
                                                                  id: el.id,
                                                                  value: e
                                                                      .target
                                                                      .value,
                                                              }
                                                            : elem
                                                )
                                            )
                                        }
                                    />
                                </div>
                            )
                        })}
                </div>
                <div className={`diagram__block_preview`}>
                    <div ref={refDiagram} className="donut">
                        <div className="hole"> </div>
                    </div>
                </div>
                <div
                    className={`diagram__block_generate`}
                    onClick={takePercentFromDataToCreateDiagram}
                >
                    Построить
                </div>
            </div>
        </div>
    )
}
