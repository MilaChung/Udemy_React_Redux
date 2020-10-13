import React from "react";
import "./ImageList.css";

const ImageList = props => {
    const imgs = props.foundImages.map(img => {
        return (
            <img 
                key={img.id}
                src={img.urls.regular}
                alt={img.alt_description}
            />
        );
    });

    return(
        <div className="image-list"> {imgs} </div>
    );
}

export default ImageList;