
/**
 * @author Gabriel
 * @param {object} props
 * @param {object} props.style
 * @param {string} props.titulo
 * @param {string} props.descricao
 * @param {React.ReactNode} props.children
 *
 * @example
 * <Card
 *   titulo="React"
 *   descricao="Biblioteca JavaScript"
 *   children={<Button>Saiba mais</Button>}
 * </Card>
 */

export default function Card({ style, titulo, descricao, children }) {
    return (
        <div style={style} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            {titulo && (
                <h3 className="text-lg font-semibold mb-2">
                    {titulo}
                </h3>
            )}

            {descricao && (
                <p className="text-sm text-gray-600">
                    {descricao}
                </p>
            )}

            {children && (
                <div className="mt-4">
                    {children}
                </div>
            )}
        </div>
    )
}
