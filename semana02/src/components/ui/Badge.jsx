
const variants = {
    primary: "bg-blue-100 text-blue-700",
    success: "bg-green-100 text-green-700",
    warning: "bg-yellow-100 text-yellow-700",
    danger: "bg-red-100 text-red-700",
    neutral: "bg-gray-100 text-gray-700"
}

/**
 * @author Gabriel
 * @param {object} props
 * @param {object} props.style
 * @param {string} props.variant
 * @param {React.ReactNode} props.children
 *
 * @example
 * <Badge variant="success">
 *   Ativo
 * </Badge>
 */

export default function Badge({ style, variant = "primary", children }) {
    return (
        <span
            style={style}
            className={`px-3 py-1 rounded-full text-xs font-medium ${variants[variant] || variants.primary}`}>
            {children}
        </span>
    )
}
