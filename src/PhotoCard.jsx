import React from "react";

const PhotoCard = ({photo}) => {
    return (
        <div className="container mx-auto mt-6">
            <h3 className="text-xl text-center">{photo.title}</h3>
            <img src={photo.hdurl} alt='' className="mx-auto mt-3"/>
            <div className="mt-3">
                {photo.explanation}
            </div>
        </div>
    );
}
export default PhotoCard;