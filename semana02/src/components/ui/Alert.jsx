
const variants = {
    success: "bg-green-100 text-green-800 border-green-300",
    error: "bg-red-100 text-red-800 border-red-300",
    warning: "bg-yellow-100 text-yellow-800 border-yellow-300"
}

/**
 * @author Gabriel
 * @param {object} props
 * @param {object} props.style
 * @param {string} props.variant
 * @param {React.ReactNode} props.children
 *
 * @example
 * <Alert variant="success">
 *   Operação realizada com sucesso!
 * </Alert>
 */

export default function Alert({
    style,
    variant = "success",
    children
}) {
    return (
        <div
            role="alert"
            style={style}
            className={`p-4 rounded-lg border text-sm ${variants[variant] || variants.success}`}>
            {children}
        </div>
    )
}
