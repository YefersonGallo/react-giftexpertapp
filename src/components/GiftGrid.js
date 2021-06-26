import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

const GiftGrid = ({ category }) => {

    const {data:images, loading} = useFetchGifs(category);
    
    return (
        <>
            <h3>{category}</h3>
            {loading && <p>Carganding...</p>}
            <div className="card-grid">
                {
                    images.map((img, index) => <GifGridItem key={index} {...img} />)
                }
            </div>
        </>
    )
}

export default GiftGrid
