
const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    danger: "bg-red-600 text-white hover:bg-red-700"
}

/**
 * @author Gabriel
 * @param {object} props
 * @param {object} props.style
 * @param {string} props.variant
 * @param {Function} props.onClick
 * @param {React.ReactNode} props.children
 *
 * @example
 * <Button variant="primary" onClick={() => alert('Button clicked!')}>
 *   Click aqui
 * </Button>
 */

export default function Button({ style, variant = "primary", onClick, children }) {
    return (
        <button
            type="button"
            style={style}
            onClick={onClick}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${variants[variant] || variants.primary}`}>
            {children}
        </button>
    )
}
