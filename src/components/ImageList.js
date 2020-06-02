import React from 'react';
import ImageCard from './ImageCard';
import './ImageList.css';

const ImageList = (props) =>{
    const images = props.images.map( imag => {
        return <ImageCard key={imag.id} image={imag}/>
    })
    return <div className='image-list'>{images}</div>
    
}

export default ImageList;