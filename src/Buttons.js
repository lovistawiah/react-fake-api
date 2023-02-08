const Buttons = ({ setResourceType }) => {
    return (
        <div className="buttons">
            <button
                onClick={(e) => setResourceType(e.target.textContent)}
            >users</button>
            <button
                onClick={(e) => setResourceType(e.target.textContent)}
            >posts</button>
            <button
                onClick={(e) => setResourceType(e.target.textContent)}
            >comments</button>
        </div>
    )
}
export default Buttons