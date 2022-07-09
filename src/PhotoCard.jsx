import React from "react";

const PhotoCard = ({ photo }) => {
    return (
        <div className="container mx-auto mt-6">
            <div className="grid md:grid-cols-2 items-center flex-row-reverse">
                {photo.media_type === 'image'}
                <img src={photo.hdurl} alt='' className="mx-auto mt-3 order-2 md:order-1" />
                <div className="m-3 order-1 md:order2">
                    <h3 className="text-xl text-center font-semibold">{photo.title ? photo.title : 'Untitled'}</h3>
                    {photo.explanation}
                </div>
            </div>
        </div >
    );
}
export default PhotoCard;