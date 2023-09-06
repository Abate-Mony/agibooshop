import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { useEffect, useRef } from 'react'
const DashLoging = () => {
    const ref = useRef(null)
    const [querySearch] = useSearchParams()
    const message = querySearch.get("message")
    useEffect(() => {
        if (message) {
            ref.current = setTimeout(() => {
                window.history.pushState({}, null, window.location.href)
            }, 1000);
            return () => {
                clearTimeout(ref.current)
            }
        }
    }, [])

    return (
        <div>

            <p
                className='text-rose-800'
            >          {message && message}</p>
            <p>login to continue</p>
        </div>
    )
}

export default DashLoging 