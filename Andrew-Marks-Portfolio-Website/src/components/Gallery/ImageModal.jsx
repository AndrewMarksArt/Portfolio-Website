export default function Modal(props) {
    if (!props.show) {
        return null
    }
    return(
        <div className="modal" onClick={props.onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <img src={`./img/gallery/${props.img}`} className="modal-image"></img>
                <div className="modal-text-container">
                    <h1 className="modal-image-title">{props.title}</h1>
                    <p className="modal-image-desc">{props.desc}</p>
                </div>
                <button className="modal-close" onClick={props.onClose}>close</button>
            </div>
        </div>
    )    
}