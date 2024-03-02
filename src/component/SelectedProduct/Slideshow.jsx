import { useEffect, useState } from "react";
import { FaCaretLeft, FaCaretRight} from "react-icons/fa";

const Slideshow = ({images}) => {
    let [slideCount, setSlideCount] = useState(0);
    let [currentImage, setCurrentImage] = useState(images[0]);

    useEffect(() => {
        setCurrentImage(images[slideCount]);
        
    }, [slideCount])

    const onPrev = () => {
        if(slideCount < 0) {
             setSlideCount(images.length - 1) 
        } else { 
            setSlideCount(slideCount--)
        }
        console.log(slideCount);
    }

    const onNext = () => {
        slideCount > images.length - 1 ? setSlideCount(0) : setSlideCount(slideCount++);
        console.log(slideCount);
    }

    const onClickOtherImg = (src, index) => {
        setCurrentImage(src)
        setSlideCount(index)
    }

    console.log(currentImage)
    return (
        <>
        <div className="product-slideshow">
            <div className="prev" onClick={onPrev}>
                <FaCaretLeft />
            </div>
            <div className="current-Image">
                <img src={currentImage} alt="" />
            </div>
            <div className="next" onClick={onNext}>
                <FaCaretRight />
            </div>
            <div className="other-Image">
                {images.map((image, index) => <img src={image} alt={index} key={index} onClick={() => onClickOtherImg(image, index)}/> )}
            </div>
        </div>
    </>
    );
}


export default Slideshow;
