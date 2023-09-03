
import { useEffect } from "react";
import { useState } from "react"
const useMouse = (someRef) => {
    const [isMouseDown, setIsMouseDown] = useState(false);
    const [posX, setPosX] = useState(null);
    if (!someRef) return
    const ref = someRef
    const handleMouseDown = (e) => {
        let startposition = null
        setIsMouseDown(true)
        const { type } = e;
        if (type == "mousemove") startposition = e.clientX
        if (type == "touchstart") {
            const { clientX: x } = e.touches[0]
            startposition = x
        }
        setPosX(startposition)
    }
    const handleMouseUp = (e) => {
        setIsMouseDown(false)
        setPosX(0)
        ref.current.style.transform = `translateX(0px)`

    }
    const handleMouseMove = (e) => {
        let startposition = null
        const { abs } = Math
        const { type } = e;
        if (type == "mousedown") startposition = e.clientX
        if (type == "touchmove") {
            const { clientX: x } = e.touches[0]
            startposition = x
        }
        if ((posX - startposition) > 0 && isMouseDown) {
            const movex = abs(posX - startposition);
            if (movex >= 100) {
                window?.navigator?.vibrate([10])
                setIsMouseDown(false)
            }
            ref.current.style.transform = `translateX(-${(movex)}px)`
        }

        console.log("this is the mousemove", startposition,console.log(someRef))

    }

    return ({
        handleMouseDown,
        handleMouseMove, 
        handleMouseUp,
        isMouseDown
    })

}
export default useMouse