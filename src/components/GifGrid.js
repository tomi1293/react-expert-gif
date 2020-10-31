import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    //Este es un Custom Hook que uso para conectar con el endpoint
    const {data:images, loading} = useFetchGifs(category); //Uso el :images para renombrar a data

    console.log(loading);

    return (
        <>
            <h2 className="titulo animate__animated animate__fadeInDown">{ category }</h2>

            {loading && <p className="animate__animated animate__flash">Loading</p>}

            <div className="card-grid">
                
                {
                    images.map(img=>(
                        
                        <GifGridItem 
                        key={img.id}
                        { ...img }/> 
                    ))
                }
            
            </div>
        
        </>
    )
}
