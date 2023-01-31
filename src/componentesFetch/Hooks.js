import React, { useState, useEffect } from 'react';

function Hooks(props) {

   
    const [productos, setProductos] = useState([]);

  

    const fetchApi = ()=>{
        console.log("llamar");
        fetch("https://dummyjson.com/products")
        .then(res => res.json())
        .then(data =>  {
            setProductos( data.products)})
    }

    useEffect (()=>{
        fetchApi();
    }, );

    return (<div>
        {productos.map((value) => 
        <div>
            <a href={"./Producto/" + value.id}><h1>{value.title}</h1></a>
            <img src={value.images[0]}></img>
        </div> )}
    </div>);
}
export default Hooks;