
export const getGifs = async (category) =>{

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=UV6x8pMWzDXt5TBlQt1XWyiSJUJCi6cl`
    const resp = await fetch ( url );
    const {data} = await resp.json(); //paso mi respuesta a json y desestructuro obteniendo la data.

    //Creo una constantepara poder mapear la data que me devuelve la peticíon y así solo usar los campos 
    //que yo necesito.
    const gifs = data.map(img =>{
        return{
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })


    return gifs;
}