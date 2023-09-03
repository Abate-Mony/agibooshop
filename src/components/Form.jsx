import { forwardRef } from "react"
const Form = forwardRef(({
    children,
    className,
    ...props

}, ref) => {
    return (
        <form
            ref={ref}
            {
            ...props
            }
            className={`${className} pt-10 mx-auto`}
        >
            {children}
        </form>
    )
})
export default Form