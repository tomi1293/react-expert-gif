import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    
    // const categories = ['Dragon Ball','Samurai X','Pokemon']
    const [categories, setCategories] = useState(['Dragon Ball']);


    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory setCategories= {setCategories}/>
            <hr/>

            <ol>
                {   //Un map me va a recorrer todo el array, si quisiera puedo tmb pedirle que me devuelva el indice.
                    categories.map( category => (
                       <GifGrid 
                        key={category}
                        category = {category} 
                       />
                    ))
                }
            </ol>
        </>
    )
}
