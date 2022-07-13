import React from "react";

const PhotoCard = ({ photo }) => {
    return (
        <div className="container mx-auto mt-6">
            {photo.code != null &&
                <div>
                    <h3 className="text-red-700 text-center">Something went wrong. Please make sure the date you entered is a date between <strong>June 20th, 1995 and today</strong></h3>
                </div>
            }
            {photo.media_type === 'image' &&
                <div className="grid md:grid-cols-2 items-center flex-row-reverse">
                    <div className="flex justify-items-end"><img src={photo.hdurl} alt='' className="mx-auto mt-3 order-2 md:order-1" /></div>
                    <div className="m-3 order-1 md:order2">
                        <h3 className="text-xl text-center font-semibold">{photo.title ? photo.title : 'Untitled'}</h3>
                        {photo.explanation}
                    </div>
                </div>
            }
            {photo.media_type === 'video' &&
                <div className="grid md:grid-cols-2 items-center flex-row-reverse">
                    <div className="flex justify-items-end">
                    <iframe width="560" height="315" src={photo.url} title={photo.title ? photo.title : 'Untitled'} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <div className="m-3 order-1 md:order2">
                        <h3 className="text-xl text-center font-semibold">{photo.title ? photo.title : 'Untitled'}</h3>
                        {photo.explanation}
                    </div>
                </div>
            }
            {photo.media_type !== 'image' && photo.media_type !== 'video' &&
                <div>
                    <h3 className="text-center">Today's photo of the day isn't actually an image</h3>
                </div>
            }
        </div >
    );
}
export default PhotoCard;