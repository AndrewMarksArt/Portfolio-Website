export default function GalleryThumbnail(props) {
    return (
        <div className="gallery-image--container">
            <img src={`./img/gallery/${props.img}`} className="gallery-image--home"></img>
        </div>
    )
}