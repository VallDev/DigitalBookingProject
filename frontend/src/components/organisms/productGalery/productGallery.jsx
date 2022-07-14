import React from "react"
import Button from "../../atoms/button/button"
import ImageGallery from "react-image-gallery"
import imagesJson from "../../../resources/json/images.json"
import GaleryPreview from "../../molecules/galeryPreview/galleryPreview"
import "react-image-gallery/styles/css/image-gallery.css";
import "../../../css/productGallery.css"


const ProductGalery = (props) => {
    const {images} = props;
    const [isOpen, setIsOpen] = React.useState(false);
    const [imagesMap, setImagesMap] = React.useState([]);


    return(
        <div className="productGallery">
            {isOpen && <div className="galleryOpened">
                <ImageGallery showFullscreenButton={false} showPlayButton={false} items={images} ></ImageGallery>
                <div className="buttonContainer">
                    <Button handleClick={setIsOpen} value={false}>X</Button>
                </div>
            </div>}
            <div className="carousel">
                <ImageGallery showBullets={true} autoPlay={true} slideInterval={3000} showIndex={true} showNav={false} showFullscreenButton={false} showPlayButton={false} items={images} ></ImageGallery>
            </div>
            <GaleryPreview images={images}><Button handleClick={setIsOpen} value={true}>Ver mas</Button></GaleryPreview>
        </div>
        
    )
}

export default ProductGalery;