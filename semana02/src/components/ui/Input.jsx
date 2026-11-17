
/**
 * @author Gabriel
 * @param {object} props
 * @param {object} props.style
 * @param {string} props.label
 * @param {string} props.id
 * @param {string} props.type
 * @param {string} props.placeholder
 * @param {Function} props.onChange
 *
 * @example
 * <Input 
 *   label="Nome" 
 *   id="nome"
 *   placeholder="Digite seu nome"
 *   onChange={(e) => console.log(e.target.value)}
 * />
 */

export default function Input({ style, label, id, type = "text", placeholder, onChange, ...props }) {
    return (
        <div className="flex flex-col gap-2">
            {label && (
                <label htmlFor={id} className="text-sm font-medium text-gray-700">
                    {label}
                </label>
            )}

            <input
                id={id}
                type={type}
                style={style}
                placeholder={placeholder}
                onChange={onChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                {...props} 
            />
        </div>
    )
}
