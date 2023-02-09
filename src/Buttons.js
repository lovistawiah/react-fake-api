const Buttons = ({ setResourceType,value }) => {
    return (
        <div className="buttons">
            {value.map(res => (
                <button
                    onClick={() => setResourceType(res)}
                >{res}</button>
            ))}
        </div>
    )
}
export default Buttons