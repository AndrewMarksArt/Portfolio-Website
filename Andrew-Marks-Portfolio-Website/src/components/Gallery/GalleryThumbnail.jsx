export default function GalleryThumbnail(props) {
    function showImg() {
        console.log(props.img)
    }
    return (
        <div className="gallery-image--container">
            <img src={`./img/gallery/${props.img}`} className="gallery-image--home" onClick={showImg}></img>
        </div>
    )
}