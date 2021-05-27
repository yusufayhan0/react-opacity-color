import React, { useEffect, useRef, useState } from 'react'

export default function ColorSquare(props) {
    const colorsCharacter = "0123456789abcdef"
    const [state, setstate] = useState(0)
    const [colorstate, colorSetState] = useState("")
    const backgroundRef = useRef()

    let color = "#"

    useEffect(() => {
        for (let index = 0; index < 6; index++) {
            color += colorsCharacter[Math.ceil(Math.random() * 15)]
        }
        colorSetState(color)
    }, [])

    setTimeout(() => {
        setstate(1)
    }, 100);

    const resetBackground = () => {
        backgroundRef.current.parentNode.querySelectorAll(".sqare-container").forEach(a => {
            a.style.border = "none"
            a.style.boxShadow = "none"
        })
        backgroundRef.current.style.border="1px solid white"
        backgroundRef.current.style.boxShadow="2px 2px 2px #000"
        backgroundRef.current.querySelector("input").select()
        document.execCommand("copy")
    }


    return (

        <div onClick={() => {
            props.clickColor(colorstate)
            resetBackground()
            props.notificationShow(colorstate)
        }} ref={backgroundRef} className="sqare-container" style={{ backgroundColor: colorstate, opacity: state}}>
            <input type="text" defaultValue={colorstate} />
            {colorstate}
        </div>
    )
}
