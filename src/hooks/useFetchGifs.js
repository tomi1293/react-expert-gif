import { useEffect, useState } from "react"
import {getGifs} from '../helpers/getGifs'

export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        
        getGifs(category)
            .then(imgs=>{

                setState({
                    data: imgs,
                    loading: false
                });

            })

    }, [category])
    return state; // {data:[], loading:true }
}

    // //El useEffect hace que mi funcion solo se renderice la primera vez que la llamo, es decir si agrego algún boton
    // //que cambie el estado de mi componente no va a renderizar nuevamente esta funcion.
    // useEffect(()=>{
    //     getGifs(category)
    //         .then(setImages); //como la función es una async me devuelve la promesa, por eso uso el then
    // },[category]); //En esta linea establezco que la category es una dependencia para la funcion

