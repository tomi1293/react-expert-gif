import React, {useState} from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
    
    const [inputValue, setInputValue] = useState('');

    //Este evento me permite que a medida que vaya escribiendo se vaya pintando en el input
    const handleInputChange = (e) =>{
        
        setInputValue(e.target.value);
    }
    
    //Este evento me permite que al dar un enter, el estado de mi caja de texto se agregue al estado setCategories  del componente padre
    const handleSubmit = (e) =>{
        //Usamos el e.preventDefault para que no se me refresque la pantalla constantemente
        e.preventDefault();

        if(inputValue.trim().length > 2){
            //En esta linea debo usar la prop setCategories que estoy enviando al componente, luego hago un callback para poder llamar a catq, que es el state del componente padre y traerme los datos que tenía antes en el array, finalmente paso input value
            setCategories(cat => [ inputValue, ...cat]); //Puedo acomodar al reves el spred y el input para que cambie el ordend e renderizado
            setInputValue('');
        }

    }

    return (

        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={ inputValue }
                onChange={handleInputChange }
            />
        </form>

    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
