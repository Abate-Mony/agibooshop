import React from 'react'
// import PropTypes from 'prop-types'

function getMousePosition(e) {
    const positions = {
        x, y
    }
    if (type == "mousemove") startposition = e.clientX
    if (type == "touchmove") {
        const { clientX: x } = e.touches[0]
        positions.x = x
        // startposition = x
    }
    // if ((posX - startposition) > 0 && isMouseDown) {
    //     const movex = abs(posX - startposition);
    //     if (movex >= 150) {
    //         window?.navigator?.vibrate([10])
    //         setIsMouseDown(false)
    //         handleRemoveFromCart(id)
    //     }

        // ref.current.style.transform = `translateX(-${(movex)}px)`
    // }

    return {
        ...positions
    }
}

// getMousePosition.propTypes = {}

export default getMousePosition
