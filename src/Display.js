import Row from './Row'
const Display = ({ items }) => {
    return (
        <div className="container">
            <table>
                <tbody>
                    {items.map(item => (
                        <Row key={item.id}
                            item={item}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    )

}

export default Display