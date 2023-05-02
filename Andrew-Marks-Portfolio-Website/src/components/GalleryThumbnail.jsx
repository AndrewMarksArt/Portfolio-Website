import { useState } from "react"
import Modal from "./ImageModal"
import "../css/gallery_thumbnail.css";
import "../css/main.css";

export default function GalleryThumbnail(props) {
    const [show, setShow] = useState(false)

    return (
        <>
            <div className="gallery-image--container">
                <img src={`./img/gallery/${props.img}`} className="gallery-image--home" onClick={()=>setShow(!show)}></img>
                <Modal 
                    onClose={() => setShow(!show)} 
                    show={show} 
                    img={props.img}
                    full_img={props.full_img}
                    title={props.title}
                    desc={props.desc}
                />
            </div>
        </>
    )
}